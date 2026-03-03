import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TiendaContent } from "@/components/tienda-content"

import { client } from "@/sanity/lib/client"
import { allProductsQuery, allCategoriesQuery } from "@/sanity/lib/queries"

export const metadata: Metadata = {
  title: "Tienda Naturista | Raiz Vital",
  description:
    "Productos naturales organizados por beneficios. Suplementos de alta calidad para energia, salud hormonal, digestiva y mas.",
}

export default async function TiendaPage() {
  const [products, categories] = await Promise.all([
    client.fetch(allProductsQuery),
    client.fetch(allCategoriesQuery)
  ])

  return (
    <>
      <SiteHeader transparentLight />
      <main>
        <TiendaContent products={products} categories={categories} />
      </main>
      <Footer />
    </>
  )
}
