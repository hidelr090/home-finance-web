export const Logo = () => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#667eea" />
        <stop offset="100%" stopColor="#764ba2" />
      </linearGradient>
      <filter id="glass" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#764ba2" floodOpacity="0.3" />
      </filter>
    </defs>
    {/* Casa estilizada */}
    <path
      d="M12 30 L32 12 L52 30 V52 H12 Z"
      stroke="url(#grad)"
      strokeWidth="3"
      fill="url(#grad)"
      filter="url(#glass)"
      fillOpacity="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Moeda / círculo */}
    <circle
      cx="32"
      cy="40"
      r="10"
      stroke="url(#grad)"
      strokeWidth="3"
      fill="none"
      filter="url(#glass)"
    />
    {/* Símbolo $ estilizado dentro da moeda */}
    <path
      d="M32 34 L32 46 M28 36 H36 M28 44 H36"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
