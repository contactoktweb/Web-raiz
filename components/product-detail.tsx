"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ShoppingCart,
  ArrowRight,
  ShieldCheck,
  Truck,
  RefreshCw,
  MessageCircle,
  Leaf,
  Sparkles,
  Droplets,
  ArrowUpRight,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"

interface Product {
  _id: string
  name: string
  slug: string
  description: string
  longDescription: string
  price: number
  badge: string | null
  rating: number
  reviews: number
  image: string
  gallery?: string[]
  benefits: string[]
  ingredients: string[]
  howToUse: string
  categories: string[]
}

interface Props {
  product: Product
  related: Product[]
  whatsappNumber?: string
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price)
}

export function ProductDetail({ product, related, whatsappNumber = "573001234567" }: Props) {
  const { addItem } = useCart()
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState<"benefits" | "ingredients" | "usage">("benefits")
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const cleanNumber = whatsappNumber ? whatsappNumber.replace(/\\D/g, "") : ""
  const finalNumber = cleanNumber.length > 5 ? cleanNumber : "573001234567"
  const whatsappLink = `https://wa.me/${finalNumber}?text=Hola,%20estoy%20interesado%20en%20el%20producto:%20${encodeURIComponent(
    product.name
  )}`

  // Combine main image + gallery for the image selector
  const allImages = [product.image, ...(product.gallery || [])].filter(Boolean)

  const tabs = [
    { key: "benefits" as const, label: "Beneficios", icon: Sparkles },
    { key: "ingredients" as const, label: "Ingredientes", icon: Droplets },
    { key: "usage" as const, label: "Modo de uso", icon: Leaf },
  ]

  return (
    <section className="pt-28 pb-16 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-primary">Inicio</Link>
          <span>/</span>
          <Link href="/tienda" className="transition-colors hover:text-primary">Tienda</Link>
          <span>/</span>
          <span className="font-medium text-primary">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Left column — Images */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="group relative aspect-square overflow-hidden rounded-[2rem] border border-border/50 bg-muted/20">
              <Image
                src={allImages[selectedImage] || product.image}
                alt={product.name}
                fill
                className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {product.badge && (
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-secondary-foreground shadow-lg shadow-secondary/20">
                    <Sparkles className="h-3 w-3" />
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail gallery */}
            {allImages.length > 1 && (
              <div className="flex gap-3">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 ${selectedImage === i
                      ? "border-secondary shadow-md shadow-secondary/10 scale-105"
                      : "border-border/50 opacity-60 hover:opacity-100 hover:border-border"
                      }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - vista ${i + 1}`}
                      fill
                      className="object-contain p-1.5"
                      sizes="80px"
                      quality={85}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right column — Info */}
          <div className="flex flex-col lg:pt-4">
            {/* Categories */}
            {product.categories && product.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {product.categories.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full bg-muted/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}

            <h1 className="font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {product.name}
            </h1>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-serif text-3xl font-bold text-primary lg:text-4xl">
                {formatPrice(product.price)}
              </span>
            </div>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              {product.description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={() => addItem(product as any)}
                className="flex-1 gap-2.5 rounded-full bg-primary py-6 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/10 transition-all hover:bg-primary/95 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-0.5"
              >
                <ShoppingCart className="h-5 w-5" />
                Añadir al carrito
              </Button>
              <Link href={whatsappLink} target="_blank" className="flex-1">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full gap-2.5 rounded-full border-border/80 py-6 text-base font-semibold transition-all hover:bg-green-50 hover:border-green-200 hover:text-green-700 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  Asesoría WhatsApp
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl border border-border/40 bg-muted/20 p-5">
              <div className="flex flex-col items-center gap-2.5 text-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary leading-tight">
                  100% Natural
                </span>
              </div>
              <div className="flex flex-col items-center gap-2.5 text-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Truck className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary leading-tight">
                  Envío Seguro
                </span>
              </div>
              <div className="flex flex-col items-center gap-2.5 text-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <RefreshCw className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary leading-tight">
                  Garantía Raíz
                </span>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-8">
              <div className="flex gap-1 rounded-full bg-muted/50 p-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${activeTab === tab.key
                        ? "bg-card text-primary shadow-md"
                        : "text-muted-foreground hover:text-primary"
                        }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  )
                })}
              </div>

              <div className="mt-6 min-h-[120px]">
                {activeTab === "benefits" && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <ul className="space-y-3">
                      {product.benefits?.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                            <Check className="h-3 w-3 text-secondary" />
                          </div>
                          <span className="text-sm leading-relaxed text-muted-foreground lg:text-base">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {activeTab === "ingredients" && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="flex flex-wrap gap-2">
                      {product.ingredients?.map((ingredient, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-border/60 bg-card px-3.5 py-1.5 text-sm text-muted-foreground"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {activeTab === "usage" && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="rounded-2xl border border-border/40 bg-muted/20 p-6">
                      <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
                        {product.howToUse}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Long description */}
        {product.longDescription && (
          <div className="mt-16 lg:mt-24">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary/[0.03] to-secondary/[0.04] p-8 md:p-12 lg:p-16">
              <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: "radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                  }}
                />
              </div>
              <div className="relative max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary">
                  <Leaf className="h-3 w-3" />
                  Sobre este producto
                </div>
                <h2 className="font-serif text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
                  ¿Por qué elegir {product.name}?
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                  {product.longDescription}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Related products */}
        {related && related.length > 0 && (
          <div className="mt-20 lg:mt-28">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary">
                  <Sparkles className="h-3 w-3" />
                  Recomendados
                </div>
                <h2 className="font-serif text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
                  También te puede interesar
                </h2>
              </div>
              <Link
                href="/tienda"
                className="hidden lg:flex items-center gap-2 text-sm font-bold text-secondary transition-all hover:gap-3"
              >
                Ver catálogo completo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item._id}
                  href={`/tienda/${item.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[2rem] border border-border/40 bg-card p-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
                >
                  <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-muted/30">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {item.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary-foreground shadow-sm">
                          {item.badge}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <span className="flex items-center gap-1.5 rounded-full bg-background/95 px-4 py-2 text-xs font-semibold text-primary shadow-lg backdrop-blur translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                        Ver detalles
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col pt-5 px-3 pb-3">
                    <h3 className="font-serif text-base font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/40">
                      <span className="font-serif text-lg font-bold text-primary">
                        {formatPrice(item.price)}
                      </span>
                      <span className="flex items-center gap-1 text-sm font-semibold text-secondary transition-all group-hover:gap-2">
                        Ver detalle
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center lg:hidden">
              <Link href="/tienda">
                <Button
                  variant="outline"
                  className="gap-2 rounded-full border-border text-primary"
                >
                  Ver todos los productos
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
