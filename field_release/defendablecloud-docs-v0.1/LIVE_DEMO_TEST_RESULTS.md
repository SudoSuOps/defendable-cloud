# Live Demo Test Results (public HTTP, defendablecloud.com) — 2026-05-26T17:31:47Z

## GET roster
starter INJURED_RESERVE | backup ACTIVE_BACKUP_RESTRICTED_DUTY | coverage COVERED_BY_BACKUP_RESTRICTED_DUTY
## POST classify-ticket (allowed)
ALLOW_AND_EXECUTE_LOCAL_MOCK executed=True mock=mock-0b6ca0cb-e hash=d1dfb9ac22c8288a
## POST issue-refund (forbidden)
DENY_ACTION_NOT_IN_PERMISSION_ENVELOPE executed=False ext_enf_claimed=False
## POST request-refund-review (human queue)
QUEUE_FOR_HUMAN_APPROVAL executed_sensitive_action=False

No refund side effect: issue_refund returns executed=false; demo creates no refund execution record.
