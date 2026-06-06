import type { Metadata } from 'next';
import NotesGate from './NotesGate';

export const metadata: Metadata = {
  title: 'The /notes Command for Claude Code — Tailwind Growth',
  description:
    'A free Claude Code slash command that transcribes photos of your handwritten notes into clean, dated markdown files in seconds.',
  alternates: { canonical: '/insights/notes-command/' },
  robots: { index: true, follow: true },
};

export default function NotesCommandPage() {
  return <NotesGate />;
}
