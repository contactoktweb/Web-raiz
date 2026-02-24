"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/blog", label: "Blog" },
  { href: "/tienda", label: "Tienda" },
  { href: "#asesoria", label: "Asesoría" },
]

interface NavbarProps {
  transparentLight?: boolean
}

export function Navbar({ transparentLight = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isLightMode = transparentLight && !scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/95 shadow-md backdrop-blur-sm"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-oficial.png"
            alt="Raíz Vital Logo"
            width={72}
            height={72}
            priority
            className={`object-contain transition-all ${isLightMode ? "brightness-0 invert opacity-90" : ""}`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${isLightMode
                ? "text-primary-foreground/80 hover:text-primary-foreground"
                : "text-foreground/80 hover:text-primary"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/tienda" aria-label="Carrito de compras">
            <Button
              variant="ghost"
              size="icon"
              className={`relative ${isLightMode ? "text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" : ""}`}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-secondary-foreground">
                0
              </span>
            </Button>
          </Link>
          <Link href="#asesoria">
            <Button className={isLightMode ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" : "bg-primary text-primary-foreground hover:bg-primary/90"}>
              Asesoría Gratis
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${isLightMode ? "text-primary-foreground" : "text-foreground"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isLightMode ? "text-primary-foreground" : "text-foreground"}`} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background/98 backdrop-blur-sm md:hidden">
          <div className="flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <Link href="/tienda" className="flex-1">
                <Button variant="outline" className="w-full border-primary text-primary">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Carrito
                </Button>
              </Link>
              <Link href="#asesoria" className="flex-1" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-primary text-primary-foreground">
                  Asesoría
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
