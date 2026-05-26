# Field Release Executive Report — DefendableCloud + DefendableDocs v0.1

**Status:** LIVE PUBLIC CONTROLLED DEMO (DefendableCloud) · DefendableDocs Field Proof published.
Synthetic demo only. Final acceptance pending independent Codex deployed-utility audit.

## What is genuinely usable now
- **Live controlled synthetic demo** at <https://defendablecloud.com/agent-operations-demo> with a
  **real server-side API** (Cloudflare Pages Functions on the same deploy):
  - `GET /api/demo/agent-operations/roster` · `GET /api/demo/agent-operations/evidence`
  - `POST /api/demo/agent-operations/actions/{classify-ticket,draft-response,issue-refund,request-refund-review}`
- A visitor can: see roster state, run an approved backup play (executes), run the forbidden
  refund (blocked, no side effect), and queue a human review (no sensitive execution) — each
  returns a newly generated result + content-integrity receipt hash.
- **DefendableDocs Field Proof v0.1** explains the fielded prototype, module records, the
  independent audit tape + hashes, status labels, and limitations.

## Honesty boundary
- Synthetic data only · broker-routed local/demo enforcement only.
- NOT CLEARED FOR PRODUCTION · NOT CLEARED FOR EXTERNAL SAAS ENFORCEMENT.
- No external SaaS restriction, real refund, live paging, certification, insurance, blockchain/ENS
  operation, or authenticated owner-signature proof.

## Live demo verification (public HTTP, defendablecloud.com)
| action | decision | executed |
|---|---|---|
| classify_ticket | ALLOW_AND_EXECUTE_LOCAL_MOCK | true (mock record) |
| issue_refund | DENY_ACTION_NOT_IN_PERMISSION_ENVELOPE | false (0 refund records) |
| request_refund_review | QUEUE_FOR_HUMAN_APPROVAL | executed_sensitive_action: false |
| GET roster / evidence | HTTP 200 JSON | — |

`external_enforcement_claimed: false` and `starter_authority_inherited: false` on every receipt.
