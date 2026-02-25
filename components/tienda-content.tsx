"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Zap,
  Heart,
  Activity,
  Shield,
  Moon,
  Baby,
  Star,
  ArrowRight,
  ArrowUpRight,
  ShoppingCart,
  Calendar,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "573001234567"

const categories = [
  { id: "all", label: "Todos", icon: null },
  { id: "rendimiento", label: "Rendimiento", icon: Activity },
  { id: "energia", label: "Energía", icon: Zap },
  { id: "relajacion", label: "Relajación", icon: Moon },
  { id: "inmunidad", label: "Inmunidad", icon: Shield },
  { id: "infantil", label: "Infantil", icon: Baby },
]

import { products, type Product } from '@/lib/data-products'
import { useCart } from "@/components/cart-provider"

const badgeColors: Record<string, string> = {
  "Mas vendido": "bg-secondary text-secondary-foreground",
  Popular: "bg-secondary text-secondary-foreground",
  Recomendado: "bg-primary text-primary-foreground",
  Nuevo: "bg-accent text-accent-foreground",
  Esencial: "bg-secondary text-secondary-foreground",
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price)
}

export function TiendaContent() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [mounted, setMounted] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const { addItem } = useCart()

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory)

  const featuredProduct = products.find((p) => p.badge === "Mas vendido" && p.category === "energia")

  return (
    <div>
      {/* Editorial header */}
      <section className="relative overflow-hidden bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Dot grid texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--primary-foreground) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-secondary" />
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                  Tienda Naturista
                </span>
              </div>
              <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight text-primary-foreground text-balance">
                Productos que{" "}
                <span className="italic text-secondary">transforman</span> tu
                salud
              </h1>
            </div>
            <div className="lg:text-right">
              <p className="max-w-md text-lg leading-relaxed text-primary-foreground/60 lg:ml-auto">
                Cada producto ha sido cuidadosamente seleccionado por su
                calidad, pureza y respaldo cientifico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured product — editorial hero card */}
      {featuredProduct && (
        <section className="relative -mt-12 mx-auto max-w-7xl px-4 lg:px-8 z-10">
          <Link href={`/tienda/${featuredProduct.slug}`}>
            <div className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5 lg:grid-cols-2 lg:rounded-3xl">
              <div className="relative aspect-square lg:aspect-auto overflow-hidden">
                <Image
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  fill
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-4 left-4 lg:top-6 lg:left-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold text-secondary-foreground">
                    <Star className="h-3 w-3 fill-current" />
                    Producto Destacado
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12 xl:p-16">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(featuredProduct.rating) ? "fill-secondary text-secondary" : "text-border"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {featuredProduct.rating} ({featuredProduct.reviews} resenas)
                  </span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-primary lg:text-4xl">
                  {featuredProduct.name}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                  {featuredProduct.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {featuredProduct.benefits.slice(0, 3).map((b) => (
                    <li
                      key={b}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-primary"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-6">
                  <span className="font-serif text-3xl font-bold text-primary">
                    {formatPrice(featuredProduct.price)}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition-all group-hover:gap-2.5">
                    Ver detalle
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Catalog */}
      <section className="mx-auto max-w-7xl px-4 pt-20 pb-8 lg:px-8 lg:pt-28">
        {/* Category filters — horizontal scroll on mobile */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group/cat flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${isActive
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card text-muted-foreground border border-border hover:border-primary/30 hover:text-primary"
                  }`}
              >
                {cat.icon && (
                  <cat.icon
                    className={`h-4 w-4 transition-colors ${isActive ? "text-secondary" : "text-muted-foreground/50 group-hover/cat:text-primary"}`}
                  />
                )}
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Results count */}
        <div className="mt-8 mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">{filteredProducts.length}</span>{" "}
            {filteredProducts.length === 1 ? "producto" : "productos"}
          </p>
        </div>

        {/* Product grid */}
        <div ref={gridRef} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 60}ms`,
              }}
            >
              {/* Product image */}
              <Link
                href={`/tienda/${product.slug}`}
                className="relative aspect-square overflow-hidden bg-muted"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-all duration-300 group-hover:bg-primary/20">
                  <span className="flex items-center gap-2 rounded-full bg-card/90 px-5 py-2.5 text-sm font-semibold text-primary opacity-0 backdrop-blur-sm transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                    Ver producto
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold shadow-md ${badgeColors[product.badge] || "bg-muted text-muted-foreground"
                        }`}
                    >
                      {product.badge}
                    </span>
                  </div>
                )}
              </Link>

              {/* Info */}
              <div className="flex flex-1 flex-col p-5 lg:p-6">
                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-2.5">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-secondary text-secondary" : "text-border"}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                <Link href={`/tienda/${product.slug}`}>
                  <h3 className="font-serif text-lg font-bold text-primary transition-colors hover:text-secondary">
                    {product.name}
                  </h3>
                </Link>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {product.description}
                </p>

                {/* Price and CTA */}
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="font-serif text-xl font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  <Button
                    onClick={(e) => {
                      e.preventDefault()
                      addItem(product)
                    }}
                    size="sm"
                    className="gap-1.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <ShoppingCart className="h-3.5 w-3.5" />
                    Añadir al carrito
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary p-10 lg:rounded-3xl lg:p-16">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, var(--primary-foreground) 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary-foreground lg:text-4xl text-balance">
                No sabes cual producto es{" "}
                <span className="italic text-secondary">ideal</span> para ti?
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-primary-foreground/60">
                Recibe una asesoria personalizada gratuita. Te ayudamos a elegir
                los suplementos que realmente necesita tu cuerpo.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, me gustaria agendar una asesoria personalizada.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="gap-2.5 rounded-full bg-secondary px-8 text-secondary-foreground shadow-xl hover:bg-secondary/90"
                >
                  <Calendar className="h-5 w-5" />
                  Agendar Asesoria Gratuita
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
