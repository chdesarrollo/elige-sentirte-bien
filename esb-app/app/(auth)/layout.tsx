import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";



import { ReactNode } from "react";
import Image from "next/image";


export default function AuthLayout({children}:{children: ReactNode}) {
    return (
        <div className="relative flex min-h-svh flex-col items-center justify-center">
            <Link href="/" className={buttonVariants({variant: 'outline', className: 'absolute top-4 left-4'})}> <ArrowLeft className="size-4"/>Volver</Link>
            <div className="flex w-full max-w-sm flex-col gap-6"> 
                <Link href="/" className="flex items-center gap-2 self-center font-medium">  
                    <Image
                        src="/brand/esb-text.png"
                        alt="Logo Elige Sentirte Bien"
                        width={180}
                        height={60}
                        />
                </Link>
                {children} 
            </div>
            <div className="text-balance text-center text-xs text-muted-foreground">
                    Al continuar aceptas nuestros{" "}
                    <span className="underline cursor-pointer">
                        Términos y Condiciones
                    </span>{" "}
                    y{" "}
                    <span className="underline cursor-pointer">
                        Política de Privacidad
                    </span>
                    .
                    <p className="mt-3">
                        El contenido ofrecido en esta plataforma es de carácter educativo y de
                        autogestión. No constituye terapia psicológica ni reemplaza la atención
                        profesional. Si necesitas apoyo clínico, te recomendamos acudir a un
                        profesional de la salud calificado.
                    </p>
            </div>
        </div>
    );
}