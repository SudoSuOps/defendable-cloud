import { ROSTER, HASH_LIMITATION, json } from "./_broker";
export const onRequestGet: PagesFunction = async () =>
  json({
    ...ROSTER,
    approved_plays: ROSTER.backup.allowed,
    blocked_plays: ROSTER.denied,
    limitation: "Synthetic demo only. Does not restrict external SaaS, execute real refunds, or grant production clearance.",
    hash_integrity_note: HASH_LIMITATION,
  });
