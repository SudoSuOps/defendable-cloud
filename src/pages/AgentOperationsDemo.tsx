// DefendableCloud · AI Agent Operations — Controlled Field Demo (v0.1, server-backed)
//
// LIVE PUBLIC CONTROLLED DEMO. Every play POSTs to a real server-side Cloudflare Pages Function
// (/api/demo/agent-operations/actions/*) and renders the server's decision + receipt. The
// roster and action-log panels GET from the server. Synthetic data only; no external calls, no
// real refund, no production clearance. If the API is unreachable, the page says so — it does
// NOT silently fall back to a client-side decision.

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

const API = "/api/demo/agent-operations";
const TRIBUNAL_REPO = "https://github.com/SudoSuOps/defendableos-tribunal-audit";
const MODULES = [
  { name: "Swarm-Doctor", repo: "https://github.com/SudoSuOps/swarm-doctor", kind: "runtime triage + continuity" },
  { name: "Conditioning Coach", repo: "https://github.com/SudoSuOps/conditioning-coach", kind: "advisory readiness" },
  { name: "Owner Roster Registry", repo: "https://github.com/SudoSuOps/owner-roster-registry", kind: "evidence registry" },
  { name: "Permission Broker", repo: "https://github.com/SudoSuOps/permission-broker", kind: "local broker enforcement" },
];

const HASH_LIMITATION =
  "Field-release and demo receipt hashes are computed over canonical JSON with self-referential " +
  "hash fields excluded where applicable. They provide content-integrity linkage only and do not " +
  "prove authorship, owner approval, trusted timestamping, immutability, blockchain anchoring, " +
  "certification, insurance coverage, external SaaS enforcement, or production clearance.";

const BOARD = {
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

const ROUTE: Record<string, string> = {
  classify_ticket: "classify-ticket",
  draft_customer_response: "draft-response",
  issue_refund: "issue-refund",
  request_refund_review: "request-refund-review",
};

type ServerResult = Record<string, any> & { _error?: string; _http?: number };

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
  const [log, setLog] = useState<ServerResult[]>([]);
  const [busy, setBusy] = useState<string | null>(null);
  const [actionLog, setActionLog] = useState<Record<string, any> | null>(null);

  async function refreshActionLog() {
    try {
      const r = await fetch(`${API}/action-log`);
      if (r.ok) setActionLog(await r.json());
    } catch { /* leave null; panel shows nothing */ }
  }
  useEffect(() => { refreshActionLog(); }, []);

  async function play(action: string, payload: Record<string, unknown>) {
    setBusy(action);
    try {
      const r = await fetch(`${API}/actions/${ROUTE[action]}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body: ServerResult = await r.json();
      body._http = r.status;
      setLog((l) => [body, ...l]);
    } catch (e) {
      setLog((l) => [{ requested_action: action, decision: "API_UNREACHABLE", _error: String(e) }, ...l]);
    } finally {
      setBusy(null);
      refreshActionLog();
    }
  }

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
        <section className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">AI Agent Operations — Controlled Field Demo</h1>
          <p className="text-stone-400">
            See an owner-approved restricted-duty backup perform allowed support tasks, block a
            forbidden refund action, and leave an evidence trail.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge tone="green">LIVE PUBLIC CONTROLLED DEMO · server-side Pages Functions</Badge>
            <Badge tone="amber">SYNTHETIC DATA</Badge>
            <Badge tone="amber">READY_WITH_LIMITATIONS</Badge>
          </div>
          <p className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-sm text-stone-300">
            This controlled demonstration uses synthetic customer-support data and broker-routed
            demo actions only. Each play below calls a real public server route
            (<code>{API}/actions/…</code>) and renders the server's decision. It does not restrict
            external SaaS tools, execute real refunds, provide production clearance, or constitute
            certification or insurance coverage.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 p-4 space-y-2">
            <div className="text-xs uppercase tracking-wider text-stone-500">Position Group · acme-helpdesk</div>
            <div className="text-sm">Coverage: <Badge tone="amber">{BOARD.coverage}</Badge></div>
            <div className="text-sm text-stone-400">Human authority: {BOARD.human_owner}</div>
            <div className="pt-2 text-sm">
              <div>Starter <code className="text-stone-400">{BOARD.starter.id}</code></div>
              <div>Status: <Badge tone="red">{BOARD.starter.status}</Badge></div>
              <div className="pt-1">Backup <code className="text-stone-400">{BOARD.backup.id}</code></div>
              <div>Status: <Badge tone="green">{BOARD.backup.status}</Badge></div>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 p-4 space-y-2 text-sm">
            <div className="text-xs uppercase tracking-wider text-stone-500">Approved plays (backup)</div>
            <ul className="list-disc pl-5 text-emerald-300">{BOARD.backup.allowed.map((a) => <li key={a}>{a}</li>)}</ul>
            <div className="text-xs uppercase tracking-wider text-stone-500 pt-2">Blocked plays</div>
            <ul className="list-disc pl-5 text-red-300">{BOARD.denied.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Play Runner <span className="text-xs text-stone-500">(POSTs to the live public server API)</span></h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <button disabled={!!busy} onClick={() => play("classify_ticket", { ticket_id: "DEMO-1001", customer_message: "My order arrived damaged and I would like help." })}
              className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-3 text-left hover:bg-emerald-500/10 disabled:opacity-50">
              <div className="font-medium text-emerald-200">Allowed · Classify Ticket</div>
              <div className="text-xs text-stone-400">POST /actions/classify-ticket</div>
            </button>
            <button disabled={!!busy} onClick={() => play("draft_customer_response", { ticket_id: "DEMO-1001", response_draft: "We're sorry about the damage…" })}
              className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-3 text-left hover:bg-emerald-500/10 disabled:opacity-50">
              <div className="font-medium text-emerald-200">Allowed · Draft Customer Response</div>
              <div className="text-xs text-stone-400">POST /actions/draft-response · draft only</div>
            </button>
            <button disabled={!!busy} onClick={() => play("issue_refund", { ticket_id: "DEMO-1001", amount: 450, reason: "Damaged item" })}
              className="rounded-lg border border-red-500/30 bg-red-500/5 p-3 text-left hover:bg-red-500/10 disabled:opacity-50">
              <div className="font-medium text-red-200">Forbidden · Issue Refund ($450)</div>
              <div className="text-xs text-stone-400">POST /actions/issue-refund · must be blocked</div>
            </button>
            <button disabled={!!busy} onClick={() => play("request_refund_review", { ticket_id: "DEMO-1001", amount: 450, sensitive_action: "issue_refund" })}
              className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-3 text-left hover:bg-amber-500/10 disabled:opacity-50">
              <div className="font-medium text-amber-200">Human Review · Request Refund Review</div>
              <div className="text-xs text-stone-400">POST /actions/request-refund-review</div>
            </button>
          </div>
          {actionLog && (
            <div className="text-sm text-stone-400">
              Server action-log (<code>{API}/action-log</code>): refund_execution_count =
              <span className="text-emerald-300"> {String(actionLog.refund_execution_count)}</span> ·
              external_enforcement_claimed = {String(actionLog.external_enforcement_claimed)} ·
              env {actionLog.demo_environment}
            </div>
          )}
        </section>

        {log.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Results <span className="text-xs text-stone-500">(server responses)</span></h2>
            {log.map((r, i) => (
              <div key={(r.receipt_id as string) || i} className="rounded-lg border border-white/10 p-4 text-sm space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone={r.executed ? "green" : r.decision?.startsWith?.("DENY") ? "red" : r.decision === "API_UNREACHABLE" ? "red" : "amber"}>{r.decision}</Badge>
                  <span className="text-stone-400">{r.requested_action}</span>
                  {r._http && <Badge tone="stone">HTTP {r._http}</Badge>}
                  {r.environment && <Badge tone="stone">{r.environment}</Badge>}
                </div>
                {r._error ? <div className="text-red-300">API unreachable: {r._error}</div> : (
                  <>
                    <div>actor: <code className="text-stone-400">{r.actor_id}</code> · executed: <b>{String(r.executed)}</b>
                      {r.executed_sensitive_action !== undefined && <> · executed_sensitive_action: <b>{String(r.executed_sensitive_action)}</b></>}
                      {r.real_refund_executed !== undefined && <> · real_refund_executed: <b>{String(r.real_refund_executed)}</b></>}</div>
                    <div className="text-stone-300">{r.detail}</div>
                    <div className="text-xs text-stone-500">served_by: {r.served_by} · receipt {r.receipt_id} · sha256 {String(r.receipt_hash).slice(0, 24)}… · {r.timestamp}</div>
                    <div className="text-xs text-stone-500">starter_authority_inherited: {String(r.starter_authority_inherited)} · external_enforcement_claimed: {String(r.external_enforcement_claimed)} · production_clearance: {String(r.production_clearance)}</div>
                  </>
                )}
              </div>
            ))}
          </section>
        )}

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
            <div>Public server action API — <Badge tone="green">LIVE (Cloudflare Pages Functions)</Badge></div>
            <div>DefendableDocs — <Badge tone="amber">READY_WITH_LIMITATIONS</Badge></div>
            <div>DefendableRouter integration — <Badge tone="stone">NOT_YET_INTEGRATED · ROADMAP</Badge></div>
            <div>Production deployment — <Badge tone="red">NOT CLEARED FOR PRODUCTION</Badge></div>
            <div>External SaaS enforcement — <Badge tone="red">NOT CLEARED FOR EXTERNAL SAAS ENFORCEMENT</Badge></div>
          </div>
        </section>

        <section className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 text-xs text-stone-300">{HASH_LIMITATION}</section>

        <footer className="border-t border-white/10 pt-6 text-xs text-stone-500">
          DefendableCloud · controlled synthetic demo · Swarm and Bee LLC. No real customer data.
        </footer>
      </main>
    </div>
  );
}
