import { runPlay, readJson, json } from "../_broker";
export const onRequestPost: PagesFunction = async ({ request }) =>
  json(await runPlay("classify_ticket", await readJson(request)));
