import { runPlay, readJson, json } from "../_broker";
export const onRequestPost: PagesFunction = async ({ request }) =>
  json(await runPlay("issue_refund", await readJson(request)));
