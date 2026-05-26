import { actionLog, json } from "./_broker";
export const onRequestGet: PagesFunction = async () => json(actionLog());
