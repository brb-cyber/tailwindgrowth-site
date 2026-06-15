"use client"

import { useSearchParams } from "next/navigation"

const BOOK_URL = "https://calendar.app.google/x2YHKEPb5wzDa4JY6"
const BD_BUDDY_BASE = "https://buddy.tailwindgrowth.ai"

export default function CtaButton({
  size = "lg",
  variant = "button",
}: {
  size?: "lg" | "md"
  variant?: "button" | "link"
}) {
  const params = useSearchParams()
  const ref = params.get("ref")
  const token = params.get("token")
  const proposalId = params.get("proposalId")

  let href: string
  let isExternal = true

  if (ref === "discovery" && token) {
    href = `${BD_BUDDY_BASE}/api/go-decision/${token}`
    isExternal = false
  } else if (ref === "proposal" && proposalId) {
    href = `${BD_BUDDY_BASE}/api/proposal/accept/${proposalId}`
    isExternal = false
  } else {
    href = BOOK_URL
  }

  if (variant === "link") {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="growth-secondary-cta"
        style={{ marginTop: 24, display: "block", fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.55)", textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.25)" }}
      >
        Join a community of founders harnessing their tailwind
      </a>
    )
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
