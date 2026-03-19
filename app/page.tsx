"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Network,
  Building2,
  University,
  Landmark,
  Server,
  FileText,
  ArrowRight,
  CheckCircle2,
  Globe,
} from "lucide-react";
import type { ReactNode } from "react";

const Pill = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
    {children}
  </span>
);

type SectionProps = {
  id?: string;
  kicker?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

const Section = ({ id, kicker, title, subtitle, children }: SectionProps) => (
  <section id={id} className="py-14 sm:py-16">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="max-w-3xl">
        {kicker && (
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-200/80">
            {kicker}
          </p>
        )}
        {title && (
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

const Card = ({ children }: { children: ReactNode }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_1px_0_rgba(255,255,255,0.06)] sm:p-6">
    {children}
  </div>
);

type ProofDoc = {
  title: string;
  desc: string;
  htmlHref: string;
  pdfHref: string;
};

export default function IntellilinkLanding() {
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const proofDocs: ProofDoc[] = [
    {
      title: "Technical Proof Brief",
      desc: "Field validation summary of the control-plane architecture.",
      htmlHref: "/docs/technical-proof-brief.html",
      pdfHref: "/docs/technical-proof-brief.pdf",
    },
    {
      title: "Field Case Study",
      desc: "Anonymized ISP PoP validation for enterprise-ready delivery.",
      htmlHref: "/docs/field-case-study.html",
      pdfHref: "/docs/field-case-study.pdf",
    },
    {
      title: "Executive Proof Summary",
      desc: "Executive overview for decision-makers and strategic stakeholders.",
      htmlHref: "/docs/executive-proof-summary.html",
      pdfHref: "/docs/executive-proof-summary.pdf",
    },
    {
      title: "Regulator Brief",
      desc: "Architecture-level governance framing for regulators and policymakers.",
      htmlHref: "/docs/regulator-brief.html",
      pdfHref: "/docs/regulator-brief.pdf",
    },
  ];

  const audiences = [
    {
      icon: Building2,
      title: "ISPs",
      desc: "A new premium enterprise satellite offering with governance and control.",
    },
    {
      icon: Landmark,
      title: "Regulators",
      desc: "Visibility and accountable upstream structure restored.",
    },
    {
      icon: University,
      title: "Universities",
      desc: "Reliable connectivity without unmanaged direct-to-LAN exposure.",
    },
    {
      icon: Server,
      title: "Data Centers",
      desc: "Added resilience for critical services and interconnect.",
    },
    {
      icon: ShieldCheck,
      title: "Banks",
      desc: "Risk-reduced satellite adoption with audit-ready posture.",
    },
    {
      icon: Network,
      title: "Government",
      desc: "Sovereign-ready connectivity governance layer.",
    },
  ];

  const trustNodes = [
    {
      title: "Enterprise Site",
      desc: "User network and applications",
    },
    {
      title: "Intellilink Gateway",
      desc: "Compliance boundary and secure tunnel",
      highlight: true,
    },
    {
      title: "ISP Governance PoP",
      desc: "Policy, routing, NAT, and audit controls",
    },
    {
      title: "Internet",
      desc: "Published through accountable upstream delivery",
    },
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
      desc: "Policy, routing, NAT, and audit-ready control points are applied.",
    },
  ];

  const features = [
    {
      title: "Accountable Upstream Boundary",
      desc: "Restores a familiar ISP delivery model for regulated enterprises.",
    },
    {
      title: "Policy Insertion Point",
      desc: "A central place to apply security baselines, routing, and publication controls.",
    },
    {
      title: "Performance Preserved",
      desc: "Governance without breaking Starlink’s resilience and user experience.",
    },
  ];  

  return (
    <div className="min-h-screen bg-[#07132b] text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07132b]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/intellilink-gateway-logo.png"
              alt="Intellilink Gateway logo"
              width={160}
              height={48}
              priority
              className="h-10 w-auto sm:h-12"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold leading-none">
                Intellilink Media LLC
              </p>
              <p className="mt-1 text-[11px] text-white/65">
                Intellilink Gateway™
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
            <a className="hover:text-white" href="#problem">
              Problem
            </a>
            <a className="hover:text-white" href="#solution">
              Solution
            </a>
            <a className="hover:text-white" href="#proof">
              Proof Pack
            </a>
            <a className="hover:text-white" href="#pilot">
              Pilot
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
          >
            Request a Pilot
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-[-10rem] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-200/10 blur-3xl" />
          <div className="absolute bottom-[-13rem] right-[-7rem] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-4xl">
            <div className="mb-6">
              <Image
                src="/intellilink-gateway-logo.png"
                alt="Intellilink Gateway"
                width={420}
                height={120}
                priority
                className="h-auto w-[260px] sm:w-[360px]"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Pill>High-trust enterprise architecture</Pill>
              <Pill>Field-validated control plane</Pill>
              <Pill>Vendor-neutral governance layer</Pill>
            </div>

            <h1 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
              Enterprise satellite internet... the way regulators and banks
              understand it.
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
              <span className="text-white">Starlink is connectivity.</span>{" "}
              Intellilink is trust. We add a compliance gateway layer that
              restores governance and accountability while preserving satellite
              performance.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-200 px-5 py-3 text-sm font-semibold text-[#07132b] hover:bg-amber-100"
              >
                Request a Pilot <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#proof"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                View Proof Pack <FileText className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {features.map((f) => (
                <Card key={f.title}>
                  <p className="text-sm font-semibold">{f.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {f.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section
        id="architecture"
        kicker="Trust Architecture"
        title="How Intellilink restores trust to satellite delivery"
        subtitle="A simple governance path that preserves satellite resilience while restoring the delivery model enterprises, ISPs, and regulators recognize."
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-3">
            {trustNodes.map((node, idx) => (
              <div key={node.title} className="relative">
                <div
                  className={`h-full rounded-2xl border p-5 ${
                    node.highlight
                      ? "border-amber-200/30 bg-amber-200/10 shadow-[0_0_0_1px_rgba(253,230,138,0.08)]"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <p
                    className={`text-sm font-semibold ${
                      node.highlight ? "text-amber-100" : "text-white"
                    }`}
                  >
                    {node.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {node.desc}
                  </p>
                </div>
      
                {idx < trustNodes.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2 items-center">
                    <ArrowRight className="h-5 w-5 text-amber-200/70" />
                  </div>
                )}
              </div>
            ))}
          </div>
      
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Accountable upstream boundary",
              "Policy insertion point",
              "Audit-ready control model",
              "Satellite resilience preserved",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Problem */}
      <Section
        id="problem"
        kicker="Context"
        title="Satellite adoption is rising — governance is lagging"
        subtitle="Direct-to-LAN satellite deployments can bypass traditional ISP delivery structures. Regulated enterprises require an accountable upstream boundary, audit-friendly controls, and predictable service publication."
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <p className="text-sm font-semibold">Enterprise risk</p>
            <p className="mt-2 text-sm text-white/70">
              Banks, universities, and government agencies hesitate to adopt
              satellite without governance guardrails.
            </p>
          </Card>
          <Card>
            <p className="text-sm font-semibold">Regulatory concern</p>
            <p className="mt-2 text-sm text-white/70">
              National frameworks assume terrestrial ISPs as control points.
              Satellite needs an equivalent insertion layer.
            </p>
          </Card>
          <Card>
            <p className="text-sm font-semibold">ISP displacement risk</p>
            <p className="mt-2 text-sm text-white/70">
              Enterprise satellite networks may vertically integrate terminals,
              backbone, and gateways — making local ISPs optional.
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
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card>
            <p className="text-sm font-semibold">How it works</p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {steps.map((s, idx) => (
                <div
                  key={s.title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="text-xs text-white/60">Step {idx + 1}</p>
                  <p className="mt-1 text-sm font-semibold">{s.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs text-white/60">Reference flow</p>
              <p className="mt-1 text-sm font-semibold">
                Starlink → Gateway → Tunnel → ISP PoP → Internet
              </p>
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
                  <CheckCircle2 className="mt-[2px] h-5 w-5 text-amber-200/80" />
                  <p className="text-sm leading-relaxed text-white/75">{x}</p>
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-xl border border-amber-200/20 bg-amber-200/5 p-4">
              <p className="text-sm text-white/80">
                <span className="font-semibold text-white">Positioning:</span>{" "}
                Intellilink is not a retail ISP. Intellilink provides a
                governance layer that enables compliant delivery of satellite
                connectivity.
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
        subtitle="These documents are available both as web-readable HTML and downloadable PDFs for technical teams, executives, and regulators."
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {proofDocs.map((d) => (
            <Card key={d.title}>
              <div className="flex h-full flex-col justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">{d.title}</p>
                  <p className="mt-2 text-sm text-white/70">{d.desc}</p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <a
                    href={d.htmlHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white/85 hover:bg-white/10"
                  >
                    Read HTML <Globe className="h-4 w-4" />
                  </a>
                  <a
                    href={d.pdfHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-200/20 bg-amber-200/10 px-3 py-2 text-xs font-semibold text-amber-100 hover:bg-amber-200/15"
                  >
                    Download PDF <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <p className="text-sm font-semibold">Complete Proof Pack</p>
          <p className="mt-2 text-sm text-white/70">
            Publish each document in two formats: a web-native HTML version for
            quick reading and indexing, and a PDF version for download,
            forwarding, and offline institutional review.
          </p>
        </div>
      </Section>

      {/* Stakeholders */}
      <Section
        id="audience"
        kicker="Stakeholders"
        title="Designed for regulated connectivity environments"
        subtitle="A common governance layer for enterprises and national telecom ecosystems."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => (
            <Card key={a.title}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
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
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Card>
            <p className="text-sm font-semibold">Scope</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {[
                "1 enterprise site",
                "1 satellite terminal",
                "1 gateway device",
                "1 PoP anchor per ISP",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <CheckCircle2 className="mt-[2px] h-5 w-5 text-amber-200/80" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <p className="text-sm font-semibold">Success criteria</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {[
                "Traffic anchored via ISP PoP",
                "Browsing and apps functional",
                "Performance preserved",
                "Technical report produced",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <CheckCircle2 className="mt-[2px] h-5 w-5 text-amber-200/80" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <p className="text-sm font-semibold">Outputs</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {[
                "Pilot report",
                "Architecture diagrams",
                "Operational checklist",
                "Regulator observation notes",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <CheckCircle2 className="mt-[2px] h-5 w-5 text-amber-200/80" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        kicker="Contact"
        title="Request a pilot discussion"
        subtitle="Enterprise, ISP, and regulator pilots are open. Share your details below to schedule a confidential technical discussion."
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card>
            <form
              className="space-y-3"
              onSubmit={async (e) => {
                e.preventDefault();

                setFormLoading(true);
                setFormSuccess(false);
                setFormError("");

                const form = e.currentTarget;
                const elements = form.elements;

                const data = {
                  name: (elements.namedItem("name") as HTMLInputElement).value,
                  organization: (elements.namedItem("organization") as HTMLInputElement).value,
                  email: (elements.namedItem("email") as HTMLInputElement).value,
                  message: (elements.namedItem("message") as HTMLTextAreaElement).value,
                };

                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                  });

                  if (!res.ok) {
                    throw new Error("Server responded with an error");
                  }

                  setFormSuccess(true);
                  form.reset();
                } catch (error) {
                  console.error(error);
                  setFormError("Failed to send pilot request. Please try again.");
                } finally {
                  setFormLoading(false);
                }
              }}
            >
              <div>
                <label className="text-xs text-white/70">Full name</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-amber-200/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-white/70">Organization</label>
                <input
                  name="organization"
                  required
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-amber-200/40"
                  placeholder="Company / Agency"
                />
              </div>
              <div>
                <label className="text-xs text-white/70">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-amber-200/40"
                  placeholder="name@organization.com"
                />
              </div>
              <div>
                <label className="text-xs text-white/70">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-amber-200/40"
                  placeholder="Briefly describe your pilot interest"
                />
              </div>

              <button
                type="submit"
                disabled={formLoading}
                className="w-full rounded-xl bg-amber-200 px-5 py-3 text-sm font-semibold text-[#07132b] hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {formLoading ? "Sending..." : "Submit"}
              </button>

              {formSuccess && (
                <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                  ✓ Pilot request sent successfully. We will be in touch within 24 hours.
                </div>
              )}

              {formError && (
                <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  {formError}
                </div>
              )}

              <p className="text-xs text-white/55">
                Note: All submissions are treated as confidential.
              </p>
            </form>
          </Card>

          <Card>
            <p className="text-sm font-semibold">Preferred contacts</p>
            <p className="mt-2 text-sm text-white/70">
              For partnerships, pilots, and regulator / ISP workshops:
            </p>

            <div className="mt-4 space-y-3 text-sm text-white/75">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs text-white/60">Email</p>
                <p className="mt-1 font-semibold">info@intellilink.media</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs text-white/60">Phone / WhatsApp</p>
                <p className="mt-1 font-semibold">+260 762 811 065</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs text-white/60">LinkedIn</p>
                <p className="mt-1 font-semibold">linkedin.com/in/mukwesa</p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs text-white/60">Positioning note</p>
              <p className="mt-2 text-sm text-white/70">
                Intellilink Gateway™ is a governance layer for compliant
                enterprise satellite delivery — designed to work alongside
                satellite access and local ISP PoPs.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#061028]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/intellilink-gateway-logo.png"
              alt="Intellilink Gateway logo"
              width={140}
              height={40}
              className="h-9 w-auto"
            />
            <div>
              <p className="text-sm font-semibold">Intellilink Media LLC</p>
              <p className="mt-1 text-xs text-white/60">
                Governance layer for enterprise satellite connectivity
              </p>
             <div className="mt-3 flex gap-4 text-xs text-white/60">
               <a href="/trust" className="hover:text-white">
                  Trust Center
               </a>
             </div>
            </div>
          </div>
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Intellilink Media LLC. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
