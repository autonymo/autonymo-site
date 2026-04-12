import Image from "next/image";

export const RealEstateIllustration = ({ alt = "Real Estate OS" }: { alt?: string }) => (
  <Image
    src="/images/real-estate-os-illustration.svg"
    alt={alt}
    width={1024}
    height={1024}
    className="w-full h-full object-cover scale-[1.08] origin-top-left"
    loading="lazy"
  />
);

export const DentalIllustration = ({ alt = "Dental Clinic OS" }: { alt?: string }) => (
  <Image
    src="/images/dental-clinic-os-illustration.svg"
    alt={alt}
    width={1024}
    height={1024}
    className="w-full h-full object-cover scale-[1.12] origin-center"
    loading="lazy"
  />
);

export const CustomIllustration = ({ alt = "Custom Solutions" }: { alt?: string }) => (
  <svg
    viewBox="0 0 1024 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={alt}
    className="w-full h-full"
  >
    <rect width="1024" height="1024" fill="#1F1F1F" />

    {/* Block A — Base platform (6×6×1) */}
    <polygon points="512,702 764,558 512,414 260,558" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinejoin="round" />
    <polygon points="512,750 764,606 764,558 512,702" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinejoin="round" />
    <polygon points="512,750 260,606 260,558 512,702" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinejoin="round" />

    {/* Block B — Tall left tower (3×3, 3 units tall) */}
    <polygon points="386,486 512,414 386,342 260,414" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinejoin="round" />
    <polygon points="386,630 512,558 512,414 386,486" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinejoin="round" />
    <polygon points="386,630 260,558 260,414 386,486" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinejoin="round" />

    {/* Block C — Medium right block (3×3, 2 units tall) */}
    <polygon points="638,534 764,462 638,390 512,462" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinejoin="round" />
    <polygon points="638,630 764,558 764,462 638,534" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinejoin="round" />
    <polygon points="638,630 512,558 512,462 638,534" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinejoin="round" />

    {/* Block E — Floating blue piece (3×3, 2 units tall, hovering above front-left gap) */}
    <polygon points="512,510 638,438 512,366 386,438" stroke="#2D7FF9" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
    <polygon points="512,606 638,534 638,438 512,510" stroke="#2D7FF9" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
    <polygon points="512,606 386,534 386,438 512,510" stroke="#2D7FF9" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
  </svg>
);
