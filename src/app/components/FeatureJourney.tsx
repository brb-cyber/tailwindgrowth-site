const JOURNEY_ITEMS = [
  {
    label: "Contacts and Relationships",
    heading: "Keep track of your contacts",
    body: "Keep track of your contacts and automate relationship-building. Automated check-ins, emails and reminders keep you front of mind. See all your history with them in one place: emails, calendar and more. One-click convert to a lead.",
    previewLabel: "Contacts",
    previewBg: "linear-gradient(135deg, var(--pine) 0%, var(--pine-400) 100%)",
    previewImg: "/assets/screenshots/contacts.png",
  },
  {
    label: "First Contact Automation",
    heading: "Send personalised emails and schedule",
    body: "Send personalised emails to inbound leads automatically, or with one click if you prefer, to schedule discovery calls and warm them up.",
    previewLabel: "First Contact",
    previewBg: "linear-gradient(135deg, var(--indigo) 0%, var(--indigo-700) 100%)",
    previewImg: "/assets/screenshots/first-contact.png",
  },
  {
    label: "Meeting Prep",
    heading: "Turn up to your discovery call prepared",
    body: "Your pre-meeting brief, including company research, lands straight in your inbox before every call. Your transcript is then auto-imported so you can determine next steps without scrambling for notes.",
    previewLabel: "Meeting Brief",
    previewBg: "linear-gradient(135deg, var(--pine) 0%, var(--indigo) 100%)",
    previewImg: "/assets/screenshots/meeting-brief.png",
  },
  {
    label: "Document Workflow",
    heading: "Need to send a scope? Proposal? Agreement? Onboarding form?",
    body: "It is all managed within the system for smooth client onboarding. Stop worrying about when docs need to go out or when to follow up. You will get reminded when to send and can do it in one click. Follow-ups are sorted too. Need to send a second version? Too easy. You will see the full message history. Peace of mind and a freed-up day.",
    previewLabel: "Send Proposal",
    previewBg: "linear-gradient(135deg, var(--indigo) 0%, var(--pine) 100%)",
    previewImg: "/assets/screenshots/document-workflow.png",
  },
  {
    label: "Pipeline Visibility",
    heading: "Stop wondering about your capacity or managing it in a spreadsheet",
    body: "Get full visibility. See your next available slot to schedule a project. Know exactly when to start filling the pipeline again before you come up for air and find an empty patch ahead.",
    previewLabel: "Pipeline Forecast",
    previewBg: "linear-gradient(135deg, var(--pine-800) 0%, var(--pine) 100%)",
    previewImg: "/assets/screenshots/pipeline-forecast.png",
  },
  {
    label: "Daily Direction",
    heading: "Always know what to work on",
    body: "Your Prioritisation Agent tells you the 3 highest-priority actions to take across your entire pipeline each day. Skip the digging. Go straight to action.",
    previewLabel: "Today's Priorities",
    previewBg: "linear-gradient(135deg, var(--indigo) 0%, var(--indigo-700) 100%)",
    previewImg: "/assets/screenshots/todays-priorities.png",
  },
  {
    label: "Deal Unsticker",
    heading: "Deal stuck?",
    body: "Your Sales Advisor Agent gives you on-demand advice on what action to take to move that specific opportunity forward. Your own sales advisor, without the commission.",
    previewLabel: "Sales Advisor",
    previewBg: "linear-gradient(135deg, var(--pine) 0%, var(--indigo) 100%)",
    previewImg: "/assets/screenshots/sales-advisor.png",
  },
  {
    label: "The Differentiator",
    heading: "Your own growth leader",
    body: "Think of the Tailwind platform as the sales assistant that never sleeps: pipeline management, outreach, documents, follow-ups, all handled. But strategy, judgement calls, and the bespoke work of growing a services business? That is Baidy's domain. As your embedded fractional growth leader, she works on the things that move the needle: channel partner strategy, target mapping, inbound engine development, deal reviews. Access to senior revenue expertise you would not otherwise get, without the full-time cost.",
    previewLabel: "Growth Leader",
    previewBg: "linear-gradient(150deg, var(--lime-600) 0%, var(--pine) 100%)",
    isKeyDifferentiator: true,
  },
  {
    label: "Onboarding",
    heading: "One-click migration and onboarding, and we do it for you",
    body: "Switching platforms is a painful chore you keep putting off. Not here. Import and migration are handled for you. Sign up, share one detail from your existing CRM, and the rest is done.",
    previewLabel: "One-Click Migration",
    previewBg: "linear-gradient(135deg, var(--indigo-700) 0%, var(--pine) 100%)",
    previewImg: "/assets/screenshots/migration.png",
  },
]

function FeaturePreviewDots() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", maxWidth: 180 }} aria-hidden="true">
      {[72, 100, 58].map((w, i) => (
        <div
          key={i}
          style={{
            height: 6,
            borderRadius: 4,
            background: "rgba(255,255,255,0.35)",
            width: `${w}%`,
          }}
        />
      ))}
    </div>
  )
}

export default function FeatureJourney() {
  return (
    <section className="growth-journey section" id="journey">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            What working with Tailwind actually feels like
          </span>
          <h2 style={{ fontSize: 40, margin: "16px 0 0" }}>Day-to-day, this is what changes.</h2>
          <p>From keeping contacts warm to closing deals. From knowing your capacity to never losing sleep over the pipeline. Here is the journey, step by step.</p>
        </div>

        <div style={{ marginTop: 64 }}>
          {JOURNEY_ITEMS.map((item, i) => (
            <div
              key={item.heading}
              className="growth-journey-item"
              style={item.isKeyDifferentiator ? { background: "var(--indigo-050)", borderRadius: "var(--r-xl)", padding: "48px", border: "1px solid var(--indigo-100)", marginBottom: 0 } : {}}
            >
              <div className="growth-journey-text">
                <div className="growth-journey-label">{item.label}</div>
                <h3 style={item.isKeyDifferentiator ? { fontSize: 30, color: "var(--indigo)" } : {}}>
                  {item.heading}
                </h3>
                <p>{item.body}</p>
              </div>
              {item.previewImg ? (
                <div
                  className="growth-journey-visual"
                  aria-hidden="true"
                  style={{ background: "#f4f4f5", padding: 0, overflow: "hidden", order: i % 2 === 1 ? -1 : 1, alignItems: "flex-start", justifyContent: "stretch" }}
                >
                  <img
                    src={item.previewImg}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "top center", display: "block" }}
                  />
                </div>
              ) : (
                <div
                  className="growth-journey-visual"
                  aria-hidden="true"
                  style={{ background: item.previewBg, order: i % 2 === 1 ? -1 : 1 }}
                >
                  <span className="feature-name" style={{ color: "#fff" }}>{item.previewLabel}</span>
                  <FeaturePreviewDots />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
