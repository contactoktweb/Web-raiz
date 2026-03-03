import { defineField, defineType } from 'sanity'

export const asesoriaSection = defineType({
    name: 'asesoriaSection',
    title: 'Sección de Asesoría',
    type: 'document',
    fields: [
        defineField({
            name: 'badge',
            title: 'Etiqueta (Badge)',
            type: 'string',
            description: 'Texto pequeño que aparece arriba del título (ej: Asesoría Personalizada).',
        }),
        defineField({
            name: 'title',
            title: 'Título de la Sección',
            type: 'string',
            description: 'El título principal de la sección.',
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            rows: 3,
            description: 'El texto descriptivo que aparece debajo del título.',
        }),
        defineField({
            name: 'symptoms',
            title: 'Lista de Síntomas',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'id', title: 'ID Único', type: 'string', description: 'Identificador interno (ej: estres).' },
                        { name: 'label', title: 'Nombre del Síntoma', type: 'string', description: 'El nombre que verá el usuario.' },
                    ],
                },
            ],
            description: 'Las opciones que el usuario puede elegir para la asesoría.',
        }),
        defineField({
            name: 'buttonText',
            title: 'Texto del Botón',
            type: 'string',
            description: 'El texto que aparece dentro del botón (ej: Enviar y Recibir Asesoría por WhatsApp).',
        }),
        defineField({
            name: 'footerText',
            title: 'Texto de Pie',
            type: 'string',
            description: 'El texto pequeño debajo del botón.',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Sección de Asesoría',
            }
        },
    },
})
