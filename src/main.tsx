import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import DefendableCloud from "./pages/DefendableCloud";
import AgentOperationsDemo from "./pages/AgentOperationsDemo";

// Minimal path routing (SPA fallback serves index.html for every path via public/_redirects).
const path = window.location.pathname.replace(/\/+$/, "");
const Page = path === "/agent-operations-demo" ? AgentOperationsDemo : DefendableCloud;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
);
