// Generates the share-page QR codes for one partner's offer page:
//   public/partners/<slug>/qr-offer-page.png and .svg
// Run once per new partner (and commit the output):
//   node scripts/make-partner-qr.mjs lighter-capital

import { mkdir } from 'node:fs/promises';
import QRCode from 'qrcode';

const slug = process.argv[2];
if (!slug) {
  console.error('Usage: node scripts/make-partner-qr.mjs <partner-slug>');
  process.exit(1);
}

const url = `https://tailwindgrowth.ai/partners/${slug}/`;
const dir = `public/partners/${slug}`;
const opts = { margin: 2, color: { dark: '#232121', light: '#FFFFFF' } };

await mkdir(dir, { recursive: true });
await QRCode.toFile(`${dir}/qr-offer-page.png`, url, { ...opts, width: 1024 });
await QRCode.toFile(`${dir}/qr-offer-page.svg`, url, { ...opts, type: 'svg' });
console.log(`QR codes for ${url} written to ${dir}/`);
