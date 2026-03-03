import { Suspense } from "react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CheckoutContent } from "@/components/checkout-content"

export const metadata: Metadata = {
  title: "Checkout | Raiz Vital",
  description: "Finaliza tu compra de forma segura y rapida a traves de WhatsApp.",
}

export default function CheckoutPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-muted/30">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
          <CheckoutContent />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
