"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Zap,
  Heart,
  Activity,
  Leaf,
  Baby,
  ShoppingCart,
  Star,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "573001234567"

const categories = [
  {
    id: "all",
    label: "Todos",
    icon: null,
  },
  {
    id: "energia",
    label: "Energía y Sistema Nervioso",
    icon: Zap,
  },
  {
    id: "adulto-mayor",
    label: "Adulto Mayor",
    icon: Heart,
  },
  {
    id: "hormonal",
    label: "Equilibrio Hormonal",
    icon: Activity,
  },
  {
    id: "digestiva",
    label: "Salud Digestiva",
    icon: Leaf,
  },
  {
    id: "infantil",
    label: "Desarrollo Infantil",
    icon: Baby,
  },
]

const products = [
  {
    id: 1,
    name: "Magnesio Bisglicinato",
    description: "Máxima absorción para relajación muscular, sueño reparador y reducción del estrés.",
    price: 45000,
    category: "energia",
    badge: "Más vendido",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Complejo B Metilado",
    description: "Vitaminas B en su forma activa para energía celular y salud del sistema nervioso.",
    price: 38000,
    category: "energia",
    badge: null,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Omega 3 Ultra Puro",
    description: "EPA y DHA de alta concentración para cerebro, corazón y articulaciones.",
    price: 52000,
    category: "energia",
    badge: null,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Ashwagandha KSM-66",
    description: "El adaptógeno más estudiado para reducir cortisol y mejorar la resistencia al estrés.",
    price: 48000,
    category: "energia",
    badge: "Popular",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Melena de León",
    description: "Hongo medicinal que promueve la neurogénesis y la claridad mental.",
    price: 55000,
    category: "energia",
    badge: null,
    rating: 4.6,
  },
  {
    id: 6,
    name: "Proteína Orgánica",
    description: "Proteína vegetal de alta calidad con aminoácidos esenciales para la masa muscular.",
    price: 65000,
    category: "adulto-mayor",
    badge: null,
    rating: 4.7,
  },
  {
    id: 7,
    name: "Creatina Monohidratada",
    description: "Mejora la fuerza muscular, la función cognitiva y la energía celular.",
    price: 42000,
    category: "adulto-mayor",
    badge: "Recomendado",
    rating: 4.8,
  },
  {
    id: 8,
    name: "Vitamina D3 + K2",
    description: "Sinergia perfecta para huesos fuertes, inmunidad y absorción de calcio.",
    price: 35000,
    category: "adulto-mayor",
    badge: null,
    rating: 4.9,
  },
  {
    id: 9,
    name: "Vitamina B12 Metilcobalamina",
    description: "Forma activa de B12 para energía, función neurológica y producción de glóbulos rojos.",
    price: 32000,
    category: "adulto-mayor",
    badge: null,
    rating: 4.7,
  },
  {
    id: 10,
    name: "Zinc Picolinato",
    description: "Alta biodisponibilidad para soporte hormonal, inmunidad y salud de la piel.",
    price: 30000,
    category: "hormonal",
    badge: null,
    rating: 4.8,
  },
  {
    id: 11,
    name: "Adaptógenos Blend",
    description: "Mezcla sinérgica de adaptógenos para equilibrio hormonal natural en hombres y mujeres.",
    price: 58000,
    category: "hormonal",
    badge: "Nuevo",
    rating: 4.6,
  },
  {
    id: 12,
    name: "Fibra Prebiótica",
    description: "Alimenta tu microbioma con fibra soluble de alta calidad para una digestión óptima.",
    price: 28000,
    category: "digestiva",
    badge: null,
    rating: 4.5,
  },
  {
    id: 13,
    name: "Probióticos 50B CFU",
    description: "50 mil millones de UFC con cepas clínicamente estudiadas para restaurar la flora intestinal.",
    price: 48000,
    category: "digestiva",
    badge: "Más vendido",
    rating: 4.9,
  },
  {
    id: 14,
    name: "Berberina HCL",
    description: "Regulador natural de la glucosa en sangre, el colesterol y el metabolismo.",
    price: 52000,
    category: "digestiva",
    badge: null,
    rating: 4.7,
  },
  {
    id: 15,
    name: "Cardo Mariano",
    description: "Silimarina estandarizada para la protección y regeneración hepática.",
    price: 35000,
    category: "digestiva",
    badge: null,
    rating: 4.6,
  },
  {
    id: 16,
    name: "Espirulina Orgánica",
    description: "Superalimento rico en proteínas, hierro y ficocianinas para desintoxicación natural.",
    price: 38000,
    category: "digestiva",
    badge: null,
    rating: 4.5,
  },
  {
    id: 17,
    name: "Omega 3 DHA Infantil",
    description: "DHA de alta pureza en forma líquida para el desarrollo cerebral y la concentración infantil.",
    price: 42000,
    category: "infantil",
    badge: "Esencial",
    rating: 4.9,
  },
  {
    id: 18,
    name: "Magnesio Infantil",
    description: "Fórmula suave en gominolas para apoyar el sueño, la calma y el enfoque de los niños.",
    price: 35000,
    category: "infantil",
    badge: null,
    rating: 4.8,
  },
]

const badgeColors: Record<string, string> = {
  "Más vendido": "bg-secondary text-secondary-foreground",
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

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory)

  const handleBuy = (productName: string) => {
    const message = `Hola, me interesa comprar: ${productName}. ¿Podrían darme más información?`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8">
      {/* Page Header */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
          Tienda Naturista
        </span>
        <h1 className="mt-4 font-serif text-4xl font-bold text-primary md:text-5xl text-balance">
          Productos que transforman tu salud
        </h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Cada producto ha sido cuidadosamente seleccionado por su calidad,
          pureza y respaldo científico. Organizados por el beneficio que aportan.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {cat.icon && <cat.icon className="h-4 w-4" />}
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg"
          >
            {/* Product Image Area */}
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary/5">
              <div className="flex h-full w-full items-center justify-center">
                <svg
                  className="h-20 w-20 text-secondary/20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M7 20h10" />
                  <path d="M10 20c5.5-2.5.8-6.4 3-10" />
                  <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
                  <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
                </svg>
              </div>
              {product.badge && (
                <div className="absolute top-3 left-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      badgeColors[product.badge] || "bg-muted text-muted-foreground"
                    }`}
                  >
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-1 mb-2">
                <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
                <span className="text-sm font-medium text-foreground">
                  {product.rating}
                </span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-primary">
                {product.name}
              </h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                {product.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
                <Button
                  onClick={() => handleBuy(product.name)}
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-1.5"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Comprar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Asesoría CTA */}
      <div className="mt-20 rounded-2xl bg-primary p-8 text-center md:p-12">
        <h2 className="font-serif text-2xl font-bold text-primary-foreground md:text-3xl text-balance">
          ¿No sabes cuál producto es ideal para ti?
        </h2>
        <p className="mt-3 mx-auto max-w-xl text-primary-foreground/70">
          Recibe una asesoría personalizada gratuita. Te ayudamos a elegir los
          suplementos que realmente necesita tu cuerpo.
        </p>
        <Link href="/#asesoria" className="mt-6 inline-block">
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2"
          >
            Agendar Asesoría Gratuita
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
