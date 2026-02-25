import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { products } from "@/lib/data-products"
import { ProductDetail } from "@/components/product-detail"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return {}
  return {
    title: `${product.name} | Raíz Vital`,
    description: product.description,
    keywords: [
      product.name,
      product.category,
      "suplemento natural",
      "tienda naturista",
      "salud",
      ...product.benefits,
    ],
    openGraph: {
      title: `${product.name} - Raíz Vital`,
      description: product.description,
      type: "website",
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <>
      <Navbar />
      <main>
        <ProductDetail product={product} related={related} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
