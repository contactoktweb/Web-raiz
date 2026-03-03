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
    const fullPath = path.join(__dirname, '..', imagePath);
    if (!fs.existsSync(fullPath)) {
        console.warn(`No image found at ${fullPath}, skipping...`);
        return null;
    }
    const imageBuffer = fs.readFileSync(fullPath);
    return await client.assets.upload('image', imageBuffer, {
        filename: path.basename(imagePath),
    });
}

async function uploadGlobalSettings() {
    try {
        console.log("Uploading logo to Sanity...");
        const logoAsset = await uploadImage('public/logo-oficial.png');
        if (logoAsset) {
            console.log("Logo uploaded successfully. Asset ID:", logoAsset._id);
        }

        console.log("Creating/updating global settings document...");
        const globalSettingsObj = {
            _id: 'globalSettings',
            _type: 'globalSettings',
            siteName: 'Raíz Vital',
            contactEmail: 'contacto@raizvital.com',
            contactPhone: '+57 321 456 7890',
            whatsappNumber: '573001234567',
            whatsappFloatingNumber: '573001234567',
            whatsappFloatingMessage: 'Hola, me gustaría recibir más información sobre los productos de Raíz Vital.',
            address: 'Calle 123 #45-67, Bogotá, Colombia',
            footerDescription: 'Nutre tu cuerpo, Equilibra tu vida. Productos naturales y orientación personalizada para tu bienestar integral.',
            socialLinks: {
                facebook: 'https://facebook.com',
                instagram: 'https://instagram.com',
                tiktok: 'https://tiktok.com',
            }
        };

        if (logoAsset) {
            globalSettingsObj.logo = {
                _type: 'image',
                asset: {
                    _type: "reference",
                    _ref: logoAsset._id
                },
                alt: "Raíz Vital Logo Blanco"
            };
        }

        const globalResult = await client.createOrReplace(globalSettingsObj);
        console.log("Global Settings saved successfully:", globalResult._id);

        console.log("Creating/updating privacy policy document...");
        const privacyPolicyObj = {
            _id: 'privacyPolicy',
            _type: 'privacyPolicy',
            title: 'Política de Tratamiento de Datos',
            lastUpdated: new Date().toISOString().split('T')[0],
            content: `POLÍTICA DE TRATAMIENTO Y PROTECCIÓN DE DATOS PERSONALES - RAÍZ VITAL

En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013, RAÍZ VITAL informa su política para el tratamiento de datos personales:

1. RESPONSABLE DEL TRATAMIENTO
RAÍZ VITAL, con domicilio en Bogotá, Colombia, es responsable del tratamiento de los datos personales recolectados a través de sus canales digitales.

2. FINALIDAD DEL TRATAMIENTO
Los datos personales que recolectamos son utilizados para:
- Gestionar el procesamiento y envío de pedidos.
- Brindar asesoría personalizada sobre nuestros productos naturales.
- Enviar información comercial, promociones y novedades (previo consentimiento).
- Mejorar la experiencia de usuario en nuestro sitio web.
- Dar cumplimiento a obligaciones legales y contables.

3. DERECHOS DE LOS TITULARES
De acuerdo con la ley, como titular de la información tienes derecho a:
- Conocer, actualizar y rectificar tus datos personales.
- Solicitar prueba de la autorización otorgada.
- Ser informado sobre el uso que se le ha dado a tus datos.
- Presentar quejas ante la Superintendencia de Industria y Comercio.
- Revocar la autorización o solicitar la supresión del dato cuando no se respeten los principios, derechos y garantías constitucionales y legales.

4. SEGURIDAD DE LA INFORMACIÓN
Contamos con medidas técnicas y administrativas para garantizar la seguridad de tus datos, evitando su adulteración, pérdida, consulta o acceso no autorizado.

5. ACCESO Y RECTIFICACIÓN
Si deseas ejercer tus derechos para conocer, actualizar, rectificar o suprimir tu información, puedes contactarnos a través de nuestro correo: contacto@raizvital.com o a nuestra línea de WhatsApp.

6. VIGENCIA
Esta política entra en vigencia a partir del momento de su publicación y se reserva el derecho de ser modificada en cualquier momento, informando oportunamente a los usuarios a través de este sitio web.`
        };

        const privacyResult = await client.createOrReplace(privacyPolicyObj);
        console.log("Privacy Policy saved successfully:", privacyResult._id);

        console.log("Uploading Hero images...");
        const heroImages = [
            { name: 'hero-woman.jpg', path: 'public/images/hero-woman.jpg' },
            { name: 'hero-ingredients.jpg', path: 'public/images/hero-ingredients.jpg' },
            { name: 'hero-product.jpg', path: 'public/images/hero-product.jpg' },
        ];

        const uploadedHeroImages = {};
        for (const img of heroImages) {
            const asset = await uploadImage(img.path);
            if (asset) {
                uploadedHeroImages[img.name] = asset._id;
                console.log(`Uploaded ${img.name}:`, asset._id);
            }
        }

        console.log("Creating/updating hero section document...");
        const heroSectionObj = {
            _id: 'heroSection',
            _type: 'heroSection',
            badge: 'Raíz Vital | Salud natural y consciente',
            headlineLine1: 'Tu bienestar',
            headlineLine2Part1: 'merece',
            headlineLine2Part2: 'raíces',
            mainImageText: 'No existen fórmulas genéricas. Tu cuerpo merece una orientación personalizada.',
            naturalBadge: '100% Natural',
            statsNumber: '+500',
            statsDescription: 'Vidas transformadas con nuestro acompañamiento',
            productTeaserText: 'Ver Tienda',
            trustStrip: ['Envío Nacional', 'Asesoría Gratis', 'Ingredientes Puros', 'Resultados Reales'],
        };

        if (uploadedHeroImages['hero-woman.jpg']) {
            heroSectionObj.mainImage = {
                _type: 'image',
                asset: { _type: "reference", _ref: uploadedHeroImages['hero-woman.jpg'] },
                alt: "Mujer en armonía con la naturaleza"
            };
        }
        if (uploadedHeroImages['hero-ingredients.jpg']) {
            heroSectionObj.ingredientsImage = {
                _type: 'image',
                asset: { _type: "reference", _ref: uploadedHeroImages['hero-ingredients.jpg'] },
                alt: "Ingredientes naturales premium"
            };
        }
        if (uploadedHeroImages['hero-product.jpg']) {
            heroSectionObj.productTeaserImage = {
                _type: 'image',
                asset: { _type: "reference", _ref: uploadedHeroImages['hero-product.jpg'] },
                alt: "Producto natural Raíz Vital"
            };
        }

        const heroResult = await client.createOrReplace(heroSectionObj);
        console.log("Hero Section saved successfully:", heroResult._id);

        console.log("Creating/updating benefits section document...");
        const benefitsSectionObj = {
            _id: 'benefitsSection',
            _type: 'benefitsSection',
            badge: 'Nuestra Tienda',
            title: 'Soluciones organizadas por beneficios',
            description: 'No vendemos productos al azar. Cada suplemento está agrupado según el beneficio real que aporta a tu salud.',
            categories: [
                {
                    _key: 'cat1',
                    title: 'Belleza y Anti-edad',
                    icon: 'Star',
                    description: 'Nutrición profunda para piel, cabello y uñas. Porque la verdadera belleza comienza desde el interior.',
                    products: ['Colágeno Hidrolizado', 'Resveratrol', 'Biotina', 'Vitamina E'],
                    theme: 'secondary',
                },
                {
                    _key: 'cat2',
                    title: 'Salud Hormonal',
                    icon: 'Heart',
                    description: 'Equilibrio natural para cada etapa. Regula tu ciclo y bienestar emocional con adaptógenos específicos.',
                    products: ['Omega 3', 'soflavonas', 'ashawanda'],
                    theme: 'primary',
                },
                {
                    _key: 'cat3',
                    title: 'Estrés e Insomnio',
                    icon: 'Moon',
                    description: 'Recupera tu calma y descanso reparador. Fórmulas para relajar el sistema nervioso sin generar dependencia.',
                    products: ['Ashwagandha', 'Magnesio', 'Melatonina', 'Pasiflora'],
                    theme: 'accent',
                },
                {
                    _key: 'cat4',
                    title: 'Salud Infantil',
                    icon: 'Baby',
                    description: 'Apoyo nutricional seguro para el crecimiento, las defensas y la concentración de los más pequeños.',
                    products: ['Multivitamínico Kids', 'Omega 3 DHA', 'Probióticos Kids', 'Zinc'],
                    theme: 'secondary',
                },
                {
                    _key: 'cat5',
                    title: 'Metabolismo y Digestión',
                    icon: 'Activity',
                    description: 'Reactiva tu energía y digestión. Soluciones para optimizar el metabolismo y la salud intestinal.',
                    products: ['Vinagre de Manzana', 'Probióticos', 'Té Verde', 'Fibra Prebiótica'],
                    theme: 'primary',
                },
                {
                    _key: 'cat6',
                    title: 'Salud Deportiva',
                    icon: 'Zap',
                    description: 'Potencia tu rendimiento y recuperación. Suplementación limpia para deportistas y vida activa.',
                    products: ['Creatina Monohidratada', 'Proteína Whey', 'BCAA', 'Electrolitos'],
                    theme: 'accent',
                },
                {
                    _key: 'cat7',
                    title: 'Adulto Mayor',
                    icon: 'Shield',
                    description: 'Vitalidad y protección. Nutrientes esenciales para huesos fuertes, memoria y salud cardiovascular.',
                    products: ['Calcio + D3', 'Glucosamina', 'Ginkgo Biloba', 'Omega 3'],
                    theme: 'secondary',
                },
            ],
        };

        const benefitsResult = await client.createOrReplace(benefitsSectionObj);
        console.log("Benefits Section saved successfully:", benefitsResult._id);

        console.log("Uploading Blog posts...");
        const postsToCreate = [];
        const blogPosts = [
            {
                slug: "salud-adulto-mayor-sarcopenia",
                title: "Salud del Adulto Mayor: Sarcopenia y Prevención Cognitiva",
                excerpt: "Descubre cómo prevenir la pérdida de masa muscular y proteger la salud cognitiva en la tercera edad con estrategias naturales.",
                category: "Adulto Mayor",
                readTime: "8 min de lectura",
                image: "public/images/blog-adulto-mayor.jpg",
                content: `La sarcopenia, o pérdida progresiva de masa muscular, es uno de los desafíos más significativos del envejecimiento. A partir de los 30 años, comenzamos a perder entre un 3% y un 8% de masa muscular por década, y este ritmo se acelera después de los 60.

La buena noticia es que la sarcopenia no es inevitable. Con la combinación correcta de nutrición, ejercicio y suplementación, es posible frenar e incluso revertir parcialmente este proceso.

## Nutrientes Clave para el Adulto Mayor

**Proteína de alta calidad:** El requerimiento proteico aumenta con la edad. Se recomienda entre 1.2 y 1.6 gramos por kilogramo de peso corporal al día.

**Creatina:** Múltiples estudios demuestran que la creatina, combinada con ejercicio de resistencia, mejora significativamente la fuerza y la masa muscular en adultos mayores.

**Vitamina D:** Esencial para la absorción de calcio y la función muscular. La deficiencia de vitamina D es extremadamente común en adultos mayores.

**Vitamina B12:** Fundamental para la función neurológica y la producción de energía celular. Su absorción disminuye con la edad.

## Prevención Cognitiva

El deterioro cognitivo no es una consecuencia inevitable del envejecimiento. La nutrición juega un papel crucial en mantener la salud cerebral.`,
                relatedProducts: ["Proteínas", "Creatina", "Vitamina D", "Vitamina B12"],
            },
            {
                slug: "ansiedad-estres-falta-energia",
                title: "Ansiedad, Estrés y Falta de Energía: Cuando el Cuerpo Vive en Alerta",
                excerpt: "Tu cuerpo te envía señales. Aprende a reconocer cuándo el estrés crónico está agotando tus reservas y qué hacer al respecto.",
                category: "Sistema Nervioso",
                readTime: "7 min de lectura",
                image: "public/images/blog-estres.jpg",
                content: `Cuando el estrés se convierte en algo crónico, tu cuerpo entra en un estado permanente de alerta que consume recursos vitales. El cortisol elevado agota tus reservas de magnesio, vitaminas B y otros nutrientes esenciales.

## El Ciclo del Estrés Crónico

El estrés prolongado activa constantemente el eje hipotálamo-pituitaria-adrenal (HPA), lo que genera:
- Agotamiento de magnesio y vitaminas del complejo B
- Inflamación sistémica de bajo grado
- Alteración del sueño y la recuperación
- Fatiga adrenal progresiva

## Soluciones Naturales Basadas en Evidencia

**Magnesio:** El mineral anti-estrés por excelencia. Participa en más de 300 reacciones enzimáticas y es fundamental para la relajación muscular y nerviosa.

**Complejo B:** Las vitaminas B son cofactores esenciales en la producción de neurotransmisores como la serotonina y la dopamina.

**Ashwagandha:** Este adaptógeno milenario ha demostrado en múltiples estudios clínicos su capacidad para reducir el cortisol y mejorar la resistencia al estrés.

**Melena de León:** Este hongo medicinal promueve la producción de factor de crecimiento nervioso (NGF), apoyando la salud neuronal y la claridad mental.`,
                relatedProducts: ["Magnesio", "Complejo B", "Ashwagandha", "Melena de León"],
            },
            {
                slug: "cambios-hormonales-mujeres-hombres",
                title: "Cambios Hormonales: Señales que tu Cuerpo no Debe Ignorar",
                excerpt: "Descubre cómo los cambios hormonales afectan energía, peso y estado de ánimo, y qué puedes hacer de forma natural.",
                category: "Hormonal",
                readTime: "6 min de lectura",
                image: "public/images/blog-hormonal.jpg",
                content: `Los cambios hormonales no son exclusivos de la menopausia o la andropausia. Desde los 30 años, tanto hombres como mujeres experimentan fluctuaciones hormonales que pueden afectar profundamente la calidad de vida.

## Señales de Desequilibrio Hormonal

- Fatiga persistente sin causa aparente
- Cambios de peso inexplicables
- Alteraciones del estado de ánimo
- Problemas de sueño
- Disminución de la libido
- Caída del cabello

## El Papel del Zinc

El zinc es un mineral esencial para la producción y regulación de hormonas, incluyendo testosterona, estrógeno y hormonas tiroideas. La deficiencia de zinc es sorprendentemente común y puede agravar significativamente los desequilibrios hormonales.

## Adaptógenos para el Balance Hormonal

Los adaptógenos son plantas que ayudan al cuerpo a adaptarse al estrés y mantener el equilibrio hormonal de forma natural. A diferencia de la terapia hormonal sintética, los adaptógenos trabajan con tu cuerpo, no lo reemplazan.`,
                relatedProducts: ["Zinc", "Adaptógenos naturales"],
            },
            {
                slug: "salud-metabolica-aumento-peso-fatiga",
                title: "Salud Metabólica: La Raíz Silenciosa del Aumento de Peso y la Fatiga",
                excerpt: "El metabolismo lento no es solo genética. Conoce las causas reales y las soluciones naturales para reactivar tu energía.",
                category: "Metabolismo",
                readTime: "9 min de lectura",
                image: "public/images/blog-metabolica.jpg",
                content: `Si has intentado perder peso sin éxito, si la fatiga te acompaña constantemente, o si tus análisis de sangre muestran glucosa elevada, es probable que la raíz del problema esté en tu salud metabólica.

## ¿Qué es la Salud Metabólica?

La salud metabólica se refiere a la capacidad de tu cuerpo para procesar y utilizar la energía de los alimentos de manera eficiente. Se estima que menos del 12% de los adultos tienen una salud metabólica óptima.

## Pilares de la Recuperación Metabólica

**Fibra Prebiótica:** Alimenta las bacterias beneficiosas de tu intestino, mejorando la absorción de nutrientes y la regulación del azúcar en sangre.

**Probióticos:** Un microbioma intestinal saludable es fundamental para el metabolismo. Los probióticos ayudan a restaurar el equilibrio de la flora intestinal.

**Berberina:** Este compuesto natural ha demostrado en estudios clínicos ser tan efectivo como la metformina para regular la glucosa en sangre.

**Cardo Mariano:** Protege y regenera el hígado, órgano central del metabolismo.

**Espirulina:** Rica en proteínas, vitaminas y minerales, apoya la desintoxicación y proporciona nutrientes esenciales para un metabolismo saludable.`,
                relatedProducts: ["Fibra prebiótica", "Probióticos", "Berberina", "Cardo Mariano", "Espirulina"],
            },
            {
                slug: "salud-infantil-nutricion-concentracion",
                title: "Salud Infantil: Nutrición para la Concentración y Conducta de los Niños",
                excerpt: "La alimentación impacta directamente en el comportamiento y la concentración. Aprende qué nutrientes necesitan tus hijos.",
                category: "Infantil",
                readTime: "7 min de lectura",
                image: "public/images/blog-infantil.jpg",
                content: `La nutrición infantil va mucho más allá de las calorías. Los nutrientes que reciben nuestros hijos durante sus primeros años de vida determinan en gran medida su capacidad de concentración, su comportamiento y su desarrollo cognitivo.

## El Cerebro en Desarrollo

El cerebro de un niño consume hasta el 60% de su energía total. Para funcionar correctamente, necesita nutrientes específicos que muchas veces no obtiene de la dieta moderna.

## Nutrientes Esenciales para Niños

**Omega 3 DHA:** El DHA constituye aproximadamente el 25% de la grasa total del cerebro. Es fundamental para la memoria, el aprendizaje y la concentración. Múltiples estudios han demostrado que la suplementación con DHA mejora el rendimiento académico y reduce problemas de comportamiento.

**Magnesio Infantil:** El magnesio es crucial para la función neurológica de los niños. Su deficiencia se ha asociado con hiperactividad, dificultad para concentrarse y problemas de sueño.

## Señales de Deficiencia Nutricional en Niños

- Dificultad para concentrarse en tareas escolares
- Irritabilidad e hiperactividad
- Problemas de sueño
- Fatiga durante el día
- Infecciones recurrentes`,
                relatedProducts: ["Omega 3 DHA", "Magnesio infantil"],
            },
            {
                slug: "nutricion-en-deportistas",
                title: "NUTRICIÓN EN DEPORTISTAS: Energía, rendimiento y recuperación",
                excerpt: "El rendimiento de un deportista no depende solo del entrenamiento, depende de la nutrición: la base invisible del éxito físico y la óptima regeneración muscular.",
                category: "Rendimiento Deportivo",
                readTime: "7 min de lectura",
                image: "public/images/blog-deporte.jpg",
                content: `Entrenas fuerte… pero ¿te estás nutriendo correctamente?
Muchos deportistas —amateurs y profesionales— entrenan con disciplina, constancia y compromiso. Pero el rendimiento no depende solo del entrenamiento. Depende de cómo alimentas tus músculos, tu sistema nervioso y tu capacidad de recuperación. Porque el progreso no ocurre durante el ejercicio. Ocurre después… cuando el cuerpo se regenera. Y sin nutrición adecuada, no hay regeneración óptima.

## ¿Por qué la nutrición es clave en el rendimiento deportivo?

El cuerpo del deportista trabaja a un nivel metabólico más alto. Esto implica:
- Mayor gasto energético
- Mayor demanda de proteínas
- Mayor producción de radicales libres
- Mayor desgaste muscular
- Necesidad de recuperación más eficiente

Cuando la nutrición no cubre esas demandas, pueden aparecer fatiga persistente, bajo rendimiento, lesiones frecuentes, recuperación lenta, alteraciones hormonales y problemas digestivos.

## Los pilares de la nutrición deportiva consciente

En Raíz Vital no hablamos solo de “más proteína”. Hablamos de equilibrio metabólico integral.

### 1. Proteína de calidad

Fundamental para: reparación muscular, síntesis de nuevas fibras, prevención de sarcopenia temprana y recuperación post entrenamiento.

**Fuentes clave:** Huevos, pescado, pollo, legumbres, y proteínas de alta biodisponibilidad.
En algunos casos, la suplementación puede ser útil cuando la dieta no cubre requerimientos.

### 2. Carbohidratos inteligentes

No todos los carbohidratos son iguales. Los carbohidratos complejos ayudan a mantener niveles de energía estables, reponer glucógeno muscular y evitar fatiga prematura.

**Fuentes recomendadas:** Avena, arroz integral, papa, frutas, legumbres.
La clave no es eliminarlos. Es aprender a utilizarlos estratégicamente.

### 3. Grasas saludables

El deportista también necesita grasas de calidad para la producción hormonal, la salud celular y la regulación inflamatoria.

**Especialmente importantes:** Omega 3, aguacate, nueces, semillas.

## Micronutrientes que marcan la diferencia

Un entrenamiento intenso aumenta la necesidad de ciertos nutrientes.

**Magnesio:** Apoya la función muscular, prevención de calambres y producción de energía.
**Hierro:** Fundamental para transporte de oxígeno (en casos específicos).
**Vitamina D:** Apoya la fuerza muscular, el sistema inmune y previene lesiones.
**Complejo B:** Claves para el metabolismo energético y la respuesta al estrés físico.

## Recuperación: el factor que separa al promedio del excelente

El sobreentrenamiento sin recuperación adecuada puede llevar a inflamación crónica, alteración del cortisol, disminución de rendimiento y fatiga adrenal.

Aquí pueden apoyar, bajo orientación profesional:
- Omega 3
- Antioxidantes naturales
- Creatina (en casos evaluados)
- Aminoácidos esenciales
- Adaptógenos en contextos específicos

## Microbiota y rendimiento deportivo

Un intestino inflamado afecta la absorción de nutrientes, la energía, la respuesta inmune y la inflamación sistémica. Por eso, la salud digestiva es parte esencial del rendimiento. Probióticos específicos y alimentación rica en fibra pueden ser aliados estratégicos.

## Nutrición personalizada: no todos los cuerpos responden igual

Cada deportista tiene:
- Tipo de disciplina diferente
- Intensidad distinta
- Metabolismo único
- Objetivos específicos

No existe un plan universal. La clave está en la evaluación individual.

## En Raíz Vital acompañamos el rendimiento con ciencia y conciencia

Nuestro enfoque integra:
- Evaluación metabólica personalizada
- Ajuste nutricional estratégico
- Suplementación responsable
- Apoyo en recuperación y equilibrio hormonal

Porque rendir más no significa desgastarse más. Significa entrenar con inteligencia.`,
                relatedProducts: ["Creatina Bhella", "Creatinne Vegan", "Megacrbrin"],
            },
            {
                slug: "belleza-desde-el-interior",
                title: "BELLEZA DESDE EL INTERIOR: Cuidado de la piel y el cabello",
                excerpt: "La piel y el cabello son el reflejo de tu nutrición y equilibrio hormonal. Aprende cómo la verdadera belleza comienza de adentro hacia afuera.",
                category: "Belleza y Anti-edad",
                readTime: "6 min de lectura",
                image: "public/images/blog-metabolica.jpg",
                content: `Cuando el espejo comienza a mostrar señales… piel más seca, cabello más frágil, uñas que se quiebran con facilidad.

Muchas veces buscamos soluciones externas: cremas, tratamientos, productos cosméticos. Pero olvidamos algo fundamental: la piel y el cabello no solo reflejan edad. Reflejan nutrición, equilibrio hormonal, salud intestinal y nivel de inflamación. La verdadera belleza comienza desde adentro.

## La piel y el cabello hablan de tu estado interno

La piel es el órgano más grande del cuerpo. El cabello es tejido en constante renovación. Cuando existe déficit de nutrientes, estrés crónico, inflamación, alteraciones hormonales o mala absorción intestinal, el cuerpo prioriza órganos vitales y deja en segundo plano la piel y el cabello.

Por eso muchas personas notan:
- Piel opaca
- Manchas
- Caída capilar
- Cabello sin brillo
- Uñas débiles
- Envejecimiento prematuro

## Nutrición estratégica para piel y cabello saludables

El cuidado externo es importante, pero la base está en la nutrición celular.

### Nutrientes clave

**Colágeno:** Es la proteína estructural más abundante del cuerpo.
Con el paso de los años disminuye su producción natural, lo que puede reflejarse en: pérdida de firmeza, líneas de expresión, cabello más fino y uñas frágiles.
La suplementación con colágeno hidrolizado puede apoyar: elasticidad, hidratación, fortalecimiento capilar y salud articular.

**Biotina (Vitamina B7):** Es fundamental para el metabolismo celular. Apoya el crecimiento capilar, fortalecimiento de uñas y producción de queratina. La deficiencia puede manifestarse en caída del cabello o fragilidad.

**Vitamina E:** Potente antioxidante. Ayuda a proteger las células del daño oxidativo, favorecer la salud de la piel y apoyar la regeneración celular. También contribuye a mantener una piel más luminosa.

### Otros aliados importantes

- Vitamina C (clave para producción de colágeno)
- Zinc (regeneración y cicatrización)
- Omega 3 (reduce inflamación y apoya hidratación cutánea)
- Silicio orgánico (estructura de piel y cabello)
- Resveratrol, NAD

## La microbiota también influye en la belleza

Un intestino inflamado o desequilibrado puede afectar la absorción de nutrientes, los procesos inflamatorios, y condiciones cutáneas como acné o dermatitis. Por eso, en muchos casos, el cuidado de la piel comienza en el sistema digestivo.

## Belleza consciente: no es solo estética

Cuidar la piel y el cabello no es superficial. Es una forma de reflejar bienestar interno. Cuando el cuerpo está nutrido:
- La piel luce más firme
- El cabello tiene más brillo
- Las uñas se fortalecen
- La energía mejora
- La confianza aumenta

## ¿Cuando considerar suplementación?

Cuando existe caída persistente del cabello, cambios hormonales, estrés prolongado, envejecimiento natural, dietas restrictivas o problemas digestivos. La suplementación debe ser personalizada. No todas las personas necesitan lo mismo.

En Raíz Vital creemos en la belleza integral. No promovemos soluciones rápidas ni promesas irreales. Trabajamos desde la evaluación individual, nutrición estratégica, suplementación responsable y acompañamiento profesional.

Porque la belleza auténtica nace del equilibrio. ¿Quieres fortalecer tu piel y cabello desde adentro? Agenda una asesoría personalizada. Descubre qué nutrientes necesitas realmente. Y construyamos juntos una belleza saludable y sostenible.`,
                relatedProducts: ["Creatine Bhella", "Vitamina C + Zinc"],
            }
        ];

        for (const post of blogPosts) {
            console.log(`Processing blog post: ${post.title}`);
            const imageAsset = await uploadImage(post.image);

            const postObj = {
                _id: `post-${post.slug}`,
                _type: 'post',
                title: post.title,
                slug: { _type: 'slug', current: post.slug },
                excerpt: post.excerpt,
                category: post.category,
                readTime: post.readTime,
                mainImage: {
                    _type: 'image',
                    asset: { _type: 'reference', _ref: imageAsset._id },
                    alt: post.title,
                },
                content: post.content,
                relatedProducts: post.relatedProducts,
                publishedAt: new Date().toISOString(),
            };
            postsToCreate.push(postObj);
        }

        const blogResults = await Promise.all(postsToCreate.map(post => client.createOrReplace(post)));
        console.log(`Uploaded ${blogResults.length} blog posts successfully.`);

        console.log("Uploading Asesoria Section...");
        const asesoriaSectionObj = {
            _id: 'asesoriaSection',
            _type: 'asesoriaSection',
            badge: 'Asesoría Personalizada',
            title: 'Cada cuerpo es diferente. Tu asesoría también debería serlo.',
            description: 'Selecciona tu síntoma principal y te conectaremos directamente con un asesor que te guiará hacia los productos ideales para ti.',
            symptoms: [
                { id: 'estres', label: 'Estrés y Ansiedad' },
                { id: 'hormonas', label: 'Cambios Hormonales' },
                { id: 'digestion', label: 'Problemas Digestivos' },
                { id: 'energia', label: 'Falta de Energía' },
                { id: 'adulto-mayor', label: 'Salud en la Tercera Edad' },
                { id: 'infantil', label: 'Salud Infantil' },
            ],
            buttonText: 'Enviar y Recibir Asesoría por WhatsApp',
            footerText: 'Serás redirigido a WhatsApp para una consulta gratuita y sin compromiso.',
        };

        const asesoriaResult = await client.createOrReplace(asesoriaSectionObj);
        console.log("Asesoria Section saved successfully:", asesoriaResult._id);

    } catch (error) {
        console.error("Error uploading sanity content:", error);
    }
}

uploadGlobalSettings();
