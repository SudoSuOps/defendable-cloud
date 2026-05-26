# Claim Hygiene Diff (this repair)
Patched (status banner added):
- src/content/docs/api/overview.md — synthetic demo API only; production APIs ROADMAP.
- src/content/docs/tribunal/overview.md — in-product Tribunal scoring ROADMAP; Codex audit is real.
- src/content/docs/defendablerouter/overview.md — Router NOT verified / ROADMAP; not in Cloud path.
- src/content/docs/ddeed/overview.md — ROADMAP / content-integrity-only.
- src/content/docs/streetledger/overview.md — ROADMAP / content-integrity-only.
- src/content/docs/streetchat/overview.md — ROADMAP.
- src/content/docs/swarmfixer/overview.md — ROADMAP.
- src/content/docs/defendableledger/overview.md — ROADMAP / content-integrity-only.
- src/content/docs/agentbench-clawcheck/overview.md — ROADMAP.
Previously patched (prior field release): index.md banner + "public hash" limitation.

Deferred correction queue (owner-authorized future sprint — not mass-rewritten this sprint):
- Per-page sub-pages under each section (e.g., ddeed/proof-*, api/*-api, streetledger/sha256-hashing,
  defendablerouter/* details, tribunal/scoring-model) still contain design-intent prose; the section
  banner labels the section, but individual sub-pages should get inline labels next sprint.
- "Hedera"/"kill-hedera" doctrine pages: reconcile with content-integrity-only stance.
- Any remaining "production-ready"/insurance wording → limitation labels.
Method: truth-labeling via section banners + homepage; no architecture deletion.
