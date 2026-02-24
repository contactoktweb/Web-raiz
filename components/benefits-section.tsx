"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Zap, Heart, Activity, Leaf, Baby } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  {
    id: "energia",
    icon: Zap,
    title: "Energía y Sistema Nervioso",
    description:
      "Recupera tu vitalidad y equilibra tu sistema nervioso con suplementos naturales respaldados por la ciencia.",
    products: [
      "Magnesio",
      "Complejo B",
      "Omega 3",
      "Ashwagandha",
      "Melena de León",
    ],
    color: "bg-secondary/10",
    iconColor: "text-secondary",
    borderColor: "border-secondary/20",
  },
  {
    id: "adulto-mayor",
    icon: Heart,
    title: "Salud del Adulto Mayor",
    description:
      "Fortalece músculos, huesos y mente con nutrientes esenciales para una vida activa y plena.",
    products: ["Proteínas", "Creatina", "Vitamina D", "Vitamina B12"],
    color: "bg-accent/10",
    iconColor: "text-accent",
    borderColor: "border-accent/20",
  },
  {
    id: "hormonal",
    icon: Activity,
    title: "Equilibrio Hormonal",
    description:
      "Restaura tu balance hormonal de forma natural con minerales y adaptógenos cuidadosamente seleccionados.",
    products: ["Zinc", "Adaptógenos naturales"],
    color: "bg-primary/10",
    iconColor: "text-primary",
    borderColor: "border-primary/20",
  },
  {
    id: "digestiva",
    icon: Leaf,
    title: "Salud Metabólica y Digestiva",
    description:
      "Optimiza tu digestión y metabolismo con fibra, probióticos y extractos herbales de alta calidad.",
    products: [
      "Fibra prebiótica",
      "Probióticos",
      "Berberina",
      "Cardo Mariano",
      "Espirulina",
    ],
    color: "bg-secondary/10",
    iconColor: "text-secondary",
    borderColor: "border-secondary/20",
  },
  {
    id: "infantil",
    icon: Baby,
    title: "Desarrollo Infantil",
    description:
      "Apoya el crecimiento, la concentración y el bienestar de tus hijos con nutrientes esenciales.",
    products: ["Omega 3 DHA", "Magnesio infantil"],
    color: "bg-accent/10",
    iconColor: "text-accent",
    borderColor: "border-accent/20",
  },
]

export function BenefitsSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)
  const activeItem = categories.find((c) => c.id === activeCategory)!

  return (
    <section id="tienda" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
            Nuestra Tienda
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-primary md:text-4xl text-balance">
            Soluciones organizadas por beneficios
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            No vendemos productos al azar. Cada suplemento está agrupado según
            el beneficio real que aporta a tu salud.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{cat.title}</span>
                <span className="sm:hidden">{cat.title.split(" ")[0]}</span>
              </button>
            )
          })}
        </div>

        {/* Active Category Detail */}
        <div className="mt-10">
          <div
            className={`rounded-2xl border ${activeItem.borderColor} ${activeItem.color} p-8 transition-all md:p-12`}
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <div className="flex-1">
                <div
                  className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-card shadow-sm`}
                >
                  <activeItem.icon className={`h-7 w-7 ${activeItem.iconColor}`} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary md:text-3xl">
                  {activeItem.title}
                </h3>
                <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
                  {activeItem.description}
                </p>
                <Link href="/tienda" className="mt-6 inline-block">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    Ver Productos
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {activeItem.products.map((product) => (
                    <div
                      key={product}
                      className="flex items-center gap-2 rounded-xl bg-card p-3 shadow-sm"
                    >
                      <div className={`h-2 w-2 rounded-full ${activeItem.iconColor === "text-secondary" ? "bg-secondary" : activeItem.iconColor === "text-accent" ? "bg-accent" : "bg-primary"}`} />
                      <span className="text-sm font-medium text-foreground">
                        {product}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Category Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.id}
                className={`group cursor-pointer rounded-2xl border ${cat.borderColor} bg-card p-6 transition-all hover:shadow-lg`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${cat.color}`}
                >
                  <Icon className={`h-6 w-6 ${cat.iconColor}`} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-primary">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {cat.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cat.products.slice(0, 3).map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {p}
                    </span>
                  ))}
                  {cat.products.length > 3 && (
                    <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                      +{cat.products.length - 3} más
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
