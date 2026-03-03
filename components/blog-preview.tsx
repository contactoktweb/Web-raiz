"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react"
import { useEffect, useState, useRef } from "react"

interface BlogPost {
  title: string
  slug: string
  excerpt: string
  category: string
  readTime: string
  image: string
}

interface BlogPreviewProps {
  posts?: BlogPost[]
}

export function BlogPreview({ posts = [] }: BlogPreviewProps) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  if (posts.length === 0) return null

  const featured = posts[0]
  const rest = posts.slice(1, 4)

  return (
    <section ref={ref} className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header — editorial style */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div
            className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-secondary" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                Blog Educativo
              </span>
            </div>
            <h2 className="mt-4 font-serif text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1] tracking-tight text-primary">
              Aprende a sanar{" "}
              <span className="relative inline-block">
                <span className="font-serif italic text-secondary">desde la raíz</span>
                <svg
                  className={`absolute -bottom-1 left-0 w-full transition-all duration-[1500ms] delay-300 ${visible ? "opacity-100" : "opacity-0"}`}
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                  style={{ height: "0.12em" }}
                >
                  <path
                    d="M0 5 C40 1, 80 7, 120 3 S180 6, 200 2"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="text-accent"
                    style={{
                      strokeDasharray: 250,
                      strokeDashoffset: visible ? 0 : 250,
                      transition: "stroke-dashoffset 1.8s ease 0.5s",
                    }}
                  />
                </svg>
              </span>
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Artículos basados en evidencia para que tomes decisiones informadas
              sobre tu salud.
            </p>
          </div>

          <div
            className={`transition-all duration-[1000ms] delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Ver Todos los Artículos
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Featured + grid — editorial magazine layout */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Featured article — large card */}
          <div
            className={`lg:col-span-7 transition-all duration-[1200ms] delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"}`}
          >
            <Link href={`/blog/${featured.slug}`} className="group block">
              <article className="relative overflow-hidden rounded-2xl lg:rounded-3xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
                    <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground shadow-sm">
                      {featured.category}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl font-bold leading-tight text-white lg:text-3xl xl:text-4xl text-balance drop-shadow-md">
                      {featured.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-gray-200 lg:text-base drop-shadow-sm">
                      {featured.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-4">
                      <div className="flex items-center gap-2 text-xs text-gray-300">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{featured.readTime} de lectura</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary transition-colors group-hover:text-secondary/80">
                        Leer artículo
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>

          {/* Stacked list — right column */}
          <div className="flex flex-col gap-5 lg:col-span-5 lg:gap-6">
            {rest.map((post, i) => (
              <div
                key={post.slug}
                className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <article className="flex gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:shadow-lg hover:border-secondary/30 lg:p-5">
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl lg:h-28 lg:w-28">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="112px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between py-0.5">
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary">
                          {post.category}
                        </span>
                        <h3 className="mt-1 font-serif text-base font-semibold leading-snug text-primary transition-colors group-hover:text-secondary line-clamp-2 lg:text-lg">
                          {post.title}
                        </h3>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-secondary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
