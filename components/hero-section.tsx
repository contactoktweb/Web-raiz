"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Leaf, Sparkles, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const WHATSAPP_NUMBER = "573001234567"
const ASESORIA_MESSAGE =
  "Hola, me gustaría agendar una asesoría personalizada con Raíz Vital."

const MARQUEE_ITEMS = [
  "Suplementos Naturales",
  "Asesoría Personalizada",
  "Equilibrio Hormonal",
  "Bienestar Digestivo",
  "Salud Integral",
  "Productos 100% Naturales",
  "Envío Nacional",
  "Vitalidad Real",
]

function MarqueeStrip() {
  return (
    <div className="flex shrink-0 animate-[marquee_30s_linear_infinite] items-center gap-8">
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={i} className="flex shrink-0 items-center gap-3">
          <span className="font-sans text-sm font-medium uppercase tracking-widest text-secondary/80">
            {item}
          </span>
          <Leaf className="h-3.5 w-3.5 text-secondary/40" />
        </span>
      ))}
    </div>
  )
}

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(ASESORIA_MESSAGE)}`
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-primary">
      {/* Full-bleed background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-nature.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/70" />
        {/* Organic overlapping shapes for depth */}
        <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative flex min-h-screen flex-col justify-between">
        {/* Top section */}
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-32 pb-12 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Text content — takes 7 columns */}
            <div className="lg:col-span-7">
              {/* Pill badge */}
              <div
                className={`mb-8 transition-all duration-700 ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-5 py-2 text-sm font-medium text-secondary backdrop-blur-sm">
                  <Sparkles className="h-4 w-4" />
                  Blog Educativo & Tienda Naturista
                </span>
              </div>

              {/* Headline — oversized, dramatic */}
              <h1
                className={`font-serif text-5xl font-bold leading-[1.05] text-primary-foreground transition-all delay-150 duration-1000 md:text-7xl lg:text-8xl text-balance ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                Nutre tu
                <br />
                <span className="relative inline-block">
                  cuerpo
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-secondary"
                    viewBox="0 0 300 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8 C50 2, 100 2, 150 6 S250 10, 298 4"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                ,
                <br />
                <span className="italic text-secondary">Equilibra</span> tu vida
              </h1>

              {/* Paragraph */}
              <p
                className={`mt-8 max-w-lg text-lg leading-relaxed text-primary-foreground/70 transition-all delay-300 duration-1000 md:text-xl ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                No existen fórmulas genéricas. Encuentra la orientación
                personalizada y los productos naturales que tu cuerpo necesita
                para sanar desde la raíz.
              </p>

              {/* CTA buttons */}
              <div
                className={`mt-10 flex flex-col gap-4 sm:flex-row transition-all delay-500 duration-1000 ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="gap-2 rounded-full bg-secondary px-8 text-secondary-foreground hover:bg-secondary/90"
                  >
                    <Calendar className="h-5 w-5" />
                    Agendar Asesoría
                  </Button>
                </a>
                <Link href="/tienda">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 rounded-full border-primary-foreground/30 bg-transparent px-8 text-primary-foreground hover:border-primary-foreground/60 hover:bg-primary-foreground/10"
                  >
                    Explorar Tienda
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual — floating card with leaf image, 5 columns */}
            <div
              className={`relative hidden lg:col-span-5 lg:flex lg:items-center lg:justify-center transition-all delay-500 duration-1000 ${
                mounted
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-12 scale-95 opacity-0"
              }`}
            >
              {/* Main feature card */}
              <div className="relative">
                {/* Glow behind */}
                <div className="absolute -inset-8 rounded-3xl bg-secondary/20 blur-3xl" />

                <div className="relative h-[420px] w-[340px] overflow-hidden rounded-3xl border border-primary-foreground/10 bg-card/10 shadow-2xl backdrop-blur-md xl:h-[480px] xl:w-[380px]">
                  <Image
                    src="/images/hero-leaf.jpg"
                    alt="Naturaleza y bienestar"
                    fill
                    className="object-cover"
                    sizes="380px"
                    priority
                  />
                  <div className="absolute inset-0 bg-primary/20" />

                  {/* Overlay tag */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="rounded-2xl border border-primary-foreground/10 bg-primary/60 p-5 backdrop-blur-md">
                      <p className="font-serif text-lg font-semibold text-primary-foreground">
                        Sanar desde la raíz
                      </p>
                      <p className="mt-1 text-sm text-primary-foreground/70">
                        Productos 100% naturales
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating badge — top right */}
                <div className="absolute -top-4 -right-4 flex h-20 w-20 items-center justify-center rounded-full border border-secondary/30 bg-secondary shadow-xl">
                  <Leaf className="h-8 w-8 text-secondary-foreground" />
                </div>

                {/* Floating stats card — bottom left */}
                <div className="absolute -bottom-6 -left-8 rounded-2xl border border-primary-foreground/10 bg-primary/80 px-6 py-4 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
                      <Heart className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary-foreground">+500</p>
                      <p className="text-xs text-primary-foreground/60">
                        Vidas transformadas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div
            className={`mt-16 flex flex-wrap items-center gap-8 border-t border-primary-foreground/10 pt-8 transition-all delay-700 duration-1000 lg:mt-20 ${
              mounted
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            {[
              { label: "100% Natural", icon: Leaf },
              { label: "Asesoría Personalizada", icon: Sparkles },
              { label: "Envío Nacional", icon: Heart },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/15">
                  <item.icon className="h-4 w-4 text-secondary" />
                </div>
                <span className="text-sm font-medium text-primary-foreground/70">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom marquee strip */}
        <div className="relative border-t border-primary-foreground/10 bg-primary/50 py-4 backdrop-blur-sm">
          <div className="flex overflow-hidden">
            <MarqueeStrip />
            <MarqueeStrip />
          </div>
        </div>
      </div>
    </section>
  )
}
