"use client"

import { useCart } from "./cart-provider"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const WHATSAPP_NUMBER = "573001234567"

function formatPrice(price: number) {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
    }).format(price)
}

export function CartSidebar() {
    const { items, isOpen, setIsOpen, removeItem, updateQuantity, cartTotal } = useCart()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const handleCheckout = () => {
        const orderDetails = items.map(item => `- ${item.quantity}x ${item.product.name} (${formatPrice(item.product.price)})`).join("%0A")
        const totalText = `Total: ${formatPrice(cartTotal)}`

        const message = `Hola, quiero realizar el siguiente pedido:%0A%0A${orderDetails}%0A%0A${totalText}`
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
        window.open(url, "_blank")
        setIsOpen(false)
    }

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent className="flex w-full flex-col sm:max-w-md p-6">
                <SheetHeader className="px-1 text-left">
                    <SheetTitle className="flex items-center gap-2 text-primary font-serif">
                        <ShoppingBag className="h-5 w-5" />
                        Tu carrito
                    </SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto px-1">
                    {items.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                            <div className="rounded-full bg-muted p-6">
                                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
                            </div>
                            <p className="text-muted-foreground">Tu carrito está vacío</p>
                            <Button
                                variant="outline"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 rounded-full border-primary text-primary hover:bg-muted"
                            >
                                Continuar comprando
                            </Button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-6 py-4">
                            {items.map((item) => (
                                <div key={item.product._id} className="flex gap-4">
                                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md border border-border bg-muted">
                                        <Image
                                            src={item.product.image}
                                            alt={item.product.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-between">
                                        <div className="flex justify-between gap-2">
                                            <h4 className="text-sm font-semibold text-primary line-clamp-2">
                                                {item.product.name}
                                            </h4>
                                            <button
                                                onClick={() => removeItem(item.product._id)}
                                                className="text-muted-foreground hover:text-destructive"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                        <div className="flex items-end justify-between">
                                            <div className="flex items-center rounded-md border border-border">
                                                <button
                                                    onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                                                    className="flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                                >
                                                    <Minus className="h-3 w-3" />
                                                </button>
                                                <span className="flex h-7 w-8 items-center justify-center text-sm font-medium">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                                                    className="flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                                >
                                                    <Plus className="h-3 w-3" />
                                                </button>
                                            </div>
                                            <span className="text-sm font-bold text-primary">
                                                {formatPrice(item.product.price * item.quantity)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {items.length > 0 && (
                    <div className="border-t border-border pt-4 px-1">
                        <div className="mb-4 flex items-center justify-between font-serif text-lg font-bold text-primary">
                            <span>Total</span>
                            <span>{formatPrice(cartTotal)}</span>
                        </div>
                        <Button
                            className="w-full gap-2 rounded-full bg-primary py-6 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90"
                            onClick={handleCheckout}
                        >
                            Comprar
                        </Button>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}
