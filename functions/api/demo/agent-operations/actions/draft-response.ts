import { runPlay, readJson, json } from "../_broker";
export const onRequestPost: PagesFunction = async ({ request }) =>
  json(await runPlay("draft_customer_response", await readJson(request)));
