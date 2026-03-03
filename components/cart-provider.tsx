"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
export interface Product {
    _id: string
    name: string
    price: number
    image: string
    slug?: string
    [key: string]: any
}

export interface CartItem {
    product: Product
    quantity: number
}

interface CartContextType {
    items: CartItem[]
    addItem: (product: Product, quantity?: number) => void
    removeItem: (productId: string) => void
    updateQuantity: (productId: string, quantity: number) => void
    clearCart: () => void
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    cartTotal: number
    itemCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        const savedCart = localStorage.getItem("cart")
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart))
            } catch (e) {
                console.error("Failed to parse cart", e)
            }
        }
    }, [])

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("cart", JSON.stringify(items))
        }
    }, [items, isMounted])

    const addItem = (product: Product, quantity = 1) => {
        setItems((currentItems) => {
            const existingItem = currentItems.find((item) => item.product._id === product._id)
            if (existingItem) {
                return currentItems.map((item) =>
                    item.product._id === product._id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            }
            return [...currentItems, { product, quantity }]
        })
        setIsOpen(true)
    }

    const removeItem = (productId: string) => {
        setItems((current) => current.filter((item) => item.product._id !== productId))
    }

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeItem(productId)
            return
        }
        setItems((current) =>
            current.map((item) =>
                item.product._id === productId ? { ...item, quantity } : item
            )
        )
    }

    const clearCart = () => {
        setItems([])
    }

    const cartTotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0)
    const itemCount = items.reduce((count, item) => count + item.quantity, 0)

    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
                isOpen,
                setIsOpen,
                cartTotal,
                itemCount,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return context
}
