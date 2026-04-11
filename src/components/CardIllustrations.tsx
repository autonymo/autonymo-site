import Image from "next/image";

export const RealEstateIllustration = ({ alt = "Real Estate OS" }: { alt?: string }) => (
  <Image
    src="/images/real-estate-os-cube.png"
    alt={alt}
    width={779}
    height={789}
    className="w-full h-full object-cover"
    loading="lazy"
  />
);

export const DentalIllustration = ({ alt = "Dental Clinic OS" }: { alt?: string }) => (
  <Image
    src="/images/dental-clinic-os-cube.png"
    alt={alt}
    width={779}
    height={789}
    className="w-full h-full object-cover"
    loading="lazy"
  />
);

export const IndustrialIllustration = ({ alt = "Industrial OS" }: { alt?: string }) => (
  <Image
    src="/images/industrial-os-cube.png"
    alt={alt}
    width={779}
    height={789}
    className="w-full h-full object-cover"
    loading="lazy"
  />
);

export const CustomIllustration = ({ alt = "Custom Solutions" }: { alt?: string }) => (
  <Image
    src="/images/custom-solutions-cube.png"
    alt={alt}
    width={779}
    height={789}
    className="w-full h-full object-cover"
    loading="lazy"
  />
);
