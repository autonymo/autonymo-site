import Image from "next/image";

export const RealEstateIllustration = () => (
  <Image
    src="/images/real-estate-os-cube.png"
    alt="Real Estate OS"
    width={779}
    height={789}
    className="w-full h-full object-cover"
    loading="lazy"
  />
);

export const DentalIllustration = () => (
  <Image
    src="/images/dental-os-cube.png"
    alt="Dental Clinic OS"
    width={779}
    height={789}
    className="w-full h-full object-cover"
    loading="lazy"
  />
);

export const CustomIllustration = () => (
  <Image
    src="/images/custom-solutions-cube.png"
    alt="Custom Solutions"
    width={779}
    height={789}
    className="w-full h-full object-cover"
    loading="lazy"
  />
);
