"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Star,
  ShoppingCart,
  Check,
  Leaf,
  Shield,
  Truck,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/components/tienda-content"

const WHATSAPP_NUMBER = "573001234567"

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price)
}

interface Props {
  product: Product
  related: Product[]
}

export function ProductDetail({ product, related }: Props) {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState<"benefits" | "ingredients" | "usage">("benefits")

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleBuy = () => {
    const message = `Hola, quiero comprar: ${product.name} (${formatPrice(product.price)}). Podrian darme mas informacion sobre disponibilidad y envio?`
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  const handleConsult = () => {
    const message = `Hola, tengo preguntas sobre el producto: ${product.name}. Podrian asesorarme?`
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  const anim = (delay: number) =>
    `transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
      mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }` + ` delay-[${delay}ms]`

  return (
    <div>
      {/* Breadcrumb bar */}
      <div className="border-b border-border bg-card/50 pt-24 pb-4">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/tienda"
              className="flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Tienda
            </Link>
            <span className="text-border">/</span>
            <span className="font-medium text-primary">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero product section */}
      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          {/* Image column */}
          <div
            className={`lg:col-span-7 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} transition-all duration-[1000ms] delay-0`}
          >
            <div className="sticky top-28">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted lg:rounded-3xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                {product.badge && (
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold text-secondary-foreground shadow-lg">
                      <Star className="h-3 w-3 fill-current" />
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Trust badges below image */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { icon: Leaf, label: "100% Natural" },
                  { icon: Shield, label: "Calidad Certificada" },
                  { icon: Truck, label: "Envio Nacional" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 rounded-xl border border-border bg-card p-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                      <Icon className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="text-xs font-medium text-primary leading-tight">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Info column */}
          <div
            className={`lg:col-span-5 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} transition-all duration-[1000ms] delay-150`}
          >
            {/* Category pill */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-secondary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                {product.category === "energia"
                  ? "Energia y Sistema Nervioso"
                  : product.category === "adulto-mayor"
                    ? "Adulto Mayor"
                    : product.category === "hormonal"
                      ? "Equilibrio Hormonal"
                      : product.category === "digestiva"
                        ? "Salud Digestiva"
                        : "Desarrollo Infantil"}
              </span>
            </div>

            {/* Product name */}
            <h1 className="font-serif text-4xl font-bold text-primary lg:text-5xl text-balance">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4.5 w-4.5 ${i < Math.floor(product.rating) ? "fill-secondary text-secondary" : "text-border"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-primary">
                {product.rating}
              </span>
              <span className="text-sm text-muted-foreground">
                ({product.reviews} resenas)
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-serif text-4xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              <span className="text-sm text-muted-foreground">COP</span>
            </div>

            {/* Description */}
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {product.longDescription}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={handleBuy}
                size="lg"
                className="flex-1 gap-2.5 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-xl"
              >
                <ShoppingCart className="h-5 w-5" />
                Comprar por WhatsApp
              </Button>
              <Button
                onClick={handleConsult}
                size="lg"
                variant="outline"
                className="gap-2.5 rounded-full border-border text-primary hover:bg-muted"
              >
                <MessageCircle className="h-5 w-5" />
                Consultar
              </Button>
            </div>

            {/* Separator */}
            <div className="my-8 h-px w-full bg-border" />

            {/* Tabs: Benefits / Ingredients / Usage */}
            <div>
              <div className="flex gap-1 rounded-full bg-muted p-1">
                {(
                  [
                    { id: "benefits", label: "Beneficios" },
                    { id: "ingredients", label: "Ingredientes" },
                    { id: "usage", label: "Uso" },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-card text-primary shadow-sm"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                {activeTab === "benefits" && (
                  <ul className="flex flex-col gap-3">
                    {product.benefits.map((benefit, i) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3"
                        style={{ animationDelay: `${i * 50}ms` }}
                      >
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                          <Check className="h-3 w-3 text-secondary" />
                        </div>
                        <span className="text-sm leading-relaxed text-foreground">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === "ingredients" && (
                  <ul className="flex flex-col gap-2.5">
                    {product.ingredients.map((ingredient) => (
                      <li
                        key={ingredient}
                        className="flex items-start gap-3 rounded-xl bg-muted/50 p-3"
                      >
                        <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                        <span className="text-sm leading-relaxed text-foreground">
                          {ingredient}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === "usage" && (
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary">
                        <span className="text-lg font-bold text-primary-foreground font-serif">
                          Rx
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">
                          Modo de uso recomendado
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {product.howToUse}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-border bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                  Tambien te puede interesar
                </span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-primary lg:text-4xl">
                  Productos relacionados
                </h2>
              </div>
              <Link
                href="/tienda"
                className="hidden items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary sm:flex"
              >
                Ver todos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/tienda/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {p.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
                          {p.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5 lg:p-6">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
                      <span className="text-xs font-medium text-primary">
                        {p.rating}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        ({p.reviews})
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {p.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                      <span className="font-serif text-lg font-bold text-primary">
                        {formatPrice(p.price)}
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

            <div className="mt-8 text-center sm:hidden">
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
        </section>
      )}
    </div>
  )
}
