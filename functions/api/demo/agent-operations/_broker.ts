// Server-side (Cloudflare Pages Functions) demo broker for the controlled customer-support
// scenario. Synthetic-only. Deterministic decisions mirror the audited Permission Broker
// contract. No external calls, no real refunds, no persistent customer state.
//
// NOTE: this is broker-routed LOCAL DEMO enforcement only. It does not restrict external SaaS
// tools or perform live permission revocation. SHA-256 receipt hashes are content-integrity
// linkage only (not authorship/approval/anchoring/certification).

export const ROSTER = {
  company: "acme-helpdesk",
  position_group: "customer_support",
  environment: "SYNTHETIC_DEMO_ONLY",
  starter: { id: "support-01.acme.defendable.eth", status: "INJURED_RESERVE", allowed: [] as string[] },
  backup: {
    id: "support-02.acme.defendable.eth",
    status: "ACTIVE_BACKUP_RESTRICTED_DUTY",
    allowed: ["classify_ticket", "draft_customer_response", "route_escalation", "update_case_notes"],
  },
  denied: ["issue_refund", "make_policy_exception", "close_compliance_case"],
  coverage: "COVERED_BY_BACKUP_RESTRICTED_DUTY",
  human_owner: "Support Manager / Mr D (synthetic demo owner role)",
};

export const HASH_LIMITATION =
  "SHA-256 hashes in this prototype establish content-integrity linkage only. They do not " +
  "independently prove authorship, owner approval, trusted timestamping, immutability, " +
  "blockchain anchoring, external attestation, certification, insurance coverage, or external " +
  "platform enforcement.";

const EXECUTABLE = new Set(ROSTER.backup.allowed);
const DENIED = new Set(ROSTER.denied);

export function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

async function sha256Canonical(obj: Record<string, unknown>): Promise<string> {
  const body: Record<string, unknown> = {};
  Object.keys(obj).sort().forEach((k) => { if (k !== "receipt_hash") body[k] = obj[k]; });
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(JSON.stringify(body)));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

const rid = (p: string) => p + "-" + crypto.randomUUID().slice(0, 10);

// One controlled play. actor is always the restricted backup in this demo lane.
export async function runPlay(action: string, _payload: Record<string, unknown>) {
  const actor = ROSTER.backup.id;
  let decision: string, executed = false, detail = "", mock: string | null = null;
  let sensitive: boolean | undefined;

  if (action === "request_refund_review") {
    decision = "QUEUE_FOR_HUMAN_APPROVAL"; sensitive = false;
    detail = "Request queued for human review. No refund executed. Agent authority was not expanded.";
  } else if (DENIED.has(action)) {
    decision = "DENY_ACTION_NOT_IN_PERMISSION_ENVELOPE";
    detail = "No refund was executed. Action is outside the restricted-duty permission envelope.";
  } else if (EXECUTABLE.has(action)) {
    decision = "ALLOW_AND_EXECUTE_LOCAL_MOCK"; executed = true; mock = rid("mock");
    detail = action === "draft_customer_response"
      ? "DRAFT ONLY — NOT SENT EXTERNALLY. Stored in the synthetic demo store."
      : "Local synthetic mock record written.";
  } else {
    decision = "DENY_UNKNOWN_ACTION"; detail = "Action not in the known demo vocabulary.";
  }

  const receipt: Record<string, unknown> = {
    receipt_id: rid("enf"), actor_id: actor, requested_action: action, decision, executed,
    executed_sensitive_action: sensitive, detail, local_mock_record_id: mock,
    environment: ROSTER.environment, starter_authority_inherited: false,
    external_enforcement_claimed: false, timestamp: new Date().toISOString(),
    limitation: "Synthetic demo · broker-routed local mock only · no external enforcement.",
  };
  receipt.receipt_hash = await sha256Canonical(receipt);
  return receipt;
}

export async function readJson(request: Request): Promise<Record<string, unknown>> {
  try { return (await request.json()) as Record<string, unknown>; } catch { return {}; }
}
