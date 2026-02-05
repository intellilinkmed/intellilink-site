"use client";

import React from "react";
import { ShieldCheck, Network, Building2, University, Landmark, Server, FileText, ArrowRight, CheckCircle2 } from "lucide-react";

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
    {children}
  </span>
);

const Section = ({ id, kicker, title, subtitle, children }) => (
  <section id={id} className="py-14 sm:py-16">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="max-w-3xl">
        {kicker && (
          <p className="text-xs font-semibold tracking-widest text-amber-200/80 uppercase">
            {kicker}
          </p>
        )}
        {title && (
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/75">
            {subtitle}
          </p>
        )}
      </div>
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

const Card = ({ children }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 shadow-[0_1px_0_rgba(255,255,255,0.06)]">
    {children}
  </div>
);

export default function IntellilinkLanding() {
  const proofDocs = [
    {
      title: "Technical Proof Brief",
      desc: "Field validation summary of the control-plane architecture.",
      href: "#proof",
    },
    {
      title: "Field Case Study",
      desc: "Anonymized ISP PoP validation (enterprise-ready delivery model).",
      href: "#proof",
    },
    {
      title: "Executive Proof Summary",
      desc: "Two-page executive overview for decision-makers.",
      href: "#proof",
    },
    {
      title: "Regulator Brief",
      desc: "Architecture-level governance framing for regulators.",
      href: "#proof",
    },
  ];

  const audiences = [
    { icon: Building2, title: "ISPs", desc: "New premium enterprise satellite offering with governance." },
    { icon: Landmark, title: "Regulators", desc: "Visibility and accountable upstream model restored." },
    { icon: University, title: "Universities", desc: "Reliable connectivity without direct-to-LAN exposure." },
    { icon: Server, title: "Data Centers", desc: "Resilience for critical services and interconnect." },
    { icon: ShieldCheck, title: "Banks", desc: "Risk-reduced satellite adoption, audit-ready posture." },
    { icon: Network, title: "Government", desc: "Sovereign-ready connectivity governance layer." },
  ];

  const steps = [
    {
      title: "Starlink Access",
      desc: "Starlink remains the physical underlay connectivity.",
    },
    {
      title: "Compliance Gateway",
      desc: "A lightweight agent creates an enterprise boundary and tunnel.",
    },
    {
      title: "Secure Tunnel",
      desc: "Traffic is anchored into a local governance PoP.",
    },
    {
      title: "ISP Governance PoP",
      desc: "Policy, routing, NAT, and audit-ready control points.",
    },
  ];

  const features = [
    {
      title: "Accountable Upstream Boundary",
      desc: "Restores a familiar ISP delivery model for regulated enterprises.",
    },
    {
      title: "Policy Insertion Point",
      desc: "Central place to apply security baselines, routing, and publication controls.",
    },
    {
      title: "Performance Preserved",
      desc: "Governance without breaking Starlink’s resilience and user experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07132b] text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07132b]/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <ShieldCheck className="h-5 w-5 text-amber-200/90" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-none">Intellilink Media LLC</p>
              <p className="text-[11px] text-white/65">Intellilink Compliance Gateway</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/75">
            <a className="hover:text-white" href="#problem">Problem</a>
            <a className="hover:text-white" href="#solution">Solution</a>
            <a className="hover:text-white" href="#proof">Proof</a>
            <a className="hover:text-white" href="#pilot">Pilot</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
            >
              Request a Pilot
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-200/10 blur-3xl" />
          <div className="absolute -bottom-52 right-[-120px] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <Pill>High-trust enterprise architecture</Pill>
              <Pill>Field validated control plane</Pill>
              <Pill>Vendor-neutral governance layer</Pill>
            </div>

            <h1 className="mt-5 text-3xl sm:text-5xl font-semibold leading-tight">
              Enterprise Satellite Internet — the way regulators and banks understand it.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/75 leading-relaxed">
              <span className="text-white">Starlink is connectivity.</span> Intellilink is trust.
              We add a compliance gateway layer that restores governance and accountability while
              preserving satellite performance.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-200 text-[#07132b] px-5 py-3 text-sm font-semibold hover:bg-amber-100"
              >
                Request a Pilot <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#proof"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                Download Proof Pack <FileText className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {features.map((f) => (
                <Card key={f.title}>
                  <p className="text-sm font-semibold">{f.title}</p>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{f.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <Section
        id="problem"
        kicker="Context"
        title="Satellite adoption is rising — governance is lagging"
        subtitle="Direct-to-LAN satellite deployments can bypass traditional ISP delivery structures. Regulated enterprises require an accountable upstream boundary, audit-friendly controls, and predictable service publication."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <p className="text-sm font-semibold">Enterprise risk</p>
            <p className="mt-2 text-sm text-white/70">
              Banks, universities, and government agencies hesitate to adopt satellite without
              governance guardrails.
            </p>
          </Card>
          <Card>
            <p className="text-sm font-semibold">Regulatory concern</p>
            <p className="mt-2 text-sm text-white/70">
              National frameworks assume terrestrial ISPs as control points. Satellite needs an
              equivalent insertion layer.
            </p>
          </Card>
          <Card>
            <p className="text-sm font-semibold">ISP displacement risk</p>
            <p className="mt-2 text-sm text-white/70">
              Enterprise satellite networks may vertically integrate terminals, backbone and
              gateways — making local ISPs optional.
            </p>
          </Card>
        </div>
      </Section>

      {/* Solution */}
      <Section
        id="solution"
        kicker="Solution"
        title="A governance layer that restores the ISP model"
        subtitle="Intellilink introduces a compliance gateway and anchors satellite traffic into a local ISP Governance PoP. This preserves satellite resilience while restoring accountable control points."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card>
            <p className="text-sm font-semibold">How it works</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {steps.map((s, idx) => (
                <div key={s.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs text-white/60">Step {idx + 1}</p>
                  <p className="mt-1 text-sm font-semibold">{s.title}</p>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs text-white/60">Reference flow</p>
              <p className="mt-1 text-sm font-semibold">Starlink → Gateway → Tunnel → ISP PoP → Internet</p>
            </div>
          </Card>

          <Card>
            <p className="text-sm font-semibold">What the PoP enables</p>
            <ul className="mt-4 space-y-3">
              {[
                "Accountable upstream boundary for enterprises",
                "Central routing and NAT policy",
                "Controlled inbound publication for services",
                "Audit-friendly documentation and reporting",
                "Optional observability and automation controllers",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-amber-200/80 mt-[2px]" />
                  <p className="text-sm text-white/75 leading-relaxed">{x}</p>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl border border-amber-200/20 bg-amber-200/5 p-4">
              <p className="text-sm text-white/80">
                <span className="font-semibold text-white">Positioning:</span> Intellilink is not a retail ISP.
                Intellilink provides a governance layer that enables compliant delivery of satellite connectivity.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Proof */}
      <Section
        id="proof"
        kicker="Proof"
        title="Field-validated control plane"
        subtitle="These documents communicate the architecture and validation outcomes to technical, executive, and regulatory stakeholders. Replace links with your hosted PDFs when you deploy."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {proofDocs.map((d) => (
            <Card key={d.title}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">{d.title}</p>
                  <p className="mt-2 text-sm text-white/70">{d.desc}</p>
                </div>
                <a
                  href={d.href}
                  className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white/85 hover:bg-white/10"
                >
                  View <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <p className="text-sm font-semibold">Proof Pack (recommended)</p>
          <p className="mt-2 text-sm text-white/70">
            Upload your PDFs (Proof Brief, Case Study, Executive Summary, Regulator Brief) and link them here.
            This page becomes your credibility hub for ISPs, regulators, and enterprise IT.
          </p>
        </div>
      </Section>

      {/* Who it's for */}
      <Section
        id="audience"
        kicker="Stakeholders"
        title="Designed for regulated connectivity environments"
        subtitle="A common governance layer for enterprises and national telecom ecosystems."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {audiences.map((a) => (
            <Card key={a.title}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                  <a.icon className="h-5 w-5 text-amber-200/85" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{a.title}</p>
                  <p className="mt-1 text-sm text-white/70">{a.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Pilot */}
      <Section
        id="pilot"
        kicker="Pilot"
        title="A low-risk technical sandbox"
        subtitle="Start small. Validate quickly. Produce audit-ready outputs for stakeholders."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card>
            <p className="text-sm font-semibold">Scope</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {["1 enterprise site", "1 satellite terminal", "1 gateway device", "1 PoP anchor per ISP"].map(
                (x) => (
                  <li key={x} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-200/80 mt-[2px]" />
                    <span>{x}</span>
                  </li>
                )
              )}
            </ul>
          </Card>
          <Card>
            <p className="text-sm font-semibold">Success criteria</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {["Traffic anchored via ISP PoP", "Browsing and apps functional", "Performance preserved", "Technical report produced"].map(
                (x) => (
                  <li key={x} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-200/80 mt-[2px]" />
                    <span>{x}</span>
                  </li>
                )
              )}
            </ul>
          </Card>
          <Card>
            <p className="text-sm font-semibold">Outputs</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {["Pilot report", "Architecture diagrams", "Operational checklist", "Regulator observation notes"].map(
                (x) => (
                  <li key={x} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-200/80 mt-[2px]" />
                    <span>{x}</span>
                  </li>
                )
              )}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        kicker="Contact"
        title="Request a pilot discussion"
        subtitle="Use this form as a placeholder. When you deploy, connect it to Formspree, Netlify Forms, or your CRM."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card>
            <form className="space-y-3">
              <div>
                <label className="text-xs text-white/70">Full name</label>
                <input
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-amber-200/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-white/70">Organization</label>
                <input
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-amber-200/40"
                  placeholder="Company / Agency"
                />
              </div>
              <div>
                <label className="text-xs text-white/70">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-amber-200/40"
                  placeholder="name@organization.com"
                />
              </div>
              <div>
                <label className="text-xs text-white/70">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-amber-200/40"
                  placeholder="Briefly describe your pilot interest"
                />
              </div>
              <button
                type="button"
                className="w-full rounded-xl bg-amber-200 px-5 py-3 text-sm font-semibold text-[#07132b] hover:bg-amber-100"
              >
                Submit
              </button>
              <p className="text-xs text-white/55">
                Note: This form is a visual placeholder in this template.
              </p>
            </form>
          </Card>

          <Card>
            <p className="text-sm font-semibold">Preferred contacts</p>
            <p className="mt-2 text-sm text-white/70">
              For partnerships, pilots, and regulator/ISP workshops:
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/75">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs text-white/60">Email</p>
                <p className="mt-1 font-semibold">yourname@intellilink.example</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs text-white/60">Phone / WhatsApp</p>
                <p className="mt-1 font-semibold">+260 XXX XXX XXX</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs text-white/60">LinkedIn</p>
                <p className="mt-1 font-semibold">linkedin.com/in/yourprofile</p>
              </div>
            </div>
            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs text-white/60">Note</p>
              <p className="mt-2 text-sm text-white/70">
                Replace the placeholder contact fields and attach your Proof Pack PDFs.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#061028]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold">Intellilink Media LLC</p>
            <p className="text-xs text-white/60 mt-1">Governance layer for enterprise satellite connectivity</p>
          </div>
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Intellilink Media LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

