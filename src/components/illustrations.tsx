type IllustrationProps = { className?: string };

/**
 * A claim's journey from submitted to paid, with A/R ageing alongside.
 *
 * Replaces an earlier illustration of anonymous figures round a chart,
 * which was generic clip-art — it said nothing about billing and could
 * have sat on any consultancy site. This shows the two things a practice
 * actually cares about: claims clearing on first pass, and money not
 * getting stuck in ageing buckets.
 *
 * Figures are indicative of the workflow, not audited performance
 * metrics. The information pack is explicit that verified numbers may
 * only be published once BillServ has internal records supporting them,
 * so nothing here is labelled as a measured result.
 */
export function ClaimFlowIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 460 340"
      fill="none"
      role="img"
      aria-label="A claim moving from submitted through review to paid, beside an accounts-receivable ageing chart"
      className={className}
    >
      <defs>
        <clipPath id="cf-card">
          <rect x="24" y="26" width="412" height="288" rx="18" />
        </clipPath>
      </defs>

      {/* Card */}
      <rect
        x="24"
        y="26"
        width="412"
        height="288"
        rx="18"
        fill="var(--color-background)"
        stroke="var(--color-border)"
        strokeWidth="1.5"
      />

      <g clipPath="url(#cf-card)">
        {/* Header bar */}
        <rect x="24" y="26" width="412" height="46" fill="var(--color-secondary)" />
        <rect x="46" y="43" width="96" height="10" rx="5" fill="var(--color-primary)" />
        <rect x="152" y="45" width="58" height="6" rx="3" fill="var(--color-border)" />

        {/* Status pill, top right */}
        <rect x="332" y="40" width="82" height="20" rx="10" fill="var(--color-brand-teal)" opacity="0.14" />
        <circle cx="346" cy="50" r="3.5" fill="var(--color-brand-teal)" />
        <rect x="355" y="47" width="46" height="6" rx="3" fill="var(--color-brand-teal)" opacity="0.65" />

        {/* ---- Claim pipeline: submitted -> review -> paid ---- */}
        <g>
          {/* Connector */}
          <path
            d="M76 112 H 236"
            stroke="var(--color-border)"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
          <path
            d="M236 112 H 384"
            stroke="var(--color-brand-teal)"
            strokeWidth="2"
            strokeDasharray="6 6"
            opacity="0.5"
          />

          {/* Stage 1 — submitted */}
          <circle cx="76" cy="112" r="20" fill="var(--color-primary)" opacity="0.12" />
          <circle cx="76" cy="112" r="20" stroke="var(--color-primary)" strokeWidth="1.5" />
          <rect x="68" y="103" width="16" height="18" rx="2.5" fill="var(--color-primary)" />
          <rect x="71" y="107" width="10" height="1.8" rx="0.9" fill="var(--color-background)" />
          <rect x="71" y="111" width="10" height="1.8" rx="0.9" fill="var(--color-background)" />
          <rect x="71" y="115" width="6" height="1.8" rx="0.9" fill="var(--color-background)" />

          {/* Stage 2 — in review */}
          <circle cx="236" cy="112" r="20" fill="var(--color-primary)" opacity="0.12" />
          <circle cx="236" cy="112" r="20" stroke="var(--color-primary)" strokeWidth="1.5" />
          <circle cx="233" cy="109" r="7" stroke="var(--color-primary)" strokeWidth="2.5" />
          <path d="M238 114 L 244 120" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />

          {/* Stage 3 — paid. Teal is the site's confirmation colour. */}
          <circle
            cx="384"
            cy="112"
            r="22"
            fill="var(--color-brand-teal)"
            className="animate-pulse-ring"
            opacity="0.25"
          />
          <circle cx="384" cy="112" r="20" fill="var(--color-brand-teal)" />
          <path
            d="M375 112 l 6 6 l 12 -13"
            stroke="var(--color-background)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-draw"
          />

          {/* Stage labels */}
          <rect x="58" y="142" width="36" height="5" rx="2.5" fill="var(--color-border)" />
          <rect x="218" y="142" width="36" height="5" rx="2.5" fill="var(--color-border)" />
          <rect x="366" y="142" width="36" height="5" rx="2.5" fill="var(--color-brand-teal)" opacity="0.6" />
        </g>

        {/* ---- A/R ageing: bars shrink as buckets age, which is the
               point — money should not sit in the far-right buckets. ---- */}
        <g>
          <rect x="52" y="176" width="72" height="6" rx="3" fill="var(--color-border)" />

          <g className="animate-bar-rise">
            <rect x="52" y="208" width="30" height="60" rx="5" fill="var(--color-primary)" />
          </g>
          <g className="animate-bar-rise" style={{ animationDelay: "120ms" }}>
            <rect x="94" y="224" width="30" height="44" rx="5" fill="var(--color-primary)" opacity="0.72" />
          </g>
          <g className="animate-bar-rise" style={{ animationDelay: "240ms" }}>
            <rect x="136" y="240" width="30" height="28" rx="5" fill="var(--color-primary)" opacity="0.48" />
          </g>
          <g className="animate-bar-rise" style={{ animationDelay: "360ms" }}>
            <rect x="178" y="252" width="30" height="16" rx="5" fill="var(--color-primary)" opacity="0.28" />
          </g>

          {/* Baseline */}
          <path d="M46 268 H 214" stroke="var(--color-border)" strokeWidth="1.5" />
        </g>

        {/* ---- Clean-claim trend, rising ---- */}
        <g>
          <rect x="250" y="176" width="64" height="6" rx="3" fill="var(--color-border)" />
          <path
            d="M254 254 C 284 250, 300 232, 322 218 S 366 196, 404 190"
            stroke="var(--color-brand-teal)"
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-trend-draw"
          />
          <circle
            cx="404"
            cy="190"
            r="5.5"
            fill="var(--color-brand-teal)"
            className="animate-pop"
            style={{ animationDelay: "700ms" }}
          />
          <path d="M246 268 H 414" stroke="var(--color-border)" strokeWidth="1.5" />
        </g>
      </g>
    </svg>
  );
}

/** Stethoscope + specialty markers — used in the Expertise section. */
export function SpecialtyIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 360 260"
      fill="none"
      role="img"
      aria-label="Medical specialties supported across the healthcare spectrum"
      className={className}
    >
      <circle cx="180" cy="130" r="104" fill="#F4FAFD" />
      {/* expanding pulse rings */}
      <circle
        cx="180"
        cy="130"
        r="72"
        fill="none"
        stroke="#A8D9F2"
        strokeWidth="2"
        className="origin-center animate-pulse-ring"
      />
      <circle
        cx="180"
        cy="130"
        r="72"
        fill="#E4F2FB"
        className="origin-center animate-heartbeat"
      />

      {/* faint baseline trace */}
      <path
        d="M64 130 H126 L142 96 L166 166 L188 118 L204 130 H296"
        stroke="#D3EAF8"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* animated ECG sweep */}
      <path
        d="M64 130 H126 L142 96 L166 166 L188 118 L204 130 H296"
        stroke="#3FA9E5"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-ecg"
      />

      {/* specialty markers — each bobs on its own offset */}
      <g>
        {[
          { cx: 180, cy: 26, fill: "#3FA9E5", delay: "0s" },
          { cx: 290, cy: 66, fill: "#35C2C0", delay: "-0.7s" },
          { cx: 306, cy: 196, fill: "#3FA9E5", delay: "-1.4s" },
          { cx: 180, cy: 234, fill: "#35C2C0", delay: "-2.1s" },
          { cx: 54, cy: 196, fill: "#3FA9E5", delay: "-2.8s" },
          { cx: 70, cy: 66, fill: "#35C2C0", delay: "-3.5s" },
        ].map((dot) => (
          <g
            key={`${dot.cx}-${dot.cy}`}
            className="animate-bob"
            style={{ animationDelay: dot.delay }}
          >
            <circle
              cx={dot.cx}
              cy={dot.cy}
              r="16"
              fill="#ffffff"
              stroke="#DCEAF4"
            />
            <circle cx={dot.cx} cy={dot.cy} r="6" fill={dot.fill} />
          </g>
        ))}
      </g>
    </svg>
  );
}
