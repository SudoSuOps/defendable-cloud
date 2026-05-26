# Claim Hygiene Review v0.1 (DefendableDocs)

Scope per owner: do not rewrite the entire docs universe; patch material/misleading claims;
queue the rest. Status keys: CURRENTLY IMPLEMENTED · NEEDS LIMITATION LABEL · ROADMAP_ONLY ·
REQUIRES OWNER REVIEW.

| Page / path | Existing claim | Status | Patched now? |
|---|---|---|---|
| `index.md` (homepage) | "Every Proof resolves to a public hash" | NEEDS LIMITATION LABEL | YES — limited to content-integrity-only; public anchoring marked ROADMAP |
| `index.md` (homepage) | broad 9-step deeded ecosystem presented as current | NEEDS LIMITATION LABEL | YES — field-status banner added linking Field Proof v0.1 |
| `defendableledger/kill-hedera.md` + 22 others mentioning "Hedera" | anti/about-anchoring doctrine | REQUIRES OWNER REVIEW | deferred queue (doctrine pages; not a false "implemented" claim) |
| `ddeed/*` (Deed/receipt proofs, proof-of-trust) | DDEED minting/proofs | ROADMAP_ONLY | deferred — recommend ROADMAP label on DDEED overview |
| `tribunal/*` (scoring, validator-chain, verdict) | Tribunal scoring engine | ROADMAP_ONLY / partially audited | deferred — note that the *independent Codex Tribunal audit* is real; an in-product Tribunal scoring service is roadmap |
| `defendablerouter/ens-app-agent-id.md` | ENS app/agent id | ROADMAP_ONLY | deferred — ENS is a naming standard only; no on-chain implementation |
| `api/*` (Receipts/Deeds/Tribunal/Router APIs) | API contracts | ROADMAP_ONLY | deferred — recommend ROADMAP label; only the synthetic demo API is live |
| `defendableledger/royal-jelly-tiers.md` | "production-ready" mention | REQUIRES OWNER REVIEW | deferred |
| legal/insurance mention (1 file) | insurance wording | REQUIRES OWNER REVIEW | deferred |

## Deferred correction queue (owner-authorized future sprint)
1. Add ROADMAP / NOT YET IMPLEMENTED labels to DDEED, in-product Tribunal scoring, API, ENS pages.
2. Reconcile "Hedera" doctrine pages with current "content-integrity hash only" stance.
3. Review any remaining "production-ready"/insurance wording for limitation labels.

Patched this sprint: homepage banner + homepage public-hash claim. No mass rewrite performed
(per scope). The new Field Release section + status labels provide the honest anchor for visitors.
