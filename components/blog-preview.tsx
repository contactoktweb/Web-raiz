import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export const blogPosts = [
  {
    slug: "salud-adulto-mayor-sarcopenia",
    title: "Salud del Adulto Mayor: Sarcopenia y Prevención Cognitiva",
    excerpt:
      "Descubre cómo prevenir la pérdida de masa muscular y proteger la salud cognitiva en la tercera edad con estrategias naturales.",
    category: "Adulto Mayor",
    readTime: "8 min",
    image: "/images/blog-adulto-mayor.jpg",
  },
  {
    slug: "ansiedad-estres-falta-energia",
    title: "Ansiedad, Estrés y Falta de Energía: Cuando el Cuerpo Vive en Alerta",
    excerpt:
      "Tu cuerpo te envía señales. Aprende a reconocer cuándo el estrés crónico está agotando tus reservas y qué hacer al respecto.",
    category: "Sistema Nervioso",
    readTime: "7 min",
    image: "/images/blog-estres.jpg",
  },
  {
    slug: "cambios-hormonales-mujeres-hombres",
    title: "Cambios Hormonales: Señales que tu Cuerpo no Debe Ignorar",
    excerpt:
      "Descubre cómo los cambios hormonales afectan energía, peso y estado de ánimo, y qué puedes hacer de forma natural.",
    category: "Hormonal",
    readTime: "6 min",
    image: "/images/blog-hormonal.jpg",
  },
  {
    slug: "salud-metabolica-aumento-peso-fatiga",
    title: "Salud Metabólica: La Raíz Silenciosa del Aumento de Peso y la Fatiga",
    excerpt:
      "El metabolismo lento no es solo genética. Conoce las causas reales y las soluciones naturales para reactivar tu energía.",
    category: "Metabolismo",
    readTime: "9 min",
    image: "/images/blog-metabolica.jpg",
  },
  {
    slug: "salud-infantil-nutricion-concentracion",
    title: "Salud Infantil: Nutrición para la Concentración y Conducta de los Niños",
    excerpt:
      "La alimentación impacta directamente en el comportamiento y la concentración. Aprende qué nutrientes necesitan tus hijos.",
    category: "Infantil",
    readTime: "7 min",
    image: "/images/blog-infantil.jpg",
  },
]

const categoryColors: Record<string, string> = {
  "Adulto Mayor": "bg-accent/10 text-accent",
  "Sistema Nervioso": "bg-secondary/10 text-secondary",
  Hormonal: "bg-primary/10 text-primary",
  Metabolismo: "bg-secondary/10 text-secondary",
  Infantil: "bg-accent/10 text-accent",
}

export function BlogPreview() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Blog Educativo
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-primary md:text-4xl text-balance">
              Aprende a sanar desde la raíz
            </h2>
            <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
              Artículos basados en evidencia para que tomes decisiones informadas
              sobre tu salud.
            </p>
          </div>
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"
            >
              Ver Todos
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg">
                {/* Image */}
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
                        categoryColors[post.category] || "bg-muted text-muted-foreground"
                      }`}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-lg font-semibold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{post.readTime} de lectura</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
