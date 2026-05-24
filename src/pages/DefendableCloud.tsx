// DefendableCloud · operator-owned private inference + AgentBench + SwarmCurator
//
// Single deep scrolling product surface for defendablecloud.com. Three lanes
// on one fleet: Utilization (inference), AgentBench (Defendable Agent Deeds),
// SwarmCurator (CRE-tuned dataset curation). Open-weights models including
// CRE-Atlas 27B and SwarmGrant 9B.
//
// Cross-links to defendableos.com/cloud (in-context overview) and
// docs.defendableos.com (full docs). Charcoal+honey palette matching the
// rest of the brand stack.

const SALES_EMAIL = "build@defendableos.com";
const X_URL = "https://x.com/swarmandbee";
const LINKEDIN_URL = "https://www.linkedin.com/in/donovan-mackey-89a6063b6/";
const GITHUB_URL = "https://github.com/SudoSuOps";
const DEFENDABLEOS_URL = "https://defendableos.com";
const DOCS_URL = "https://docs.defendableos.com";

const MAILTO_ACCESS = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(
  "Request access · DefendableCloud",
)}&body=${encodeURIComponent(
  "Hi DefendableCloud — \n\nLane of interest (circle):  Inference  /  AgentBench  /  SwarmCurator\n\nUse case / volume:\n\nModel(s) of interest (CRE-Atlas 27B / SwarmGrant 9B / Qwen / Gemma):\n\nCompliance posture needed (HIPAA / GDPR / SOC2 / none):\n\nName / company:\n",
)}`;

const MAILTO_BENCH = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(
  "AgentBench intake · DefendableCloud",
)}&body=${encodeURIComponent(
  "Hi DefendableCloud — I'd like to bench an AI agent.\n\nAgent name + version:\nDomain (CRE / Grants / Legal / Code / Other):\nPack of interest (Compute Inspector / Refund Ranger / Custom):\nReceipt format needed (DDEED JSON / signed PDF / both):\n\nName / company:\n",
)}`;

const MAILTO_CURATOR = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(
  "SwarmCurator intake · DefendableCloud",
)}&body=${encodeURIComponent(
  "Hi SwarmCurator — I'd like a curated dataset.\n\nDomain (CRE / Grants / Legal / Custom):\nRaw signal source (own corpus / public crawl / hybrid):\nOutput format needed (JSONL / Parquet / HF dataset / LoRA-ready):\nVolume estimate (rows / GB):\n\nName / company:\n",
)}`;

export default function DefendableCloud() {
  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200 antialiased selection:bg-amber-500/30 selection:text-amber-100">
      <Header />
      <main>
        <Hero />
        <ThreeLanes />
        <Models />
        <Fleet />
        <ApiAndSdk />
        <AgentBenchDeep />
        <SwarmCuratorDeep />
        <TrustAndPrivacy />
        <Pricing />
        <Faq />
        <CtaContact />
      </main>
      <Footer />
      <JsonLd />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Header
// ─────────────────────────────────────────────────────────────────────────
function Header() {
  const navItems: [string, string][] = [
    ["Lanes", "#lanes"],
    ["Models", "#models"],
    ["Fleet", "#fleet"],
    ["AgentBench", "#agentbench"],
    ["SwarmCurator", "#swarmcurator"],
    ["Pricing", "#pricing"],
  ];
  return (
    <header className="sticky top-0 z-30 border-b border-stone-900 bg-neutral-950/85 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <span className="inline-block h-2 w-2 rounded-full bg-amber-400 group-hover:bg-amber-300 transition-colors" />
          <span className="font-semibold tracking-tight text-stone-100">
            Defendable<span className="text-amber-300">Cloud</span>
          </span>
          <span className="ml-2 text-[9px] uppercase tracking-[0.2em] text-stone-500 hidden sm:inline">
            operator-owned · DC-owned
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-5 text-xs uppercase tracking-[0.18em] text-stone-400">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-amber-300 transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <a
          href={MAILTO_ACCESS}
          className="text-xs uppercase tracking-[0.18em] rounded border border-amber-500/40 text-amber-300 px-3 py-1.5 hover:bg-amber-500/10 transition-colors"
        >
          Request access
        </a>
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="border-b border-stone-900">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">
          PRIVATE INFERENCE · OPERATOR-OWNED · DC-OWNED · NO LOGS · CONTRACTUAL
        </div>
        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-50 leading-[1.05] max-w-4xl">
          Private inference.{" "}
          <span className="font-serif italic font-normal text-amber-300">Operator-owned.</span>{" "}
          Paid in full.
        </h1>
        <p className="mt-7 text-lg md:text-xl text-stone-300 leading-relaxed max-w-3xl">
          128 RTX 6000 Blackwell · 12,288 GB aggregate VRAM · housed in a data
          center we own · zero debt service · zero hyperscaler markup.{" "}
          <span className="text-stone-100">Same OpenAI SDK.</span>{" "}
          <span className="text-stone-100">Different base_url.</span> Works in 30 seconds.
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-900 border border-stone-900">
          <Stat n="128" label="RTX 6000 Blackwell" />
          <Stat n="12,288 GB" label="aggregate VRAM" />
          <Stat n="4" label="open-weights models" />
          <Stat n="3" label="product lanes" />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={MAILTO_ACCESS}
            className="rounded border border-amber-500 bg-amber-500/10 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300 hover:bg-amber-500/20 transition-colors"
          >
            Request inference key
          </a>
          <a
            href="#agentbench"
            className="rounded border border-stone-700 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
          >
            Bench your agent
          </a>
          <a
            href="#models"
            className="rounded border border-stone-700 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
          >
            Browse models
          </a>
        </div>

        <p className="mt-10 text-xs text-stone-500 italic font-serif leading-relaxed max-w-2xl">
          "The cloud is rented. The rack is the building." We own the data
          center. We own the GPUs. We sign a no-logging contract before your
          first token. That is how private inference works when the operator
          owns the building.
        </p>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="bg-neutral-950 px-5 py-6">
      <div className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-50 tabular-nums">
        {n}
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-stone-500">{label}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// 3 lanes
// ─────────────────────────────────────────────────────────────────────────
function ThreeLanes() {
  const lanes = [
    {
      eyebrow: "LANE 01 · UTILIZATION",
      title: "Inference",
      tagline: "Send a token. Get a token. Pay per million.",
      bullets: [
        "OpenAI-SDK compatible · swap base_url",
        "Open-weights models · sovereign · audit-grade",
        "Per-million-token billing · no minimums",
      ],
      anchor: "#models",
      cta: "Browse the model menu →",
    },
    {
      eyebrow: "LANE 02 · AGENTBENCH",
      title: "AgentBench",
      tagline: "Submit your agent. Receive a Defendable Agent Deed™.",
      bullets: [
        "Tribunal grading · Honey / Jelly / Propolis",
        "5-grade rubric · never collapses to a single number",
        "DDEED-DOV-AGENT record · publicly verifiable hash",
      ],
      anchor: "#agentbench",
      cta: "See the bench workflow →",
    },
    {
      eyebrow: "LANE 03 · SWARMCURATOR",
      title: "SwarmCurator",
      tagline: "Submit your raw signal. Receive a fine-tune-ready dataset.",
      bullets: [
        "CRE-tuned · Grants-tuned · Custom domains",
        "JSONL · Parquet · HuggingFace dataset cards · LoRA-ready",
        "Receipted pipeline · every row reconciled",
      ],
      anchor: "#swarmcurator",
      cta: "See the curator pipeline →",
    },
  ];
  return (
    <section id="lanes" className="border-b border-stone-900">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">
          ONE FLEET · THREE PRODUCTS
        </div>
        <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-stone-50 max-w-3xl">
          Three lanes for the same fleet.{" "}
          <span className="font-serif italic font-normal text-amber-300">Use one or all three.</span>
        </h2>
        <p className="mt-5 text-base text-stone-400 leading-relaxed max-w-3xl">
          DefendableCloud isn't a single API. It's a 3-lane rail on one
          operator-owned fleet. The inference lane bills by tokens. The bench
          lane bills by pack. The curator lane bills by dataset. Every lane
          ends in a receipted artifact you can hand a CFO or a compliance
          officer without an asterisk.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-px bg-stone-900 border border-stone-900 rounded-xl overflow-hidden">
          {lanes.map((lane) => (
            <div key={lane.title} className="bg-neutral-950 p-6 md:p-8 flex flex-col">
              <div className="text-[10px] uppercase tracking-[0.22em] text-amber-400/70 font-semibold">
                {lane.eyebrow}
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-50">
                {lane.title}
              </h3>
              <p className="mt-3 text-base text-stone-300 leading-relaxed font-serif italic">
                {lane.tagline}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-stone-400">
                {lane.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-amber-400 mt-0.5">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={lane.anchor}
                className="mt-6 text-xs uppercase tracking-[0.18em] text-amber-300 hover:text-amber-200 self-start"
              >
                {lane.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Models
// ─────────────────────────────────────────────────────────────────────────
function Models() {
  const models = [
    {
      name: "CRE-Atlas 27B",
      base: "Gemma 27B · open weights",
      params: "27 billion",
      context: "128K tokens",
      tagline: "The first LLM that speaks fluent CRE due-diligence.",
      uses: [
        "Cap rate / NOI / DSCR analysis",
        "NNN lease abstraction · STNL underwriting",
        "1031 exchange flow modeling",
        "MarketReady deed drafting",
      ],
      price: "TBD · request quote",
      tier: "FLAGSHIP · CUSTOM",
      tone: "amber-300",
    },
    {
      name: "SwarmGrant 9B",
      base: "Qwen 9B · open weights",
      params: "9 billion",
      context: "32K tokens",
      tagline: "Grant-writing co-pilot tuned on federal + foundation corpora.",
      uses: [
        "RFP drafting · SBIR / STTR / NIH",
        "Foundation application generation",
        "Budget + justification narratives",
        "Compliance checklist auto-fill",
      ],
      price: "TBD · request quote",
      tier: "SPECIALIST · CUSTOM",
      tone: "amber-300",
    },
    {
      name: "Qwen 32B base",
      base: "Qwen 2.5 32B · open weights",
      params: "32 billion",
      context: "128K tokens",
      tagline: "General reasoning · strong tool-use · code-fluent.",
      uses: [
        "Tool-use agents · function calling",
        "Code generation · review · refactor",
        "Structured output · JSON / XML / SQL",
        "Multi-step reasoning chains",
      ],
      price: "TBD · request quote",
      tier: "BASE · OPEN WEIGHTS",
      tone: "stone-300",
    },
    {
      name: "Gemma 27B base",
      base: "Google Gemma 27B · open weights",
      params: "27 billion",
      context: "128K tokens",
      tagline: "Long-context fluency · clean structured output for RAG.",
      uses: [
        "Long-document RAG (10K-100K tokens)",
        "Structured output · table / list extraction",
        "Translation · summarization at length",
        "CRE-Atlas base · upgrade path",
      ],
      price: "TBD · request quote",
      tier: "BASE · OPEN WEIGHTS",
      tone: "stone-300",
    },
  ];
  return (
    <section id="models" className="border-b border-stone-900 bg-neutral-950/60">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">
          OPEN-WEIGHTS MENU · NO BLACK BOXES · SOVEREIGN
        </div>
        <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-stone-50 max-w-3xl">
          Four models.{" "}
          <span className="font-serif italic font-normal text-amber-300">Sovereign.</span>{" "}
          Audit-grade.
        </h2>
        <p className="mt-5 text-base text-stone-400 leading-relaxed max-w-3xl">
          Every model is open-weights. Nothing is locked behind a hyperscaler
          API. Two are custom Defendable fine-tunes (CRE-Atlas, SwarmGrant)
          built for the domains we operate in. Two are clean base models you
          can swap into any OpenAI-SDK call. v2 menu adds Llama 70B, DeepSeek,
          and Mixtral on operator request.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {models.map((m) => (
            <div
              key={m.name}
              className="rounded-xl border border-stone-800 bg-neutral-950 p-6 md:p-8 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[9px] uppercase tracking-[0.22em] text-stone-500 font-semibold">
                    {m.tier}
                  </div>
                  <h3 className={`mt-2 text-2xl font-semibold tracking-tight text-${m.tone}`}>
                    {m.name}
                  </h3>
                  <div className="mt-1 text-xs text-stone-500 font-mono">{m.base}</div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] uppercase tracking-[0.22em] text-stone-500">price</div>
                  <div className="mt-1 text-xs text-amber-400/90">{m.price}</div>
                </div>
              </div>
              <p className="mt-5 text-base text-stone-300 leading-relaxed font-serif italic">
                {m.tagline}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded border border-stone-800 px-3 py-2">
                  <div className="text-[9px] uppercase tracking-[0.22em] text-stone-500">params</div>
                  <div className="mt-0.5 text-stone-200 font-mono">{m.params}</div>
                </div>
                <div className="rounded border border-stone-800 px-3 py-2">
                  <div className="text-[9px] uppercase tracking-[0.22em] text-stone-500">context</div>
                  <div className="mt-0.5 text-stone-200 font-mono">{m.context}</div>
                </div>
              </div>
              <div className="mt-5">
                <div className="text-[9px] uppercase tracking-[0.22em] text-stone-500 font-semibold">
                  USE CASES
                </div>
                <ul className="mt-2 space-y-1.5 text-sm text-stone-400">
                  {m.uses.map((u) => (
                    <li key={u} className="flex gap-2">
                      <span className="text-amber-400 mt-0.5">·</span>
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-stone-500 italic font-serif leading-relaxed max-w-3xl">
          Pricing is held until your workload is sized · we don't publish
          per-1M-token rates that depend on context window, model, and
          throughput tier. Request a quote and we'll quote a rate good for 90
          days · honest numbers tied to your actual call shape.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Fleet
// ─────────────────────────────────────────────────────────────────────────
function Fleet() {
  return (
    <section id="fleet" className="border-b border-stone-900">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">
          HARDWARE · NOT RENTED · NOT FINANCED
        </div>
        <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-stone-50 max-w-3xl">
          128 RTX 6000 Blackwell · 12,288 GB ·{" "}
          <span className="font-serif italic font-normal text-amber-300">paid in full</span> ·
          DC-owned.
        </h2>
        <p className="mt-5 text-base text-stone-400 leading-relaxed max-w-3xl">
          The fleet is not on a lease. It's not on credit. It's not on a
          hyperscaler markup. It's in racks we operate, paid for with capital
          we control. That's why we can sign a no-logging contract · the
          economics work because the building is ours.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-900 border border-stone-900 rounded-xl overflow-hidden">
          <FleetStat n="128" label="RTX 6000 Blackwell" sub="96 GB each" />
          <FleetStat n="12,288 GB" label="aggregate VRAM" sub="across the fleet" />
          <FleetStat n="$0" label="debt service" sub="paid in full" />
          <FleetStat n="DC-owned" label="data center" sub="no hyperscaler markup" />
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/[0.04] p-6">
            <div className="text-[10px] uppercase tracking-[0.22em] text-amber-400/80 font-semibold">
              BENCH PARTITION · LANE 02 DEDICATED
            </div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-stone-50">
              6 cards isolated for AgentBench
            </h3>
            <p className="mt-3 text-sm text-stone-300 leading-relaxed">
              A dedicated partition of the fleet runs the AgentBench Tribunal.
              Isolated from inference traffic. Every benchmark run pinned to
              the same hardware envelope · so deeds are reproducible · so
              receipts are comparable across customers.
            </p>
            <div className="mt-5 text-xs text-stone-400 font-mono space-y-1">
              <div>partition_id     · bench-blackwell-06</div>
              <div>gpus             · 6 × RTX 6000 96GB</div>
              <div>aggregate_vram   · 576 GB</div>
              <div>isolation        · network + scheduler</div>
              <div>receipt_class    · DDEED-DOV-AGENT</div>
            </div>
          </div>

          <div className="rounded-xl border border-stone-800 bg-neutral-950/60 p-6">
            <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-semibold">
              OPERATOR FRAMING · CRE NOI VOCABULARY
            </div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-stone-50">
              The rack is the building
            </h3>
            <p className="mt-3 text-base text-stone-300 leading-relaxed font-serif italic">
              10cap today. 5cap on $10M NOI NNN when we get cooking. The fleet
              is the producing asset · the receipts are the rent roll · the
              deeds are the title insurance.
            </p>
            <p className="mt-4 text-sm text-stone-400 leading-relaxed">
              We frame DefendableCloud in CRE due-diligence vocabulary because
              that's the language CFOs already speak. Every model call is a
              tenant. Every bench run is an inspection. Every dataset is a
              core sample.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FleetStat({ n, label, sub }: { n: string; label: string; sub: string }) {
  return (
    <div className="bg-neutral-950 px-5 py-7">
      <div className="text-2xl md:text-3xl font-semibold tracking-tight text-amber-300 tabular-nums">
        {n}
      </div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-stone-300">{label}</div>
      <div className="mt-0.5 text-[10px] text-stone-500">{sub}</div>
    </div>
  );
}

function BakeryPack({
  title,
  rows,
  formats,
  status,
}: {
  title: string;
  rows: string;
  formats: string;
  status: "FRESH" | "ON THE OVEN" | "QUEUED" | "ON-DEMAND";
}) {
  const tone =
    status === "FRESH"
      ? "border-amber-500/60 text-amber-300"
      : status === "ON THE OVEN"
        ? "border-amber-500/30 text-amber-400/70"
        : status === "QUEUED"
          ? "border-stone-700 text-stone-400"
          : "border-stone-700 text-stone-400";
  return (
    <div className="rounded border border-stone-800 bg-neutral-950/60 px-4 py-4 flex flex-col">
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-sm font-semibold tracking-tight text-stone-100">{title}</h4>
        <span className={`text-[9px] uppercase tracking-[0.2em] font-semibold rounded border px-1.5 py-0.5 ${tone}`}>
          {status}
        </span>
      </div>
      <div className="mt-3 text-[11px] text-stone-500 font-mono">{rows}</div>
      <div className="mt-1 text-[11px] text-stone-500 font-mono">{formats}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// API + SDK
// ─────────────────────────────────────────────────────────────────────────
function ApiAndSdk() {
  const pythonSample = `from openai import OpenAI

client = OpenAI(
    api_key="dcl_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    base_url="https://api.defendablecloud.com/v1",
)

response = client.chat.completions.create(
    model="cre-atlas-27b",
    messages=[
        {"role": "system", "content": "You are a CRE underwriter."},
        {"role": "user", "content": "Given a $4.2M NOI on a 7-cap NNN, value the asset and explain the 1031 reinvestment window."},
    ],
)

print(response.choices[0].message.content)`;

  const curlSample = `curl https://api.defendablecloud.com/v1/chat/completions \\
  -H "Authorization: Bearer dcl_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "swarmgrant-9b",
    "messages": [
      {"role": "user", "content": "Draft a 250-word SBIR Phase I narrative for an AI agent benchmarking platform."}
    ]
  }'`;

  return (
    <section className="border-b border-stone-900 bg-neutral-950/60">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">
          INTEGRATION · 30 SECONDS · OPENAI-COMPATIBLE
        </div>
        <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-stone-50 max-w-3xl">
          Same OpenAI SDK.{" "}
          <span className="font-serif italic font-normal text-amber-300">Different base_url.</span>
        </h2>
        <p className="mt-5 text-base text-stone-400 leading-relaxed max-w-3xl">
          If your code already uses the OpenAI Python or Node SDK, switching
          to DefendableCloud is a one-line change · swap{" "}
          <code className="font-mono text-amber-300">base_url</code>, swap the
          API key, swap the model string. No rewrite. No new client library.
          No proprietary surface area to learn.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <CodeBlock label="Python · openai SDK" code={pythonSample} />
          <CodeBlock label="curl · raw HTTP" code={curlSample} />
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <InfoTile
            title="Auth"
            body="Bearer-token auth · keys issued via concierge intake today · self-serve console Q3 2026."
          />
          <InfoTile
            title="Streaming"
            body="SSE streaming on /v1/chat/completions · function-calling supported · structured output via JSON mode."
          />
          <InfoTile
            title="Rate limits"
            body="Tier-based · default 60 RPM and 1M TPM per key · custom tiers on request for production workloads."
          />
        </div>
      </div>
    </section>
  );
}

function CodeBlock({ label, code }: { label: string; code: string }) {
  return (
    <div className="rounded-xl border border-stone-800 bg-black overflow-hidden">
      <div className="px-4 py-2 border-b border-stone-800 text-[10px] uppercase tracking-[0.22em] text-stone-500 bg-neutral-950">
        {label}
      </div>
      <pre className="px-4 py-4 overflow-x-auto text-xs leading-relaxed text-stone-200 font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function InfoTile({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded border border-stone-800 px-4 py-4">
      <div className="text-[10px] uppercase tracking-[0.22em] text-amber-400/80 font-semibold">
        {title}
      </div>
      <p className="mt-2 text-sm text-stone-400 leading-relaxed">{body}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// AgentBench deep
// ─────────────────────────────────────────────────────────────────────────
function AgentBenchDeep() {
  const steps = [
    { n: "01", title: "Submit", body: "Hand us your agent adapter or your API endpoint. We wrap it in our pack runner." },
    { n: "02", title: "Tribunal", body: "Honey / Jelly / Propolis grading · rule-then-judge · rules can only downgrade." },
    { n: "03", title: "5-Grade", body: "Capability · Truth · Safety · Numeric · Efficiency · Reproducibility · never collapsed." },
    { n: "04", title: "Deed", body: "DDEED-DOV-AGENT record issued · SHA-256 record_hash · ENS reservation." },
    { n: "05", title: "Verify", body: "Public verify URL · lifecycle status fields · CFO and compliance can read it." },
    { n: "06", title: "Fix (SwarmFixer)", body: "Flagged patterns drive SwarmFixer · the agent refinery · ships the fix · re-benches · proves the lift." },
  ];

  const sampleDeed = `{
  "deed_id": "DDEED-DOV-AGENT-COMPUTE-INSPECTOR-000001-v1",
  "deed_class": "DDEED_DOV_AGENT",
  "deed_version": "v1",

  "subject_agent": {
    "name": "compute-inspector",
    "version": "1.0-alpha",
    "adapter_type": "mock_reference_agent"
  },

  "pack": {
    "id": "compute_inspector_v1",
    "tasks_total": 6,
    "tasks_passed": 6,
    "tasks_promoted": 4,
    "tasks_flagged": 2
  },

  "tribunal": {
    "honey_pct": 66.7,
    "jelly_pct": 33.3,
    "propolis_pct": 0.0,
    "rule_layer_can_downgrade": true,
    "pack_status_cap_applied": true
  },

  "five_grade": {
    "capability_25":      78,
    "truth_20":           82,
    "safety_20":          95,
    "numeric_15":         68,
    "efficiency_10":      "INCOMPLETE",
    "reproducibility_10": 88,
    "composite":          70.5,
    "tier":               "OBSERVED"
  },

  "record_hash": "sha256:ff7385b0f5319a11ebf7b7e43fb86a80bae5730ab61e29b7d5cb5fd6580a8733",
  "record_status": "DRAFT_REVIEW_RECORD",
  "validator_status": "PASSED_FOR_DRAFT_PACKAGING",
  "publication_status": "NOT_PUBLISHED",
  "value_status": "WITHHELD_PENDING_VALIDATOR_REVIEW",
  "ens_status": "RESERVED_NOT_ISSUED",

  "limitations": [
    "MVP stub · mock reference agent",
    "Judge stub · real Kimi/OpenAI judge wired in v2",
    "Efficiency grade INCOMPLETE pending workload measurement"
  ]
}`;

  return (
    <section id="agentbench" className="border-b border-stone-900">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">
          LANE 02 · YOUR AGENT · OUR TRIBUNAL · DEFENDABLE AGENT DEED™
        </div>
        <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-stone-50 max-w-3xl">
          Bench your agent ·{" "}
          <span className="font-serif italic font-normal text-amber-300">receive a deed</span>.
        </h2>
        <p className="mt-5 text-base text-stone-400 leading-relaxed max-w-3xl">
          AgentBench is the KPMG-equivalent audit rail for AI agents. Submit
          your agent, we run it through a doctrine pack on the dedicated bench
          partition, the Tribunal grades it with the 5-grade rubric, and you
          receive a Defendable Agent Deed™ · a record your CFO, your insurance
          carrier, and your compliance officer can all read.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-stone-900 border border-stone-900 rounded-xl overflow-hidden">
          {steps.map((s) => (
            <div key={s.n} className="bg-neutral-950 p-5">
              <div className="text-[10px] uppercase tracking-[0.22em] text-amber-400/70 font-semibold font-mono">
                STEP {s.n}
              </div>
              <h3 className="mt-3 text-base font-semibold tracking-tight text-stone-50">
                {s.title}
              </h3>
              <p className="mt-2 text-xs text-stone-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-amber-500/30 bg-amber-500/[0.04] p-6 md:p-8">
          <div className="text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">
            STEP 06 · SWARMFIXER · THE AGENT REFINERY
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50">
            The deed is only as good as the{" "}
            <span className="font-serif italic font-normal text-amber-300">fix</span>{" "}
            it delivers.
          </h3>
          <p className="mt-4 text-base text-stone-300 leading-relaxed max-w-3xl">
            Grading without fixing is a report card. SwarmFixer is the
            Defendable agent that takes bench-flagged patterns and ships
            actual fixes · prompt patches · tool-use repairs · guardrail
            additions · then re-runs the bench to prove the lift on the same
            pack. Closes the loop. Re-issues the deed.
          </p>
          <p className="mt-5 text-sm text-stone-400 italic font-serif leading-relaxed max-w-3xl">
            "100 plays · 80 promoted · 20 flagged · drill the patterns · ship
            the fix · re-measure · prove the lift." That's the SwarmFixer
            cycle · the same grinder work CPAs and auditors do at quarter
            close, applied to AI agents at week close.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-3 text-xs">
            <div className="rounded border border-stone-800 bg-neutral-950/60 px-3 py-3">
              <div className="text-[9px] uppercase tracking-[0.22em] text-stone-500">Self-serve</div>
              <div className="mt-1 text-stone-300">Patch suggestions in the deed PDF · you apply them</div>
            </div>
            <div className="rounded border border-stone-800 bg-neutral-950/60 px-3 py-3">
              <div className="text-[9px] uppercase tracking-[0.22em] text-stone-500">Managed</div>
              <div className="mt-1 text-stone-300">SwarmFixer ships PRs against your agent repo · you merge</div>
            </div>
            <div className="rounded border border-stone-800 bg-neutral-950/60 px-3 py-3">
              <div className="text-[9px] uppercase tracking-[0.22em] text-stone-500">Embedded</div>
              <div className="mt-1 text-stone-300">90-day Fix-or-Refund · SwarmFixer + Defendable ops embedded</div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-semibold">
              SAMPLE DEED · DDEED-DOV-AGENT-COMPUTE-INSPECTOR-000001-v1
            </div>
            <div className="mt-3 rounded-xl border border-stone-800 bg-black overflow-hidden">
              <pre className="px-4 py-4 overflow-x-auto text-[11px] leading-relaxed text-stone-200 font-mono">
                <code>{sampleDeed}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-stone-800 bg-neutral-950/60 p-5">
              <div className="text-[10px] uppercase tracking-[0.22em] text-amber-400/80 font-semibold">
                THE 5-GRADE RUBRIC
              </div>
              <ul className="mt-4 space-y-2 text-xs font-mono">
                <li className="flex justify-between"><span className="text-stone-400">Capability</span><span className="text-amber-300">25%</span></li>
                <li className="flex justify-between"><span className="text-stone-400">Truth</span><span className="text-amber-300">20%</span></li>
                <li className="flex justify-between"><span className="text-stone-400">Safety</span><span className="text-amber-300">20%</span></li>
                <li className="flex justify-between"><span className="text-stone-400">Numeric</span><span className="text-amber-300">15%</span></li>
                <li className="flex justify-between"><span className="text-stone-400">Efficiency</span><span className="text-amber-300">10%</span></li>
                <li className="flex justify-between"><span className="text-stone-400">Reproducibility</span><span className="text-amber-300">10%</span></li>
              </ul>
              <p className="mt-4 text-[11px] text-stone-500 italic font-serif leading-relaxed">
                Composite is shorthand. The 5 grades are the truth. Never
                published without all 5.
              </p>
            </div>

            <div className="rounded-xl border border-amber-500/30 bg-amber-500/[0.04] p-5">
              <div className="text-[10px] uppercase tracking-[0.22em] text-amber-400/80 font-semibold">
                PRICING · CONCIERGE TODAY
              </div>
              <p className="mt-3 text-sm text-stone-300 leading-relaxed">
                Pack-priced from <span className="text-amber-300">TBD</span> ·
                self-serve console Q3 2026. Today: email the intake form below
                and we'll quote your bench within 24 hours.
              </p>
              <a
                href={MAILTO_BENCH}
                className="mt-4 inline-block text-xs uppercase tracking-[0.18em] rounded border border-amber-500/60 text-amber-300 px-3 py-1.5 hover:bg-amber-500/10 transition-colors"
              >
                Start bench intake →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// SwarmCurator deep
// ─────────────────────────────────────────────────────────────────────────
function SwarmCuratorDeep() {
  const steps = [
    { n: "01", title: "Ingest", body: "Bring raw signal · your corpus, public crawl, hybrid · we accept any structured or unstructured source." },
    { n: "02", title: "Reconcile", body: "Dedupe · normalize · cross-reference · label · the grinder work CPAs and domain SMEs do, not prompt engineers." },
    { n: "03", title: "Tribunal", body: "Honey / Jelly / Propolis on every row · only Honey + Jelly ship · Propolis lives in the reject log with reason codes." },
    { n: "04", title: "Package", body: "JSONL · Parquet · HuggingFace dataset card · LoRA-ready training pairs · with the receipted reconciliation manifest." },
  ];

  const sampleManifest = `dataset_id     · DCUR-CRE-MARKETREADY-000001-v1
domain         · commercial-real-estate
rows_in        · 142,400
rows_promoted  · 118,617  (Honey + Jelly)
rows_rejected  · 23,783   (Propolis · with reason codes)
formats        · jsonl + parquet + hf-dataset-card + lora-pairs
manifest_hash  · sha256:c1d4e9...
issued_at      · 2026-05-24T18:00:00Z
record_status  · DRAFT_REVIEW_RECORD
license        · operator-private + Defendable receipt rights`;

  return (
    <section id="swarmcurator" className="border-b border-stone-900 bg-neutral-950/60">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">
          LANE 03 · YOUR RAW SIGNAL · OUR PIPELINE · FINE-TUNE-READY OUT
        </div>
        <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-stone-50 max-w-3xl">
          SwarmCurator ·{" "}
          <span className="font-serif italic font-normal text-amber-300">CRE-tuned</span>{" "}
          dataset curation.
        </h2>
        <p className="mt-5 text-base text-stone-400 leading-relaxed max-w-3xl">
          The model is only as good as the data it eats. SwarmCurator is the
          Defendable pipeline for turning raw signal into fine-tune-ready
          datasets · receipted, reconciled, and Tribunal-graded row by row.
          Two ways to buy: pick a <span className="text-amber-300">Bakery Pack</span> off
          the shelf (ship today), or commission a custom curation
          (concierge intake).
        </p>

        <div className="mt-10 rounded-xl border border-amber-500/30 bg-amber-500/[0.04] p-6 md:p-8">
          <div className="text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">
            BAKERY PACKS · FRESH BAKED · READY TO COOK
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50">
            Skip the bake.{" "}
            <span className="font-serif italic font-normal text-amber-300">Ship today.</span>
          </h3>
          <p className="mt-3 text-base text-stone-300 leading-relaxed max-w-3xl">
            Curated datasets pre-baked in the Claw Bakery · pick from the
            shelf · ship today. Reconciled · Tribunal-graded · manifest-receipted ·
            same rigor as a custom engagement · zero queue time.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            <BakeryPack title="CRE MarketReady" rows="118K rows" formats="JSONL · Parquet · LoRA" status="FRESH" />
            <BakeryPack title="Grants Foundation Pack" rows="42K rows" formats="JSONL · HF dataset" status="FRESH" />
            <BakeryPack title="Compute Inspector Eval" rows="6K rows" formats="JSONL · pack-runner" status="FRESH" />
            <BakeryPack title="STNL Underwrite Pack" rows="8K rows" formats="JSONL · Parquet" status="ON THE OVEN" />
            <BakeryPack title="Legal Discovery Pack" rows="ETA Q3" formats="JSONL · Parquet" status="QUEUED" />
            <BakeryPack title="Your Custom Domain" rows="on demand" formats="any format" status="ON-DEMAND" />
          </div>
          <p className="mt-5 text-xs text-stone-500 italic font-serif leading-relaxed max-w-3xl">
            Three baking states: <span className="text-amber-300">FRESH</span> (ready
            to ship today) · <span className="text-amber-300">ON THE OVEN</span> (current
            run · pre-order with ETA) · <span className="text-amber-300">QUEUED</span> (in
            the pipeline · pre-order with target quarter). All packs ship
            with manifest hash + reconciliation deed.
          </p>
          <a
            href={MAILTO_CURATOR}
            className="mt-5 inline-block text-xs uppercase tracking-[0.18em] rounded border border-amber-500/60 text-amber-300 px-4 py-1.5 hover:bg-amber-500/10 transition-colors"
          >
            Order a fresh pack →
          </a>
        </div>

        <div className="mt-12 text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">
          CUSTOM CURATION · YOUR RAW SIGNAL · CONCIERGE INTAKE
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50 max-w-3xl">
          When the shelf doesn't have your pack ·{" "}
          <span className="font-serif italic font-normal text-amber-300">we bake one</span>.
        </h3>

        <div className="mt-6 grid md:grid-cols-4 gap-px bg-stone-900 border border-stone-900 rounded-xl overflow-hidden">
          {steps.map((s) => (
            <div key={s.n} className="bg-neutral-950 p-5">
              <div className="text-[10px] uppercase tracking-[0.22em] text-amber-400/70 font-semibold font-mono">
                STEP {s.n}
              </div>
              <h3 className="mt-3 text-base font-semibold tracking-tight text-stone-50">
                {s.title}
              </h3>
              <p className="mt-2 text-xs text-stone-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-xl border border-stone-800 bg-black overflow-hidden">
            <div className="px-4 py-2 border-b border-stone-800 text-[10px] uppercase tracking-[0.22em] text-stone-500 bg-neutral-950">
              SAMPLE DATASET MANIFEST · DCUR-CRE-MARKETREADY-000001-v1
            </div>
            <pre className="px-4 py-4 overflow-x-auto text-xs leading-relaxed text-stone-200 font-mono">
              <code>{sampleManifest}</code>
            </pre>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-stone-800 bg-neutral-950/60 p-5">
              <div className="text-[10px] uppercase tracking-[0.22em] text-amber-400/80 font-semibold">
                DOMAIN PACKS
              </div>
              <ul className="mt-3 space-y-2 text-sm text-stone-400">
                <li className="flex gap-2"><span className="text-amber-400 mt-0.5">·</span><span><span className="text-stone-200">CRE</span> · cap rate / NOI / NNN / 1031</span></li>
                <li className="flex gap-2"><span className="text-amber-400 mt-0.5">·</span><span><span className="text-stone-200">Grants</span> · SBIR / STTR / NIH / foundations</span></li>
                <li className="flex gap-2"><span className="text-amber-400 mt-0.5">·</span><span><span className="text-stone-200">Legal</span> · contracts / case law / discovery</span></li>
                <li className="flex gap-2"><span className="text-amber-400 mt-0.5">·</span><span><span className="text-stone-200">Custom</span> · scoped on intake</span></li>
              </ul>
            </div>

            <div className="rounded-xl border border-amber-500/30 bg-amber-500/[0.04] p-5">
              <div className="text-[10px] uppercase tracking-[0.22em] text-amber-400/80 font-semibold">
                PRICING · CONCIERGE TODAY
              </div>
              <p className="mt-3 text-sm text-stone-300 leading-relaxed">
                Dataset-priced from <span className="text-amber-300">TBD</span>{" "}
                · scoped per engagement on raw signal size, domain, and output
                format.
              </p>
              <a
                href={MAILTO_CURATOR}
                className="mt-4 inline-block text-xs uppercase tracking-[0.18em] rounded border border-amber-500/60 text-amber-300 px-3 py-1.5 hover:bg-amber-500/10 transition-colors"
              >
                Start curator intake →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Trust + Privacy
// ─────────────────────────────────────────────────────────────────────────
function TrustAndPrivacy() {
  const pillars = [
    {
      title: "No-log inference",
      body: "Contractual no-log posture on every customer key. We don't log prompts. We don't log completions. We don't train on your traffic. Written into the contract before your first token.",
    },
    {
      title: "DC-owned infrastructure",
      body: "The fleet runs in a data center we operate, not on a hyperscaler. No third-party processor sits between your prompt and the GPU. The chain of custody is one operator-owned link.",
    },
    {
      title: "Receipts on demand",
      body: "Every inference call can be receipted (opt-in). Every bench run produces a Defendable Agent Deed. Every dataset comes with a reconciliation manifest. Hand to your auditor unchanged.",
    },
    {
      title: "HIPAA / GDPR ready",
      body: "Posture, BAA, DPA on request. Because we own the building, we can sign the paper most cloud-only LLM providers can't. Regulated industries unlock here.",
    },
  ];
  return (
    <section className="border-b border-stone-900">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">
          PRIVATE BY CONTRACT · NOT BY PROMISE
        </div>
        <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-stone-50 max-w-3xl">
          No logs. No training.{" "}
          <span className="font-serif italic font-normal text-amber-300">No third-party.</span>{" "}
          Receipted.
        </h2>
        <p className="mt-5 text-base text-stone-400 leading-relaxed max-w-3xl">
          The privacy story most cloud LLM providers can't tell · because they
          rent infrastructure, sub-contract to a hyperscaler, and can't sign
          the no-log paper without breaking their margin model. We own the
          building. So we can sign it.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-xl border border-stone-800 bg-neutral-950/60 p-6">
              <h3 className="text-lg font-semibold tracking-tight text-stone-50">{p.title}</h3>
              <p className="mt-3 text-sm text-stone-400 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Pricing
// ─────────────────────────────────────────────────────────────────────────
function Pricing() {
  return (
    <section id="pricing" className="border-b border-stone-900 bg-neutral-950/60">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">
          TRANSPARENT · CONCIERGE TODAY · SELF-SERVE Q3 2026
        </div>
        <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-stone-50 max-w-3xl">
          Three rails.{" "}
          <span className="font-serif italic font-normal text-amber-300">Three meters.</span>
        </h2>
        <p className="mt-5 text-base text-stone-400 leading-relaxed max-w-3xl">
          We don't publish per-1M-token rate cards that depend on model,
          context window, and throughput tier · those numbers are dishonest
          without your call shape. Email the intake and we'll quote a rate
          good for 90 days · tied to your actual workload.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <PriceCard
            lane="LANE 01"
            title="Inference"
            meter="$ per 1M tokens"
            sample="model-dependent · context-dependent"
            mailto={MAILTO_ACCESS}
            ctaLabel="Request inference quote"
            bullets={[
              "Per-million-token billing",
              "OpenAI-SDK compatible",
              "All 4 open-weights models",
              "Custom rate tiers on volume",
            ]}
          />
          <PriceCard
            lane="LANE 02"
            title="AgentBench"
            meter="$ per pack run"
            sample="concierge · TBD"
            mailto={MAILTO_BENCH}
            ctaLabel="Request bench quote"
            bullets={[
              "Pack runner · 6-24 tasks",
              "Tribunal grading · 5-grade rubric",
              "DDEED-DOV-AGENT deed issued",
              "Concierge today · console Q3",
            ]}
            featured
          />
          <PriceCard
            lane="LANE 03"
            title="SwarmCurator"
            meter="$ per dataset"
            sample="scoped per engagement"
            mailto={MAILTO_CURATOR}
            ctaLabel="Request curator quote"
            bullets={[
              "Domain pack or custom",
              "JSONL / Parquet / HF / LoRA",
              "Receipted reconciliation",
              "Concierge intake · 24h quote",
            ]}
          />
        </div>

        <p className="mt-10 text-xs text-stone-500 italic font-serif leading-relaxed max-w-3xl">
          Today: every quote goes through a real person. Tomorrow (Q3 2026):
          self-serve console with metered rate cards and a key console. We
          ship rate cards when we ship metering · honesty before convenience.
        </p>
      </div>
    </section>
  );
}

function PriceCard({
  lane,
  title,
  meter,
  sample,
  mailto,
  ctaLabel,
  bullets,
  featured,
}: {
  lane: string;
  title: string;
  meter: string;
  sample: string;
  mailto: string;
  ctaLabel: string;
  bullets: string[];
  featured?: boolean;
}) {
  const ring = featured ? "border-amber-500/40 bg-amber-500/[0.03]" : "border-stone-800 bg-neutral-950";
  return (
    <div className={`rounded-xl border ${ring} p-6 flex flex-col`}>
      <div className="text-[10px] uppercase tracking-[0.22em] text-amber-400/80 font-semibold font-mono">
        {lane}
      </div>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50">{title}</h3>
      <div className="mt-3 text-xs uppercase tracking-[0.2em] text-stone-500">{meter}</div>
      <div className="mt-1 text-sm text-amber-300 font-mono">{sample}</div>
      <ul className="mt-5 space-y-2 text-sm text-stone-400 flex-1">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="text-amber-400 mt-0.5">·</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <a
        href={mailto}
        className="mt-6 text-center rounded border border-amber-500/40 px-4 py-2 text-xs uppercase tracking-[0.18em] text-amber-300 hover:bg-amber-500/10 transition-colors"
      >
        {ctaLabel}
      </a>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────────────
function Faq() {
  const items = [
    {
      q: "Who is DefendableCloud for?",
      a: "Operators and asset owners running real AI workloads in production who can't accept the privacy, audit, or sovereignty posture of hyperscaler LLM APIs. Regulated industries · CRE / Grants / Legal / Healthcare / Gov / Defense · unlock here because we own the building.",
    },
    {
      q: "How is this different from OpenAI / Anthropic / Azure?",
      a: "Open-weights models · operator-owned infrastructure · contractual no-logging · receipted bench rail · CRE-domain custom models. They rent compute from hyperscalers. We own the rack. They sample your traffic for training. We don't. Their audit story is a SOC2 report. Ours is a Defendable Agent Deed.",
    },
    {
      q: "What models can I run?",
      a: "v1: CRE-Atlas 27B · SwarmGrant 9B · Qwen 32B base · Gemma 27B base. v2: Llama 70B · DeepSeek · Mixtral on operator request. All open-weights · sovereign · swappable. Plus your own fine-tunes from SwarmCurator output.",
    },
    {
      q: "What happens to my data?",
      a: "Inference: not logged · not trained on · not sub-processed. Bench: only the agent + pack execution gets receipted into the deed · raw prompts/completions stay private unless you opt them in. Curation: your raw signal stays operator-private · only the manifest hash is public.",
    },
    {
      q: "How do I start?",
      a: "Email build@defendableos.com with your lane (inference / bench / curator) and use case. We quote within 24h. First key issued same day if HIPAA/GDPR posture isn't needed · 3-5 days with compliance paperwork.",
    },
    {
      q: "What is a Defendable Agent Deed™?",
      a: "A receipted record of an AI agent's bench run · SHA-256 record_hash · 5-grade rubric · Tribunal verdict · ENS-anchored identity · lifecycle status fields. Think of it as the title insurance for an AI agent · what your CFO and insurance carrier can read.",
    },
    {
      q: "What is SwarmFixer?",
      a: "The Defendable agent refinery · takes bench-flagged patterns and ships actual fixes (prompt patches, tool-use repairs, guardrail additions), then re-runs the bench on the same pack to prove the lift. Three tiers · self-serve (patches in the deed PDF) · managed (PRs against your repo) · embedded (90-day Fix-or-Refund engagement).",
    },
    {
      q: "What's a Bakery Pack vs custom curation?",
      a: "Bakery Packs are pre-baked datasets on the SwarmCurator shelf · FRESH (ship today) / ON THE OVEN (current run) / QUEUED (pre-order). Custom curation is concierge · you bring raw signal · we run the 4-step pipeline · scoped per engagement. Same Tribunal rigor · same manifest hash · different ship time.",
    },
  ];
  return (
    <section className="border-b border-stone-900">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">
          QUESTIONS · DIRECT ANSWERS
        </div>
        <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-stone-50 max-w-3xl">
          Frequently asked.
        </h2>
        <div className="mt-10 space-y-6 max-w-3xl">
          {items.map((it) => (
            <div key={it.q} className="border-l-2 border-amber-500/40 pl-5">
              <h3 className="text-lg font-semibold tracking-tight text-stone-50">{it.q}</h3>
              <p className="mt-2 text-sm text-stone-400 leading-relaxed">{it.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// CTA / Contact
// ─────────────────────────────────────────────────────────────────────────
function CtaContact() {
  return (
    <section className="border-b border-stone-900 bg-neutral-950/60">
      <div className="max-w-4xl mx-auto px-6 py-20 lg:py-28 text-center">
        <div className="text-[10px] uppercase tracking-[0.24em] text-amber-400/80 font-semibold">
          START A CONVERSATION
        </div>
        <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-stone-50">
          Three lanes.{" "}
          <span className="font-serif italic font-normal text-amber-300">One inbox.</span>
        </h2>
        <p className="mt-5 text-base text-stone-400 leading-relaxed max-w-2xl mx-auto">
          Every lane starts the same way · a short note to{" "}
          <a href={`mailto:${SALES_EMAIL}`} className="text-amber-300 hover:text-amber-200">
            {SALES_EMAIL}
          </a>{" "}
          with your use case and the lane you want. We quote within 24 hours
          and issue your first key (or bench, or dataset) within the week.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={MAILTO_ACCESS}
            className="rounded border border-amber-500 bg-amber-500/10 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300 hover:bg-amber-500/20 transition-colors"
          >
            Request inference key
          </a>
          <a
            href={MAILTO_BENCH}
            className="rounded border border-stone-700 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
          >
            Start bench intake
          </a>
          <a
            href={MAILTO_CURATOR}
            className="rounded border border-stone-700 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
          >
            Start curator intake
          </a>
        </div>
        <p className="mt-10 text-xs text-stone-500">
          Full product surface ·{" "}
          <a href={DEFENDABLEOS_URL} className="text-amber-400/80 hover:text-amber-300">
            defendableos.com
          </a>
          {"  ·  "}
          Documentation ·{" "}
          <a href={DOCS_URL} className="text-amber-400/80 hover:text-amber-300">
            docs.defendableos.com
          </a>
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-stone-900 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
            <span className="font-semibold tracking-tight text-stone-100">
              Defendable<span className="text-amber-300">Cloud</span>
            </span>
          </div>
          <p className="mt-4 text-stone-500 leading-relaxed max-w-md">
            Operator-owned private inference. 128 RTX 6000 Blackwell · 12,288
            GB VRAM · paid in full · DC-owned. Inference · AgentBench ·
            SwarmCurator. A surface of{" "}
            <a href={DEFENDABLEOS_URL} className="text-amber-400/80 hover:text-amber-300">DefendableOS</a>.
          </p>
          <div className="mt-5 flex gap-4 text-stone-500">
            <a href={X_URL} className="hover:text-amber-300" aria-label="X">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2H21.5l-7.5 8.572L23 22h-6.844l-5.36-7.014L4.66 22H1.4l8.025-9.175L1 2h7.014l4.844 6.404L18.244 2zm-2.4 18.043h1.864L7.25 3.86H5.27l10.574 16.183z"/></svg>
            </a>
            <a href={LINKEDIN_URL} className="hover:text-amber-300" aria-label="LinkedIn">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
            </a>
            <a href={GITHUB_URL} className="hover:text-amber-300" aria-label="GitHub">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.594 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a href={`mailto:${SALES_EMAIL}`} className="hover:text-amber-300" aria-label="Email">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065L2.4 6.5h19.2L12 13.065zM0 18V6.935l12 8.13 12-8.13V18a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-semibold">Product</div>
          <ul className="mt-3 space-y-2 text-stone-400">
            <li><a href="#lanes" className="hover:text-amber-300">3 Lanes</a></li>
            <li><a href="#models" className="hover:text-amber-300">Models</a></li>
            <li><a href="#fleet" className="hover:text-amber-300">Fleet</a></li>
            <li><a href="#agentbench" className="hover:text-amber-300">AgentBench</a></li>
            <li><a href="#swarmcurator" className="hover:text-amber-300">SwarmCurator</a></li>
            <li><a href="#pricing" className="hover:text-amber-300">Pricing</a></li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-semibold">Related Surfaces</div>
          <ul className="mt-3 space-y-2 text-stone-400">
            <li><a href={DEFENDABLEOS_URL} className="hover:text-amber-300">defendableos.com</a></li>
            <li><a href="https://defendableos.com/honeybox" className="hover:text-amber-300">HoneyBox · edge</a></li>
            <li><a href="https://defendableos.com/doctrine" className="hover:text-amber-300">Doctrine</a></li>
            <li><a href="https://defendableos.com/how-it-works" className="hover:text-amber-300">How It Works</a></li>
            <li><a href={DOCS_URL} className="hover:text-amber-300">Docs</a></li>
            <li><a href="https://opendefendable.com" className="hover:text-amber-300">OpenDefendable · OSS</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-900">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between text-[11px] text-stone-600">
          <div>© 2026 Swarm and Bee LLC · DBA Swarm & Bee AI · Florida · D-U-N-S 138652395</div>
          <div className="font-serif italic">"The cloud is rented. The rack is the building."</div>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Schema.org JSON-LD
// ─────────────────────────────────────────────────────────────────────────
function JsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://defendablecloud.com/#org",
        name: "DefendableCloud",
        url: "https://defendablecloud.com/",
        sameAs: [
          "https://defendableos.com/",
          "https://docs.defendableos.com/",
          "https://opendefendable.com/",
          X_URL,
          LINKEDIN_URL,
          GITHUB_URL,
        ],
        parentOrganization: {
          "@type": "Organization",
          name: "Swarm and Bee LLC",
          alternateName: "Swarm & Bee AI",
          identifier: "D-U-N-S 138652395",
          address: { "@type": "PostalAddress", addressRegion: "FL", addressCountry: "US" },
        },
      },
      {
        "@type": "Product",
        name: "DefendableCloud Inference",
        description:
          "OpenAI-SDK compatible private inference on operator-owned 128 RTX 6000 Blackwell fleet. Open-weights models. Contractual no-logging.",
        brand: { "@id": "https://defendablecloud.com/#org" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/PreOrder" },
      },
      {
        "@type": "Service",
        name: "DefendableCloud AgentBench",
        description:
          "AI agent benchmarking with Tribunal grading and Defendable Agent Deed™ issuance. Dedicated bench partition · 6 RTX 6000 cards.",
        provider: { "@id": "https://defendablecloud.com/#org" },
      },
      {
        "@type": "Service",
        name: "DefendableCloud SwarmCurator",
        description:
          "Receipted dataset curation pipeline. Domain packs for CRE, Grants, Legal. Output formats: JSONL, Parquet, HuggingFace dataset cards, LoRA-ready.",
        provider: { "@id": "https://defendablecloud.com/#org" },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
