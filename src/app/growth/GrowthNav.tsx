export default function GrowthNav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="https://tailwindgrowth.ai" aria-label="Tailwind Growth home">
          <img className="nav-logo" src="/assets/logos/logo-main-black.svg" alt="Tailwind Growth" />
        </a>
        <div className="nav-right">
          <a
            href="https://buddy.tailwindgrowth.ai/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 15, fontWeight: 500, color: "var(--ink-700)" }}
          >
            Sign in
          </a>
          <a
            className="btn btn-primary btn-sm"
            href="https://calendar.app.google/x2YHKEPb5wzDa4JY6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
  )
}
