# Field Repair Executive Report — DefendableCloud + DefendableDocs + DefendableRouter v0.1

Repairs implemented by the original builder in response to the Codex deployed-utility audit
(REPAIR_REQUIRED). Builder public HTTP tests below demonstrate intended behavior; final
acceptance pending independent Codex re-audit of the deployed public surfaces.

## Codex finding → repair
- **F1 (Cloud action API misrepresentation):** the deployed bundle ran actions client-side while
  labeling the server API roadmap. **Repair:** demo UI now POSTs each play to the real public
  Pages Functions; POST routes return 200; UI labeled LIVE PUBLIC CONTROLLED DEMO; server-API
  roadmap label removed.
- **F2 (server-side no-refund not publicly provable):** added `GET /api/demo/agent-operations/action-log`
  returning a deterministic synthetic audit summary (`refund_execution_count: 0` by construction,
  denied/queue/allowed counts, `external_enforcement_claimed: false`).
- **F3 (Docs broader claim alignment):** honest status banners added to api, tribunal, router,
  ddeed, streetledger, streetchat, swarmfixer, defendableledger, agentbench overviews; homepage
  banner + public-hash claim already limited.
- **F4 (Router public utility not verified):** top-of-page status banner + README STATUS block —
  positioning/local-spine only, public middleware + Cloud integration NOT verified, not in the
  live Cloud demo path; operational claims labeled design-intent-not-verified.
- **F5 (hash method clarity):** canonical-JSON/self-excluding/content-integrity-only language now
  stated on the demo page, in Function responses (`hash_method`), and in this package.

## What is genuinely live now (public HTTP)
- POST `/api/demo/agent-operations/actions/{classify-ticket,draft-response,issue-refund,request-refund-review}` → 200 server JSON.
- classify/draft → ALLOW executed=true; issue-refund → DENY executed=false, real_refund_executed=false; review → QUEUE executed_sensitive_action=false.
- GET on an action → 405 JSON (method guard). GET `/action-log` → refund_execution_count 0.

## Not cleared / excluded
NOT production · NOT external SaaS enforcement · no real refunds · no certification · no insurance ·
no ENS/blockchain operation · Router integration NOT in the live path.
