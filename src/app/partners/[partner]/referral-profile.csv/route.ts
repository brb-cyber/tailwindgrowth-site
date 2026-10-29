import { PARTNERS, getPartner, offerUrl } from '../../_data'
import { CONTACT_EMAIL, PARTNER_BOOK_URL, SITE } from '../../_data/core'

// Build-time CSV for the share page's "Download CSV": one record describing
// Baidy as an expert in the partner's network, with the referral profile tags
// as multi-value columns ("; "-separated) so the partner can import it into
// their CRM/partner database and filter on it. Same data as the on-page table.

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return PARTNERS.map((p) => ({ partner: p.slug }))
}

const cell = (v: string) => `"${v.replaceAll('"', '""')}"`

export function GET(_req: Request, { params }: { params: { partner: string } }) {
  const partner = getPartner(params.partner)!
  const columns: [string, string][] = [
    ['Name', 'Baidy Barton'],
    ['Company', 'Tailwind Growth'],
    ['Title', 'Fractional CRO'],
    ['Email', CONTACT_EMAIL],
    ['Website', SITE],
    ['Speciality', 'Growth & revenue; Sales & go-to-market; Funding readiness'],
    ['Offer', 'Complimentary 45-minute call'],
    ['Landing page', offerUrl(partner)],
    ['Booking link', PARTNER_BOOK_URL],
    ...partner.referralProfile.map((f): [string, string] => [f.field, f.tags.join('; ')]),
  ]
  // BOM so Excel opens the UTF-8 (→, –) correctly.
  const csv =
    '﻿' +
    columns.map(([h]) => cell(h)).join(',') + '\r\n' +
    columns.map(([, v]) => cell(v)).join(',') + '\r\n'

  return new Response(csv, { headers: { 'Content-Type': 'text/csv; charset=utf-8' } })
}
