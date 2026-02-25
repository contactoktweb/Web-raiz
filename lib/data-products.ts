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
  category: string
  badge: string | null
  rating: number
  reviews: number
  image: string
}

export const products: Product[] = [
  {
    id: 1,
    slug: "creatine-bhella-xd-300g",
    name: "CREATINE BHELLA X 300 GR",
    description: "Suplemento de Creatina Monohidratada FitoVit Bhella enriquecida con Colágeno y Biotina para el máximo rendimiento deportivo, energía y vitalidad.",
    longDescription: "Potencia tus rutinas desde el inicio. FitoVit Bhella Creatine Monohydrate es una fórmula en polvo avanzada que combina creatina monohidratada pura con colágeno y biotina. Es un suplemento deportivo 100% natural ideal para aumentar tu masa muscular, potenciar la energía física, fortalecer tu belleza y acelerar la recuperación post-entrenamiento en cualquier disciplina.",
    benefits: [
      "Aumenta tu masa muscular",
      "Mejora tu rendimiento",
      "Con colágeno y biotina",
      "Recuperación rápida",
      "Fuerza y vitalidad",
      "Potencia tu belleza y energía"
    ],
    ingredients: [
      "Creatina Monohidratada",
      "Colágeno",
      "Biotina"
    ],
    howToUse: "Mezclar una porción con agua y consumir preferiblemente antes o después del entrenamiento.",
    price: 0,
    category: "energia",
    badge: "Nuevo",
    rating: 5.0,
    reviews: 0,
    image: "/images/creatine-bhella.png"
  },
  {
    id: 2,
    slug: "creatinne-vegan-300g",
    name: "CREATINNE VEGAN X 300 GR",
    description: "Creatina Monohidratada Vegana en polvo a base de proteína de arveja con BCAA, ideal para aumentar la fuerza y recuperación muscular.",
    longDescription: "FitoVit Creatine Monohydrate Vegan es el suplemento natural definitivo para aumentar el rendimiento físico. Formulada a base de proteína de arveja de alta asimilación junto con creatina y aminoácidos BCAA (Valina, Leucina, Isoleucina). Especialmente diseñada para dietas veganas y deportistas exigentes que buscan evitar el daño muscular, acelerar la reparación de las fibras musculares y evitar la sarcopenia de manera natural.",
    benefits: [
      "Potencia el rendimiento físico",
      "Aumenta la fuerza muscular",
      "Acelera la recuperación post-entrenamiento",
      "Repara y fortalece las fibras musculares",
      "Ayuda a mantener un entorno anabólico ideal para el crecimiento muscular"
    ],
    ingredients: [
      "Creatina Monohidratada",
      "Proteína de arveja",
      "Valina",
      "Leucina",
      "Isoleucina"
    ],
    howToUse: "Mezclar una porción con agua y consumir preferiblemente antes o después del entrenamiento. Rinde 20 porciones.",
    price: 0,
    category: "energia",
    badge: "Vegano",
    rating: 5.0,
    reviews: 0,
    image: "/images/creatinne-vegan.png"
  },
  {
    id: 3,
    slug: "bisglicinato-magnesio-100",
    name: "BISGLICINATO DE MAGNESIO X 100",
    description: "Bisglicinato de Magnesio de alta absorción con Colágeno Hidrolizado. Mejora el sueño y la relajación.",
    longDescription: "Alimento masticable a base de suero de leche con cúrcuma y colágeno hidrolizado. El magnesio en forma de bisglicinato ofrece alta absorción, es suave para el estómago y previene molestias gastrointestinales. Mejora el bienestar integral, reduciendo el estrés y favoreciendo un descanso profundo.",
    benefits: [
      "Alta Absorción",
      "Mejora del Sueño",
      "Relajación del Sistema Nervioso",
      "Reducción del Estrés Nocturno",
      "Suave para el Estómago",
      "Bienestar Integral"
    ],
    ingredients: [
      "Bisglicinato de Magnesio",
      "Colágeno Hidrolizado",
      "Suero de Leche",
      "Cúrcuma",
      "Stevia"
    ],
    howToUse: "Consumir las porciones indicadas en el envase (producto masticable de uso diario seguro). Contenido: 100 unidades.",
    price: 0,
    category: "relajacion",
    badge: "Alta Absorción",
    rating: 5.0,
    reviews: 0,
    image: "/images/bisglicinato-magnesio.png"
  },
  {
    id: 4,
    slug: "seven7-500ml",
    name: "SEVEN7",
    description: "Bebida energizante natural SEVEN7. Aumenta tu energía diaria, rendimiento físico y placer con extractos botánicos puros.",
    longDescription: "La bebida energizante SEVEN7 es tu mejor aliada para la vitalidad y concentración. Diseñada con maca, guaraná y chontaduro para liberar la tensión y prevenir la fatiga extrema. Sus ingredientes naturales te proporcionan un empuje metabólico duradero, maximizando tu energía, fuerza física y rendimiento cuando más lo necesitas, sin bajones bruscos.",
    benefits: [
      "Aumenta tu Energía",
      "Aumenta tu Rendimiento",
      "Libera Tensión",
      "Previene la Fatiga",
      "Te Mantiene Concentrado",
      "Aumenta Tu Placer"
    ],
    ingredients: [
      "Maca",
      "Guaraná",
      "Chontaduro",
      "Borojó",
      "Vitaminas A, E, C, B1, B2, B6",
      "Magnesio"
    ],
    howToUse: "Consumir una porción al día o cuando se requiera energía extra.",
    price: 0,
    category: "energia",
    badge: "Energizante",
    rating: 5.0,
    reviews: 0,
    image: "/images/seven7.png"
  },
  {
    id: 5,
    slug: "vitamina-c-zinc-gomas",
    name: "VITAMINA C + ZINC",
    description: "Gummimas masticables con Vitamina C y Zinc. Fortalece tu sistema inmunológico.",
    longDescription: "FitoVit Gummimas son gomas masticables enriquecidas con Vitamina C y Zinc, con delicioso sabor a naranja. Ayudan a combatir la gripe y el resfriado común, mejoran la absorción de hierro, y mantienen la salud de tu piel, huesos y tejidos conectivos.",
    benefits: [
      "Fortalece el sistema inmunológico",
      "Mantiene la piel, huesos y tejidos conectivos saludables",
      "Ayuda en la absorción de hierro",
      "Combate la gripe y el resfriado común"
    ],
    ingredients: [
      "Vitamina C",
      "Zinc",
      "Sabor natural y artificial a Naranja"
    ],
    howToUse: "Masticar de acuerdo a las porciones del envase. Contiene 60 unidades (180g), ideal para un mes (30 porciones).",
    price: 0,
    category: "inmunidad",
    badge: "Gomitas",
    rating: 5.0,
    reviews: 0,
    image: "/images/vitamina-c-zinc.png"
  },
  {
    id: 6,
    slug: "vitamina-c-zinc-kids",
    name: "VITAMINA C + ZINC (KIDS)",
    description: "Gummimas masticables para cuidar a los pequeños del hogar. Sabor a mandarina, sin azúcares añadidos.",
    longDescription: "FitoVit Gummimas es la opción ideal para acompañar el crecimiento de los niños. Estas divertidas gomas masticables combinan los beneficios de la Vitamina C y el Zinc, no contienen azúcares añadidos y tienen un delicioso sabor a mandarina que a los niños les encanta. Fortalece sus defensas de la manera más rica y saludable.",
    benefits: [
      "Especial para cuidar a los pequeños del hogar",
      "Fortalece el sistema inmunológico infantil",
      "Sin azúcares añadidos",
      "¡A los niños les encanta!"
    ],
    ingredients: [
      "Vitamina C",
      "Zinc",
      "Sabor a Mandarina"
    ],
    howToUse: "Masticar de acuerdo a las recomendaciones del envase. Contiene 60 unidades.",
    price: 0,
    category: "infantil",
    badge: "Sin Azúcar",
    rating: 5.0,
    reviews: 0,
    image: "/images/vitamina-c-zinc-kids.png"
  },
  {
    id: 7,
    slug: "ashwagandha-60-caps",
    name: "ASHWAGANDHA X 60 CAPS",
    description: "Equilibra el cortisol, favorece el sueño profundo y mejora la energía diaria.",
    longDescription: "FitoVit Ashwagandha (Withania Somnifera) es un adaptógeno natural ideal para personas a partir de los 30 años. Ayuda a equilibrar la hormona del cortisol, promoviendo calma y bienestar. Favorece un sueño reparador y mejora la resistencia física y mental sin depender de estimulantes para combatir el ritmo diario.",
    benefits: [
      "Equilibra el cortisol (calma, enfoque y bienestar)",
      "Favorece un sueño profundo y reparador",
      "Energía diaria y mejora la resistencia física y mental",
      "Equilibrio mental sin depender de estimulantes"
    ],
    ingredients: [
      "Ashwagandha (Withania Somnifera)"
    ],
    howToUse: "Consumir según las indicaciones del envase. Contiene 60 cápsulas.",
    price: 0,
    category: "relajacion",
    badge: "Adaptógeno",
    rating: 5.0,
    reviews: 0,
    image: "/images/ashwagandha.png"
  },
  {
    id: 8,
    slug: "megacrbrin-cerebro",
    name: "MEGACRBRIN",
    description: "Libera el potencial de tu cerebro. Mejora la concentración, la memoria y combate el cansancio.",
    longDescription: "MEGACRBRIN mantiene tu cerebro encendido. ¿Te cuesta concentrarte, olvidas lo que ibas a decir o siempre estás cansado? Esta fórmula le da a tu cerebro los mejores nutrientes para optimizar su funcionamiento diario e incrementar la energía de manera natural. Con registro INVIMA.",
    benefits: [
      "Mejora la concentración",
      "Ayuda con la memoria (no olvides lo que ibas a decir)",
      "Combate el cansancio y la fatiga cerebral",
      "Libera el potencial de tu cerebro"
    ],
    ingredients: [
      "Maca",
      "Jalea Real",
      "Vitaminas del Complejo B",
      "Minerales esenciales"
    ],
    howToUse: "Consumir según las recomendaciones del envase.",
    price: 0,
    category: "energia",
    badge: "Pocas Unidades",
    rating: 5.0,
    reviews: 0,
    image: "/images/megacrbrin.png"
  },
  {
    id: 9,
    slug: "vtboys",
    name: "VTBOYS",
    description: "Multivitamínico completo infantil y juvenil para un desarrollo óptimo, energía y atención escolar.",
    longDescription: "VTBOYS es un suplemento natural en forma de gomitas o jarabe especialmente balanceado para acompañar el desarrollo de los niños y adolescentes. Provee las vitaminas y minerales necesarios para fortalecer sus defensas, potenciar el enfoque cognitivo y brindarles la energía que necesitan todos los días.",
    benefits: [
      "Apoya el crecimiento",
      "Fortalece el sistema inmunológico infantil",
      "Mejora la energía y concentración",
      "Complemento vitaminíco esencial"
    ],
    ingredients: [
      "Vitaminas del complejo B",
      "Vitamina C",
      "Hierro y Zinc"
    ],
    howToUse: "Consumir diariamente según la recomendación del empaque de acuerdo a la edad.",
    price: 0,
    category: "infantil",
    badge: "Energía vital",
    rating: 5.0,
    reviews: 0,
    image: "/images/vtboys.jpeg"
  },
  {
    id: 10,
    slug: "clorofila",
    name: "CLOROFILA LÍQUIDA",
    description: "Poderoso desintoxicante natural. Oxigena la sangre, regula la digestión y combate el mal aliento.",
    longDescription: "La Clorofila es uno de los desintoxicantes más potentes de la naturaleza. Considerada 'la sangre de las plantas', este suplemento ayuda a limpiar el organismo de toxinas, equilibrar el pH, mejorar notablemente la digestión y promover un aliento fresco desde el interior mejorando la salud metabólica.",
    benefits: [
      "Desintoxica el organismo",
      "Mejora la digestión",
      "Oxigena la sangre",
      "Combate el mal aliento y malos olores"
    ],
    ingredients: [
      "Extracto de Clorofila rica en magnesio",
      "Agua purificada"
    ],
    howToUse: "Mezclar una cucharada sopera en un vaso de agua o tu bebida favorita. Tomar una o dos veces al día.",
    price: 0,
    category: "inmunidad",
    badge: "Detox",
    rating: 5.0,
    reviews: 0,
    image: "/images/clorofila.jpeg"
  },
  {
    id: 11,
    slug: "colageno-marino",
    name: "COLÁGENO MARINO",
    description: "Colágeno Marino hidrolizado de máxima absorción. Piel radiante, cabello fuerte y articulaciones flexibles.",
    longDescription: "El Colágeno Marino es conocido por tener una biodisponibilidad y absorción superior al colágeno bovino. Nutre desde el interior, combatiendo las señales prematuras de envejecimiento celular, reponiendo la hidratación de la piel, fortaleciendo cabellos, uñas frágiles y apoyando la regeneración de los cartílagos articulares.",
    benefits: [
      "Mejora la elasticidad de la piel",
      "Frena la caída y fortalece el cabello",
      "Uñas menos quebradizas",
      "Apoya la salud articular"
    ],
    ingredients: [
      "Colágeno Marino Hidrolizado",
      "Vitamina C",
      "Biotina"
    ],
    howToUse: "Diluir la porción recomendada en agua o tu preparación diaria. Tomar de manera sostenida.",
    price: 0,
    category: "energia",
    badge: "Anti-edad",
    rating: 5.0,
    reviews: 0,
    image: "/images/colageno-marino.jpeg"
  }
]