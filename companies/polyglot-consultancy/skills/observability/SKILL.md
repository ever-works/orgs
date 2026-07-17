---
name: observability
description: Use when instrumenting a system or reviewing its readiness to run in production — logs, metrics, traces, dashboards, and alerts.
---

# Observability

A system is observable when new questions can be answered without new deploys.
Instrument for the questions you cannot predict.

## Steps

1. **Log in structure, with correlation.** Structured entries with a request or
   trace ID propagated across every service boundary and queue hop; levels
   that mean something (error pages someone; info tells the story; debug is
   free). No personal data, no secrets, no multi-line stack spam at info.
2. **Cover the golden signals per service.** Latency (as percentiles), traffic,
   errors, and saturation — plus one or two metrics that express what the
   service is for (orders placed, documents indexed). Every external call gets
   a duration and outcome metric.
3. **Trace the critical paths.** Distributed traces across the user-facing
   flows the engagement names as critical; span names stable and meaningful;
   sampling tuned so slow-path examples always survive.
4. **Build dashboards that answer questions.** Top of the dashboard answers
   "is it healthy for users right now?"; below, the drill-down toward cause:
   per-endpoint, per-dependency, per-instance. A dashboard nobody can read
   during an incident is decoration.
5. **Alert on symptoms, act with runbooks.** Alerts fire on user-visible
   breach — SLO burn, error spikes, saturation trending to a wall — and every
   alert links a runbook naming the first three diagnostic steps. Cause-based
   alerts (CPU high) become dashboard panels, not pages.
6. **Test the instrumentation.** Break something in staging and verify the
   alert fires, the dashboard shows it, and the trace finds it. Instrumentation
   that has never caught anything is unverified code.

## Quality bar

- One ID follows a request across every service it touches.
- "Is it healthy?" is answerable from one screen in ten seconds.
- Every page that can fire has a linked runbook and a recent test.
- Alert volume is sustainable: a page means action, or the alert is deleted.

## Output format

Instrumentation changes under version control, dashboards and alert rules as
code, and a per-service observability note: signals covered, critical paths
traced, alerts with runbook links.
