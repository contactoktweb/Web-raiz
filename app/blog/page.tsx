import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { client } from "@/sanity/lib/client"
import { allPostsQuery } from "@/sanity/lib/queries"
import { BlogList } from "@/components/blog-list"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog de Salud y Bienestar Natural",
  description:
    "Aprende sobre suplementación, nutrición consciente y hábitos saludables con nuestros expertos en Raíz Vital.",
  keywords: ["blog salud natural", "nutrition tips", "consejos de bienestar", "suplementos naturales"],
}

export default async function BlogPage() {
  const posts = await client.fetch(allPostsQuery)

  return (
    <>
      <SiteHeader transparentLight />
      <BlogList posts={posts} />
      <Footer />
    </>
  )
}
