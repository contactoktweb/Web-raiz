export interface Product {
  id: number
  slug: string
  name: string
  description: string
  longDescription: string
  benefits: string[]
  ingredients: string[]
  howToUse: string
  price: number
  category: string[]
  badge: string | null
  rating: number
  reviews: number
  image: string
  gallery?: string[]
}

export const products: Product[] = [
  {
    "id": 1,
    "slug": "megacollagen-x-500-gr",
    "name": "Megacollagen x 500 gr",
    "description": "Descripción temporal para Megacollagen x 500 gr. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Megacollagen x 500 gr. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "belleza",
      "adulto"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/megacollagen-x-500-gr.png",
    "gallery": [
      "/images/megacollagen-x-500-gr.png"
    ]
  },
  {
    "id": 2,
    "slug": "colageno-x-24-sachets",
    "name": "Colágeno x 24 sachets",
    "description": "Descripción temporal para Colágeno x 24 sachets. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Colágeno x 24 sachets. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "belleza",
      "adulto"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/colageno-x-24-sachets.png",
    "gallery": [
      "/images/colageno-x-24-sachets.png"
    ]
  },
  {
    "id": 3,
    "slug": "colageno-marino-x-700-gr",
    "name": "Colágeno marino x 700 gr",
    "description": "Descripción temporal para Colágeno marino x 700 gr. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Colágeno marino x 700 gr. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "belleza",
      "adulto"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/colageno-marino-x-700-gr.png",
    "gallery": [
      "/images/colageno-marino-x-700-gr.png"
    ]
  },
  {
    "id": 4,
    "slug": "5-colageno-x-60-pastillas",
    "name": "5 Colágeno x 60 pastillas",
    "description": "Descripción temporal para 5 Colágeno x 60 pastillas. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para 5 Colágeno x 60 pastillas. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "belleza",
      "adulto"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/5-colageno-x-60-pastillas.png",
    "gallery": [
      "/images/5-colageno-x-60-pastillas.png"
    ]
  },
  {
    "id": 5,
    "slug": "nat-resveratrol-x-100",
    "name": "Nat Resveratrol x 100",
    "description": "Descripción temporal para Nat Resveratrol x 100. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Nat Resveratrol x 100. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "belleza",
      "adulto"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/nat-resveratrol-x-100.png",
    "gallery": [
      "/images/nat-resveratrol-x-100.png"
    ]
  },
  {
    "id": 6,
    "slug": "nat-resveratrol-funda",
    "name": "Nat Resveratrol funda",
    "description": "Descripción temporal para Nat Resveratrol funda. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Nat Resveratrol funda. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "belleza",
      "adulto"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/nat-resveratrol-funda.png",
    "gallery": [
      "/images/nat-resveratrol-funda.png"
    ]
  },
  {
    "id": 7,
    "slug": "vitafrancesa-x-24-sachet",
    "name": "Vitafrancesa x 24 sachet",
    "description": "Descripción temporal para Vitafrancesa x 24 sachet. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Vitafrancesa x 24 sachet. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "belleza"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/vitafrancesa-x-24-sachet.png",
    "gallery": [
      "/images/vitafrancesa-x-24-sachet.png"
    ]
  },
  {
    "id": 8,
    "slug": "cranberry-x-60-und",
    "name": "Cranberry x 60 und",
    "description": "Suplemento nutricional con Cranberry (Arándano rojo) para el cuidado del tracto urinario y sistema inmunológico.",
    "longDescription": "Esta es la información detallada para Cranberry x 60 und. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 65000,
    "category": [
      "belleza"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/cranberry-x-60-und.png",
    "gallery": [
      "/images/cranberry-x-60-und.png"
    ]
  },
  {
    "id": 9,
    "slug": "urofem-probioticos-x-60-gomitas",
    "name": "Urofem Probióticos x 60 gomitas",
    "description": "Descripción temporal para Urofem Probióticos x 60 gomitas. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Urofem Probióticos x 60 gomitas. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "belleza",
      "hormonal"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/urofem-probioticos-x-60-gomitas.png",
    "gallery": [
      "/images/urofem-probioticos-x-60-gomitas.png"
    ]
  },
  {
    "id": 10,
    "slug": "ashwagandha-homeopatica",
    "name": "Ashwagandha homeopática",
    "description": "Descripción temporal para Ashwagandha homeopática. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Ashwagandha homeopática. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "hormonal",
      "estres",
      "belleza"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/ashwagandha-homeopatica.png",
    "gallery": [
      "/images/ashwagandha-homeopatica.png"
    ]
  },
  {
    "id": 11,
    "slug": "fenogreco-x-60-pastillas",
    "name": "Fenogreco x 60 pastillas",
    "description": "Descripción temporal para Fenogreco x 60 pastillas. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Fenogreco x 60 pastillas. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "hormonal",
      "belleza"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/fenogreco-x-60-pastillas.png",
    "gallery": [
      "/images/fenogreco-x-60-pastillas.png"
    ]
  },
  {
    "id": 12,
    "slug": "shilajit",
    "name": "Shilajit",
    "description": "Descripción temporal para Shilajit. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Shilajit. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "hormonal",
      "deportiva",
      "belleza"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/shilajit.png",
    "gallery": [
      "/images/shilajit.png"
    ]
  },
  {
    "id": 13,
    "slug": "seven-7-sachets",
    "name": "Seven 7 sachets",
    "description": "Descripción temporal para Seven 7 sachets. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Seven 7 sachets. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "hormonal",
      "infantil",
      "deportiva",
      "belleza"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/seven-7-sachets.png",
    "gallery": [
      "/images/seven-7-sachets.png"
    ]
  },
  {
    "id": 14,
    "slug": "bichota-sachets",
    "name": "Bichota sachets",
    "description": "Descripción temporal para Bichota sachets. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Bichota sachets. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "hormonal",
      "belleza"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/bichota-sachets.png",
    "gallery": [
      "/images/bichota-sachets.png"
    ]
  },
  {
    "id": 15,
    "slug": "vitamina-c-plus-zinc-gomitas",
    "name": "Vitamina C + Zinc gomitas",
    "description": "Descripción temporal para Vitamina C + Zinc gomitas. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Vitamina C + Zinc gomitas. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "hormonal",
      "infantil",
      "adulto",
      "belleza"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/vitamina-c-plus-zinc-gomitas.png",
    "gallery": [
      "/images/vitamina-c-plus-zinc-gomitas.png"
    ]
  },
  {
    "id": 16,
    "slug": "melatonin-gomitas",
    "name": "Melatonin gomitas",
    "description": "Descripción temporal para Melatonin gomitas. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Melatonin gomitas. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "estres",
      "adulto"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/melatonin-gomitas.png",
    "gallery": [
      "/images/melatonin-gomitas.png"
    ]
  },
  {
    "id": 17,
    "slug": "tryptox-x-60",
    "name": "Tryptox x 60",
    "description": "Descripción temporal para Tryptox x 60. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Tryptox x 60. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "estres"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/placeholder.png"
  },
  {
    "id": 18,
    "slug": "bisglicinato-de-magnesio-x-100",
    "name": "Bisglicinato de magnesio x 100",
    "description": "Descripción temporal para Bisglicinato de magnesio x 100. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Bisglicinato de magnesio x 100. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "estres",
      "deportiva",
      "adulto"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/placeholder.png"
  },
  {
    "id": 19,
    "slug": "bisglicinato-de-magnesio-x-60",
    "name": "Bisglicinato de magnesio x 60",
    "description": "Descripción temporal para Bisglicinato de magnesio x 60. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Bisglicinato de magnesio x 60. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "estres",
      "deportiva",
      "adulto"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/bisglicinato-de-magnesio-x-60.png",
    "gallery": [
      "/images/bisglicinato-de-magnesio-x-60.png"
    ]
  },
  {
    "id": 20,
    "slug": "7-magnesios-x-60",
    "name": "7 magnesios x 60",
    "description": "Descripción temporal para 7 magnesios x 60. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para 7 magnesios x 60. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "estres",
      "deportiva",
      "adulto"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/7-magnesios-x-60.png",
    "gallery": [
      "/images/7-magnesios-x-60.png"
    ]
  },
  {
    "id": 21,
    "slug": "probioticos-homeopaticos",
    "name": "Probióticos homeopáticos",
    "description": "Descripción temporal para Probióticos homeopáticos. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Probióticos homeopáticos. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "estres",
      "infantil",
      "metabolismo",
      "adulto"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/placeholder.png"
  },
  {
    "id": 22,
    "slug": "probioticos-gomitas",
    "name": "Probióticos gomitas",
    "description": "Descripción temporal para Probióticos gomitas. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Probióticos gomitas. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "infantil",
      "metabolismo",
      "adulto"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/probioticos-gomitas-2.png",
    "gallery": [
      "/images/probioticos-gomitas-2.png",
      "/images/probioticos-gomitas.png"
    ]
  },
  {
    "id": 23,
    "slug": "berberine-x-100-cap",
    "name": "Berberine x 100 cap",
    "description": "Descripción temporal para Berberine x 100 cap. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Berberine x 100 cap. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "metabolismo",
      "adulto"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/berberine-x-100-cap.jpg",
    "gallery": [
      "/images/berberine-x-100-cap.jpg",
      "/images/placeholder.png"
    ]
  },
  {
    "id": 24,
    "slug": "vinagre-de-manzana-gomitas",
    "name": "Vinagre de manzana gomitas",
    "description": "Descripción temporal para Vinagre de manzana gomitas. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Vinagre de manzana gomitas. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "metabolismo"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/vinagre-de-manzana-gomitas.png",
    "gallery": [
      "/images/vinagre-de-manzana-gomitas.png"
    ]
  },
  {
    "id": 25,
    "slug": "dtox-x-60-und",
    "name": "DTOX x 60 und",
    "description": "Descripción temporal para DTOX x 60 und. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para DTOX x 60 und. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "metabolismo"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/dtox-x-60-und.png",
    "gallery": [
      "/images/dtox-x-60-und.png"
    ]
  },
  {
    "id": 26,
    "slug": "cardo-mariano-x-90-cap",
    "name": "Cardo mariano x 90 cap",
    "description": "Descripción temporal para Cardo mariano x 90 cap. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Cardo mariano x 90 cap. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "metabolismo",
      "adulto"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/placeholder.png"
  },
  {
    "id": 27,
    "slug": "remolacha-x-60-und",
    "name": "Remolacha x 60 und",
    "description": "Descripción temporal para Remolacha x 60 und. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Remolacha x 60 und. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "metabolismo",
      "deportiva"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/remolacha-x-60-und.png",
    "gallery": [
      "/images/remolacha-x-60-und.png",
      "/images/remolacha-x-60-und-1.png",
      "/images/remolacha-x-60-und-2.png"
    ]
  },
  {
    "id": 28,
    "slug": "oregano-plus",
    "name": "Oregano Plus",
    "description": "Descripción temporal para Orégano x 60 und. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Orégano x 60 und. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "metabolismo"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/oregano-x-60-und.png",
    "gallery": [
      "/images/oregano-x-60-und.png",
      "/images/oregano-plus.png"
    ]
  },
  {
    "id": 29,
    "slug": "creatine-vegan-300-gr",
    "name": "Creatine Vegan 300 gr",
    "description": "Descripción temporal para Creatine Vegan 300 gr. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Creatine Vegan 300 gr. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "deportiva"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/placeholder.png"
  },
  {
    "id": 30,
    "slug": "creatine-bhella-300-gr",
    "name": "Creatine Bhella 300 gr",
    "description": "Descripción temporal para Creatine Bhella 300 gr. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Creatine Bhella 300 gr. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "deportiva"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/placeholder.png"
  },
  {
    "id": 31,
    "slug": "melena-de-leon",
    "name": "Melena de León",
    "description": "Descripción temporal para Melena de León. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Melena de León. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "energia",
      "salud"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/melena-de-leon.png"
  },
  {
    "id": 32,
    "slug": "probioticos-femeninos",
    "name": "Probióticos Femeninos",
    "description": "Descripción temporal para Probióticos Femeninos. Luego se actualizará.",
    "longDescription": "Esta es la información detallada para Probióticos Femeninos. Más adelante se actualizará con información real y detallada de los beneficios y uso.",
    "benefits": [
      "Salud íntima femenina",
      "Equilibrio de la flora vaginal",
      "Refuerza el sistema inmunológico"
    ],
    "ingredients": [
      "Lactobacillus rhamnosus",
      "Lactobacillus reuteri"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "belleza",
      "hormonal"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/probioticos-femeninos.png"
  },
  {
    "id": 33,
    "slug": "omega-3",
    "name": "Omega 3",
    "description": "Descripción para Omega 3.",
    "longDescription": "Esta es la información detallada para Omega 3.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "belleza"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/omega-3.png",
    "gallery": [
      "/images/omega-3.png"
    ]
  },
  {
    "id": 34,
    "slug": "isoflavonas-de-soya",
    "name": "Isoflavonas de soya",
    "description": "Descripción para Isoflavonas de soya.",
    "longDescription": "Esta es la información detallada para Isoflavonas de soya.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "belleza"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/isoflavonas-de-soya.png",
    "gallery": [
      "/images/isoflavonas-de-soya.png"
    ]
  },
  {
    "id": 35,
    "slug": "probioticos",
    "name": "Probioticos",
    "description": "Descripción para Probioticos.",
    "longDescription": "Esta es la información detallada para Probioticos.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "belleza"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/probioticos.png",
    "gallery": [
      "/images/probioticos.png"
    ]
  },
  {
    "id": 36,
    "slug": "triptofano",
    "name": "triptófano",
    "description": "Descripción para triptófano.",
    "longDescription": "Esta es la información detallada para triptófano.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "estres"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/triptofano.png",
    "gallery": [
      "/images/triptofano.png"
    ]
  },
  {
    "id": 37,
    "slug": "ashwagandha",
    "name": "Ashwagandha",
    "description": "Descripción para Ashwagandha.",
    "longDescription": "Esta es la información detallada para Ashwagandha.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "estres"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/ashwagandha.png",
    "gallery": [
      "/images/ashwagandha.png"
    ]
  },
  {
    "id": 38,
    "slug": "multivitaminico",
    "name": "Multivitaminico",
    "description": "Descripción para Multivitaminico.",
    "longDescription": "Esta es la información detallada para Multivitaminico.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "infantil"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/multivitaminico.png",
    "gallery": [
      "/images/multivitaminico.png"
    ]
  },
  {
    "id": 39,
    "slug": "clorofila",
    "name": "Clorofila",
    "description": "Descripción para Clorofila.",
    "longDescription": "Esta es la información detallada para Clorofila.",
    "benefits": [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ],
    "ingredients": [
      "Ingrediente principal",
      "Ingrediente secundario"
    ],
    "howToUse": "Consumir según las indicaciones del envase.",
    "price": 0,
    "category": [
      "metabolismo"
    ],
    "badge": "Nuevo",
    "rating": 5,
    "reviews": 0,
    "image": "/images/clorofila.png",
    "gallery": [
      "/images/clorofila.png"
    ]
  }
]
