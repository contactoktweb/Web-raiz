"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingCart, ArrowUpRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"

interface Product {
    _id: string
    name: string
    slug: string
    description: string
    price: number
    badge: string
    rating: number
    reviews: number
    image: string
    categories: string[]
}

interface StoreSectionData {
    badge: string
    title: string
    description: string
    viewAllText: string
    featuredProducts: Product[]
}

interface StoreSectionProps {
    data: StoreSectionData
}

export function StoreSection({ data }: StoreSectionProps) {
    const { addItem } = useCart()

    if (!data) return null

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 0,
        }).format(price)
    }

    return (
        <section className="relative overflow-hidden py-24 lg:py-32">
            {/* Background patterns */}
            <div className="absolute inset-0 -z-10 bg-muted/30" />
            <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-[0.03]">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage: "radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)",
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary">
                        <Sparkles className="h-3 w-3" />
                        {data.badge || "Catálogo Premium"}
                    </div>
                    <h2 className="mt-6 font-serif text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl text-balance">
                        {data.title || "Nuestra Selección de Bienestar"}
                    </h2>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                        {data.description || "Productos naturales de alta calidad, diseñados para nutrir tu cuerpo y mejorar tu calidad de vida."}
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8 max-w-6xl w-full">
                        {data.featuredProducts?.map((product, index) => (
                            <div
                                key={product._id}
                                className="group flex flex-col overflow-hidden rounded-[2rem] border border-border/40 bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 p-2 w-full max-w-[280px] mx-auto sm:max-w-none"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                {/* Product image */}
                                <Link href={`/tienda/${product.slug}`} className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-muted/30">
                                    <Image
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-6 lg:p-8 transition-transform duration-700 ease-in-out group-hover:scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                                    />

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/5" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                                        <span className="flex items-center gap-1.5 rounded-full bg-background/95 px-4 py-2 text-xs font-semibold tracking-wide text-primary shadow-lg backdrop-blur translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                                            Ver detalles
                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                        </span>
                                    </div>

                                    {product.badge && (
                                        <div className="absolute top-4 left-4 text-left">
                                            <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary-foreground shadow-sm">
                                                {product.badge}
                                            </span>
                                        </div>
                                    )}
                                </Link>

                                {/* Info */}
                                <div className="flex flex-1 flex-col pt-4 px-3 pb-2">
                                    <Link href={`/tienda/${product.slug}`}>
                                        <h3 className="font-serif text-sm font-bold text-primary transition-colors hover:text-secondary line-clamp-1">
                                            {product.name}
                                        </h3>
                                    </Link>

                                    <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                                        {product.description}
                                    </p>

                                    {/* Price and Action */}
                                    <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-4">
                                        <span className="font-serif text-base font-bold text-primary">
                                            {formatPrice(product.price)}
                                        </span>
                                        <Button
                                            onClick={(e) => {
                                                e.preventDefault()
                                                addItem(product as any)
                                            }}
                                            size="sm"
                                            variant="outline"
                                            className="h-8 w-8 rounded-full border-border/80 p-0 text-primary transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                                        >
                                            <ShoppingCart className="h-4 w-4" />
                                            <span className="sr-only">Añadir al carrito</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex justify-center">
                    <Link href="/tienda">
                        <Button
                            size="lg"
                            className="group gap-2.5 rounded-full bg-primary px-8 text-primary-foreground shadow-xl shadow-primary/10 hover:bg-primary/95 hover:shadow-2xl hover:shadow-primary/20"
                        >
                            {data.viewAllText || "Ver Todo el Catálogo"}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
