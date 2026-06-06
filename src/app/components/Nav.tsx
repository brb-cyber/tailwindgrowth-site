'use client';

import { useState } from 'react';

const NAV_LINKS = [
  { label: 'The System', href: '#thesystem' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '/insights' },
];

export default function Nav({ bookUrl }: { bookUrl: string }) {
  const [open, setOpen] = useState(false);

  const handleBook = () => window.open(bookUrl, '_blank', 'noopener');

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" aria-label="Tailwind Growth home">
          <img className="nav-logo" src="/assets/logos/logo-main-black.svg" alt="Tailwind Growth" />
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="nav-right">
          <a
            href="https://buddy.tailwindgrowth.ai/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink-700)' }}
          >
            Sign in
          </a>
          <button className="btn btn-primary btn-sm" onClick={handleBook}>
            Book a call
          </button>
          <button
            className="nav-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {open && (
        <div className="container" style={{ paddingBottom: 20 }}>
          <nav
            style={{ display: 'flex', flexDirection: 'column', gap: 14, paddingTop: 8 }}
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{ fontSize: 17, fontWeight: 500 }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <button
              className="btn btn-primary"
              style={{ marginTop: 8, alignSelf: 'flex-start' }}
              onClick={() => { setOpen(false); handleBook(); }}
            >
              Book a call
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Eyebrow({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={'eyebrow' + (dark ? ' on-dark' : '')}>
      <img
        className="star"
        src={`/assets/logos/icon-${dark ? 'lime' : 'fullcolour'}.svg`}
        alt=""
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
