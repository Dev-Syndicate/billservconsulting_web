type IllustrationProps = { className?: string };

/** Team of specialists reviewing a claim together — used in the About section. */
export function TeamIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 460 320"
      fill="none"
      role="img"
      aria-label="A team of billing specialists reviewing claims together"
      className={className}
    >
      <defs>
        <linearGradient id="ilTeamCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#F4FAFD" />
        </linearGradient>
      </defs>

      <ellipse cx="230" cy="286" rx="176" ry="18" fill="#EDF6FD" />
      <circle cx="86" cy="86" r="52" fill="#EDF6FD" />
      <circle cx="392" cy="66" r="34" fill="#E4F2FB" />

      {/* central board */}
      <g transform="translate(120 44)">
        <rect
          width="220"
          height="150"
          rx="16"
          fill="url(#ilTeamCard)"
          stroke="#DCEAF4"
        />
        <rect x="22" y="24" width="92" height="10" rx="5" fill="#3FA9E5" />
        <rect x="22" y="48" width="150" height="8" rx="4" fill="#EAF4FC" />
        <rect x="22" y="68" width="120" height="8" rx="4" fill="#EAF4FC" />
        {/* mini bars — rise in sequence */}
        <rect
          x="22"
          y="98"
          width="18"
          height="28"
          rx="4"
          fill="#CDE8F7"
          className="animate-bar-rise"
          style={{ animationDelay: "0.1s" }}
        />
        <rect
          x="48"
          y="88"
          width="18"
          height="38"
          rx="4"
          fill="#A8D9F2"
          className="animate-bar-rise"
          style={{ animationDelay: "0.25s" }}
        />
        <rect
          x="74"
          y="78"
          width="18"
          height="48"
          rx="4"
          fill="#7BC8EE"
          className="animate-bar-rise"
          style={{ animationDelay: "0.4s" }}
        />
        <rect
          x="100"
          y="66"
          width="18"
          height="60"
          rx="4"
          fill="#3FA9E5"
          className="animate-bar-rise"
          style={{ animationDelay: "0.55s" }}
        />
        {/* check — pulses, then pops. Teal marks the confirmed state. */}
        <circle
          cx="176"
          cy="104"
          r="22"
          fill="none"
          stroke="#8FD9D8"
          strokeWidth="2"
          className="animate-pulse-ring"
        />
        <circle cx="176" cy="104" r="22" fill="#DFF4F4" />
        <path
          d="M166 104 L173 111 L187 96"
          stroke="#35C2C0"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-pop"
        />
      </g>

      {/* person left */}
      <g transform="translate(48 132)">
        <g className="animate-bob" style={{ animationDelay: "0s" }}>
          <circle cx="34" cy="30" r="22" fill="#7BC8EE" />
          <path
            d="M4 116 C4 82 18 64 34 64 C50 64 64 82 64 116 Z"
            fill="#3FA9E5"
          />
        </g>
      </g>

      {/* person right */}
      <g transform="translate(348 132)">
        <g className="animate-bob" style={{ animationDelay: "-1.3s" }}>
          <circle cx="34" cy="30" r="22" fill="#A8D9F2" />
          <path
            d="M4 116 C4 82 18 64 34 64 C50 64 64 82 64 116 Z"
            fill="#7BC8EE"
          />
        </g>
      </g>

      {/* person center-front */}
      <g transform="translate(196 176)">
        <g className="animate-bob" style={{ animationDelay: "-2.6s" }}>
          <circle cx="34" cy="32" r="26" fill="#CDE8F7" />
          <path
            d="M0 128 C0 88 16 68 34 68 C52 68 68 88 68 128 Z"
            fill="#A8D9F2"
          />
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
