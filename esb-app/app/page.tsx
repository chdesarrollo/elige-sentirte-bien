"use client";

import { useState } from "react";
import { Heart, Brain, Leaf, Briefcase, DollarSign, Users, Star, ArrowRight, Play, CheckCircle, Menu, X, Flame, ChevronRight } from "lucide-react";
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Montserrat } from "next/font/google";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="flex min-h-screen flex-col">

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

    {/* MENÚ DESKTOP */}
    <div className="hidden md:flex items-center gap-8">

      <Link
        href="/dashboard"
        className="text-white/80 hover:text-white transition"
      >
        Procesos
      </Link>

      <a
        href="#areas"
        className="text-white/80 hover:text-white transition"
      >
        Áreas de Bienestar
      </a>

      <a
        href="#segmentos"
        className="text-white/80 hover:text-white transition"
      >
        Para quién es
      </a>
      <a
        href="#como-funciona"
        className="text-white/80 hover:text-white transition"
      >
        Cómo funciona
      </a>

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
          Comenzar
        </Link>
      </Button>

    </div>

    {/* MOBILE */}
    <div className="md:hidden flex items-center gap-2">

      <Button asChild size="sm">
        <Link href="/register">
          Comenzar
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

        <a href="/dashboard" className="text-white">
          Procesos
        </a>

        <a href="#areas" className="text-white">
          Áreas de Bienestar
        </a>
        
        <a href="#segmentos" className="text-white">
          Para quién es
        </a>
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

{/* HERO */}
<section
  className="relative flex items-center min-h-screen bg-cover bg-center overflow-hidden"
  style={{
    background:
      "linear-gradient(180deg, #43135E 0%, #4A1C68 50%, #4B2169 100%)",
  }}
>
  {/* Glow superior */}
  <div
  className="
    absolute
    top-[-250px]
    left-1/2
    -translate-x-1/2
    w-[1200px]
    h-[800px]
    opacity-50
    pointer-events-none
  "
  style={{
    background:
      "radial-gradient(circle, rgba(244,76,127,0.35) 0%, transparent 70%)",
  }}
/>

  <div className="max-w-6xl mx-auto px-6">

    <div className="py-28 md:py-36">

      <div className="max-w-[650px]">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8 border"
          style={{
            background: "rgba(255,255,255,0.06)",
            borderColor: "rgba(255,255,255,0.15)",
          }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "#F44C7F" }}
          />

          <span className="text-white/75 text-sm tracking-wide uppercase">
            Bienestar Integral · 8 Dimensiones
          </span>
        </div>

        {/* Title */}
        <h1
         className="font-bold text-white leading-[1.1]"
          style={{
            fontSize: "clamp(2rem, 3.5vw, 4rem)",
          }}
        >
          Solo se{" "}
          <span
            className="italic"
            style={{
              color: "#FF5A8B",
            }}
          >
            transforma
          </span>
          <br />
          aquello que se identifica y
          <br />  
          se reconoce
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          La transformación comienza cuando una persona
          nombra, reconoce y acepta lo que vive y eso es
          exactamente lo que nuestra plataforma facilita.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-4 w-full sm:w-auto">

          <Button
            asChild
            size="lg"
            className="
              h-14
              w-full
              text-lg
              font-semibold
              border-0
              shadow-[0_8px_32px_rgba(244,76,127,0.4)]
            "
            style={{
              background: "#F44C7F",
            }}
          >
            <Link
              href="/dashboard"
              className="flex items-center justify-center gap-2"
            >
              Explorar procesos
              <ArrowRight size={20} />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="
              h-14
              w-full
              text-lg
              text-white
              bg-white/5
              border-white/15
              hover:bg-white/10
            "
          >
            <Link
              href="/login"
              className="flex items-center justify-center gap-2"
            >
              <Play size={20} fill="white" />
              Ver cómo funciona
            </Link>
          </Button>

        </div>

      </div>

    </div>

  </div>
</section>
     {/* VALUE PROP */}
<section className="bg-white py-20">
  <div className="max-w-4xl mx-auto px-6">

    <p
      className="text-xs font-semibold uppercase tracking-[0.25em] mb-4"
      style={{ color: "#F44C7F" }}
    >
      POR QUÉ ELIGE SENTIRTE BIEN
    </p>

    <h2
      className="text-4xl md:text-5xl font-bold leading-tight mb-14"
      style={{ color: "#2E0A4D" }}
    >
      El bienestar no es un lujo: es la base de todo lo demás
    </h2>

    <div className="flex flex-col gap-10">

      {[
        {
          icon: CheckCircle,
          title: "Aprendizaje que encaja en tu vida",
          desc: "Actividades diseñadas para personas reales con agendas llenas. Aprende cuando quieras, donde quieras.",
        },
        {
          icon: Users,
          title: "Para cada etapa de tu vida",
          desc: "Desde niños hasta adultos mayores — procesos diseñados específicamente para los retos que vives hoy.",
        },
        {
          icon: Heart,
          title: "Bienestar integral",
          desc: "Trabajamos todas las áreas que influyen en tu calidad de vida para generar cambios sostenibles.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="flex gap-5 items-start"
        >
          <div
            className="
              w-14
              h-14
              rounded-2xl
              flex
              items-center
              justify-center
              flex-shrink-0
            "
            style={{
              background: "#FCE7EF",
            }}
          >
            <item.icon
              size={24}
              strokeWidth={2}
              style={{
                color: "#F44C7F",
              }}
            />
          </div>

          <div>

            <h3
              className="font-semibold text-2xl mb-2"
              style={{ color: "#2E0A4D" }}
            >
              {item.title}
            </h3>

            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
              {item.desc}
            </p>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

{/* ÁREAS DEL BIENESTAR */}
<section
  id="areas"
  className="py-24"
  style={{
    background: "#F7F3FB",
  }}
>
  <div className="max-w-4xl mx-auto px-6">

    <p
      className="text-xs font-semibold uppercase tracking-[0.25em] mb-4"
      style={{ color: "#F44C7F" }}
    >
      8 DIMENSIONES DEL SER
    </p>

    <h2
      className="text-4xl md:text-5xl font-bold leading-tight mb-14"
      style={{ color: "#2E0A4D" }}
    >
      Tu vida es multidimensional.
      <br />
      Tu bienestar también.
    </h2>

    <div className="grid grid-cols-2 gap-4">

      {[
        {
          icon: Heart,
          title: "Emocional",
          desc: "Plan Maestro",
          bg: "#FDF0F3",
          border: "#F8D6DF",
          iconBg: "#FBE2E8",
          iconColor: "#F44C7F",
        },
        {
          icon: Flame,
          title: "Física",
          desc: "Cómo funciona realmente tu energía durante el día",
          bg: "#FCF7EE",
          border: "#F1DFC0",
          iconBg: "#F9EBD4",
          iconColor: "#FF7A1A",
        },
        {
          icon: Star,
          title: "Espiritual",
          desc: "Propósito y paz interior",
          bg: "#F4F0FC",
          border: "#E2D8F8",
          iconBg: "#ECE5FB",
          iconColor: "#7B61FF",
        },
        {
          icon: Brain,
          title: "Intelectual",
          desc: "Mente clara y creativa",
          bg: "#EEF8FC",
          border: "#D5EDF8",
          iconBg: "#DFF3FB",
          iconColor: "#0EA5E9",
        },
        {
          icon: Users,
          title: "Social",
          desc: "Relaciones sanas y auténticas",
          bg: "#EEF8F3",
          border: "#D3EDDF",
          iconBg: "#DCF5E8",
          iconColor: "#10B981",
        },
        {
          icon: DollarSign,
          title: "Financiera",
          desc: "Bienestar económico consciente",
          bg: "#F8FAEC",
          border: "#E7EEC7",
          iconBg: "#EEF5D8",
          iconColor: "#84CC16",
        },
        {
          icon: Briefcase,
          title: "Profesional",
          desc: "Crecimiento y propósito laboral",
          bg: "#F8F2EE",
          border: "#ECDCCF",
          iconBg: "#F2E5DC",
          iconColor: "#C26B2F",
        },
        {
          icon: Leaf,
          title: "Ambiental",
          desc: "Armonía con tu entorno",
          bg: "#EEF8F1",
          border: "#D7ECD9",
          iconBg: "#DDF3E1",
          iconColor: "#22C55E",
        },
      ].map((area) => (
        <Card
          key={area.title}
          className="
            rounded-3xl
            shadow-none
            transition-all
            duration-300
            hover:-translate-y-1
          "
          style={{
            background: area.bg,
            borderColor: area.border,
          }}
        >
          <CardContent className="p-5">

            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
              style={{
                background: area.iconBg,
              }}
            >
              <area.icon
                size={20}
                strokeWidth={2.2}
                style={{
                  color: area.iconColor,
                }}
              />
            </div>

            <h3
              className="font-semibold text-xl mb-2"
              style={{
                color: "#2E0A4D",
              }}
            >
              {area.title}
            </h3>

            <p
              className="text-sm leading-relaxed"
              style={{
                color: "#8B8B9D",
              }}
            >
              {area.desc}
            </p>

          </CardContent>
        </Card>
      ))}

    </div>

  </div>
</section>
{/* CÓMO FUNCIONA */}
<section className="bg-white py-24" id="como-funciona">
  <div className="max-w-6xl mx-auto px-6">

    <div className="max-w-3xl mb-16">

      <p
        className="text-xs font-semibold uppercase tracking-[0.25em] mb-4"
        style={{ color: "#F44C7F" }}
      >
        CÓMO FUNCIONA
      </p>

      <h2
        className="text-4xl md:text-5xl font-bold leading-tight"
        style={{ color: "#2E0A4D" }}
      >
        Un camino simple para generar cambios reales
      </h2>

    </div>

    <div className="grid md:grid-cols-4 gap-5">

      {[
        {
          number: "01",
          title: "Reconoce",
          desc: "Identifica las áreas de tu vida que necesitan atención y descubre dónde enfocar tu energía.",
          bg: "#FDF0F3",
          border: "#F8D6DF",
        },
        {
          number: "02",
          title: "Explora",
          desc: "Accede a procesos diseñados para cada dimensión de tu bienestar.",
          bg: "#F4F0FC",
          border: "#E2D8F8",
        },
        {
          number: "03",
          title: "Aplica",
          desc: "Integra actividades prácticas y herramientas que puedes usar en tu día a día.",
          bg: "#EEF8FC",
          border: "#D5EDF8",
        },
        {
          number: "04",
          title: "Transforma",
          desc: "Construye hábitos sostenibles y observa cambios positivos a lo largo del tiempo.",
          bg: "#EEF8F3",
          border: "#D3EDDF",
        },
      ].map((step) => (
        <Card
          key={step.number}
          className="rounded-3xl shadow-none h-full"
          style={{
            background: step.bg,
            borderColor: step.border,
          }}
        >
          <CardContent className="p-6">

            <div
              className="text-sm font-bold mb-6"
              style={{
                color: "#F44C7F",
              }}
            >
              {step.number}
            </div>

            <h3
              className="text-xl font-semibold mb-3"
              style={{
                color: "#2E0A4D",
              }}
            >
              {step.title}
            </h3>

            <p
              className="leading-relaxed text-sm"
              style={{
                color: "#7B7B8A",
              }}
            >
              {step.desc}
            </p>

          </CardContent>
        </Card>
      ))}

    </div>

  </div>
</section>
 {/* ── FINAL CTA ────────────────────────── */}
      <section className="bg-white px-5 py-16">
        <div className="max-w-md mx-auto text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "#F44C7F" }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/brand/white-icon.png"
                alt="Elige Sentirte Bien"
                width={48}
                height={6}
              />
            </div>
          </div>
          <h2
            className="font-display text-3xl font-semibold leading-tight mb-4"
            style={{ color: "#3D1152" }}
          >
            Cada día que esperas es un día sin la{" "}
            <span className="italic" style={{ color: "#F44C7F" }}>
              mejor versión
            </span>{" "}
            de ti
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Únete a más personas que decidieron invertir en su bienestar. Tu
            primer paso empieza hoy.
          </p>
          <Link
            href="/register"
          >
          <button
            className="w-full text-white font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all mb-3 shadow-xl"
            style={{
              background: "#F44C7F",
              boxShadow: "0 12px 40px rgba(244,76,127,0.35)",
            }}
          >
            Empezar mi transformación <ArrowRight size={20} />
          </button>
          </Link>
        </div>
      </section>
      {/* FOOTER */}
<footer
  className="py-20 px-6"
  style={{
    background: "#14001F",
  }}
>
  <div className="max-w-5xl mx-auto">

    {/* TOP */}
    <div className="flex flex-col md:flex-row justify-between gap-12">

      {/* BRAND */}
      <div className="max-w-md">

        <Link
          href="/"
          className="flex items-center gap-4 mb-8"
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
            style={{
              background: "#F44C7F",
            }}
          >
            e
          </div>

          <span className="text-white text-3xl font-bold">
            Elige Sentirte Bien
          </span>
        </Link>

        <p className="text-white/60 text-lg leading-relaxed">
          Procesos de bienestar integral para todas las etapas
          de la vida.
          <br />
          Aprende, crece y florece — a tu ritmo.
        </p>

      </div>

      {/* LINKS */}
      <div className="grid grid-cols-2 gap-16">

        <div>

          <h3 className="text-white/80 uppercase tracking-[0.15em] text-sm mb-6">
            Plataforma
          </h3>

          <div className="flex flex-col gap-4">

            <Link
              href="/dashboard"
              className="text-white/60 hover:text-white transition"
            >
              Procesos
            </Link>

            <Link
              href="/comunidad"
              className="text-white/60 hover:text-white transition"
            >
              Comunidad
            </Link>

            <Link
              href="/blog"
              className="text-white/60 hover:text-white transition"
            >
              Blog
            </Link>

          </div>

        </div>

        <div>

          <h3 className="text-white/80 uppercase tracking-[0.15em] text-sm mb-6">
            Compañía
          </h3>

          <div className="flex flex-col gap-4">

            <Link
              href="/nosotros"
              className="text-white/60 hover:text-white transition"
            >
              Sobre nosotros
            </Link>

            <Link
              href="/privacidad"
              className="text-white/60 hover:text-white transition"
            >
              Privacidad
            </Link>

            <Link
              href="/terminos"
              className="text-white/60 hover:text-white transition"
            >
              Términos
            </Link>

            <Link
              href="/contacto"
              className="text-white/60 hover:text-white transition"
            >
              Contacto
            </Link>

          </div>

        </div>

      </div>

    </div>

    {/* DIVIDER */}
    <div className="mt-16 border-t border-white/10" />

    {/* BOTTOM */}
    <div className="pt-8 text-center">

      <p className="text-white/40">
        © {new Date().getFullYear()} Elige Sentirte Bien.
        Todos los derechos reservados.
      </p>

    </div>

  </div>
</footer>

    </main>
  )
}
