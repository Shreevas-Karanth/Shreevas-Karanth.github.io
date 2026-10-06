---
title: "Modernizing a legacy app with AI: start with specifications, not code"
description: "Asking an AI tool to rewrite legacy code directly is risky. Getting it to write down the business rules first, then building from those specifications, worked far better."
date: 2026-10-06
tags: ["ai-assisted-engineering", "modernization", "architecture"]
draft: true
---

When teams first bring AI tools into a legacy modernization, the tempting move is to point the tool at old code and ask for new code. It looks fast. But it carries the old design forward, hides business rules inside generated code, and gives reviewers nothing to check the result against.

On a recent modernization of a legacy Inventory & Order Management application, we took a different route. We used AI to produce **specifications first**, and only then to write code.

## Step 1: Recover the business rules

Legacy systems hold years of business decisions that were never written down: allocation rules, edge cases, validations added after a production incident. Losing even one of them during a rewrite causes real problems.

We used Claude Code to analyse the legacy code and surface:

- business rules and the conditions that trigger them
- end-to-end flows across screens, services and database procedures
- dependencies between modules and external systems

From that analysis we generated **functional and technical specifications**. Engineers then reviewed them with people who knew the business. This discovery phase took **60–70% less effort** than doing it by hand. More importantly, the rules were now written down where everyone could see and challenge them.

## Step 2: Build from the specification

With reviewed specs in place, implementation became specification-driven. Each feature started from its spec, not from the legacy code. That changed what we asked the AI tool to do:

- **Before:** "Convert this old class to Spring Boot."
- **After:** "Implement this specified behaviour, following our service boundaries and conventions."

The second prompt produces code that fits the new architecture instead of copying the old one.

## Step 3: Let the spec drive the tests

Specifications also make good test inputs. We generated unit, integration and edge-case tests from them, which brought coverage to around **90%**. The edge cases came from the documented rules, so the tests checked business behaviour, not just code paths.

The same approach helped with performance. AI-assisted analysis of service and database processing helped bring one API from **about 3 minutes down to 30 seconds**.

## The part that doesn't change: human review

AI did not approve anything on its own. Every change went through:

1. human-in-the-loop review against business logic, architecture, security and performance
2. automated tests
3. static analysis and the team's existing quality gates

Nothing shipped without passing those gates. The team also needed time to learn how to write good specs and review AI output critically, and that enablement was as important as the tool itself.

## Takeaway

> Use AI to make the system's knowledge explicit first. Code generated from a reviewed specification is far easier to trust than code translated line by line.

Specifications slow you down for a week and save you months: in review, in testing, and when someone later asks why the system behaves the way it does.
