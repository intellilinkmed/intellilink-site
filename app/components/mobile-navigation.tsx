"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

type Props = { links: readonly (readonly [string, string])[] };

function MobileDisclosure({ links }: Props) {
  const [open, setOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);

  function closeMenu() {
    // Close the native disclosure immediately, before React or navigation commits.
    if (detailsRef.current) detailsRef.current.open = false;
    setOpen(false);
    summaryRef.current?.focus();
  }

  return (
    <details
      ref={detailsRef}
      className="mobile-menu"
      open={open}
      onToggle={(event) => setOpen(event.currentTarget.open)}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          closeMenu();
        }
      }}
    >
      <summary ref={summaryRef} aria-label="Toggle mobile navigation" aria-expanded={open} aria-controls="mobile-navigation">
        <span className="menu-icon" aria-hidden="true">☰</span>
        <span className="menu-label">Menu</span>
      </summary>
      <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav">
        {links.map(([label, href]) => (
          <Link key={href} href={href} onClick={closeMenu}>{label}</Link>
        ))}
      </nav>
    </details>
  );
}

export default function MobileNavigation({ links }: Props) {
  const pathname = usePathname();
  // A new route starts with a closed disclosure, including back/forward navigation.
  return <MobileDisclosure key={pathname} links={links} />;
}
