// Registry of referral partners. Adding a partner = one new file in ./partners
// plus one line here; both pages and the CSV are generated from it.

import type { Partner } from './types';
import { SITE } from './core';
import { lighterCapital } from './partners/lighter-capital';

export const PARTNERS: Partner[] = [lighterCapital];

export function getPartner(slug: string): Partner | undefined {
  return PARTNERS.find((p) => p.slug === slug);
}

export const offerUrl = (p: Partner) => `${SITE}/partners/${p.slug}/`;
export const shareUrl = (p: Partner) => `${SITE}/partners/${p.slug}/share/`;
