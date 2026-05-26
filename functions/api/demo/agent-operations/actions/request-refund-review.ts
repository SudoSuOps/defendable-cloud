import { runPlay, readJson, json } from "../_broker";
export const onRequestPost: PagesFunction = async ({ request }) =>
  json(await runPlay("request_refund_review", await readJson(request)));
