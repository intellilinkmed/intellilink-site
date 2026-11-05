import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Intellilink Media, our engineering-led approach to technology integration in Africa, and founder Emmanuel K. Mukwesa.",
};

const principles = [
  ["Engineering-led", "We begin with real infrastructure requirements, operational constraints and technically sound architectures."],
  ["Innovation-driven", "We investigate emerging technologies and develop approaches to evolving connectivity challenges."],
  ["Evidence-conscious", "We distinguish established practices from prototypes, preliminary observations and independently validated results."],
  ["Collaboration-focused", "We work toward meaningful cooperation among operators, institutions, researchers and technology partners."],
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <div className="eyebrow">About Intellilink Media</div>
          <h1>Technology Integration for Africa</h1>
          <p>Intellilink Media is an engineering-led technology integration and innovation company focused on strengthening Africa&apos;s digital infrastructure through practical engineering, emerging technologies and applied research.</p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="eyebrow">Our purpose</div>
          <h2>Engineering with purpose.</h2>
          <div className="cards">
            <article className="card"><h3>Our mission</h3><p>To advance secure, reliable and resilient digital infrastructure through network engineering, responsible technology integration, applied research and meaningful partnerships.</p></article>
            <article className="card"><h3>Our vision</h3><p>A connected, resilient and technologically empowered Africa in which emerging technologies create lasting institutional, social and economic value.</p></article>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="shell">
          <div className="eyebrow">How we work</div>
          <h2>Our approach</h2>
          <p className="section-lead">Our work combines established network engineering principles with forward-looking technology exploration and strategic collaboration.</p>
          <div className="cards">
            {principles.map(([title, description]) => (
              <article className="card" key={title}><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="leadership">
        <div className="shell">
          <div className="eyebrow">Founder &amp; Leadership</div>
          <h2>Engineering experience. A vision for Africa.</h2>
          <div className="founder-layout">
            <Image
              className="founder-photo"
              src="/images/intellilink-founder-portrait.webp"
              alt="Emmanuel K. Mukwesa, Founder and Chief Executive Officer of Intellilink Media"
              width={825}
              height={1100}
              sizes="(max-width: 760px) min(360px, 100vw), (max-width: 1200px) 34vw, 390px"
            />
            <div className="founder-copy">
              <h3>Emmanuel K. Mukwesa</h3>
              <p className="founder-role">Founder &amp; Chief Executive Officer</p>
              <p>Emmanuel K. Mukwesa is a telecommunications and network engineering professional with more than two decades of experience in digital connectivity and infrastructure.</p>
              <p>His professional journey began in 1998 at ZAMTEL and later included senior technical leadership at the Zambia Research and Education Network (ZAMREN), where he served as Chief Technology Officer.</p>
              <p>His experience encompasses network architecture, telecommunications infrastructure, institutional connectivity, technical strategy and emerging networking technologies.</p>
              <p>As Founder and CEO of Intellilink Media, Emmanuel is advancing a vision of technology integration for Africa, combining practical engineering, applied research and strategic collaboration to address evolving digital infrastructure challenges.</p>
              <p>His current interests include hybrid satellite–terrestrial connectivity, network resilience, secure infrastructure integration and connectivity governance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="shell">
          <div className="eyebrow">Our commitment</div>
          <h2>Building relevant capabilities for Africa.</h2>
          <p className="section-lead">We believe Africa&apos;s digital future should be supported by resilient infrastructure, locally relevant engineering capabilities, responsible technology adoption and meaningful participation in emerging technology ecosystems.</p>
          <p className="section-lead">Our commitment is to contribute practical expertise, develop innovative approaches and collaborate with organizations strengthening the continent&apos;s digital foundations.</p>
          <p style={{marginTop: 30}}><Link className="text-link" href="/collaborate">Explore collaboration opportunities ↗</Link></p>
        </div>
      </section>
    </>
  );
}
