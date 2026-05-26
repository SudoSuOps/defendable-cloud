# DefendableCloud Repair Proof
Baseline 21ddad923d1f1d69a5b6788a9d424ad2ab378daf → Repair dd60c800e953aa3d0bd104a17fcb0fa92284bbe6
Files: src/pages/AgentOperationsDemo.tsx (server-backed), functions/api/demo/agent-operations/_broker.ts
(+ actionHandler, actionLog, required fields), functions/.../actions/*.ts (method-guarded),
functions/.../action-log.ts (new). Build: `npm run build` exit 0.

Public HTTP (defendablecloud.com), verified post-deploy:
- POST actions/classify-ticket → 200 · ALLOW_AND_EXECUTE_LOCAL_MOCK · executed=true · served_by=cloudflare_pages_function_server_side
- POST actions/draft-response → 200 · ALLOW · executed=true · draft_only=true · sent_externally=false
- POST actions/issue-refund → 200 · DENY_ACTION_NOT_IN_PERMISSION_ENVELOPE · executed=false · real_refund_executed=false · external_enforcement_claimed=false
- POST actions/request-refund-review → 200 · QUEUE_FOR_HUMAN_APPROVAL · executed_sensitive_action=false
- GET actions/issue-refund → 405 JSON {error: method_not_allowed, allow: POST}
- GET action-log → refund_execution_count=0 · denied_refund_count=1 · human_review_queue_count=1 · external_enforcement_claimed=false
POST routes no longer return 405; UI calls the live server routes.
