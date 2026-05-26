# Public Demo Limitations
- Synthetic data only (acme-helpdesk, support-0x.acme.defendable.eth). No real customer data.
- Broker-routed/demo enforcement only; does not restrict external SaaS tools or revoke credentials.
- No real refund execution; issue_refund always returns executed:false with zero refund records.
- Human review queues only; executed_sensitive_action:false; agent never inherits human authority.
- SHA-256 receipts are content-integrity linkage only (not authorship/approval/anchoring/cert/insurance).
- NOT CLEARED FOR PRODUCTION; NOT CLEARED FOR EXTERNAL SAAS ENFORCEMENT.
- The client-side demo and the Pages Functions API are synthetic; no persistent customer state.
