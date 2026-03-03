import { groq } from "next-sanity"

export const globalSettingsQuery = groq`
  *[_type == "globalSettings"][0] {
    siteName,
    "logoUrl": logo.asset->url,
    "logoAlt": logo.alt,
    footerDescription,
    contactEmail,
    contactPhone,
    whatsappNumber,
    whatsappFloatingNumber,
    whatsappFloatingMessage,
    address,
    socialLinks {
      facebook,
      instagram,
      tiktok
    }
  }
`

export const privacyPolicyQuery = groq`
  *[_type == "privacyPolicy"][0] {
    title,
    content,
    lastUpdated
  }
`

export const heroSectionQuery = groq`
  *[_type == "heroSection"][0] {
    badge,
    headlineLine1,
    headlineLine2Part1,
    headlineLine2Part2,
    "mainImageUrl": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    mainImageText,
    "ingredientsImageUrl": ingredientsImage.asset->url,
    "ingredientsImageAlt": ingredientsImage.alt,
    naturalBadge,
    statsNumber,
    statsDescription,
    "productTeaserImageUrl": productTeaserImage.asset->url,
    "productTeaserImageAlt": productTeaserImage.alt,
    productTeaserText,
    trustStrip
  }
`

export const benefitsSectionQuery = groq`
  *[_type == "benefitsSection"][0] {
    badge,
    title,
    description,
    categories[] {
      title,
      icon,
      description,
      products,
      theme
    }
  }
`

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    category,
    readTime,
    "image": mainImage.asset->url,
    publishedAt
  }
`

export const latestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[0...3] {
    title,
    "slug": slug.current,
    excerpt,
    category,
    readTime,
    "image": mainImage.asset->url,
    publishedAt
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    excerpt,
    category,
    readTime,
    "image": mainImage.asset->url,
    content,
    relatedProducts,
    publishedAt
  }
`

export const asesoriaSectionQuery = groq`
  *[_type == "asesoriaSection"][0] {
    badge,
    title,
    description,
    symptoms,
    buttonText,
    footerText
  }
`// Product Queries
export const allProductsQuery = `*[_type == "product"] | order(name asc) {
  _id,
  name,
  "slug": slug.current,
  description,
  longDescription,
  price,
  badge,
  rating,
  reviews,
  benefits,
  "image": mainImage.asset->url,
  "categories": categories[]->title
}`

export const productBySlugQuery = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  description,
  longDescription,
  price,
  badge,
  rating,
  reviews,
  "image": mainImage.asset->url,
  "gallery": gallery[].asset->url,
  benefits,
  ingredients,
  howToUse,
  "categories": categories[]->title
}`

export const relatedProductsQuery = `*[_type == "product" && slug.current == $slug][0] {
  "related": *[_type == "product" && references(^.categories[]._ref) && slug.current != $slug][0...3] {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    badge,
    rating,
    reviews,
    "image": mainImage.asset->url
  }
}.related`

export const allCategoriesQuery = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  "slug": slug.current
}`

// Store Section Query
export const storeSectionQuery = `*[_type == "storeSection"][0] {
  badge,
  title,
  description,
  viewAllText,
  featuredProducts[]-> {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    badge,
    rating,
    reviews,
    "image": mainImage.asset->url,
    "categories": categories[]->title
  }
}`
