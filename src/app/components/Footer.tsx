const COMPANY_LINKS = [
  { label: 'The System', href: '#thesystem' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '/insights/' },
];

const CONNECT_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/tailwind-growth/' },
  { label: 'Instagram', href: 'https://www.instagram.com/tailwind_growth/' },
  { label: 'baidy@tailwindgrowth.ai', href: 'mailto:baidy@tailwindgrowth.ai' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img
              className="footer-logo"
              src="/assets/logos/logo-main-white.svg"
              alt="Tailwind Growth"
            />
            <p className="bio">
              A B2B growth partner for ambitious businesses. We give you the system and
              expertise to grow on your terms.
            </p>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Connect</h5>
            <ul>
              {CONNECT_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Tailwind Growth. All rights reserved.</span>
          <span>Newcastle · Sydney · Australia</span>
        </div>
      </div>
    </footer>
  );
}
