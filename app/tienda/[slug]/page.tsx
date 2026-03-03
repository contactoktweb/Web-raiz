import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"
import { client } from "@/sanity/lib/client"
import { productBySlugQuery, relatedProductsQuery, globalSettingsQuery } from "@/sanity/lib/queries"
import { notFound } from "next/navigation"

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = await client.fetch(productBySlugQuery, { slug })

  if (!product) {
    return {
      title: "Producto no encontrado | Raiz Vital",
    }
  }

  return {
    title: `${product.name} | Raiz Vital`,
    description: product.description,
    keywords: [
      product.name,
      ...(product.categories || []),
      "suplemento natural",
      "tienda naturista",
      "salud",
      ...(product.benefits || []),
    ],
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params

  const [product, related, globalData] = await Promise.all([
    client.fetch(productBySlugQuery, { slug }),
    client.fetch(relatedProductsQuery, { slug }),
    client.fetch(globalSettingsQuery)
  ])

  if (!product) {
    notFound()
  }

  return (
    <>
      <SiteHeader />
      <main>
        <ProductDetail
          product={product}
          related={related}
          whatsappNumber={globalData?.whatsappNumber}
        />
      </main>
      <Footer />
    </>
  )
}
