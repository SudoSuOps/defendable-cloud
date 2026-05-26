# Public URL Verification
All over real public HTTP:
- https://defendablecloud.com/agent-operations-demo — 200 (LIVE SYNTHETIC DEMO page)
- https://defendablecloud.com/api/demo/agent-operations/roster — 200 JSON (Pages Function)
- https://defendablecloud.com/api/demo/agent-operations/evidence — 200 JSON
- POST .../actions/classify-ticket — ALLOW_AND_EXECUTE_LOCAL_MOCK, executed true
- POST .../actions/issue-refund — DENY_ACTION_NOT_IN_PERMISSION_ENVELOPE, executed false
- POST .../actions/request-refund-review — QUEUE_FOR_HUMAN_APPROVAL, executed_sensitive_action false
- https://defendabledocs.com/field-release/overview/ — 200
- https://defendabledocs.com/field-release/audit-receipt/ — 200 (contains VERIFIED_AS_REPAIRED_WITH_LIMITATIONS + manifest hash)
- https://defendabledocs.com/field-release/module-records/ — 200
- https://defendabledocs.com/field-release/status-labels/ — 200
