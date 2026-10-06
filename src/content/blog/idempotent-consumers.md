---
title: "Why every message consumer should be idempotent"
description: "Message brokers deliver at least once, not exactly once. A simple pattern keeps duplicate messages from corrupting your data, and why it matters for inventory."
date: 2026-09-22
tags: ["architecture", "messaging", "azure-service-bus"]
draft: true
---

Asynchronous processing is one of the best tools for decoupling services. Long-running work moves off the request path, and services stop waiting on each other. But it comes with a guarantee many teams don't design for. Most brokers, including Azure Service Bus and Kafka, deliver messages **at least once**, not exactly once.

A message can arrive twice:

- the consumer finishes the work but crashes before it acknowledges the message
- the message lock expires during a slow operation and the broker redelivers it
- a producer retries after a timeout, even though the first send succeeded

If handling the same message twice changes the outcome, you have a bug that will only appear under load, in production.

## Why it matters in supply chain

Take inventory allocation. An `AllocationRequested` message reserves stock against an order. If that message is processed twice, the same order reserves the stock twice. Available inventory drops, other orders can't be fulfilled, and someone ends up reconciling it by hand.

The same applies to anything that creates records or moves quantities: order lines, invoices, ERP postings.

## The pattern: remember what you've processed

Give every message a stable, unique ID, and record it when you handle the message. Before doing any work, check whether that ID has already been seen:

```java
@Transactional
public void onAllocationRequested(AllocationRequested event) {
    if (processedMessages.existsById(event.messageId())) {
        log.info("Duplicate message {} skipped", event.messageId());
        return;
    }
    allocator.allocate(event.orderId(), event.lines());
    processedMessages.save(new ProcessedMessage(event.messageId(), Instant.now()));
}
```

Three details make this reliable:

1. **Same transaction.** The business change and the processed-ID record must commit together. If they're separate, a crash between them brings the duplicate problem straight back.
2. **A unique constraint on the message ID.** If two consumer instances pick up the same message at once, the database rejects the second insert, so only one wins.
3. **A retention window.** You don't need processed IDs forever, just for as long as a duplicate can realistically arrive. A scheduled job can clear entries older than, say, seven days.

## Handling messages that keep failing

Idempotency makes retries safe, but some messages fail every time: bad data, or a reference to something that doesn't exist. Retrying those forever blocks the queue.

| Situation            | What to do                                         |
| -------------------- | -------------------------------------------------- |
| Temporary failure    | Retry with backoff                                 |
| Duplicate message    | Skip it, and log it at info level                  |
| Permanent failure    | Move it to the dead-letter queue and alert on it   |

Azure Service Bus moves a message to the dead-letter queue once it passes the maximum delivery count. The important part is that someone watches that queue and has a way to fix and replay messages.

## Takeaway

> Assume every message will arrive twice. Design the consumer so the second time is harmless.

It costs a table and a few lines of code up front. Adding it after duplicates have already corrupted production data costs much more.
