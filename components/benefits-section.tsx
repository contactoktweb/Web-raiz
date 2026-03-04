"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Zap, Heart, Activity, Baby, Star, Moon, Shield, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

const iconMap: Record<string, any> = {
  Star,
  Heart,
  Moon,
  Baby,
  Activity,
  Zap,
  Shield,
  Leaf,
}

interface BenefitCategory {
  title: string
  icon: string
  description: string
  products?: string[]
  theme: 'primary' | 'secondary' | 'accent'
}

interface BenefitsData {
  badge?: string
  title?: string
  description?: string
  categories?: BenefitCategory[]
}

const getThemeStyles = (theme: string) => {
  switch (theme) {
    case 'secondary':
      return {
        color: "bg-secondary/10",
        iconColor: "text-secondary",
        borderColor: "border-secondary/20",
        bulletColor: "bg-secondary"
      }
    case 'accent':
      return {
        color: "bg-accent/10",
        iconColor: "text-accent",
        borderColor: "border-accent/20",
        bulletColor: "bg-accent"
      }
    default:
      return {
        color: "bg-primary/10",
        iconColor: "text-primary",
        borderColor: "border-primary/20",
        bulletColor: "bg-primary"
      }
  }
}

export function BenefitsSection({ data }: { data?: BenefitsData }) {
  const categories = data?.categories || []
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)

  if (categories.length === 0) return null

  const activeItem = categories[activeCategoryIndex] || categories[0]
  const activeStyles = getThemeStyles(activeItem.theme)
  const ActiveIcon = iconMap[activeItem.icon] || Star

  return (
    <section id="tienda" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
            {data?.badge || "Nuestra Tienda"}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-primary md:text-4xl text-balance">
            {data?.title || "Soluciones organizadas por beneficios"}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {data?.description || "No vendemos productos al azar. Cada suplemento está agrupado según el beneficio real que aporta a tu salud."}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat, index) => {
            const Icon = iconMap[cat.icon] || Star
            return (
              <button
                key={index}
                onClick={() => setActiveCategoryIndex(index)}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all ${activeCategoryIndex === index
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
            className={`rounded-2xl border ${activeStyles.borderColor} ${activeStyles.color} p-8 transition-all md:p-12`}
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <div className="flex-1">
                <div
                  className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-card shadow-sm`}
                >
                  <ActiveIcon className={`h-7 w-7 ${activeStyles.iconColor}`} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary md:text-3xl">
                  {activeItem.title}
                </h3>
                <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
                  {activeItem.description}
                </p>
                <Link href={`/tienda?category=${encodeURIComponent(activeItem.title)}`} className="mt-6 inline-block">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    Ver Productos
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {activeItem.products?.map((product) => (
                    <div
                      key={product}
                      className="flex items-center gap-2 rounded-xl bg-card p-3 shadow-sm"
                    >
                      <div className={`h-2 w-2 rounded-full ${activeStyles.bulletColor}`} />
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
          {categories.map((cat, index) => {
            const Icon = iconMap[cat.icon] || Star
            const styles = getThemeStyles(cat.theme)
            return (
              <Link
                href={`/tienda?category=${encodeURIComponent(cat.title)}`}
                key={index}
                className={`group cursor-pointer block rounded-2xl border ${styles.borderColor} bg-card p-6 transition-all hover:shadow-lg`}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${styles.color}`}
                >
                  <Icon className={`h-6 w-6 ${styles.iconColor}`} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-primary">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {cat.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cat.products?.slice(0, 3).map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {p}
                    </span>
                  ))}
                  {cat.products && cat.products.length > 3 && (
                    <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                      +{cat.products.length - 3} más
                    </span>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
