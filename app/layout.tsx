import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });
const nav = [
  ["Home", "/"], ["About Us", "/about"], ["Research & Innovation", "/research"],
  ["Solutions & Expertise", "/solutions"], ["Insights & Resources", "/insights"],
  ["Collaborate", "/collaborate"]
];

export const metadata: Metadata = {
  metadataBase: new URL("https://intellilink.media"),
  title: { default: "Intellilink Media | Technology Integration for Africa", template: "%s | Intellilink Media" },
  description: "Network engineering, satellite-terrestrial integration, applied research and responsible digital infrastructure innovation for Africa.",
  openGraph: {
    title: "Intellilink Media | Technology Integration for Africa",
    description: "Engineering connectivity. Enabling innovation.",
    url: "https://intellilink.media", siteName: "Intellilink Media", type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={geist.className}>
    <header className="site-header"><div className="shell header-inner">
      <Link className="brand" href="/" aria-label="Intellilink Media home"><span className="brand-mark">I</span><span>INTELLILINK <small>MEDIA</small></span></Link>
      <nav aria-label="Primary navigation" className="desktop-nav">{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <Link className="header-cta" href="/collaborate">Let's collaborate ↗</Link>
    </div><nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav></header>
    <main>{children}</main>
    <footer className="site-footer"><div className="shell footer-grid"><div><strong>INTELLILINK MEDIA</strong><p>Technology Integration for Africa</p></div><div><p>Network Engineering · Satellite Integration · Applied Research</p><p>© 2026 Intellilink Media LLC. All rights reserved.</p></div><Link href="/collaborate">Contact us ↗</Link></div></footer>
  </body></html>;
}