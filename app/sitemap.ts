import { MetadataRoute } from "next"
import { client } from "@/sanity/lib/client"
import { allPostsQuery, allProductsQuery } from "@/sanity/lib/queries"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://raizvital.com"

    // Fetch dynamic routes from Sanity
    const [posts, products] = await Promise.all([
        client.fetch(allPostsQuery),
        client.fetch(allProductsQuery),
    ])

    const postUrls = posts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
    }))

    const productUrls = products.map((product: any) => ({
        url: `${baseUrl}/tienda/${product.slug}`,
        lastModified: new Date(),
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${baseUrl}/tienda`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        ...postUrls,
        ...productUrls,
    ]
}
