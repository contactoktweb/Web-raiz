import { Suspense } from "react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { CheckoutContent } from "@/components/checkout-content"
import { client } from "@/sanity/lib/client"
import { globalSettingsQuery } from "@/sanity/lib/queries"

export const metadata: Metadata = {
  title: "Checkout | Raiz Vital",
  description: "Finaliza tu compra de forma segura y rapida a traves de WhatsApp.",
}

export default async function CheckoutPage() {
  const globalSettings = await client.fetch(globalSettingsQuery)

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-muted/30">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
          <CheckoutContent whatsappNumber={globalSettings?.whatsappNumber} />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
