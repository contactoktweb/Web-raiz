"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

const WHATSAPP_NUMBER = "573001234567"
const ASESORIA_MESSAGE =
  "Hola, me gustaría agendar una asesoría personalizada con Raíz Vital."

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(ASESORIA_MESSAGE)}`
  const [mounted, setMounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setMousePos({ x, y })
    }
    const section = sectionRef.current
    section?.addEventListener("mousemove", handleMouseMove)
    return () => section?.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const anim = (delay: number) =>
    `transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
      mounted
        ? "translate-y-0 opacity-100"
        : "translate-y-10 opacity-0"
    }` + ` delay-[${delay}ms]`

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-background pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Floating organic accent blobs that follow mouse */}
      <div
        className="pointer-events-none absolute top-20 -left-24 h-96 w-96 rounded-full bg-secondary/[0.06] blur-3xl transition-transform duration-[2000ms] ease-out"
        style={{
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
        }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-accent/[0.05] blur-3xl transition-transform duration-[2000ms] ease-out"
        style={{
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Top line: tiny label */}
        <div
          className={`mb-6 ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} transition-all duration-1000 delay-0`}
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-secondary" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
              Salud natural y consciente
            </span>
          </div>
        </div>

        {/* Massive editorial headline */}
        <div
          className={`${mounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} transition-all duration-[1200ms] delay-100`}
        >
          <h1 className="font-serif text-[clamp(2.8rem,8vw,7.5rem)] font-bold leading-[0.92] tracking-tight text-primary">
            <span className="block">Tu bienestar</span>
            <span className="flex items-baseline gap-4 lg:gap-6">
              <span className="text-secondary">merece</span>
              <span className="relative inline-block">
                raíces
                {/* Animated botanical underline */}
                <svg
                  className={`absolute -bottom-1 left-0 w-full transition-all duration-[1500ms] delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}
                  viewBox="0 0 300 16"
                  fill="none"
                  preserveAspectRatio="none"
                  style={{ height: "0.15em" }}
                >
                  <path
                    d="M0 12 C30 4, 60 4, 90 8 S150 14, 180 8 S240 2, 270 8 S295 12, 300 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-accent"
                    style={{
                      strokeDasharray: 400,
                      strokeDashoffset: mounted ? 0 : 400,
                      transition: "stroke-dashoffset 2s ease 0.8s",
                    }}
                  />
                </svg>
              </span>
            </span>
          </h1>
        </div>

        {/* Bento grid: asymmetric editorial layout */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5 lg:mt-16 lg:gap-6">
          {/* Main image panel — large */}
          <div
            className={`group relative md:col-span-7 lg:col-span-7 ${mounted ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"} transition-all duration-[1200ms] delay-200`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:rounded-3xl">
              <Image
                src="/images/hero-woman.jpg"
                alt="Mujer en armonía con la naturaleza"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              {/* Overlay gradient from bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />

              {/* Floating glass card inside image */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 lg:bottom-8 lg:left-8 lg:right-8">
                <div>
                  <p className="max-w-sm text-lg font-medium leading-snug text-primary-foreground lg:text-xl">
                    No existen fórmulas genéricas. Tu cuerpo merece una
                    orientación{" "}
                    <span className="font-serif italic">personalizada.</span>
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <Button
                    size="lg"
                    className="gap-2 rounded-full bg-secondary px-6 text-secondary-foreground shadow-xl hover:bg-secondary/90 hover:shadow-2xl"
                  >
                    <Calendar className="h-5 w-5" />
                    <span className="hidden sm:inline">Agendar Asesoría</span>
                    <span className="sm:hidden">Asesoría</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right column: stacked panels */}
          <div className="flex flex-col gap-4 md:col-span-5 lg:col-span-5 lg:gap-6">
            {/* Top-right: Ingredients image */}
            <div
              className={`group relative flex-1 ${mounted ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"} transition-all duration-[1200ms] delay-300`}
            >
              <div className="relative h-full min-h-[200px] overflow-hidden rounded-2xl lg:rounded-3xl">
                <Image
                  src="/images/hero-ingredients.jpg"
                  alt="Ingredientes naturales premium"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-primary/20" />
                <div className="absolute top-5 left-5 lg:top-6 lg:left-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-sm">
                    <Leaf className="h-3.5 w-3.5 text-secondary" />
                    100% Natural
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom-right: split into two */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {/* Stats card */}
              <div
                className={`${mounted ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"} transition-all duration-[1200ms] delay-[400ms]`}
              >
                <div className="flex h-full flex-col justify-between rounded-2xl bg-primary p-5 lg:rounded-3xl lg:p-6">
                  <div>
                    <p className="font-serif text-4xl font-bold text-primary-foreground lg:text-5xl">
                      +500
                    </p>
                    <p className="mt-1 text-sm leading-snug text-primary-foreground/60">
                      Vidas transformadas con nuestro acompañamiento
                    </p>
                  </div>
                  <div className="mt-4 flex -space-x-2">
                    {[
                      "bg-secondary",
                      "bg-accent",
                      "bg-secondary/70",
                      "bg-accent/70",
                    ].map((bg, i) => (
                      <div
                        key={i}
                        className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary text-[10px] font-bold text-primary-foreground ${bg}`}
                      >
                        {["MR", "LA", "CS", "JP"][i]}
                      </div>
                    ))}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-primary-foreground/10 text-[10px] font-bold text-primary-foreground">
                      +496
                    </div>
                  </div>
                </div>
              </div>

              {/* Product teaser card */}
              <div
                className={`group ${mounted ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"} transition-all duration-[1200ms] delay-500`}
              >
                <Link href="/tienda" className="block h-full">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card lg:rounded-3xl">
                    <div className="relative flex-1 overflow-hidden">
                      <Image
                        src="/images/hero-product.jpg"
                        alt="Producto natural Raíz Vital"
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                        sizes="(max-width: 768px) 50vw, 20vw"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-2 p-4 lg:p-5">
                      <span className="text-sm font-semibold text-primary">
                        Ver Tienda
                      </span>
                      <ArrowRight className="h-4 w-4 text-secondary transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust strip */}
        <div
          className={`mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8 lg:mt-16 lg:pt-10 ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} transition-all duration-[1200ms] delay-700`}
        >
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {[
              "Envío Nacional",
              "Asesoría Gratis",
              "Ingredientes Puros",
              "Resultados Reales",
            ].map((item, i) => (
              <div key={item} className="flex items-center gap-2.5">
                <div className="flex h-2 w-2 items-center justify-center rounded-full bg-secondary" />
                <span className="text-sm font-medium text-foreground/60">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
          >
            Leer nuestro blog
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
