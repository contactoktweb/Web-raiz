import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { client } from "@/sanity/lib/client"
import { privacyPolicyQuery } from "@/sanity/lib/queries"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Política de Tratamiento de Datos",
    description: "Nuestra política de privacidad y tratamiento de datos personales.",
}

const DEFAULT_PRIVACY_POLICY = `POLÍTICA DE TRATAMIENTO Y PROTECCIÓN DE DATOS PERSONALES - RAÍZ VITAL

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
Esta política entra en vigencia a partir del momento de su publicación y se reserva el derecho de ser modificada en cualquier momento, informando oportunamente a los usuarios a través de este sitio web.`;

export default async function PrivacyPolicyPage() {
    const settings = await client.fetch(privacyPolicyQuery);
    const privacyPolicy = settings?.content || DEFAULT_PRIVACY_POLICY;

    return (
        <>
            <SiteHeader />
            <main className="min-h-screen pt-32 pb-16">
                <div className="mx-auto max-w-3xl px-4 lg:px-8">
                    <div className="mb-12">
                        <h1 className="font-serif text-4xl font-bold text-primary lg:text-5xl">
                            Política de Tratamiento de Datos
                        </h1>
                        <div className="mt-4 h-1 w-20 bg-secondary" />
                    </div>

                    <div className="prose prose-lg prose-p:text-muted-foreground prose-headings:font-serif prose-headings:text-primary max-w-none space-y-6">
                        {privacyPolicy.split('\n').map((paragraph: string, index: number) => {
                            if (paragraph.trim() === '') return null;
                            // Detects headings (all uppercase lines for simple markdown-less formatting)
                            if (paragraph.trim() === paragraph.toUpperCase() && paragraph.trim().length > 10 && !paragraph.includes('http')) {
                                return (
                                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                                        {paragraph}
                                    </h2>
                                );
                            }
                            return (
                                <p key={index} className="leading-relaxed">
                                    {paragraph}
                                </p>
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
