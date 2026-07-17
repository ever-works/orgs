---
name: lifecycle-flows
description: Use when designing, auditing, or improving automated customer message sequences — welcome, abandonment, post-purchase, replenishment, winback — or when deciding what a transactional touchpoint should say.
---

# Lifecycle Flows

A flow is an automated sequence triggered by something a customer did or stopped doing. Flows outearn one-off campaigns because they hit the moment of intent; they also rot silently, so every flow needs a spec and a review date.

## The flow spec (one per flow)

Every flow gets a written spec: trigger and audience, exit conditions, message-by-message map (timing, job, offer logic), the current test, and last-reviewed date. If the spec does not exist, write it before changing anything — you cannot improve what you cannot diff.

## The core library

1. **Welcome (trigger: new subscriber, non-buyer).** 3–4 messages over ~10 days. Job order: deliver whatever was promised at signup, tell the story that differentiates the store, show best sellers with proof, then — only last — offer an incentive to convert. Leading with the discount trains subscribers that waiting pays.
2. **Browse abandonment (trigger: viewed product, no cart, exit).** 1–2 gentle messages within 24 hours. Show the product plus alternatives; no discount — this is a nudge, not a rescue.
3. **Cart abandonment (trigger: cart created, no order).** 2–3 messages: first within hours (the cart, friction removal — shipping cost and returns answered plainly), second next day (proof: reviews for the carted items), third only if margin allows an incentive, and gated so repeat abandoners cannot farm it.
4. **Post-purchase (trigger: order placed).** The trust sequence: confirmation that sells the decision, shipping and delivery updates that pre-empt "where is my order" tickets, a how-to or care message timed to arrival, then a review request timed to actual use of the product — not to the delivery scan.
5. **Replenishment (trigger: consumable purchase + typical usage interval).** One well-timed reminder slightly before expected run-out beats three after it.
6. **Winback (trigger: no purchase for 1.5–2× the typical repurchase gap).** 2–3 messages escalating from "what's new" to best offer; then stop. A defined end protects deliverability and dignity.

## Rules that keep flows honest

- One job per message. A message that informs, sells, and asks for a review does none of it well.
- Suppress aggressively: buyers exit abandonment flows instantly; open support tickets pause promotional messages to that customer; campaign sends and flow sends respect a combined frequency cap.
- Offer depth escalates only downward in a sequence and never exceeds what merchandising has approved; email must never leak a deeper discount than the storefront honors.
- Transactional messages (confirmations, shipping) are read at triple the rate of promotions — keep them honest and useful first, commercial second.

## Auditing an existing flow

- Pull per-message revenue, open/click, and unsubscribe rates. A message that earns nothing and costs unsubscribes gets cut; a sequence where message 1 does all the earning may just need message 1.
- Check timing against reality: abandonment windows against actual purchase-decision times, review requests against delivery data.
- Run one test at a time per flow; record outcomes in the spec so the flow's history survives its author.
