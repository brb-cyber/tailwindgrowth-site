"use client"

import { useSearchParams } from "next/navigation"

const BOOK_URL = "https://calendar.app.google/x2YHKEPb5wzDa4JY6"
const BD_BUDDY_BASE = "https://buddy.tailwindgrowth.ai"

export default function CtaButton({ size = "lg" }: { size?: "lg" | "md" }) {
  const params = useSearchParams()
  const ref = params.get("ref")
  const token = params.get("token")
  const agreementId = params.get("agreementId")

  let href: string
  let isExternal = true

  if (ref === "discovery" && token) {
    href = `${BD_BUDDY_BASE}/api/go-decision/${token}`
    isExternal = false
  } else if (ref === "proposal" && agreementId) {
    href = `${BD_BUDDY_BASE}/api/agreement/sign/${agreementId}`
    isExternal = false
  } else {
    href = BOOK_URL
  }

  return (
    <a
      className="btn btn-accent"
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={size === "lg" ? { fontSize: 17, padding: "17px 40px" } : undefined}
    >
      Let&apos;s get growing
    </a>
  )
}
