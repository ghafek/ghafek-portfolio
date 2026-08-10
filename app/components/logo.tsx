// The Arabic letter ghayn, the first letter of Ghafek, drawn as a vector path
// extracted from Reem Kufi (SIL OFL). Embedded as an outline so no font is
// loaded at runtime. Uses currentColor so it follows the surrounding text.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 370 768"
      className={className}
      fill="currentColor"
      role="img"
      aria-label="Ghafek Alsaho"
    >
      <g transform="translate(-19, 558) scale(1,-1)">
        <path d="M142 -200Q99 -186 66.5 -150.0Q34 -114 34 -59Q34 -22 44.0 4.5Q54 31 70 53Q40 81 29.5 116.0Q19 151 25.5 187.0Q32 223 52.5 253.0Q73 283 105.0 301.5Q137 320 178 320Q212 320 236.5 303.5Q261 287 275.5 264.5Q290 242 292 224Q267 243 244.0 250.5Q221 258 202 254Q185 252 171.5 236.5Q158 221 158 204Q158 187 169.0 172.5Q180 158 201.5 149.0Q223 140 256 140H359L299 0H236Q224 0 207.0 -7.5Q190 -15 177.5 -30.5Q165 -46 165 -72Q165 -104 182.0 -123.5Q199 -143 225.5 -151.5Q252 -160 282.5 -161.0Q313 -162 341.5 -158.0Q370 -154 389 -147Q372 -168 342.0 -182.0Q312 -196 276.5 -203.0Q241 -210 206.0 -209.5Q171 -209 142 -200ZM174 442Q150 442 133.0 459.0Q116 476 116 500Q116 524 133.0 541.0Q150 558 174 558Q198 558 215.0 541.0Q232 524 232 500Q232 476 215.0 459.0Q198 442 174 442Z" />
      </g>
    </svg>
  );
}
