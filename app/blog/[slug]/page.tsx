import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Clock, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { client } from "@/sanity/lib/client"
import { postBySlugQuery, allPostsQuery } from "@/sanity/lib/queries"
import { notFound } from "next/navigation"

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  const posts = await client.fetch(allPostsQuery)
  return posts.map((post: any) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(postBySlugQuery, { slug })
  if (!post) return { title: "Artículo no encontrado" }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "es_LA",
      images: [post.image],
    },
  }
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params
  const post = await client.fetch(postBySlugQuery, { slug })
  const otherPosts = await client.fetch(allPostsQuery)
  const relatedPosts = otherPosts.filter((p: any) => p.slug !== slug).slice(0, 2)

  if (!post) {
    notFound()
  }

  return (
    <>
      <SiteHeader />
      <main className="pt-24 pb-20">
        <article className="mx-auto max-w-3xl px-4 lg:px-8">
          {/* Breadcrumb */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <span className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
              {post.category}
            </span>
            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-primary md:text-4xl lg:text-5xl text-balance">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph: string, i: number) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="mt-10 mb-4 font-serif text-2xl font-bold text-primary">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={i} className="mt-8 mb-3 font-serif text-xl font-bold text-primary">
                    {paragraph.replace("### ", "")}
                  </h3>
                )
              }
              if (paragraph.startsWith("**") || paragraph.includes("\n- ")) {
                return (
                  <div key={i} className="my-4 leading-relaxed text-foreground/80">
                    {paragraph.split("\n").map((line: string, j: number) => {
                      if (line.startsWith("- ")) {
                        return (
                          <div key={j} className="ml-4 flex gap-2 py-1">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                            <span>{line.replace("- ", "")}</span>
                          </div>
                        )
                      }
                      if (line.startsWith("**")) {
                        const parts = line.match(/\*\*(.+?)\*\*(.*)/)
                        if (parts) {
                          return (
                            <p key={j} className="py-1">
                              <strong className="text-primary">{parts[1]}</strong>
                              {parts[2]}
                            </p>
                          )
                        }
                      }
                      return <p key={j} className="py-1">{line}</p>
                    })}
                  </div>
                )
              }
              return (
                <p key={i} className="my-4 leading-relaxed text-foreground/80">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Related Products CTA */}
          {post.relatedProducts && post.relatedProducts.length > 0 && (
            <div className="mt-16 rounded-2xl border border-secondary/20 bg-secondary/5 p-8">
              <h3 className="font-serif text-xl font-bold text-primary">
                Productos Relacionados
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Complementa tu lectura con los suplementos que mencionamos en este
                artículo.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.relatedProducts.map((product: string) => (
                  <span
                    key={product}
                    className="rounded-full bg-card px-4 py-2 text-sm font-medium text-primary border border-border"
                  >
                    {product}
                  </span>
                ))}
              </div>
              <Link href="/tienda" className="mt-6 inline-block">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Comprar Productos Relacionados
                </Button>
              </Link>
            </div>
          )}

          {/* More Articles */}
          <div className="mt-16">
            <h3 className="font-serif text-xl font-bold text-primary">
              Más Artículos
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {relatedPosts.map((p: any) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md"
                >
                  <span className="text-xs font-medium text-secondary">
                    {p.category}
                  </span>
                  <h4 className="mt-2 font-serif text-base font-semibold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                    {p.title}
                  </h4>
                  <span className="mt-3 flex items-center gap-1 text-xs font-medium text-primary group-hover:text-secondary transition-colors">
                    Leer más
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
