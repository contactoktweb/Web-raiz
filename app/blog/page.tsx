"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Clock, ArrowRight, Leaf, Search } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { blogPosts } from "@/components/blog-preview"
import { useState, useEffect, useRef } from "react"

const allCategories = ["Todos", "Adulto Mayor", "Sistema Nervioso", "Hormonal", "Metabolismo", "Infantil"]

export default function BlogPage() {
  const [active, setActive] = useState("Todos")
  const [mounted, setMounted] = useState(false)
  const [gridVisible, setGridVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setGridVisible(true) },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const filtered = active === "Todos" ? blogPosts : blogPosts.filter(p => p.category === active)
  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero header */}
        <section className="relative overflow-hidden bg-primary pt-28 pb-20 lg:pt-36 lg:pb-28">
          {/* Decorative dot grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, #F8F6F0 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Large decorative number */}
          <div className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none font-serif text-[18rem] font-bold leading-none text-primary-foreground/[0.03] lg:text-[28rem]">
            {"05"}
          </div>

          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Left: text */}
              <div>
                <div
                  className={`transition-all duration-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                >
                  <div className="flex items-center gap-3">
                    <Leaf className="h-4 w-4 text-secondary" />
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                      Conocimiento natural
                    </span>
                  </div>
                </div>
                <h1
                  className={`mt-6 font-serif text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] text-primary-foreground transition-all duration-[1200ms] delay-100 ${mounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
                >
                  Blog{" "}
                  <span className="relative inline-block font-serif italic text-secondary">
                    Educativo
                    <svg
                      className={`absolute -bottom-1 left-0 w-full transition-all duration-[1500ms] delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}
                      viewBox="0 0 200 8"
                      fill="none"
                      preserveAspectRatio="none"
                      style={{ height: "0.1em" }}
                    >
                      <path
                        d="M0 5 C40 1, 80 7, 120 3 S180 6, 200 2"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="text-secondary"
                        style={{
                          strokeDasharray: 250,
                          strokeDashoffset: mounted ? 0 : 250,
                          transition: "stroke-dashoffset 1.8s ease 0.7s",
                        }}
                      />
                    </svg>
                  </span>
                </h1>
                <p
                  className={`mt-5 max-w-md text-lg leading-relaxed text-primary-foreground/60 transition-all duration-[1200ms] delay-200 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  Artículos basados en evidencia para que tomes decisiones informadas
                  sobre tu salud y la de tu familia.
                </p>

                {/* Stats row */}
                <div
                  className={`mt-8 flex items-center gap-8 transition-all duration-[1200ms] delay-300 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  {[
                    { number: "5", label: "Artículos" },
                    { number: "37", label: "Min de lectura" },
                    { number: "5", label: "Categorías" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-serif text-3xl font-bold text-primary-foreground">{stat.number}</p>
                      <p className="mt-0.5 text-xs text-primary-foreground/40">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: decorative image */}
              <div
                className={`relative hidden lg:block transition-all duration-[1200ms] delay-300 ${mounted ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src="/images/blog-hero.jpg"
                    alt="Blog de salud natural"
                    fill
                    priority
                    className="object-cover"
                    sizes="42vw"
                  />
                  <div className="absolute inset-0 bg-primary/10" />
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-4 -left-6 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/10 p-5 backdrop-blur-md">
                  <p className="text-sm font-medium text-primary-foreground">
                    {"\""}Información que transforma
                    <br />
                    <span className="font-serif italic text-secondary">tu relación con la salud.{"\""}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {/* Category filters */}
            <div
              className={`flex flex-wrap items-center gap-3 transition-all duration-[1000ms] ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: "400ms" }}
            >
              <Search className="mr-1 h-4 w-4 text-muted-foreground" />
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    active === cat
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "border border-border bg-card text-muted-foreground hover:border-secondary/40 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured article */}
            {featured && (
              <div
                ref={gridRef}
                className={`mt-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${gridVisible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"}`}
              >
                <Link href={`/blog/${featured.slug}`} className="group block">
                  <article className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2 lg:rounded-3xl">
                    <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[400px]">
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-8 lg:p-12">
                      <div className="flex items-center gap-3">
                        <span className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                          {featured.category}
                        </span>
                        <span className="text-xs text-muted-foreground">Artículo Destacado</span>
                      </div>
                      <h2 className="mt-4 font-serif text-2xl font-bold leading-tight text-primary transition-colors group-hover:text-secondary lg:text-3xl xl:text-4xl text-balance">
                        {featured.title}
                      </h2>
                      <p className="mt-4 leading-relaxed text-muted-foreground">
                        {featured.excerpt}
                      </p>
                      <div className="mt-6 flex items-center gap-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{featured.readTime} de lectura</span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-secondary">
                          Leer artículo
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            )}

            {/* Grid of remaining posts */}
            {rest.length > 0 && (
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {rest.map((post, i) => (
                  <div
                    key={post.slug}
                    className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${gridVisible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"}`}
                    style={{ transitionDelay: `${200 + i * 120}ms` }}
                  >
                    <Link href={`/blog/${post.slug}`} className="group block h-full">
                      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-secondary/30 lg:rounded-2xl">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          {/* Hover overlay */}
                          <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-all duration-500 group-hover:bg-primary/30">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                              <ArrowUpRight className="h-5 w-5" />
                            </div>
                          </div>
                          <div className="absolute top-4 left-4">
                            <span className="inline-block rounded-full bg-card/90 px-3 py-1 text-[11px] font-semibold text-primary backdrop-blur-sm">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col p-5 lg:p-6">
                          <h3 className="font-serif text-lg font-bold leading-snug text-primary transition-colors group-hover:text-secondary line-clamp-2 lg:text-xl">
                            {post.title}
                          </h3>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Clock className="h-3.5 w-3.5" />
                              <span>{post.readTime} de lectura</span>
                            </div>
                            <span className="text-xs font-semibold text-primary group-hover:text-secondary transition-colors">
                              Leer
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Banner */}
            <div
              className={`mt-20 relative overflow-hidden rounded-2xl bg-primary p-10 lg:rounded-3xl lg:p-16 transition-all duration-[1200ms] delay-500 ${gridVisible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"}`}
            >
              {/* Background decoration */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, #F8F6F0 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                  }}
                />
              </div>
              <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

              <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-primary-foreground lg:text-3xl text-balance">
                    ¿Necesitas orientación{" "}
                    <span className="font-serif italic text-secondary">personalizada?</span>
                  </h2>
                  <p className="mt-3 max-w-md text-primary-foreground/60">
                    Agenda una asesoría gratuita y descubre los productos ideales
                    para tu situación específica.
                  </p>
                </div>
                <Link href="/#asesoria" className="shrink-0">
                  <span className="group inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-sm font-semibold text-secondary-foreground shadow-xl transition-all hover:bg-secondary/90 hover:shadow-2xl">
                    Agendar Asesoría Gratis
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
