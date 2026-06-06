'use client';

import { useState, useEffect } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const FORMSPREE_URL = 'https://formspree.io/f/xvznzbgo';
const STORAGE_KEY = 'tg_notes_unlocked';
const BOOK_URL = 'https://calendar.app.google/x2YHKEPb5wzDa4JY6';

const CODE_BLOCK: React.CSSProperties = {
  background: 'var(--midnight)',
  color: '#e2e8f0',
  borderRadius: 'var(--r-md)',
  padding: '1.5rem',
  overflowX: 'auto',
  fontSize: '0.8125rem',
  lineHeight: 1.7,
  marginBottom: '1.5rem',
  whiteSpace: 'pre',
  fontFamily: 'monospace',
};

const INLINE_CODE: React.CSSProperties = {
  background: 'var(--indigo-050)',
  color: 'var(--indigo)',
  borderRadius: '4px',
  padding: '0.1em 0.4em',
  fontSize: '0.9em',
  fontFamily: 'monospace',
};

const PROMPT_CONTENT = `The user wants to convert handwritten notes from one or more image files into a single typed markdown file.

The image file path(s) are: $ARGUMENTS

Steps:
1. Parse $ARGUMENTS as a space-separated list of file paths or filenames. If only filenames are given (no directory), look for them in the current working directory.
2. Read each image file in the order provided.
3. Transcribe all handwritten content from each image into clean, readable markdown. Preserve the structure of the notes — headings, lists, numbered steps, etc. — as faithfully as possible. Fix obvious spelling errors but do not paraphrase or reword the content.
4. If there are multiple images, concatenate the transcriptions in order. Insert a horizontal rule (---) between each image's content only if they appear to be separate distinct sections; otherwise flow them together naturally.
5. Create a single new markdown file in the same directory as the first source image (or the current working directory if only filenames were given). Name it using today's date plus a short slug derived from the first heading or first line of the notes, e.g. 2026-06-04-meeting-notes.md.
6. Write the full transcribed markdown to that file.
7. Report the output filename and a one-sentence summary of what was captured.`;

export default function NotesGate() {
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
      setUnlocked(true);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        localStorage.setItem(STORAGE_KEY, 'true');
        setUnlocked(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
    setSubmitting(false);
  }

  return (
    <>
      <Nav bookUrl={BOOK_URL} />
      <main>
        <section className="section" style={{ paddingTop: '8rem' }}>
          <div className="container">
            <div className="section-head">
              <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--indigo)', marginBottom: '1rem' }}>
                Claude Code Tools
              </p>
              <h1 className="disp" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
                Turn photos of your notes<br />into markdown. Instantly.
              </h1>
              <p style={{ maxWidth: '52ch', marginTop: '1.25rem', fontSize: '1.125rem', lineHeight: 1.7 }}>
                The <code style={INLINE_CODE}>/notes</code> command is a custom Claude Code slash command that reads photos of your handwritten notes and transcribes them into clean, dated markdown files — in seconds.
              </p>
            </div>

            <div style={{ marginTop: '3rem', maxWidth: '640px' }}>
              {!unlocked ? (
                <div style={{
                  background: 'var(--sky-tint)',
                  border: '1px solid var(--ink-200)',
                  borderRadius: 'var(--r-xl)',
                  padding: '2.5rem',
                }}>
                  <h2 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    Get the setup guide
                  </h2>
                  <p style={{ color: 'var(--ink-500)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    Enter your email and we&apos;ll reveal the step-by-step setup.
                  </p>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        flex: '1 1 220px',
                        padding: '12px 16px',
                        borderRadius: 'var(--r-pill)',
                        border: '1.5px solid var(--ink-200)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '15px',
                        outline: 'none',
                        background: '#fff',
                      }}
                    />
                    <button type="submit" disabled={submitting} className="btn btn-primary">
                      {submitting ? 'Sending…' : 'Show me →'}
                    </button>
                  </form>
                  {error && (
                    <p style={{ color: '#c00', marginTop: '0.75rem', fontSize: '0.875rem' }}>{error}</p>
                  )}
                  <p style={{ color: 'var(--ink-300)', fontSize: '0.8125rem', marginTop: '1rem' }}>
                    No spam. Just the guide, and the occasional insight worth reading.
                  </p>
                </div>
              ) : (
                <div>
                  <div style={{
                    background: 'var(--indigo-050)',
                    borderRadius: 'var(--r-lg)',
                    padding: '1rem 1.5rem',
                    marginBottom: '2.5rem',
                    color: 'var(--indigo)',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                  }}>
                    Setup guide unlocked — enjoy.
                  </div>

                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem' }}>Setup (one time)</h2>
                  <ol style={{ paddingLeft: '1.25rem', lineHeight: 1.8, color: 'var(--ink-700)', marginBottom: '1.5rem' }}>
                    <li style={{ marginBottom: '0.75rem' }}>
                      Navigate to your Claude Code commands folder:
                      <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem' }}>
                        <li><strong>Mac / Linux:</strong> <code style={INLINE_CODE}>~/.claude/commands/</code></li>
                        <li><strong>Windows:</strong> <code style={INLINE_CODE}>C:\Users\&lt;YourName&gt;\.claude\commands\</code></li>
                      </ul>
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      Create a new file named <code style={INLINE_CODE}>notes.md</code>
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>Paste the following into it and save:</li>
                  </ol>

                  <pre style={CODE_BLOCK}>{PROMPT_CONTENT}</pre>

                  <ol start={4} style={{ paddingLeft: '1.25rem', lineHeight: 1.8, color: 'var(--ink-700)', marginBottom: '2.5rem' }}>
                    <li>Restart Claude Code. You&apos;re done.</li>
                  </ol>

                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Usage</h2>
                  <pre style={CODE_BLOCK}>{`/notes page1.jpg\n/notes page1.jpg page2.jpg page3.jpg`}</pre>

                  <p style={{ color: 'var(--ink-500)', lineHeight: 1.7 }}>
                    Images are looked up in your current working directory. The output file is saved alongside your images, named with today&apos;s date and a slug from your first heading — e.g. <code style={INLINE_CODE}>2026-06-06-meeting-notes.md</code>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
