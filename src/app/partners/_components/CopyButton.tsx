'use client'

import { useState } from 'react'

// Copy-to-clipboard for the share page. Falls back to a hidden textarea +
// execCommand where the Clipboard API isn't available (older iOS, non-HTTPS
// local previews).
export default function CopyButton({ text, label = 'Copy' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.setAttribute('readonly', '')
      ta.style.position = 'absolute'
      ta.style.left = '-9999px'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button type="button" className={'share-copy-btn' + (copied ? ' copied' : '')} onClick={copy}>
      {copied ? 'Copied!' : label}
    </button>
  )
}
