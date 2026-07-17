import { useEffect, useState } from "react";
import {
  ArrowRight, Mail, MapPin, Sparkles, Bot, Workflow, Phone, MessageSquare,
  LayoutDashboard, Plug, Database, Server, Github, Linkedin, Twitter,
  Send, ExternalLink, Check, ChevronDown, Menu, X,
} from "lucide-react";
import headshot from "@/assets/mikey-headshot.png";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";
import { Reveal } from "@/components/portfolio/Reveal";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
];

const SERVICES = [
  { icon: Workflow, title: "AI Automation & Workflow", desc: "Custom n8n, Make.com, Zapier workflows, API integrations, database sync, CRM automation.", outcome: "Save 10–40+ hours/week." },
  { icon: Bot, title: "AI Chatbot Development", desc: "Website, WhatsApp, Telegram, Discord, and Slack bots trained on your knowledge base.", outcome: "24/7 support, faster responses." },
  { icon: Phone, title: "AI Voice Agents", desc: "Human-like voice assistants for inbound calls, appointment booking, and lead qualification.", outcome: "Never miss a call again." },
  { icon: MessageSquare, title: "WhatsApp Business Automation", desc: "Full automation using official WhatsApp APIs and AI for sales, support, and order flows.", outcome: "Scale conversations 10x." },
  { icon: LayoutDashboard, title: "Custom AI SaaS", desc: "Dashboards, internal tools, customer portals, and AI copilots built end-to-end.", outcome: "Ship your product faster." },
  { icon: Plug, title: "API Integration & Backend", desc: "Payment gateways, CRMs, OpenAI APIs, databases, and secure auth systems.", outcome: "Reliable, scalable backends." },
  { icon: Database, title: "Database Design & Optimization", desc: "PostgreSQL, SQL tuning, migrations, and schema architecture that scales.", outcome: "Queries that fly." },
  { icon: Server, title: "AI Infrastructure & DevOps", desc: "Docker, Kubernetes, CI/CD, VPS deployment, and production monitoring.", outcome: "Deploy with confidence." },
];

const PROCESS = [
  { n: "01", t: "Discovery", d: "Understand your business, goals, and pain points." },
  { n: "02", t: "Solution Design", d: "Map workflows, architecture, and integrations." },
  { n: "03", t: "Development", d: "Build automation, backend, and AI components." },
  { n: "04", t: "Testing", d: "Validate, optimize, and ensure reliability." },
  { n: "05", t: "Deployment", d: "Deploy to cloud or client infrastructure." },
  { n: "06", t: "Documentation", d: "Clear setup instructions and walkthroughs." },
  { n: "07", t: "Support", d: "Monitor, optimize, and extend as needed." },
];

const PROJECTS = [
  { title: "AI WhatsApp Customer Support Platform", stack: ["WhatsApp Business API", "n8n", "OpenAI", "PostgreSQL"], desc: "End-to-end AI support system handling thousands of conversations with human handoff." },
  { title: "AI Voice Receptionist", stack: ["Retell AI", "Telnyx", "OpenAI", "n8n"], desc: "Voice agent that answers calls, books appointments, and qualifies leads 24/7." },
  { title: "Business Workflow Automation", stack: ["n8n", "HubSpot", "Apify", "Airtable"], desc: "Multi-system automation replacing 30+ hours/week of manual data entry." },
  { title: "PostgreSQL Optimization", stack: ["PostgreSQL", "SQL", "Indexing"], desc: "Reduced query times by 20x through schema redesign and strategic indexing." },
  { title: "OpenClaw Multi-Agent Setup", stack: ["OpenClaw", "Claude Code", "Hermes Agent", "Docker"], desc: "Production multi-agent orchestration for autonomous coding workflows." },
  { title: "MT5-Copier", stack: ["Open Source", "MT5", "Trade Sync"], desc: "Open-source MT5 trade copier tool.", link: "https://github.com/Mikeyaruto/MT5-Copier" },
];

const STACK: Record<string, string[]> = {
  "AI & LLMs": ["OpenAI", "Claude", "Google Gemini", "Anthropic API", "RAG", "MCP"],
  "Automation": ["n8n", "Make.com", "Zapier"],
  "AI Voice": ["Retell AI", "Vapi AI", "Telnyx", "Twilio"],
  "Messaging": ["WhatsApp Business API", "WATI", "Gupshup", "Zoko", "360dialog"],
  "Backend": ["Node.js", "Python", "FastAPI", "Express.js", "REST", "GraphQL"],
  "Frontend": ["React", "Next.js", "Astro", "TypeScript"],
  "Databases": ["PostgreSQL", "Supabase", "MySQL", "MongoDB", "SQLite"],
  "DevOps": ["Docker", "Kubernetes", "GitHub Actions", "AWS", "DigitalOcean", "VPS"],
  "Integrations": ["HubSpot", "Airtable", "Stripe", "Paystack", "Flutterwave", "Apify"],
  "AI Dev Platforms": ["Cursor", "Lovable", "Bolt.new", "Replit", "OpenClaw", "Claude Code"],
};

const FAQS = [
  { q: "How do you manage remote client projects?", a: "Clear async communication via Slack, WhatsApp, or email, weekly progress updates, shared project boards, and scheduled calls at key milestones. Every client gets full visibility into what's shipping and when." },
  { q: "Do you provide post-launch support?", a: "Yes. Every project includes a support window after launch, plus optional monthly retainers for monitoring, optimizations, and feature extensions." },
  { q: "What's your typical project timeline?", a: "Small automations: 1–2 weeks. Chatbots and voice agents: 2–4 weeks. Custom SaaS platforms: 6–12+ weeks. I'll give a firm timeline after the discovery call." },
  { q: "How do you ensure code quality?", a: "Type-safe code, code reviews, automated tests where they matter, staging environments, and monitoring in production. Nothing ships without validation." },
  { q: "What's your pricing structure?", a: "Fixed-price for well-scoped projects, hourly for ongoing work, and monthly retainers for continuous support. Pricing depends on scope — reach out for a quote." },
];

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav open={open} setOpen={setOpen} />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio_ />
        <Process />
        <WhyMe />
        <TechStack />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Nav({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-display text-xl font-bold tracking-tight">
          Mikey<span className="text-primary">.</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#contact" className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90 md:inline-flex">
            Contact
          </a>
          <button onClick={() => setOpen(!open)} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden" aria-label="Menu">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm hover:bg-accent">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 md:grid-cols-[1.15fr_1fr] md:gap-16 md:pt-24">
        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for New Projects
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              I Build <span className="text-gradient">AI Systems</span> That Actually Run in Production.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              AI automation, chatbots, voice agents, and custom AI SaaS platforms — engineered in Lagos, deployed for businesses worldwide.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90">
                Start a Project <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-accent">
                See My Work
              </a>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <a href="mailto:egbeneyemichaelo@gmail.com" className="inline-flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4" /> egbeneyemichaelo@gmail.com
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Lagos, Nigeria
              </span>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120} className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 to-primary-glow/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-glow">
              <img
                src={headshot}
                alt="Egbeneye Michael portrait"
                className="h-[420px] w-[320px] object-cover md:h-[500px] md:w-[380px]"
              />
              <div className="absolute bottom-4 left-4 rounded-2xl border border-white/10 bg-black/50 px-4 py-2 text-white backdrop-blur">
                <div className="text-xs opacity-80">Egbeneye Michael</div>
                <div className="text-sm font-semibold">AI Automation Engineer</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal>
        <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent-foreground">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={140}>
          <p className="mt-4 text-muted-foreground">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading eyebrow="About" title="Building AI that transforms how businesses operate." />
        <Reveal delay={120}>
          <p className="mt-10 text-center text-lg leading-relaxed text-muted-foreground">
            I'm <span className="font-semibold text-foreground">Egbeneye Michael</span>, an AI automation engineer and full-stack developer who helps startups, agencies, and growing businesses replace repetitive manual work with intelligent, production-ready AI systems. I specialize in combining artificial intelligence, workflow automation, backend engineering, and cloud infrastructure into solutions that don't just automate tasks — they transform how businesses operate.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-center text-lg font-medium text-foreground">
            My mission: build reliable AI solutions that deliver measurable business results, not just impressive demos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-border bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Services" title="What I Build" sub="End-to-end AI systems, from strategy to deployment and support." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 40}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> {s.outcome}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio_() {
  return (
    <section id="portfolio" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Portfolio" title="Featured Projects" sub="A selection of AI systems and platforms I've shipped." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border transition group-hover:border-primary group-hover:text-primary">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full bg-accent px-2.5 py-1 text-xs text-accent-foreground">{t}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="border-t border-border bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Process" title="How We Work Together" sub="A proven 7-step process from first call to long-term support." />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 50}>
              <div className="relative h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="font-display text-3xl font-bold text-primary/30">{p.n}</div>
                <h3 className="mt-2 text-lg font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMe() {
  const items = [
    { t: "Engineering Excellence", d: "Strong backend, database, and API-first development. Code that lasts." },
    { t: "On-Time Delivery", d: "Clear milestones, transparent progress, no ghosting. Ever." },
    { t: "ROI-Focused", d: "Systems designed to save time, cut costs, and drive measurable value." },
  ];
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Why Work With Me" title="Built for Results, Not Just Demos" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{it.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section className="border-t border-border bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Tech Stack" title="Tools I Work With" sub="Battle-tested tools across the AI, automation, and web engineering stack." />
        <div className="mt-14 space-y-6">
          {Object.entries(STACK).map(([group, tools], i) => (
            <Reveal key={group} delay={i * 30}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">{group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tools.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <Reveal key={f.q} delay={i * 40}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-medium">{f.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { icon: Mail, label: "Email", value: "egbeneyemichaelo@gmail.com", href: "mailto:egbeneyemichaelo@gmail.com" },
    { icon: MessageSquare, label: "WhatsApp", value: "+234 907 366 1738", href: "https://wa.me/2349073661738" },
    { icon: Send, label: "Telegram", value: "@michaelpel", href: "https://t.me/michaelpel" },
    { icon: Twitter, label: "X / Twitter", value: "@mikeyaruto09", href: "https://x.com/mikeyaruto09" },
    { icon: Linkedin, label: "LinkedIn", value: "michael-egbeneye", href: "https://ng.linkedin.com/in/michael-egbeneye-294623334" },
    { icon: Github, label: "Upwork", value: "upwork.com/freelancers/michaele79", href: "https://www.upwork.com/freelancers/michaele79" },
  ];
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-24">
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading eyebrow="Contact" title="Let's Build Something Real" sub="Reach out through any channel — I typically respond within 24 hours." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={i * 40}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <l.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{l.label}</div>
                  <div className="truncate text-sm font-medium">{l.value}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const socials = [
    { icon: Mail, href: "mailto:egbeneyemichaelo@gmail.com" },
    { icon: MessageSquare, href: "https://wa.me/2349073661738" },
    { icon: Send, href: "https://t.me/michaelpel" },
    { icon: Twitter, href: "https://x.com/mikeyaruto09" },
    { icon: Linkedin, href: "https://ng.linkedin.com/in/michael-egbeneye-294623334" },
    { icon: Github, href: "https://github.com/Mikeyaruto" },
  ];
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="font-display text-xl font-bold">Mikey<span className="text-primary">.</span></div>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              AI automation engineer & full-stack developer building production AI systems from Lagos, Nigeria.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#portfolio" className="hover:text-foreground">Portfolio</a>
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-6 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">© 2026 Egbeneye Michael. All rights reserved.</p>
          <div className="flex gap-2">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:border-primary hover:text-primary"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
