import { HASH_LIMITATION, json } from "./_broker";
export const onRequestGet: PagesFunction = async () =>
  json({
    audited_modules: [
      { name: "swarm-doctor", repo: "https://github.com/SudoSuOps/swarm-doctor", verdict: "VERIFIED_AS_REPAIRED_WITH_LIMITATIONS" },
      { name: "conditioning-coach", repo: "https://github.com/SudoSuOps/conditioning-coach", verdict: "VERIFIED_AS_REPAIRED_WITH_LIMITATIONS" },
      { name: "owner-roster-registry", repo: "https://github.com/SudoSuOps/owner-roster-registry", verdict: "VERIFIED_AS_REPAIRED_WITH_LIMITATIONS" },
      { name: "permission-broker", repo: "https://github.com/SudoSuOps/permission-broker", verdict: "VERIFIED_AS_REPAIRED_WITH_LIMITATIONS" },
    ],
    tribunal_audit_repo: "https://github.com/SudoSuOps/defendableos-tribunal-audit",
    reaudit_head: "284d92b096e17a23ee7977f9f084d877e221368b",
    manifest_sha256: "f5895e120a39d48cfa8f4d319c0fd9db8670916f0a19c77b89486189dca50c49",
    receipt_sha256: "c8d672e29c804255871d8a5d797aa145442080a87d2131e49fc45846ce95624a",
    readiness: {
      public_demo: "READY_WITH_LIMITATIONS",
      defendabledocs: "READY_WITH_LIMITATIONS",
      defendablecloud_api_promotion: "READY_WITH_LIMITATIONS",
      production_deployment: "NOT CLEARED FOR PRODUCTION",
      external_saas_enforcement: "NOT CLEARED FOR EXTERNAL SAAS ENFORCEMENT",
    },
    hash_integrity_note: HASH_LIMITATION,
  });
