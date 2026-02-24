import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { blogPosts } from "@/components/blog-preview"

export const metadata: Metadata = {
  title: "Blog Educativo",
  description:
    "Artículos basados en evidencia sobre salud natural, suplementos y bienestar integral. Aprende a cuidar tu cuerpo desde la raíz.",
}

const categoryColors: Record<string, string> = {
  "Adulto Mayor": "bg-accent/10 text-accent",
  "Sistema Nervioso": "bg-secondary/10 text-secondary",
  Hormonal: "bg-primary/10 text-primary",
  Metabolismo: "bg-secondary/10 text-secondary",
  Infantil: "bg-accent/10 text-accent",
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Page Header */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Blog Educativo
            </span>
            <h1 className="mt-4 font-serif text-4xl font-bold text-primary md:text-5xl text-balance">
              Aprende a sanar desde la raíz
            </h1>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Artículos basados en evidencia para que tomes decisiones informadas
              sobre tu salud y la de tu familia.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          categoryColors[post.category] ||
                          "bg-muted text-muted-foreground"
                        }`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="font-serif text-lg font-semibold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{post.readTime} de lectura</span>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-medium text-primary group-hover:text-secondary transition-colors">
                        Leer más
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-primary p-8 text-center md:p-12">
            <h2 className="font-serif text-2xl font-bold text-primary-foreground md:text-3xl text-balance">
              ¿Necesitas orientación personalizada?
            </h2>
            <p className="mt-3 text-primary-foreground/70">
              Agenda una asesoría gratuita y descubre los productos ideales para
              ti.
            </p>
            <Link href="/#asesoria" className="mt-6 inline-block">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2"
              >
                Agendar Asesoría
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
