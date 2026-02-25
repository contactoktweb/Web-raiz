import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { blogPosts } from "@/lib/data-blog"
import { notFound } from "next/navigation"

const blogContent: Record<string, { content: string; relatedProducts: string[] }> = {
  "salud-adulto-mayor-sarcopenia": {
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
  "ansiedad-estres-falta-energia": {
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
  "cambios-hormonales-mujeres-hombres": {
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
  "salud-metabolica-aumento-peso-fatiga": {
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
  "salud-infantil-nutricion-concentracion": {
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
  "nutricion-en-deportistas": {
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
  "belleza-desde-el-interior": {
    content: `Cuando el espejo empieza a mostrar señales… piel más seca, cabello más frágil, uñas que se quiebran con facilidad.

Muchas veces buscamos soluciones externas: cremas, tratamientos, productos cosméticos. Pero olvidamos algo fundamental: la piel y el cabello no solo reflejan edad. Reflejan nutrición, equilibrio hormonal, salud intestinal y nivel de inflamación. La verdadera belleza comienza desde adentro.

## La piel y el cabello hablan de tu estado interno

La piel es el órgano más grande del cuerpo. El cabello es tejido en constante renovación. Cuando hay déficit de nutrientes, estrés crónico, inflamación, alteraciones hormonales o mala absorción intestinal, el cuerpo prioriza órganos vitales y deja en segundo plano la piel y el cabello.

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

## ¿Cuándo considerar suplementación?

Cuando existe caída persistente del cabello, cambios hormonales, estrés prolongado, envejecimiento natural, dietas restrictivas o problemas digestivos. La suplementación debe ser personalizada. No todas las personas necesitan lo mismo.

En Raíz Vital creemos en la belleza integral. No promovemos soluciones rápidas ni promesas irreales. Trabajamos desde la evaluación individual, nutrición estratégica, suplementación responsable y acompañamiento profesional.

Porque la belleza auténtica nace del equilibrio. ¿Quieres fortalecer tu piel y cabello desde adentro? Agenda una asesoría personalizada. Descubre qué nutrientes necesitas realmente. Y construyamos juntos una belleza saludable y sostenible.`,
    relatedProducts: ["Creatine Bhella", "Vitamina C + Zinc"],
  }
}

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: "Artículo no encontrado" }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "es_LA",
    },
  }
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  const content = blogContent[slug]

  if (!post || !content) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <article className="mx-auto max-w-3xl px-4 lg:px-8">
          {/* Breadcrumb */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <span className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
              {post.category}
            </span>
            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-primary md:text-4xl lg:text-5xl text-balance">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} de lectura</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {content.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="mt-10 mb-4 font-serif text-2xl font-bold text-primary">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={i} className="mt-8 mb-3 font-serif text-xl font-bold text-primary">
                    {paragraph.replace("### ", "")}
                  </h3>
                )
              }
              if (paragraph.startsWith("**") || paragraph.startsWith("- ")) {
                return (
                  <div key={i} className="my-4 leading-relaxed text-foreground/80">
                    {paragraph.split("\n").map((line, j) => {
                      if (line.startsWith("- ")) {
                        return (
                          <div key={j} className="ml-4 flex gap-2 py-1">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                            <span>{line.replace("- ", "")}</span>
                          </div>
                        )
                      }
                      if (line.startsWith("**")) {
                        const parts = line.match(/\*\*(.+?)\*\*(.*)/)
                        if (parts) {
                          return (
                            <p key={j} className="py-1">
                              <strong className="text-primary">{parts[1]}</strong>
                              {parts[2]}
                            </p>
                          )
                        }
                      }
                      return <p key={j} className="py-1">{line}</p>
                    })}
                  </div>
                )
              }
              return (
                <p key={i} className="my-4 leading-relaxed text-foreground/80">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Related Products CTA */}
          <div className="mt-16 rounded-2xl border border-secondary/20 bg-secondary/5 p-8">
            <h3 className="font-serif text-xl font-bold text-primary">
              Productos Relacionados
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Complementa tu lectura con los suplementos que mencionamos en este
              artículo.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {content.relatedProducts.map((product) => (
                <span
                  key={product}
                  className="rounded-full bg-card px-4 py-2 text-sm font-medium text-primary border border-border"
                >
                  {product}
                </span>
              ))}
            </div>
            <Link href="/tienda" className="mt-6 inline-block">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <ShoppingCart className="h-4 w-4" />
                Comprar Productos Relacionados
              </Button>
            </Link>
          </div>

          {/* More Articles */}
          <div className="mt-16">
            <h3 className="font-serif text-xl font-bold text-primary">
              Más Artículos
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {blogPosts
                .filter((p) => p.slug !== slug)
                .slice(0, 2)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md"
                  >
                    <span className="text-xs font-medium text-secondary">
                      {p.category}
                    </span>
                    <h4 className="mt-2 font-serif text-base font-semibold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                      {p.title}
                    </h4>
                    <span className="mt-3 flex items-center gap-1 text-xs font-medium text-primary group-hover:text-secondary transition-colors">
                      Leer más
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
