"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, ShieldCheck, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { products, type Product } from "@/lib/data-products"

const DEFAULT_WHATSAPP_NUMBER = "573001234567"

function formatPrice(price: number) {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
    }).format(price)
}

export function CheckoutContent({ whatsappNumber }: { whatsappNumber?: string }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const productSlug = searchParams.get("product")

    const [mounted, setMounted] = useState(false)
    const [product, setProduct] = useState<Product | null>(null)

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        notes: "",
    })

    useEffect(() => {
        setMounted(true)
        if (productSlug) {
            const found = products.find((p) => p.slug === productSlug)
            if (found) setProduct(found)
        }
    }, [productSlug])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!product) return

        const message = `*NUEVA ORDEN DE COMPRA* 🛍️

*Producto:* ${product.name}
*Precio:* ${formatPrice(product.price)}

*DATOS DE ENVÍO* 📍
*Nombre:* ${formData.firstName} ${formData.lastName}
*Teléfono:* ${formData.phone}
*Email:* ${formData.email}
*Dirección:* ${formData.address}
*Ciudad:* ${formData.city}
${formData.notes ? `*Notas:* ${formData.notes}\n` : ""}
Hola, me gustaría concretar el pago y envío de mi pedido.`

        const finalNumber = (whatsappNumber || DEFAULT_WHATSAPP_NUMBER).replace(/\\D/g, "")
        const url = `https://wa.me/${finalNumber}?text=${encodeURIComponent(message)}`
        window.open(url, "_blank")
    }

    if (!mounted) return null

    // If no product is found, show a fallback
    if (!product) {
        return (
            <div className="mx-auto max-w-3xl px-4 py-24 text-center">
                <h1 className="font-serif text-3xl font-bold text-primary mb-4">
                    No hay productos en tu orden
                </h1>
                <p className="text-muted-foreground mb-8">
                    Parece que no has seleccionado ningún producto para comprar.
                </p>
                <Button onClick={() => router.push("/tienda")} size="lg" className="rounded-full">
                    Volver a la tienda
                </Button>
            </div>
        )
    }

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-20">
            <div className="mb-8">
                <Link
                    href={`/tienda/${product.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Volver al producto
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                {/* Checkout Form */}
                <div className="lg:col-span-7 xl:col-span-8">
                    <div className="mb-8">
                        <h1 className="font-serif text-3xl font-bold text-primary lg:text-4xl">
                            Finaliza tu compra
                        </h1>
                        <p className="mt-2 text-muted-foreground">
                            Ingresa tus datos de envío para procesar tu pedido vía WhatsApp.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                        <div className="space-y-6">
                            <h2 className="font-serif text-xl font-semibold text-primary">
                                1. Información de Contacto
                            </h2>
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">Nombre</Label>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="Tu nombre"
                                        className="rounded-xl bg-muted/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Apellido</Label>
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Tu apellido"
                                        className="rounded-xl bg-muted/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Correo Electrónico</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="ejemplo@correo.com"
                                        className="rounded-xl bg-muted/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Celular</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="300 000 0000"
                                        className="rounded-xl bg-muted/50"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-border" />

                        <div className="space-y-6">
                            <h2 className="font-serif text-xl font-semibold text-primary">
                                2. Dirección de Envío
                            </h2>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="address">Dirección completa</Label>
                                    <Input
                                        id="address"
                                        name="address"
                                        required
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder="Calle, Carrera, Número, Barrio..."
                                        className="rounded-xl bg-muted/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="city">Ciudad y Departamento</Label>
                                    <Input
                                        id="city"
                                        name="city"
                                        required
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        placeholder="Ej. Bogotá, D.C."
                                        className="rounded-xl bg-muted/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="notes">Notas adicionales (Opcional)</Label>
                                    <Input
                                        id="notes"
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleInputChange}
                                        placeholder="Apto, torre, indicaciones para llegar..."
                                        className="rounded-xl bg-muted/50"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl bg-secondary/10 p-4 text-sm text-secondary-foreground flex items-start gap-3">
                            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                            <p>
                                <strong>Pago seguro:</strong> Al continuar, serás redirigido a
                                WhatsApp con uno de nuestros asesores para coordinar el método de pago
                                y confirmar el envío.
                            </p>
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full rounded-full bg-primary py-6 text-base font-semibold shadow-xl hover:bg-primary/90"
                        >
                            Completar pedido por WhatsApp
                        </Button>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-5 xl:col-span-4">
                    <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                        <h2 className="mb-6 font-serif text-xl font-semibold text-primary">
                            Resumen de la orden
                        </h2>

                        <div className="flex gap-4 border-b border-border pb-6">
                            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="80px"
                                />
                            </div>
                            <div className="flex flex-1 flex-col justify-between">
                                <div>
                                    <h3 className="font-medium text-primary line-clamp-2">
                                        {product.name}
                                    </h3>
                                    <p className="mt-1 text-sm text-muted-foreground">Cantidad: 1</p>
                                </div>
                                <p className="font-semibold text-primary">
                                    {formatPrice(product.price)}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3 py-6">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span className="font-medium">{formatPrice(product.price)}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Envío</span>
                                <span className="font-medium text-secondary">Por definir</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between border-t border-border pt-6">
                            <span className="font-serif text-lg font-bold text-primary">Total</span>
                            <span className="font-serif text-xl font-bold text-primary">
                                {formatPrice(product.price)}
                            </span>
                        </div>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                <span>Garantía de calidad de Raíz Vital</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Truck className="h-4 w-4 text-secondary" />
                                <span>Envíos a todo el país</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
