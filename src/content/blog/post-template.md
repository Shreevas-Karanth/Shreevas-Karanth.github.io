---
title: "Post template — copy me"
description: "A starter post showing the frontmatter fields and the Markdown styles the blog supports. It stays a draft, so it never appears on the live site."
date: 2026-10-06
tags: ["template"]
draft: true
---

This post is a **template**. Because `draft: true` is set above, it's hidden everywhere: the blog page, the home page and the RSS feed, in `npm run dev` too. To preview drafts locally, run `SHOW_DRAFTS=true npm run dev`.

## Writing a new post

1. Copy this file in `src/content/blog/` and rename it. The file name becomes the URL, so `idempotent-consumers.md` is served at `/blog/idempotent-consumers/`.
2. Update the frontmatter at the top: `title`, `description` (shown in lists and link previews), `date` and `tags`.
3. Delete the `draft: true` line, or set it to `false`, when the post is ready.
4. Commit and push. GitHub Actions rebuilds the site and the post goes live.

## What you can use

Headings, **bold**, *italics*, [links](https://astro.build) and `inline code` all work. So do lists:

- Bulleted lists
- Numbered lists
- Nested items

> Blockquotes are useful for calling out a key decision or trade-off.

Code blocks are syntax-highlighted:

```java
@ServiceBusListener(queue = "inventory-allocation")
public void onAllocationRequested(AllocationRequested event) {
    if (processed.contains(event.id())) return; // idempotent consumer
    allocator.allocate(event.orderId(), event.lines());
    processed.add(event.id());
}
```

Tables work too:

| Concern     | Approach                      |
| ----------- | ----------------------------- |
| Retries     | Exponential backoff with cap  |
| Duplicates  | Idempotency key per message   |
| Poison msgs | Dead-letter queue + alerting  |

Images go in `public/` and are referenced as `/images/name.png`.
