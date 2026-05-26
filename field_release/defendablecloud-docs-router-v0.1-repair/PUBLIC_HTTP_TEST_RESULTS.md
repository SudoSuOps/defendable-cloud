# Public HTTP Test Results — 2026-05-26T19:04:10Z

## DefendableCloud API (defendablecloud.com)
  POST /actions/classify-ticket -> HTTP 200 · ALLOW_AND_EXECUTE_LOCAL_MOCK
  POST /actions/draft-response -> HTTP 200 · ALLOW_AND_EXECUTE_LOCAL_MOCK
  POST /actions/issue-refund -> HTTP 200 · DENY_ACTION_NOT_IN_PERMISSION_ENVELOPE
  POST /actions/request-refund-review -> HTTP 200 · QUEUE_FOR_HUMAN_APPROVAL
  GET actions/issue-refund -> HTTP 405 (method guard)
  GET action-log -> refund_execution_count=0
  GET roster -> HTTP 200
  GET evidence -> HTTP 200
