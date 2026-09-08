export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 460"
      fill="none"
      role="img"
      aria-label="Medical billing claim being processed and approved"
      className={className}
    >
      <defs>
        <linearGradient id="bsCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f4f9ff" />
        </linearGradient>
        <linearGradient id="bsBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6ec2f5" />
          <stop offset="100%" stopColor="#3a9ce4" />
        </linearGradient>
      </defs>

      {/* soft background blobs */}
      <circle cx="400" cy="96" r="86" fill="#e3f2fd" />
      <circle cx="86" cy="360" r="60" fill="#eaf5fe" />

      {/* back card — chart / analytics */}
      <g transform="translate(252 34)">
        <rect
          width="236"
          height="150"
          rx="16"
          fill="url(#bsCard)"
          stroke="#d6e8f8"
        />
        <rect x="20" y="22" width="86" height="9" rx="4.5" fill="#cfe6f8" />
        <rect x="20" y="112" width="196" height="8" rx="4" fill="#eef6fd" />
        {/* bars — grow from the baseline, staggered */}
        <rect
          x="98"
          y="84"
          width="20"
          height="18"
          rx="4"
          fill="#bfe0f7"
          className="animate-bar-rise"
          style={{ animationDelay: "0.1s" }}
        />
        <rect
          x="126"
          y="72"
          width="20"
          height="30"
          rx="4"
          fill="#93cdf1"
          className="animate-bar-rise"
          style={{ animationDelay: "0.25s" }}
        />
        <rect
          x="154"
          y="58"
          width="20"
          height="44"
          rx="4"
          fill="#6ec2f5"
          className="animate-bar-rise"
          style={{ animationDelay: "0.4s" }}
        />
        <rect
          x="182"
          y="46"
          width="20"
          height="56"
          rx="4"
          fill="#3a9ce4"
          className="animate-bar-rise"
          style={{ animationDelay: "0.55s" }}
        />
        {/* trend line — draws itself */}
        <path
          d="M24 92 L62 74 L110 80 L192 44"
          stroke="#3a9ce4"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-trend-draw"
        />
        <circle
          cx="192"
          cy="44"
          r="4.5"
          fill="#3a9ce4"
          className="animate-pop"
        />
      </g>

      {/* main claim document */}
      <g transform="translate(40 92)">
        <rect
          width="286"
          height="316"
          rx="20"
          fill="url(#bsCard)"
          stroke="#d6e8f8"
        />

        {/* header bar */}
        <rect x="26" y="30" width="118" height="12" rx="6" fill="#3a9ce4" />
        <rect x="26" y="54" width="76" height="9" rx="4.5" fill="#cfe6f8" />

        {/* line items — fill in one after another */}
        {[104, 140, 176, 212].map((y, i) => (
          <g
            key={y}
            className="animate-row-in"
            style={{ animationDelay: `${0.35 + i * 0.18}s` }}
          >
            <rect
              x="26"
              y={y}
              width="14"
              height="14"
              rx="4"
              fill={i === 3 ? "#6ec2f5" : "#e3f2fd"}
            />
            <rect
              x="50"
              y={y + 3}
              width={[150, 128, 164, 112][i]}
              height="8"
              rx="4"
              fill="#e8f3fc"
            />
            <rect
              x="228"
              y={y + 3}
              width="32"
              height="8"
              rx="4"
              fill="#dceefb"
            />
          </g>
        ))}

        {/* total row */}
        <rect x="26" y="256" width="234" height="1.5" fill="#dceefb" />
        <rect x="26" y="272" width="64" height="10" rx="5" fill="#cfe6f8" />
        <rect x="196" y="270" width="64" height="14" rx="7" fill="#3a9ce4" />
      </g>

      {/* approved badge — pulses, then the check pops in */}
      <g transform="translate(232 300)">
        <circle cx="56" cy="56" r="56" fill="#ffffff" />
        <circle
          cx="56"
          cy="56"
          r="46"
          fill="none"
          stroke="#6ec2f5"
          strokeWidth="3"
          className="origin-center animate-pulse-ring"
        />
        <circle
          cx="56"
          cy="56"
          r="46"
          fill="url(#bsBlue)"
          className="origin-center animate-heartbeat"
        />
        <path
          d="M38 57 L50 69 L75 44"
          stroke="#ffffff"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-pop"
        />
      </g>

      {/* small floating shield */}
      <g transform="translate(382 226)">
        <rect width="72" height="72" rx="18" fill="#ffffff" stroke="#d6e8f8" />
        <path
          d="M36 18 L52 25 V38 C52 47 45 53 36 56 C27 53 20 47 20 38 V25 Z"
          fill="#e3f2fd"
          stroke="#6ec2f5"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M30 37 L34.5 41.5 L43 32"
          stroke="#3a9ce4"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-pop"
        />
      </g>
    </svg>
  );
}
