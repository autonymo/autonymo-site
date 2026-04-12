import type { SVGProps } from "react";

export const ToothIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2C9.5 2 8 3.5 7 5S5 8 5 10c0 3 1 5 2 8 .7 2.1 1.5 4 3 4s1.5-2 2-4c.5 2 .5 4 2 4s2.3-1.9 3-4c1-3 2-5 2-8 0-2-1-4.5-2-5S14.5 2 12 2z" />
  </svg>
);
