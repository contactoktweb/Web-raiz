import { defineField, defineType } from 'sanity'

export const privacyPolicy = defineType({
    name: 'privacyPolicy',
    title: 'Política de Tratamiento de Datos',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título de la Página',
            type: 'string',
            description: 'El título que se mostrará en la parte superior de la página de políticas.',
            initialValue: 'Política de Tratamiento de Datos',
        }),
        defineField({
            name: 'content',
            title: 'Contenido de la Política',
            type: 'text',
            description: 'El cuerpo completo del texto legal. Puedes usar múltiples párrafos.',
        }),
        defineField({
            name: 'lastUpdated',
            title: 'Fecha de Última Actualización',
            type: 'date',
            description: 'Indica cuándo fue la última vez que se modificó este documento legal.',
            options: {
                dateFormat: 'YYYY-MM-DD',
            }
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Política de Tratamiento de Datos',
            }
        },
    },
})
