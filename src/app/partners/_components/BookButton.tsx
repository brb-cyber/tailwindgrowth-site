'use client'

// Booking CTA for partner pages. The booking form deliberately asks nothing but
// name + email, so this GA4 event is the only record of where a booking came
// from: the partner, plus any ?ref= on the page URL (e.g. lc-portal, kylie).
// Reads ?ref at click time rather than via useSearchParams, so the static
// export needs no Suspense boundary.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export default function BookButton({
  href,
  partner,
  label,
  size = 'lg',
}: {
  href: string
  partner: string
  label: string
  size?: 'lg' | 'md'
}) {
  const track = () => {
    const ref = new URLSearchParams(window.location.search).get('ref') ?? 'direct'
    window.gtag?.('event', 'partner_book_click', { partner, ref })
  }

  return (
    <a
      className="btn btn-accent"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={track}
      style={size === 'lg' ? { fontSize: 17, padding: '17px 40px' } : undefined}
    >
      {label}
    </a>
  )
}
