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
  Search,
  ChevronLeft,
  ChevronRight,
  X,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"

interface Product {
  _id: string
  name: string
  slug: string
  description: string
  longDescription: string
  benefits: string[]
  ingredients: string[]
  howToUse: string
  price: number
  categories: string[]
  badge: string | null
  rating: number
  reviews: number
  image: string
  gallery?: string[]
}

interface Category {
  _id: string
  title: string
  slug: string
}

interface Props {
  products: Product[]
  categories: Category[]
}

const categoryIconMap: Record<string, LucideIcon> = {
  belleza: Star,
  hormonal: Heart,
  estres: Moon,
  infantil: Baby,
  metabolismo: Activity,
  deportiva: Zap,
  adulto: Shield,
}

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

const ITEMS_PER_PAGE = 9

export function TiendaContent({ products, categories: sanityCategories }: Props) {
  const WHATSAPP_NUMBER = "573001234567" // Keeping this for now until added to global settings or fetched
  const categoriesList = [
    { id: "all", label: "Todos", icon: null },
    ...sanityCategories.map(cat => ({
      id: cat.slug,
      label: cat.title,
      icon: categoryIconMap[cat.slug] || Activity
    }))
  ]
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [mounted, setMounted] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const { addItem } = useCart()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory, searchQuery])

  const isFiltering = activeCategory !== "all" || searchQuery.trim() !== ""
  const featuredProduct = products.find((p) => p.badge === "Mas vendido") || products[0]

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === "all" || (p.categories && p.categories.includes(activeCategory))
    const matchesSearch = searchQuery.trim() === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()))

    // Si NO estamos filtrando, queremos que el producto destacado (que sale arriba) no se repita abajo en la grilla
    if (!isFiltering && featuredProduct && p._id === featuredProduct._id) {
      return false
    }

    return matchesCategory && matchesSearch
  })

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

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
      {!isFiltering && featuredProduct && (
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
                <h2 className="font-serif text-3xl font-bold text-primary lg:text-4xl">
                  {featuredProduct.name}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                  {featuredProduct.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {featuredProduct.benefits?.slice(0, 3).map((b) => (
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
      <section ref={gridRef} className="mx-auto max-w-7xl px-4 pt-20 pb-8 lg:px-8 lg:pt-28 scroll-mt-24">
        {/* Search + Category filters */}
        <div className="space-y-6">
          {/* Search bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-10 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categoriesList.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-primary"
                    }`}
                >
                  {cat.icon && (
                    <cat.icon
                      className={`h-3.5 w-3.5 ${isActive ? "text-secondary" : ""
                        }`}
                    />
                  )}
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Results count */}
        <div className="mt-8 mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">{filteredProducts.length}</span>{" "}
            {filteredProducts.length === 1 ? "producto" : "productos"}
            {searchQuery && (
              <span> para &ldquo;<span className="font-medium text-primary">{searchQuery}</span>&rdquo;</span>
            )}
          </p>
          {totalPages > 1 && (
            <p className="text-xs text-muted-foreground">
              Página {currentPage} de {totalPages}
            </p>
          )}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedProducts.map((product, index) => (
            <div
              key={product._id}
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
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                      addItem(product as any)
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
        {/* Empty state */}
        {paginatedProducts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Search className="h-12 w-12 text-muted-foreground/30 mb-4" />
            <p className="font-serif text-xl font-semibold text-primary">No se encontraron productos</p>
            <p className="mt-2 text-sm text-muted-foreground">Intenta con otro término de búsqueda o categoría.</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("all") }}
              className="mt-4 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
            >
              Ver todos los productos
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-primary/30 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all ${currentPage === i + 1
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-primary"
                  }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-primary/30 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}      </section>

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
