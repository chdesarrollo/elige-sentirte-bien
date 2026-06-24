"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowLeft } from "lucide-react";

const sections = [
  { name: "Niños", href: "/dashboard/ninos" },
  { name: "Jóvenes", href: "/dashboard/jovenes" },
  { name: "Adultos", href: "/dashboard/adultos" },
  { name: "Adultos Mayores", href: "/dashboard/adultos-mayores" },
  { name: "Parejas", href: "/dashboard/parejas" },
  { name: "Padres", href: "/dashboard/padres" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">

      
          
      {/* CONTENT */}
      <main>
        {children}
        
      </main>
    </div>
  );
}