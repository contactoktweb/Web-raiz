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
    slug: "magnesio-bisglicinato",
    name: "Magnesio Bisglicinato",
    description:
      "Maxima absorcion para relajacion muscular, sueno reparador y reduccion del estres.",
    longDescription:
      "El Magnesio Bisglicinato es la forma mas biodisponible de magnesio, lo que significa que tu cuerpo lo absorbe con mayor eficiencia. A diferencia de otras formas de magnesio que pueden causar molestias gastrointestinales, el bisglicinato es suave con el estomago y altamente efectivo. Es el mineral esencial que la mayoria de las personas tienen en deficiencia sin saberlo.",
    benefits: [
      "Relajacion muscular profunda",
      "Mejora la calidad del sueno",
      "Reduce el estres y la ansiedad",
      "Soporte para el sistema nervioso",
      "Prevencion de calambres",
    ],
    ingredients: [
      "Magnesio (como bisglicinato de magnesio) 400mg",
      "Vitamina B6 (como piridoxal-5-fosfato) 10mg",
    ],
    howToUse:
      "Toma 2 capsulas al dia con agua, preferiblemente 30 minutos antes de dormir para optimizar la relajacion y el descanso.",
    price: 45000,
    category: "energia",
    badge: "Mas vendido",
    rating: 4.9,
    reviews: 127,
    image: "/images/product-magnesio.jpg",
  },
  {
    id: 2,
    slug: "complejo-b-metilado",
    name: "Complejo B Metilado",
    description:
      "Vitaminas B en su forma activa para energia celular y salud del sistema nervioso.",
    longDescription:
      "Nuestro Complejo B Metilado contiene las 8 vitaminas B esenciales en sus formas metabolicamente activas, listas para ser utilizadas inmediatamente por tu cuerpo. Las formas metiladas son especialmente importantes para personas con variaciones geneticas que dificultan la conversion de vitaminas B estandar.",
    benefits: [
      "Energia celular sostenida",
      "Soporte del sistema nervioso",
      "Mejora el estado de animo",
      "Salud cardiovascular",
      "Funcion cognitiva optima",
    ],
    ingredients: [
      "Tiamina (B1) 25mg",
      "Riboflavina 5-Fosfato (B2) 25mg",
      "Niacinamida (B3) 50mg",
      "Acido Pantotenico (B5) 50mg",
      "Piridoxal-5-Fosfato (B6) 25mg",
      "Metilfolato (B9) 400mcg",
      "Metilcobalamina (B12) 1000mcg",
      "Biotina (B7) 300mcg",
    ],
    howToUse:
      "Toma 1 capsula al dia con el desayuno. No tomar en la noche ya que puede interferir con el sueno.",
    price: 38000,
    category: "energia",
    badge: null,
    rating: 4.8,
    reviews: 89,
    image: "/images/product-magnesio.jpg",
  },
  {
    id: 3,
    slug: "omega-3-ultra-puro",
    name: "Omega 3 Ultra Puro",
    description:
      "EPA y DHA de alta concentracion para cerebro, corazon y articulaciones.",
    longDescription:
      "Nuestro Omega 3 Ultra Puro se obtiene de peces de aguas frias y pasa por un proceso de destilacion molecular que elimina metales pesados, PCBs y contaminantes. Cada capsula ofrece una concentracion superior de EPA y DHA, los acidos grasos esenciales que tu cuerpo no puede producir por si mismo.",
    benefits: [
      "Salud cerebral y funcion cognitiva",
      "Proteccion cardiovascular",
      "Reduccion de la inflamacion articular",
      "Salud ocular",
      "Mejora el estado de animo",
    ],
    ingredients: [
      "Aceite de Pescado concentrado 1200mg",
      "EPA (Acido Eicosapentaenoico) 720mg",
      "DHA (Acido Docosahexaenoico) 480mg",
      "Vitamina E (como tocoferol) 10mg",
    ],
    howToUse:
      "Toma 2 capsulas al dia con una comida rica en grasas para optimizar la absorcion.",
    price: 52000,
    category: "energia",
    badge: null,
    rating: 4.7,
    reviews: 104,
    image: "/images/product-omega.jpg",
  },
  {
    id: 4,
    slug: "ashwagandha-ksm66",
    name: "Ashwagandha KSM-66",
    description:
      "El adaptogeno mas estudiado para reducir cortisol y mejorar la resistencia al estres.",
    longDescription:
      "Ashwagandha KSM-66 es el extracto de ashwagandha con mayor respaldo cientifico del mundo, con mas de 24 estudios clinicos doble ciego. Esta raiz adaptogena milenaria de la medicina ayurvedica ayuda a tu cuerpo a adaptarse al estres fisico y emocional, reduciendo los niveles de cortisol y promoviendo un estado de calma energizada.",
    benefits: [
      "Reduce el cortisol (hormona del estres)",
      "Mejora la resistencia al estres",
      "Aumenta la energia sin estimular",
      "Soporte hormonal natural",
      "Mejora la calidad del sueno",
    ],
    ingredients: [
      "Extracto de raiz de Ashwagandha (KSM-66) 600mg",
      "Witanolidos estandarizados al 5%",
    ],
    howToUse:
      "Toma 1 capsula por la manana y 1 por la noche con alimentos. Ciclar 8 semanas on, 2 semanas off.",
    price: 48000,
    category: "energia",
    badge: "Popular",
    rating: 4.9,
    reviews: 156,
    image: "/images/product-ashwagandha.jpg",
  },
  {
    id: 5,
    slug: "melena-de-leon",
    name: "Melena de Leon",
    description:
      "Hongo medicinal que promueve la neurogenesis y la claridad mental.",
    longDescription:
      "La Melena de Leon (Hericium erinaceus) es un hongo medicinal unico que contiene compuestos bioactivos llamados erinacinas y hericenonas. Estos compuestos estimulan la produccion del Factor de Crecimiento Nervioso (NGF), una proteina esencial para la supervivencia y regeneracion de las neuronas.",
    benefits: [
      "Estimula la neurogenesis",
      "Mejora la memoria y concentracion",
      "Proteccion neuroprotectora",
      "Reduce la neblina mental",
      "Soporte del sistema inmune",
    ],
    ingredients: [
      "Extracto de Melena de Leon (fruiting body) 1000mg",
      "Polisacaridos estandarizados al 30%",
      "Beta-glucanos al 15%",
    ],
    howToUse:
      "Toma 2 capsulas por la manana con el desayuno. Los efectos se notan progresivamente despues de 2-4 semanas de uso continuo.",
    price: 55000,
    category: "energia",
    badge: null,
    rating: 4.6,
    reviews: 72,
    image: "/images/product-ashwagandha.jpg",
  },
  {
    id: 6,
    slug: "proteina-organica",
    name: "Proteina Organica",
    description:
      "Proteina vegetal de alta calidad con aminoacidos esenciales para la masa muscular.",
    longDescription:
      "Nuestra Proteina Organica combina proteina de arveja, arroz integral y semillas de calabaza para crear un perfil de aminoacidos completo y altamente digestible. Certificada organica, sin aditivos artificiales y con un sabor suave natural.",
    benefits: [
      "Mantiene y desarrolla masa muscular",
      "Alta digestibilidad",
      "Perfil completo de aminoacidos",
      "Sin alergenos comunes",
      "Ideal para recuperacion post-ejercicio",
    ],
    ingredients: [
      "Proteina de arveja organica 15g",
      "Proteina de arroz integral organico 8g",
      "Proteina de semilla de calabaza 2g",
      "Stevia organica",
    ],
    howToUse:
      "Mezcla 1 scoop (30g) con 250ml de agua o leche vegetal. Ideal despues del ejercicio o como complemento de una comida.",
    price: 65000,
    category: "adulto-mayor",
    badge: null,
    rating: 4.7,
    reviews: 63,
    image: "/images/product-espirulina.jpg",
  },
  {
    id: 7,
    slug: "creatina-monohidratada",
    name: "Creatina Monohidratada",
    description:
      "Mejora la fuerza muscular, la funcion cognitiva y la energia celular.",
    longDescription:
      "La Creatina Monohidratada es el suplemento deportivo mas estudiado en la historia de la ciencia nutricional. Mas alla de sus beneficios para la fuerza y el rendimiento atletico, investigaciones recientes han demostrado beneficios significativos para la funcion cognitiva, especialmente en adultos mayores.",
    benefits: [
      "Aumenta la fuerza y potencia muscular",
      "Mejora la funcion cognitiva",
      "Energia celular sostenida",
      "Reduce la fatiga",
      "Neuroproteccion",
    ],
    ingredients: [
      "Creatina Monohidratada (Creapure) 5g por dosis",
    ],
    howToUse:
      "Mezcla 5g (1 cucharadita) en agua o tu bebida favorita. Tomar diariamente, preferiblemente despues del ejercicio.",
    price: 42000,
    category: "adulto-mayor",
    badge: "Recomendado",
    rating: 4.8,
    reviews: 91,
    image: "/images/product-espirulina.jpg",
  },
  {
    id: 8,
    slug: "vitamina-d3-k2",
    name: "Vitamina D3 + K2",
    description:
      "Sinergia perfecta para huesos fuertes, inmunidad y absorcion de calcio.",
    longDescription:
      "La Vitamina D3 y la K2 trabajan en perfecta sinergia: mientras la D3 aumenta la absorcion de calcio en el intestino, la K2 (en su forma MK-7) se asegura de que ese calcio se deposite en los huesos y dientes, y no en las arterias. Esta combinacion es esencial especialmente en Latinoamerica donde la deficiencia de vitamina D es alarmantemente comun.",
    benefits: [
      "Fortalece huesos y dientes",
      "Refuerza el sistema inmune",
      "Mejora la absorcion de calcio",
      "Proteccion cardiovascular",
      "Soporte del estado de animo",
    ],
    ingredients: [
      "Vitamina D3 (Colecalciferol) 5000 UI",
      "Vitamina K2 (como MK-7) 100mcg",
      "Aceite de oliva extra virgen (carrier)",
    ],
    howToUse:
      "Toma 1 capsula blanda al dia con la comida principal. La grasa de la comida mejora la absorcion.",
    price: 35000,
    category: "adulto-mayor",
    badge: null,
    rating: 4.9,
    reviews: 143,
    image: "/images/product-vitd.jpg",
  },
  {
    id: 9,
    slug: "vitamina-b12-metilcobalamina",
    name: "Vitamina B12 Metilcobalamina",
    description:
      "Forma activa de B12 para energia, funcion neurologica y produccion de globulos rojos.",
    longDescription:
      "La Metilcobalamina es la forma bioactiva de la vitamina B12, lista para ser utilizada directamente por tu cuerpo sin necesidad de conversion metabolica. Es crucial para la produccion de energia, la formacion de globulos rojos y el mantenimiento del sistema nervioso.",
    benefits: [
      "Energia y vitalidad",
      "Funcion neurologica optima",
      "Produccion de globulos rojos",
      "Metabolismo de homocisteina",
      "Soporte del estado de animo",
    ],
    ingredients: [
      "Vitamina B12 (como Metilcobalamina) 1000mcg",
    ],
    howToUse:
      "Disuelve 1 tableta sublingual bajo la lengua por la manana. La absorcion sublingual es superior a la via oral.",
    price: 32000,
    category: "adulto-mayor",
    badge: null,
    rating: 4.7,
    reviews: 55,
    image: "/images/product-vitd.jpg",
  },
  {
    id: 10,
    slug: "zinc-picolinato",
    name: "Zinc Picolinato",
    description:
      "Alta biodisponibilidad para soporte hormonal, inmunidad y salud de la piel.",
    longDescription:
      "El Zinc Picolinato ofrece una de las formas mas biodisponibles de zinc disponibles. Este mineral traza es esencial para mas de 300 reacciones enzimaticas en tu cuerpo, incluyendo la sintesis de proteinas, la funcion inmune y la expresion genetica.",
    benefits: [
      "Refuerza el sistema inmune",
      "Equilibrio hormonal",
      "Salud de la piel, cabello y unas",
      "Funcion reproductiva",
      "Soporte de la tiroides",
    ],
    ingredients: [
      "Zinc (como Picolinato de Zinc) 30mg",
    ],
    howToUse:
      "Toma 1 capsula al dia con una comida. No tomar junto con suplementos de hierro o calcio.",
    price: 30000,
    category: "hormonal",
    badge: null,
    rating: 4.8,
    reviews: 78,
    image: "/images/product-magnesio.jpg",
  },
  {
    id: 11,
    slug: "adaptogenos-blend",
    name: "Adaptogenos Blend",
    description:
      "Mezcla sinergica de adaptogenos para equilibrio hormonal natural.",
    longDescription:
      "Nuestro Adaptogenos Blend combina las raices y hongos adaptogenos mas poderosos de la medicina tradicional en una formula sinergica. Cada ingrediente ha sido seleccionado por su capacidad de ayudar al cuerpo a adaptarse al estres y restaurar el equilibrio hormonal de forma natural.",
    benefits: [
      "Equilibrio hormonal integral",
      "Reduccion del estres cronico",
      "Mejora la resistencia fisica",
      "Soporte adrenal",
      "Bienestar emocional",
    ],
    ingredients: [
      "Ashwagandha KSM-66 300mg",
      "Rhodiola Rosea (3% rosavinas) 200mg",
      "Maca Gelatinizada 250mg",
      "Reishi (30% polisacaridos) 200mg",
    ],
    howToUse:
      "Toma 2 capsulas por la manana con el desayuno. Ciclar 6 semanas on, 1 semana off.",
    price: 58000,
    category: "hormonal",
    badge: "Nuevo",
    rating: 4.6,
    reviews: 34,
    image: "/images/product-ashwagandha.jpg",
  },
  {
    id: 12,
    slug: "fibra-prebiotica",
    name: "Fibra Prebiotica",
    description:
      "Alimenta tu microbioma con fibra soluble de alta calidad para una digestion optima.",
    longDescription:
      "Nuestra Fibra Prebiotica es una mezcla cuidadosamente formulada de fibras solubles que alimentan selectivamente a las bacterias beneficas de tu intestino. A diferencia de un simple probiotico que introduce bacterias externas, los prebioticos nutren y fortalecen tu propia flora intestinal.",
    benefits: [
      "Alimenta la flora intestinal benefica",
      "Mejora la regularidad digestiva",
      "Reduce la hinchazon",
      "Fortalece la barrera intestinal",
      "Mejora la absorcion de nutrientes",
    ],
    ingredients: [
      "Inulina de agave organica 3g",
      "FOS (Fructooligosacaridos) 2g",
      "Goma acacia 1g",
    ],
    howToUse:
      "Mezcla 1 cucharada en agua, jugo o smoothie. Empezar con media dosis e ir incrementando gradualmente.",
    price: 28000,
    category: "digestiva",
    badge: null,
    rating: 4.5,
    reviews: 41,
    image: "/images/product-espirulina.jpg",
  },
  {
    id: 13,
    slug: "probioticos-50b",
    name: "Probioticos 50B CFU",
    description:
      "50 mil millones de UFC con cepas clinicamente estudiadas para restaurar la flora intestinal.",
    longDescription:
      "Nuestros Probioticos 50B contienen 50 mil millones de unidades formadoras de colonias de 12 cepas clinicamente documentadas. Cada cepa ha sido seleccionada por su capacidad de sobrevivir el acido estomacal y colonizar el intestino de manera efectiva.",
    benefits: [
      "Restaura la flora intestinal",
      "Mejora la digestion",
      "Refuerza el sistema inmune",
      "Reduce la inflamacion intestinal",
      "Mejora la absorcion de nutrientes",
    ],
    ingredients: [
      "Mezcla probiotica 50 billones CFU",
      "12 cepas clinicamente documentadas",
      "Lactobacillus acidophilus, L. rhamnosus, L. plantarum",
      "Bifidobacterium lactis, B. longum, B. breve",
    ],
    howToUse:
      "Toma 1 capsula al dia en ayunas con un vaso de agua. Refrigerar despues de abrir.",
    price: 48000,
    category: "digestiva",
    badge: "Mas vendido",
    rating: 4.9,
    reviews: 189,
    image: "/images/product-probioticos.jpg",
  },
  {
    id: 14,
    slug: "berberina-hcl",
    name: "Berberina HCL",
    description:
      "Regulador natural de la glucosa en sangre, el colesterol y el metabolismo.",
    longDescription:
      "La Berberina HCL es un alcaloide natural presente en varias plantas medicinales que ha demostrado en multiples estudios clinicos ser tan efectiva como algunos farmacos convencionales para regular la glucosa en sangre y mejorar los marcadores metabolicos.",
    benefits: [
      "Regula la glucosa en sangre",
      "Mejora la sensibilidad a la insulina",
      "Reduce el colesterol LDL",
      "Activa AMPK (sensor metabolico)",
      "Soporte del peso saludable",
    ],
    ingredients: [
      "Berberina HCL (del extracto de Berberis aristata) 500mg",
    ],
    howToUse:
      "Toma 1 capsula 2-3 veces al dia antes de las comidas. Empezar con 1 capsula e ir aumentando.",
    price: 52000,
    category: "digestiva",
    badge: null,
    rating: 4.7,
    reviews: 66,
    image: "/images/product-probioticos.jpg",
  },
  {
    id: 15,
    slug: "cardo-mariano",
    name: "Cardo Mariano",
    description:
      "Silimarina estandarizada para la proteccion y regeneracion hepatica.",
    longDescription:
      "El Cardo Mariano (Silybum marianum) contiene silimarina, un complejo de flavonolignanos con poderosas propiedades hepatoprotectoras. Ha sido usado por mas de 2000 anos en la medicina tradicional europea para proteger y regenerar el higado.",
    benefits: [
      "Proteccion hepatica",
      "Regeneracion celular del higado",
      "Potente antioxidante",
      "Soporte de la desintoxicacion",
      "Mejora la digestion de grasas",
    ],
    ingredients: [
      "Extracto de Cardo Mariano (80% silimarina) 300mg",
    ],
    howToUse:
      "Toma 1 capsula 2 veces al dia con las comidas. Ideal para ciclos de desintoxicacion de 30-60 dias.",
    price: 35000,
    category: "digestiva",
    badge: null,
    rating: 4.6,
    reviews: 48,
    image: "/images/product-espirulina.jpg",
  },
  {
    id: 16,
    slug: "espirulina-organica",
    name: "Espirulina Organica",
    description:
      "Superalimento rico en proteinas, hierro y ficocianinas para desintoxicacion natural.",
    longDescription:
      "Nuestra Espirulina Organica se cultiva en aguas puras y controladas, y se seca a baja temperatura para preservar sus nutrientes. Es uno de los alimentos mas densos nutricionalmente del planeta, conteniendo mas de 60% de proteina completa, todos los aminoacidos esenciales y una impresionante variedad de vitaminas y minerales.",
    benefits: [
      "Desintoxicacion natural de metales pesados",
      "Rica fuente de hierro biodisponible",
      "Proteina completa vegetal",
      "Potente antioxidante (ficocianina)",
      "Soporte del sistema inmune",
    ],
    ingredients: [
      "Espirulina organica (Arthrospira platensis) 3000mg",
      "Ficocianina estandarizada al 20%",
    ],
    howToUse:
      "Toma 6 tabletas al dia con agua o mezcla el polvo en un smoothie. Empezar con 2 tabletas e ir incrementando.",
    price: 38000,
    category: "digestiva",
    badge: null,
    rating: 4.5,
    reviews: 57,
    image: "/images/product-espirulina.jpg",
  },
  {
    id: 17,
    slug: "omega-3-dha-infantil",
    name: "Omega 3 DHA Infantil",
    description:
      "DHA de alta pureza en forma liquida para el desarrollo cerebral y la concentracion infantil.",
    longDescription:
      "Nuestro Omega 3 DHA Infantil esta formulado especialmente para ninos en crecimiento. El DHA es el acido graso omega-3 predominante en el cerebro y es fundamental durante las etapas criticas del desarrollo neurologico. Con sabor natural a naranja y en formato liquido de facil dosificacion.",
    benefits: [
      "Desarrollo cerebral optimo",
      "Mejora la concentracion y el aprendizaje",
      "Salud visual",
      "Fortalece el sistema inmune infantil",
      "Desarrollo neurologico saludable",
    ],
    ingredients: [
      "Aceite de Pescado purificado 1000mg",
      "DHA (Acido Docosahexaenoico) 500mg",
      "EPA (Acido Eicosapentaenoico) 200mg",
      "Vitamina D3 400 UI",
      "Sabor natural de naranja",
    ],
    howToUse:
      "Administrar 1ml (1 gotero completo) al dia directamente en la boca o mezclado con alimentos. Para ninos de 2 a 12 anos.",
    price: 42000,
    category: "infantil",
    badge: "Esencial",
    rating: 4.9,
    reviews: 112,
    image: "/images/product-omega.jpg",
  },
  {
    id: 18,
    slug: "magnesio-infantil",
    name: "Magnesio Infantil",
    description:
      "Formula suave en gominolas para apoyar el sueno, la calma y el enfoque de los ninos.",
    longDescription:
      "Nuestro Magnesio Infantil en gominolas esta especialmente formulado para los pequenos del hogar. Con sabor natural a fresa y moras, cada gominola proporciona magnesio en forma de citrato, una de las formas mas suaves y biodisponibles para el delicado sistema digestivo de los ninos.",
    benefits: [
      "Promueve la calma y la relajacion",
      "Mejora la calidad del sueno",
      "Soporte para el enfoque y atencion",
      "Salud de huesos en crecimiento",
      "Funcion muscular saludable",
    ],
    ingredients: [
      "Magnesio (como citrato de magnesio) 100mg",
      "Vitamina B6 5mg",
      "Sabores naturales de fresa y mora",
    ],
    howToUse:
      "Ninos de 4-8 anos: 1 gominola al dia. Ninos de 9-12 anos: 2 gominolas al dia. Tomar despues de la cena.",
    price: 35000,
    category: "infantil",
    badge: null,
    rating: 4.8,
    reviews: 86,
    image: "/images/product-magnesio.jpg",
  },
]