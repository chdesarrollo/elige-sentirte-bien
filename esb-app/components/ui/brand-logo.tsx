import Image from "next/image";

type BrandLogoProps = {
  variant?: "full" | "icon";
  className?: string;
};

export function BrandLogo({ variant = "full", className }: BrandLogoProps) {
  if (variant === "icon") {
    return (
      <Image
        src="/brand/logo-icon.png"
        alt="Elige Sentirte Bien"
        width={40}
        height={40}
        className={className}
        priority
      />
    );
  }

  return (
    <>
      {/* Versión modo claro */}
      <Image
        src="/brand/logo-full-light.png"
        alt="Elige Sentirte Bien"
        width={160}
        height={40}
        className={`block dark:hidden ${className ?? ""}`}
        priority
      />

      {/* Versión modo oscuro */}
      <Image
        src="/brand/logo-full-dark.png"
        alt="Elige Sentirte Bien"
        width={160}
        height={40}
        className={`hidden dark:block ${className ?? ""}`}
        priority
      />
    </>
  );
}