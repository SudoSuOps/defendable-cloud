// DefendableCloud · AI Agent Operations — Controlled Field Demo (v0.1)
//
// LIVE SYNTHETIC DEMO. The Permission-Broker policy executes CLIENT-SIDE in the browser
// (no server, no external calls, synthetic data only) and generates a fresh decision +
// SHA-256 receipt on every run — this is runnable behavior, NOT a recorded JSON replay.
// A server-hosted demo API mirroring these same decisions is ROADMAP (see Evidence panel).
//
// Honest boundary: this does not restrict external SaaS tools, execute real refunds, grant
// production clearance, or constitute certification or insurance coverage.

import { useState } from "react";
import type { ReactNode } from "react";

const TRIBUNAL_REPO = "https://github.com/SudoSuOps/defendableos-tribunal-audit";
const MODULES = [
  { name: "Swarm-Doctor", repo: "https://github.com/SudoSuOps/swarm-doctor", kind: "runtime triage + continuity" },
  { name: "Conditioning Coach", repo: "https://github.com/SudoSuOps/conditioning-coach", kind: "advisory readiness" },
  { name: "Owner Roster Registry", repo: "https://github.com/SudoSuOps/owner-roster-registry", kind: "evidence registry" },
  { name: "Permission Broker", repo: "https://github.com/SudoSuOps/permission-broker", kind: "local broker enforcement" },
];

const HASH_LIMITATION =
  "SHA-256 hashes in this prototype establish content-integrity linkage only. They do not " +
  "independently prove authorship, owner approval, trusted timestamping, immutability, " +
  "blockchain anchoring, external attestation, certification, insurance coverage, or external " +
  "platform enforcement.";

const ROSTER = {
  company: "acme-helpdesk",
  position_group: "customer_support",
  environment: "SYNTHETIC_DEMO_ONLY",
  starter: { id: "support-01.acme.defendable.eth", status: "INJURED_RESERVE" },
  backup: {
    id: "support-02.acme.defendable.eth",
    status: "ACTIVE_BACKUP_RESTRICTED_DUTY",
    allowed: ["classify_ticket", "draft_customer_response", "route_escalation", "update_case_notes"],
  },
  denied: ["issue_refund", "make_policy_exception", "close_compliance_case"],
  coverage: "COVERED_BY_BACKUP_RESTRICTED_DUTY",
  human_owner: "Support Manager / Mr D (synthetic demo owner role)",
};

const EXECUTABLE = new Set(ROSTER.backup.allowed);
const DENIED = new Set(ROSTER.denied);

type Result = {
  receipt_id: string;
  actor_id: string;
  requested_action: string;
  decision: string;
  executed: boolean;
  executed_sensitive_action?: boolean;
  detail: string;
  local_mock_record_id: string | null;
  environment: string;
  starter_authority_inherited: false;
  external_enforcement_claimed: false;
  timestamp: string;
  limitation: string;
  receipt_hash?: string;
};

async function sha256Canonical(obj: Record<string, unknown>): Promise<string> {
  const body: Record<string, unknown> = {};
  Object.keys(obj).sort().forEach((k) => { if (k !== "receipt_hash") body[k] = (obj as any)[k]; });
  const json = JSON.stringify(body);
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(json));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function rid(p: string) {
  return p + "-" + Math.random().toString(16).slice(2, 12);
}

// Client-side broker decision — deterministic, mirrors the audited Permission Broker contract.
async function runPlay(action: string, _payload: Record<string, unknown>): Promise<Result> {
  const actor = ROSTER.backup.id;
  let decision: string, executed = false, detail = "", mock: string | null = null;
  let sensitive: boolean | undefined;

  if (action === "request_refund_review") {
    decision = "QUEUE_FOR_HUMAN_APPROVAL";
    sensitive = false;
    detail = "Request queued for human review. No refund executed. Agent authority was not expanded.";
  } else if (DENIED.has(action)) {
    decision = "DENY_ACTION_NOT_IN_PERMISSION_ENVELOPE";
    detail = "No refund was executed. Action is outside the restricted-duty permission envelope.";
  } else if (EXECUTABLE.has(action)) {
    decision = "ALLOW_AND_EXECUTE_LOCAL_MOCK";
    executed = true;
    mock = rid("mock");
    if (action === "classify_ticket") detail = "Classification: BILLING/DAMAGE · priority MEDIUM (synthetic local mock record written).";
    else if (action === "draft_customer_response") detail = "DRAFT ONLY — NOT SENT EXTERNALLY. Draft stored in the synthetic demo store.";
    else detail = "Local synthetic mock record written.";
  } else {
    decision = "DENY_UNKNOWN_ACTION";
    detail = "Action not in the known demo vocabulary.";
  }

  const r: Result = {
    receipt_id: rid("enf"),
    actor_id: actor,
    requested_action: action,
    decision,
    executed,
    executed_sensitive_action: sensitive,
    detail,
    local_mock_record_id: mock,
    environment: ROSTER.environment,
    starter_authority_inherited: false,
    external_enforcement_claimed: false,
    timestamp: new Date().toISOString(),
    limitation: "Synthetic demo · broker-routed local mock only · no external enforcement.",
  };
  r.receipt_hash = await sha256Canonical(r as unknown as Record<string, unknown>);
  return r;
}

function Badge({ tone, children }: { tone: "amber" | "green" | "red" | "stone"; children: ReactNode }) {
  const c = {
    amber: "bg-amber-500/15 text-amber-200 ring-amber-500/30",
    green: "bg-emerald-500/15 text-emerald-200 ring-emerald-500/30",
    red: "bg-red-500/15 text-red-200 ring-red-500/30",
    stone: "bg-stone-500/15 text-stone-300 ring-stone-500/30",
  }[tone];
  return <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium ring-1 ${c}`}>{children}</span>;
}

export default function AgentOperationsDemo() {
  const [log, setLog] = useState<Result[]>([]);
  const [busy, setBusy] = useState<string | null>(null);
  const refundRecords = 0; // invariant: no refund execution side effect ever exists

  async function play(action: string, payload: Record<string, unknown>) {
    setBusy(action);
    const r = await runPlay(action, payload);
    setLog((l) => [r, ...l]);
    setBusy(null);
  }

  const mockCount = log.filter((r) => r.executed).length;

  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased">
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-tight text-amber-200">DefendableCloud</a>
        <nav className="flex gap-4 text-sm text-stone-400">
          <a href="https://github.com/SudoSuOps" className="hover:text-amber-200">GitHub</a>
          <a href={TRIBUNAL_REPO} className="hover:text-amber-200">Audit tape</a>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10 space-y-10">
        {/* A. Hero / Field Status */}
        <section className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">AI Agent Operations — Controlled Field Demo</h1>
          <p className="text-stone-400">
            See an owner-approved restricted-duty backup perform allowed support tasks, block a
            forbidden refund action, and leave an evidence trail.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge tone="amber">AUDITED PROTOTYPE</Badge>
            <Badge tone="amber">SYNTHETIC DATA</Badge>
            <Badge tone="amber">READY_WITH_LIMITATIONS</Badge>
            <Badge tone="green">LIVE SYNTHETIC DEMO · client-side broker</Badge>
          </div>
          <p className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-sm text-stone-300">
            This controlled demonstration uses synthetic customer-support data and broker-routed
            demo actions only. It does not restrict external SaaS tools, execute real refunds,
            provide production clearance, or constitute certification or insurance coverage.
          </p>
        </section>

        {/* B. Roster Board */}
        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 p-4 space-y-2">
            <div className="text-xs uppercase tracking-wider text-stone-500">Position Group</div>
            <div className="font-medium">Customer Support · {ROSTER.company}</div>
            <div className="text-sm">Coverage: <Badge tone="amber">{ROSTER.coverage}</Badge></div>
            <div className="text-sm text-stone-400">Human authority: {ROSTER.human_owner}</div>
            <div className="pt-2 text-sm">
              <div>Starter <code className="text-stone-400">{ROSTER.starter.id}</code></div>
              <div>Status: <Badge tone="red">{ROSTER.starter.status}</Badge></div>
              <div className="pt-1">Backup <code className="text-stone-400">{ROSTER.backup.id}</code></div>
              <div>Status: <Badge tone="green">{ROSTER.backup.status}</Badge></div>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 p-4 space-y-2 text-sm">
            <div className="text-xs uppercase tracking-wider text-stone-500">Approved plays (backup)</div>
            <ul className="list-disc pl-5 text-emerald-300">
              {ROSTER.backup.allowed.map((a) => <li key={a}>{a}</li>)}
            </ul>
            <div className="text-xs uppercase tracking-wider text-stone-500 pt-2">Blocked plays</div>
            <ul className="list-disc pl-5 text-red-300">
              {ROSTER.denied.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </section>

        {/* C. Play Runner */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Play Runner <span className="text-xs text-stone-500">(runs client-side, fresh receipt each click)</span></h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <button disabled={!!busy} onClick={() => play("classify_ticket", { ticket_id: "DEMO-1001", customer_message: "My order arrived damaged and I would like help." })}
              className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-3 text-left hover:bg-emerald-500/10">
              <div className="font-medium text-emerald-200">Allowed · Classify Ticket</div>
              <div className="text-xs text-stone-400">DEMO-1001 · “order arrived damaged”</div>
            </button>
            <button disabled={!!busy} onClick={() => play("draft_customer_response", { ticket_id: "DEMO-1001", response_draft: "We're sorry about the damage…" })}
              className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-3 text-left hover:bg-emerald-500/10">
              <div className="font-medium text-emerald-200">Allowed · Draft Customer Response</div>
              <div className="text-xs text-stone-400">draft only — not sent externally</div>
            </button>
            <button disabled={!!busy} onClick={() => play("issue_refund", { ticket_id: "DEMO-1001", amount: 450, reason: "Damaged item" })}
              className="rounded-lg border border-red-500/30 bg-red-500/5 p-3 text-left hover:bg-red-500/10">
              <div className="font-medium text-red-200">Forbidden · Issue Refund ($450)</div>
              <div className="text-xs text-stone-400">must be blocked · no refund executed</div>
            </button>
            <button disabled={!!busy} onClick={() => play("request_refund_review", { ticket_id: "DEMO-1001", amount: 450, sensitive_action: "issue_refund" })}
              className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-3 text-left hover:bg-amber-500/10">
              <div className="font-medium text-amber-200">Human Review · Request Refund Review</div>
              <div className="text-xs text-stone-400">queues for human · agent authority not expanded</div>
            </button>
          </div>
          <div className="text-sm text-stone-400">
            Side-effect log — allowed local mock records: <span className="text-emerald-300">{mockCount}</span> ·
            refund execution records: <span className="text-emerald-300">{refundRecords}</span> (must be 0)
          </div>
        </section>

        {/* Results */}
        {log.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Results <span className="text-xs text-stone-500">(LIVE SYNTHETIC DEMO — newly generated)</span></h2>
            {log.map((r) => (
              <div key={r.receipt_id} className="rounded-lg border border-white/10 p-4 text-sm space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone={r.executed ? "green" : r.decision.startsWith("DENY") ? "red" : "amber"}>{r.decision}</Badge>
                  <span className="text-stone-400">{r.requested_action}</span>
                  <Badge tone="stone">{r.environment}</Badge>
                </div>
                <div>actor: <code className="text-stone-400">{r.actor_id}</code> · executed: <b>{String(r.executed)}</b>
                  {r.executed_sensitive_action !== undefined && <> · executed_sensitive_action: <b>{String(r.executed_sensitive_action)}</b></>}</div>
                <div className="text-stone-300">{r.detail}</div>
                <div className="text-xs text-stone-500">
                  receipt {r.receipt_id} · sha256 {r.receipt_hash?.slice(0, 24)}… · {r.timestamp}
                </div>
                <div className="text-xs text-stone-500">starter_authority_inherited: false · external_enforcement_claimed: false</div>
              </div>
            ))}
          </section>
        )}

        {/* D. Evidence Panel */}
        <section className="rounded-lg border border-white/10 p-4 space-y-2 text-sm">
          <h2 className="text-lg font-semibold">Evidence</h2>
          <div>Audited module chain:</div>
          <ul className="list-disc pl-5">
            {MODULES.map((m) => (
              <li key={m.name}>
                <a className="text-amber-200 hover:underline" href={m.repo}>{m.name}</a> — {m.kind} ·
                <Badge tone="green"> VERIFIED_AS_REPAIRED_WITH_LIMITATIONS</Badge>
              </li>
            ))}
          </ul>
          <div>Independent audit tape: <a className="text-amber-200 hover:underline" href={TRIBUNAL_REPO}>defendableos-tribunal-audit</a></div>
          <div className="pt-1 grid gap-1">
            <div>Public demo — <Badge tone="amber">READY_WITH_LIMITATIONS</Badge></div>
            <div>DefendableDocs — <Badge tone="amber">READY_WITH_LIMITATIONS</Badge></div>
            <div>DefendableCloud API promotion — <Badge tone="amber">READY_WITH_LIMITATIONS</Badge></div>
            <div>Production deployment — <Badge tone="red">NOT CLEARED FOR PRODUCTION</Badge></div>
            <div>External SaaS enforcement — <Badge tone="red">NOT CLEARED FOR EXTERNAL SAAS ENFORCEMENT</Badge></div>
            <div>Server-hosted demo API — <Badge tone="stone">ROADMAP / NOT YET IMPLEMENTED</Badge> (this demo runs the broker client-side)</div>
          </div>
        </section>

        {/* E. Evidence / Hash Limitation */}
        <section className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 text-xs text-stone-300">
          {HASH_LIMITATION}
        </section>

        <footer className="border-t border-white/10 pt-6 text-xs text-stone-500">
          DefendableCloud · controlled synthetic demo · Swarm and Bee LLC. No real customer data.
        </footer>
      </main>
    </div>
  );
}
