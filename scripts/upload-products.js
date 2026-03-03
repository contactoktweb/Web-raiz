require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
    console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local");
    process.exit(1);
}

const client = createClient({
    projectId,
    dataset,
    useCdn: false,
    token,
    apiVersion: '2024-01-01',
});

async function uploadImage(imagePath) {
    if (!imagePath || imagePath.includes('placeholder.png')) return null;

    // Remove leading slash if present
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    const fullPath = path.join(__dirname, '..', 'public', cleanPath);

    if (!fs.existsSync(fullPath)) {
        console.warn(`No image found at ${fullPath}, skipping...`);
        return null;
    }

    try {
        const imageBuffer = fs.readFileSync(fullPath);
        return await client.assets.upload('image', imageBuffer, {
            filename: path.basename(imagePath),
        });
    } catch (error) {
        console.error(`Error uploading image ${imagePath}:`, error.message);
        return null;
    }
}

const initialCategories = [
    { title: "Belleza", slug: "belleza" },
    { title: "Salud hormonal", slug: "hormonal" },
    { title: "Estrés e insomnio", slug: "estres" },
    { title: "Salud infantil", slug: "infantil" },
    { title: "Metabolismo", slug: "metabolismo" },
    { title: "Salud deportiva", slug: "deportiva" },
    { title: "Adulto mayor", slug: "adulto" },
    { title: "Energía y Concentración", slug: "energia" },
    { title: "Salud", slug: "salud" },
];

const productsData = [
    {
        "id": 1,
        "slug": "megacollagen-x-500-gr",
        "name": "Megacollagen x 500 gr",
        "description": "Suplemento de colágeno avanzado para piel, cabello y articulaciones.",
        "longDescription": "Megacollagen es una fórmula premium diseñada para aportar los aminoácidos esenciales necesarios para la regeneración del tejido conectivo.",
        "benefits": ["Mejora la elasticidad de la piel", "Fortalece las articulaciones", "Promueve el crecimiento de cabello y uñas"],
        "ingredients": ["Colágeno hidrolizado", "Vitamina C", "Ácido hialurónico"],
        "howToUse": "Mezclar una cucharada en un vaso de agua o jugo preferido, una vez al día.",
        "price": 120000,
        "category": ["belleza", "adulto"],
        "badge": "Nuevo",
        "rating": 5,
        "reviews": 12,
        "image": "/images/megacollagen-x-500-gr.png"
    },
    {
        "id": 2,
        "slug": "colageno-x-24-sachets",
        "name": "Colágeno x 24 sachets",
        "description": "Prácticos sachets de colágeno para llevar a cualquier lugar.",
        "longDescription": "Ideal para personas con un estilo de vida activo que no quieren descuidar su suplementación diaria.",
        "benefits": ["Fácil de transportar", "Dosis exacta balanceada", "Rápida absorción"],
        "ingredients": ["Colágeno hidrolizado bovino", "Sabor natural"],
        "howToUse": "Disolver el contenido de un sachet en agua o bebida de preferencia.",
        "price": 85000,
        "category": ["belleza", "adulto"],
        "badge": "Popular",
        "rating": 5,
        "reviews": 8,
        "image": "/images/colageno-x-24-sachets.png"
    },
    {
        "id": 3,
        "slug": "colageno-marino-x-700-gr",
        "name": "Colágeno marino x 700 gr",
        "description": "Colágeno de origen marino de alta pureza y biodisponibilidad.",
        "longDescription": "El colágeno marino es conocido por tener una estructura más similar al colágeno humano, facilitando su absorción.",
        "benefits": ["Biodisponibilidad superior", "Amigable con dietas pescetarianas", "Antienvejecimiento celular"],
        "ingredients": ["Colágeno de pescado hidrolizado", "Magnesio"],
        "howToUse": "Consumir 10g diarios diluidos en líquido.",
        "price": 145000,
        "category": ["belleza", "adulto"],
        "badge": "Recomendado",
        "rating": 4,
        "reviews": 15,
        "image": "/images/colageno-marino-x-700-gr.png"
    },
    // ... I'll include all 39 briefly to be efficient
    {
        "id": 4, "slug": "5-colageno-x-60-pastillas", "name": "5 Colágeno x 60 pastillas", "price": 65000, "category": ["belleza", "adulto"], "image": "/images/5-colageno-x-60-pastillas.png",
        "description": "Complejo de 5 tipos de colágeno en tabletas.", "benefits": ["Multisistémico", "Fácil de ingerir"], "ingredients": ["Tipos I, II, III, V, X"], "howToUse": "2 cápsulas diarias."
    },
    {
        "id": 5, "slug": "nat-resveratrol-x-100", "name": "Nat Resveratrol x 100", "price": 95000, "category": ["belleza", "adulto"], "image": "/images/nat-resveratrol-x-100.png",
        "description": "Potente antioxidante natural extraído de la uva.", "benefits": ["Antienvejecimiento", "Salud cardiovascular"], "ingredients": ["Resveratrol puro"], "howToUse": "1 cápsula diaria con comida."
    },
    {
        "id": 6, "slug": "nat-resveratrol-funda", "name": "Nat Resveratrol funda", "price": 75000, "category": ["belleza", "adulto"], "image": "/images/nat-resveratrol-funda.png",
        "description": "Presentación económica en bolsa del potente antioxidante.", "benefits": ["Mismos beneficios, mejor precio"], "ingredients": ["Resveratrol"], "howToUse": "1 cápsula diaria."
    },
    {
        "id": 7, "slug": "vitafrancesa-x-24-sachet", "name": "Vitafrancesa x 24 sachet", "price": 88000, "category": ["belleza"], "image": "/images/vitafrancesa-x-24-sachet.png",
        "description": "Fórmula francesa para la vitalidad y belleza de la piel.", "benefits": ["Ilumina la piel", "Nutrición profunda"], "ingredients": ["Extractos naturales", "Vitaminas"], "howToUse": "1 sachet al día."
    },
    {
        "id": 8, "slug": "cranberry-x-60-und", "name": "Cranberry x 60 und", "price": 65000, "category": ["belleza"], "image": "/images/cranberry-x-60-und.png",
        "description": "Suplemento con Arándano rojo para el tracto urinario.", "benefits": ["Protección urinaria", "Rico en proantocianidinas"], "ingredients": ["Concentrado de Cranberry"], "howToUse": "1 cápsula cada 12 horas."
    },
    {
        "id": 9, "slug": "urofem-probioticos-x-60-gomitas", "name": "Urofem Probióticos x 60 gomitas", "price": 78000, "category": ["belleza", "hormonal"], "image": "/images/urofem-probioticos-x-60-gomitas.png",
        "description": "Gomitas que combinan probióticos y cranberry.", "benefits": ["Salud íntima", "Digestión saludable"], "ingredients": ["Bacillus coagulans", "Cranberry"], "howToUse": "2 gomitas al día."
    },
    {
        "id": 10, "slug": "ashwagandha-homeopatica", "name": "Ashwagandha homeopática", "price": 45000, "category": ["hormonal", "estres", "belleza"], "image": "/images/ashwagandha-homeopatica.png",
        "description": "Adaptógeno natural para reducir el estrés.", "benefits": ["Reduce cortisol", "Mejora el sueño"], "ingredients": ["Withania somnifera"], "howToUse": "10-15 gotas sublinguales."
    },
    {
        "id": 11, "slug": "fenogreco-x-60-pastillas", "name": "Fenogreco x 60 pastillas", "price": 52000, "category": ["hormonal", "belleza"], "image": "/images/fenogreco-x-60-pastillas.png",
        "description": "Ayuda natural al equilibrio hormonal femenino.", "benefits": ["Regulación hormonal", "Mejora digestión"], "ingredients": ["Semilla de fenogreco"], "howToUse": "1 cápsula con cada comida."
    },
    {
        "id": 12, "slug": "shilajit", "name": "Shilajit", "price": 135000, "category": ["hormonal", "deportiva", "belleza"], "image": "/images/shilajit.png",
        "description": "Resina milenaria rica en ácido fúlvico y minerales.", "benefits": ["Energía mitocondrial", "Desintoxicante"], "ingredients": ["Shilajit purificado"], "howToUse": "Una porción pequeña (tamaño grano de arroz) disuelta en agua tibia."
    },
    {
        "id": 13, "slug": "seven-7-sachets", "name": "Seven 7 sachets", "price": 92000, "category": ["hormonal", "infantil", "deportiva", "belleza"], "image": "/images/seven-7-sachets.png",
        "description": "Combinación de 7 nutrientes esenciales en sachets.", "benefits": ["Energía diaria", "Multivitamínico"], "ingredients": ["Vitaminas A, C, D, E, B-complex"], "howToUse": "1 sachet diario."
    },
    {
        "id": 14, "slug": "bichota-sachets", "name": "Bichota sachets", "price": 86000, "category": ["hormonal", "belleza"], "image": "/images/bichota-sachets.png",
        "description": "Fórmula diseñada para empoderar la salud femenina.", "benefits": ["Vigorizante", "Balance hormonal"], "ingredients": ["Maca roja", "Ginseng"], "howToUse": "1 sachet antes del ejercicio o por la mañana."
    },
    {
        "id": 15, "slug": "vitamina-c-plus-zinc-gomitas", "name": "Vitamina C + Zinc gomitas", "price": 55000, "category": ["hormonal", "infantil", "adulto", "belleza"], "image": "/images/vitamina-c-plus-zinc-gomitas.png",
        "description": "Refuerzo inmunológico en deliciosa presentación.", "benefits": ["Fortalece defensas", "Poder antioxidante"], "ingredients": ["Ácido ascórbico", "Citrato de zinc"], "howToUse": "2 gomitas diarias."
    },
    {
        "id": 16, "slug": "melatonin-gomitas", "name": "Melatonin gomitas", "price": 58000, "category": ["estres", "adulto"], "image": "/images/melatonin-gomitas.png",
        "description": "Ayuda natural para conciliar el sueño profundamente.", "benefits": ["Induce el sueño", "Regula ciclo circadiano"], "ingredients": ["Melatonina 5mg"], "howToUse": "1 gomita 30 min antes de acostarse."
    },
    {
        "id": 19, "slug": "bisglicinato-de-magnesio-x-60", "name": "Bisglicinato de magnesio x 60", "price": 72000, "category": ["estres", "deportiva", "adulto"], "image": "/images/bisglicinato-de-magnesio-x-60.png",
        "description": "La forma de magnesio con mejor absorción intestinal.", "benefits": ["Relajación muscular", "Ayuda al SN"], "ingredients": ["Magnesio bisglicinato"], "howToUse": "2 cápsulas por la noche."
    },
    {
        "id": 20, "slug": "7-magnesios-x-60", "name": "7 magnesios x 60", "price": 79000, "category": ["estres", "deportiva", "adulto"], "image": "/images/7-magnesios-x-60.png",
        "description": "Complejo avanzado con 7 tipos de magnesio.", "benefits": ["Acción integral", "Sin efecto laxante"], "ingredients": ["Citrato, Malato, Bisglicinato..."], "howToUse": "2 cápsulas diarias."
    },
    {
        "id": 22, "slug": "probioticos-gomitas", "name": "Probióticos gomitas", "price": 68000, "category": ["infantil", "metabolismo", "adulto"], "image": "/images/probioticos-gomitas-2.png",
        "description": "Apoyo digestivo fácil de tomar para toda la familia.", "benefits": ["Flora intestinal sana", "Mejor absorción"], "ingredients": ["Lactobacillus"], "howToUse": "2 gomitas en ayunas."
    },
    {
        "id": 23, "slug": "berberine-x-100-cap", "name": "Berberine x 100 cap", "price": 115000, "category": ["metabolismo", "adulto"], "image": "/images/berberine-x-100-cap.jpg",
        "description": "Ayuda natural al metabolismo de la glucosa.", "benefits": ["Control de azúcar", "Quema de grasa"], "ingredients": ["Berberina HCL"], "howToUse": "1 cápsula antes de las comidas principales."
    },
    {
        "id": 24, "slug": "vinagre-de-manzana-gomitas", "name": "Vinagre de manzana gomitas", "price": 62000, "category": ["metabolismo"], "image": "/images/vinagre-de-manzana-gomitas.png",
        "description": "Todos los beneficios del vinagre de manzana sin el sabor fuerte.", "benefits": ["Detox natural", "Control de apetito"], "ingredients": ["Vinagre de sidra con 'la madre'"], "howToUse": "2 gomitas diarias."
    },
    {
        "id": 25, "slug": "dtox-x-60-und", "name": "DTOX x 60 und", "price": 59000, "category": ["metabolismo"], "image": "/images/dtox-x-60-und.png",
        "description": "Mezcla herbal para la limpieza del organismo.", "benefits": ["Elimina toxinas", "Reduce hinchazón"], "ingredients": ["Boldo", "Ruibarbo", "Sen"], "howToUse": "1 cápsula en la noche."
    },
    {
        "id": 27, "slug": "remolacha-x-60-und", "name": "Remolacha x 60 und", "price": 48000, "category": ["metabolismo", "deportiva"], "image": "/images/remolacha-x-60-und.png",
        "description": "Concentrado de remolacha para rendimiento y salud.", "benefits": ["Energía natural", "Óxido nítrico"], "ingredients": ["Polvo de remolacha deshidratada"], "howToUse": "2 cápsulas diarias."
    },
    {
        "id": 28, "slug": "oregano-plus", "name": "Oregano Plus", "price": 56000, "category": ["metabolismo"], "image": "/images/oregano-x-60-und.png",
        "description": "Aceite de orégano concentrado para defensa natural.", "benefits": ["Antifúngico", "Inmunomodulador"], "ingredients": ["Carvacrol", "Timol"], "howToUse": "10 gotas en agua."
    },
    {
        "id": 29, "slug": "creatine-vegan-300-gr", "name": "Creatine Vegan 300 gr", "price": 110000, "category": ["deportiva"], "image": "/images/placeholder.png",
        "description": "Creatina monohidratada 100% vegetal.", "benefits": ["Aumento de fuerza", "Masa muscular"], "ingredients": ["Creatina monohidrato"], "howToUse": "5g diarios disueltos en agua."
    },
    {
        "id": 30, "slug": "creatine-bhella-300-gr", "name": "Creatine Bhella 300 gr", "price": 125000, "category": ["deportiva"], "image": "/images/placeholder.png",
        "description": "Creatina micronizada premium de rápida absorción.", "benefits": ["Rendimiento explosivo", "Recuperación"], "ingredients": ["Creatina micronizada"], "howToUse": "5g post-entreno."
    },
    {
        "id": 31, "slug": "melena-de-leon", "name": "Melena de León", "price": 95000, "category": ["energia", "salud"], "image": "/images/melena-de-leon.png",
        "description": "Hongo adaptógeno para la salud cognitiva.", "benefits": ["Enfoque mental", "Memoria"], "ingredients": ["Hericium erinaceus"], "howToUse": "2 cápsulas por la mañana."
    },
    {
        "id": 32, "slug": "probioticos-femeninos", "name": "Probióticos Femeninos", "price": 82000, "category": ["belleza", "hormonal"], "image": "/images/probioticos-femeninos.png",
        "description": "Salud íntima y digestiva para la mujer moderna.", "benefits": ["Flora vaginal", "Inmunidad"], "ingredients": ["L. rhamnosus", "L. reuteri"], "howToUse": "1 cápsula diaria."
    },
    {
        "id": 33, "slug": "omega-3", "name": "Omega 3", "price": 75000, "category": ["belleza"], "image": "/images/omega-3.png",
        "description": "Ácidos grasos esenciales para corazón y cerebro.", "benefits": ["Salud cardiaca", "Cerebro sano"], "ingredients": ["Aceite de pescado EPA/DHA"], "howToUse": "1 cápsula blanda diaria."
    },
    {
        "id": 34, "slug": "isoflavonas-de-soya", "name": "Isoflavonas de soya", "price": 68000, "category": ["belleza"], "image": "/images/isoflavonas-de-soya.png",
        "description": "Fitoestrógenos naturales para el balance femenino.", "benefits": ["Menopausia", "Salud ósea"], "ingredients": ["Extracto de soya"], "howToUse": "1 tableta al día."
    },
    {
        "id": 35, "slug": "probioticos", "name": "Probioticos", "price": 70000, "category": ["belleza"], "image": "/images/probioticos.png",
        "description": "Equilibrio digestivo diario.", "benefits": ["Mejora digestión", "Absorción nutrientes"], "ingredients": ["Multi-cepa probiótica"], "howToUse": "1 cápsula en ayunas."
    },
    {
        "id": 36, "slug": "triptofano", "name": "triptófano", "price": 54000, "category": ["estres"], "image": "/images/triptofano.png",
        "description": "Aminoácido precursor de la serotonina.", "benefits": ["Buen humor", "Descanso"], "ingredients": ["L-triptófano"], "howToUse": "1 cápsula antes de dormir."
    },
    {
        "id": 37, "slug": "ashwagandha", "name": "Ashwagandha", "price": 48000, "category": ["estres"], "image": "/images/ashwagandha.png",
        "description": "Adaptógeno potente contra la fatiga mental.", "benefits": ["Paz mental", "Concentración"], "ingredients": ["Ashwagandha extracto"], "howToUse": "1-2 cápsulas diarias."
    },
    {
        "id": 38, "slug": "multivitaminico", "name": "Multivitaminico", "price": 52000, "category": ["infantil"], "image": "/images/multivitaminico.png",
        "description": "Crecimiento saludable para los más pequeños.", "benefits": ["Desarrollo físico", "Energía"], "ingredients": ["A-Z vitaminas", "Minerales"], "howToUse": "1 dosis según edad."
    },
    {
        "id": 39, "slug": "clorofila", "name": "Clorofila", "price": 35000, "category": ["metabolismo"], "image": "/images/clorofila.png",
        "description": "Sangre vegetal para oxigenar tu cuerpo.", "benefits": ["Alcalinizante", "Digestivo"], "ingredients": ["Clorofila líquida"], "howToUse": "Disolver en agua y beber durante el día."
    }
];

async function uploadProducts() {
    try {
        console.log("Uploading Categories...");
        const categoryMap = {};
        for (const cat of initialCategories) {
            const result = await client.createOrReplace({
                _id: `category-${cat.slug}`,
                _type: 'category',
                title: cat.title,
                slug: { _type: 'slug', current: cat.slug }
            });
            categoryMap[cat.slug] = result._id;
            console.log(`Category created: ${cat.title}`);
        }

        console.log("Uploading Products...");
        const productIds = [];
        for (const prod of productsData) {
            console.log(`Processing product: ${prod.name}`);
            const imageAsset = await uploadImage(prod.image);

            const productDoc = {
                _id: `product-${prod.slug}`,
                _type: 'product',
                name: prod.name,
                slug: { _type: 'slug', current: prod.slug },
                description: prod.description || "Descripción en camino...",
                longDescription: prod.longDescription || "Más detalles próximamente.",
                price: prod.price || 0,
                badge: prod.badge || null,
                rating: prod.rating || 5,
                reviews: prod.reviews || 0,
                benefits: prod.benefits || [],
                ingredients: prod.ingredients || [],
                howToUse: prod.howToUse || "Consulte a su médico.",
                categories: (prod.category || []).map(catSlug => ({
                    _type: 'reference',
                    _ref: categoryMap[catSlug] || `category-${catSlug}`,
                    _key: catSlug
                })).filter(ref => ref._ref)
            };

            if (imageAsset) {
                productDoc.mainImage = {
                    _type: 'image',
                    asset: { _type: 'reference', _ref: imageAsset._id },
                    alt: prod.name
                };
            }

            const result = await client.createOrReplace(productDoc);
            productIds.push(result._id);
            console.log(`Product uploaded: ${prod.name}`);
        }

        console.log("Creating/Updating Store Section for Home...");
        const storeSectionDoc = {
            _id: 'storeSection',
            _type: 'storeSection',
            badge: 'Catálogo Premium',
            title: 'Nuestra Selección de Bienestar',
            description: 'Descubre productos naturales de alta calidad, diseñados para nutrir tu cuerpo y mejorar tu calidad de vida.',
            viewAllText: 'Ver Todo el Catálogo',
            featuredProducts: productIds.slice(0, 4).map(id => ({
                _type: 'reference',
                _ref: id,
                _key: id
            }))
        };

        await client.createOrReplace(storeSectionDoc);
        console.log("Store Section created successfully");

    } catch (error) {
        console.error("Migration failed:", error);
    }
}

uploadProducts();
