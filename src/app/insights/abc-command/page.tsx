import type { Metadata } from 'next';
import AbcGate from './AbcGate';

export const metadata: Metadata = {
  title: 'The /abc Command for Claude Code — Tailwind Growth',
  description:
    'A free Claude Code slash command that checks your copy for spelling and grammar in Australian English — with annotated corrections and a clean corrected version ready to paste.',
  alternates: { canonical: '/insights/abc-command/' },
  robots: { index: true, follow: true },
};

export default function AbcCommandPage() {
  return <AbcGate />;
}
