"use client";


import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { courses } from "@/components/course/data";
import { ArrowLeft, Search, Filter, Menu, X} from "lucide-react";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function ExplorerPage() {
  const router = useRouter();

const handleLogout = async () => {
  await authClient.signOut();
  router.push("/login");
};
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSegment, setSelectedSegment] =
  useState("todos");

  const segments = [
  { name: "Todos", slug: "todos" },
  { name: "Niños", slug: "ninos" },
  { name: "Jóvenes", slug: "jovenes" },
  { name: "Adultos", slug: "adultos" },
  { name: "Adultos Mayores", slug: "adultos-mayores" },
  { name: "Padres", slug: "padres" },
  { name: "Parejas", slug: "parejas" },
];
  const filteredCourses = courses.filter((course) => {
  const matchesSearch =
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.dimension.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesSegment =
    selectedSegment === "todos" ||
    course.section === selectedSegment;

  return matchesSearch && matchesSegment;
});
const [menuOpen, setMenuOpen] = useState(false);
  return (
   <main className="overflow-hidden">
     {/* NAVBAR */}
      <nav
  className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
  style={{
    background: "rgba(61,17,82,0.97)",
    backdropFilter: "blur(12px)",
  }}
>
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

    {/* LOGO */}
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div className="flex items-center justify-center">
        <Image src="/brand/white-icon.png" alt="Elige Sentirte Bien" width={80} height={10}/>
        <span className="text-white text-xl font-italic font-bold">
          Elige Sentirte Bien
        </span>
        </div>
    </Link>

        <Button onClick={handleLogout} variant="ghost">
          Cerrar Sesión
        </Button>

    {/* MENÚ DESKTOP */}
    <div className="hidden md:flex items-center gap-8">
    </div>

    {/* BOTONES DESKTOP */}
    <div className="hidden md:flex items-center gap-3">

      <Button
        asChild
        variant="ghost"
        className="text-white hover:text-white hover:bg-white/10"
      >
        <Link href="/login">
          Iniciar sesión
        </Link>
      </Button>

      <Button asChild>
        <Link href="/register">
          Regístrate
        </Link>
      </Button>

    </div>

    {/* MOBILE */}
    <div className="md:hidden flex items-center gap-2">

      <Button asChild size="sm">
        <Link href="/register">
          Regístrate
        </Link>
      </Button>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

    </div>

  </div>

  {menuOpen && (
    <div
      className="md:hidden px-6 py-5 border-t border-white/10"
      style={{ background: "#3D1152" }}
    >
      <div className="flex flex-col gap-4">

        <Button
          asChild
          variant="ghost"
          className="justify-start text-white"
        >
          <Link href="/login">
            Iniciar sesión
          </Link>
        </Button>


      </div>
    </div>
  )}
</nav>
    {/* HERO SECTION */}
    <section
        className="relative w-full py-24"
         style={{
          background:
            "linear-gradient(160deg, #3D1152 0%, #442563 70%, #5a1f7a 100%)",
        }}
      >
        {/* Orb decoration */}
        <div
          className="absolute top-0 right-0 w-56 h-56 rounded-full opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #F44C7F 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />

        <div className="relative z-10 max-w-md w-full mx-auto"
        >
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
          



          {/* Title */}
          <h1 className="font-display text-white text-[2.2rem] font-semibold leading-[1.1] mb-3">
            Explora todos nuestros{" "}
            <span
              className="italic"
              style={{ color: "#F44C7F" }}
            >
              procesos
            </span>
          </h1>

          <p className="text-white/65 text-base leading-relaxed mb-6">
            Más de 25  procesos de bienestar
            pensados para los retos que vives hoy
          </p>

          {/* Search bar */}
          <div className="relative mb-5">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
              size={18}
            />
            <input
              type="text"
              placeholder="Buscar por nombre o área..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl text-white placeholder:text-white/40 border border-white/10 focus:border-white/30 outline-none transition-all"
              style={{ background: "rgba(255,255,255,0.08)" }}
            />
          </div>

          {/* Stats */}
          <div className="flex gap-4 text-center">
            <div
              className="flex-1 rounded-xl py-3 px-4"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="font-semibold text-2xl mb-0.5"
                style={{ color: "#F44C7F" }}
              >
                25+
              </div>
              <div className="text-white/50 text-xs">
                Procesos para ti
              </div>
            </div>
            <div
              className="flex-1 rounded-xl py-3 px-4"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="font-semibold text-2xl mb-0.5"
                style={{ color: "#F44C7F" }}
              >
                8
              </div>
              <div className="text-white/50 text-xs">Áreas del bienestar</div>
            </div>
            <div
              className="flex-1 rounded-xl py-3 px-4"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="font-semibold text-2xl mb-0.5"
                style={{ color: "#F44C7F" }}
              >
                6
              </div>
              <div className="text-white/50 text-xs">
                Segmentos
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="py-12 bg-white">
  
  <div
  className="
    flex
    gap-3
    overflow-x-auto
    no-scrollbar
    px-6
    pb-2
    mb-6
    whitespace-nowrap"

>
  
  {segments.map((segment) => (
    <button
      key={segment.slug}
      onClick={() => setSelectedSegment(segment.slug)}
      className={`
        flex-shrink-0
        px-5
        py-2.5
        rounded-full
        text-sm
        font-medium
        transition-all
        ${
          selectedSegment === segment.slug
            ? "bg-[#3D1152] text-white"
            : "bg-[#EDE4F6] text-[#7A5A8A] hover:bg-[#E4D8F0]"
        }
      `}
    >
      {segment.name}
    </button>
  ))}
</div>
  <div className="max-w-7xl mx-auto px-6">

    <h2
      className="text-3xl font-bold mb-8"
      style={{ color: "#3D1152" }}
    >
      Procesos ({filteredCourses.length})
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {filteredCourses.map((course) => (
        <Link
          key={course.id}
          href={`/dashboard/course/${course.id}`}
          className="group"
        >
  <div
    className="
      h-full
      rounded-3xl
      border
      overflow-hidden
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
    "
    style={{
      background: "#faf5ff",
      borderColor: "rgba(68,37,99,0.10)",
    }}
  >
    {/* Header */}
    <div className="p-5 pb-4">
      <div className="flex gap-2 mb-4">
        <span
          className="
            px-3 py-1
            rounded-full
            text-xs
            font-medium
            capitalize
          "
          style={{
            background: "#f0e8f8",
            color: "#7a5a8a",
          }}
        >
          {course.section}
        </span>

        <span
          className="
            px-3 py-1
            rounded-full
            text-xs
            font-medium
            capitalize
          "
          style={{
            background: "rgba(244,76,127,0.12)",
            color: "#F44C7F",
          }}
        >
          {course.dimension}
        </span>
      </div>

      <h3
        className="
          text-xl
          font-semibold
          leading-snug
          mb-3
          group-hover:text-[#F44C7F]
          transition-colors
        "
        style={{ color: "#3D1152" }}
      >
        {course.title}
      </h3>

      <div
        className="
          text-sm
          leading-relaxed
          line-clamp-3
          min-h-[72px]
        "
        style={{ color: "#7a5a8a" }}
        dangerouslySetInnerHTML={{
          __html: course.description,
        }}
      />
    </div>

    {/* Footer */}
    <div
      className="
        px-5
        py-4
        border-t
        flex
        items-center
        justify-between
      "
      style={{
        borderColor: "rgba(68,37,99,0.08)",
      }}
    >
      <div>
        <p
          className="text-xs mb-1"
          style={{ color: "#9CA3AF" }}
        >
          Precio
        </p>

        <p
          className="font-bold text-lg"
          style={{ color: "#3D1152" }}
        >
          ${course.price}
          <span className="ml-1 text-sm font-normal text-gray-400">
            USD
          </span>
        </p>
      </div>

      <div
        className="
          px-4
          py-2.5
          rounded-xl
          text-sm
          font-semibold
          text-white
          transition-all
          group-hover:scale-105
        "
        style={{
          background: "#3D1152",
        }}
      >
        Ver proceso
      </div>
    </div>
  </div>
</Link>
      ))}

    </div>

  </div>
</section>






    </main>
  );
}