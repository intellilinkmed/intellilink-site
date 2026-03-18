export default function TrustCenter() {
  return (
    <div className="min-h-screen bg-[#07132b] text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">

        <h1 className="text-3xl font-semibold">Trust Center</h1>
        <p className="text-white/70">
          Security, Transparency, and Operational Integrity
        </p>

        <section>
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="text-white/75 mt-2">
            Intellilink Gateway™ is a control-plane architecture designed to enable governance,
            visibility, and regulatory alignment for enterprise satellite connectivity.
            It restores accountable upstream presence and policy enforcement within ISP frameworks.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Security Principles</h2>
          <ul className="list-disc ml-6 mt-2 text-white/75 space-y-1">
            <li>Control-plane separation</li>
            <li>Encryption-first design</li>
            <li>Minimal data exposure</li>
            <li>No unnecessary data retention</li>
            <li>Deployment transparency</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Responsible Disclosure</h2>
          <p className="text-white/75 mt-2">
            We welcome responsible disclosure of vulnerabilities. Please report any issues
            with sufficient detail to enable investigation.
          </p>
          <p className="mt-2 text-white/90 font-medium">
            Contact: info@intellilink.media
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Data Handling & Privacy</h2>
          <ul className="list-disc ml-6 mt-2 text-white/75 space-y-1">
            <li>No long-term storage of traffic content</li>
            <li>No inspection unless explicitly configured</li>
            <li>Transient forwarding only</li>
            <li>No resale or external use of data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Operational Model Transparency</h2>
          <p className="text-white/75 mt-2">
            Intellilink Gateway™ operates as a governance layer and does not function
            as a retail ISP or access provider. It integrates with licensed ISPs.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Compliance Alignment</h2>
          <p className="text-white/75 mt-2">
            The architecture supports regulatory visibility, policy enforcement,
            and lawful intercept integration where legally required.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Contact & Reporting</h2>
          <p className="text-white/75 mt-2">
            Email: info@intellilink.media
          </p>
        </section>

        <section>
          <p className="text-white/50 text-sm">
            This page provides a high-level overview of operational and security principles.
            It does not constitute a formal compliance or certification statement.
          </p>
        </section>

      </div>
    </div>
  );
}
