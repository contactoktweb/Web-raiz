import { defineField, defineType } from 'sanity'

export const benefitsSection = defineType({
    name: 'benefitsSection',
    title: 'Sección de Beneficios',
    type: 'document',
    fields: [
        defineField({
            name: 'badge',
            title: 'Etiqueta de Sección',
            type: 'string',
            description: 'Texto pequeño que aparece arriba del título (ej: Nuestra Tienda).',
            initialValue: 'Nuestra Tienda',
        }),
        defineField({
            name: 'title',
            title: 'Título Principal',
            type: 'string',
            description: 'El título de la sección (ej: Soluciones organizadas por beneficios).',
            initialValue: 'Soluciones organizadas por beneficios',
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            rows: 3,
            description: 'Breve texto bajo el título explicando el enfoque de la sección.',
            initialValue: 'No vendemos productos al azar. Cada suplemento está agrupado según el beneficio real que aporta a tu salud.',
        }),
        defineField({
            name: 'categories',
            title: 'Categorías de Beneficios',
            type: 'array',
            description: 'Lista de beneficios o categorías que se mostrarán en la sección.',
            of: [
                {
                    type: 'object',
                    name: 'category',
                    title: 'Categoría de Beneficio',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Nombre del Beneficio',
                            type: 'string',
                            description: 'Ej: Belleza y Anti-edad.',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'icon',
                            title: 'Icono',
                            type: 'string',
                            description: 'Selecciona el icono que mejor represente este beneficio.',
                            options: {
                                list: [
                                    { title: 'Estrella (Belleza)', value: 'Star' },
                                    { title: 'Corazón (Hormonal)', value: 'Heart' },
                                    { title: 'Luna (Estrés/Sueño)', value: 'Moon' },
                                    { title: 'Bebé (Infantil)', value: 'Baby' },
                                    { title: 'Actividad/Pulso (Metabolismo)', value: 'Activity' },
                                    { title: 'Rayo (Energía/Deporte)', value: 'Zap' },
                                    { title: 'Escudo (Protección/Adulto)', value: 'Shield' },
                                    { title: 'Planta (Natural)', value: 'Leaf' },
                                ],
                            },
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'description',
                            title: 'Descripción Corta',
                            type: 'text',
                            rows: 2,
                            description: 'Breve explicación de para qué sirve esta categoría.',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'products',
                            title: 'Ejemplos de Productos',
                            type: 'array',
                            of: [{ type: 'string' }],
                            description: 'Lista de productos que pertenecen a esta categoría.',
                        }),
                        defineField({
                            name: 'theme',
                            title: 'Tema de Color',
                            type: 'string',
                            description: 'Define el color predominante para esta categoría.',
                            options: {
                                list: [
                                    { title: 'Verde/Secundario (Natural)', value: 'secondary' },
                                    { title: 'Marrón/Primario (Base)', value: 'primary' },
                                    { title: 'Naranja/Acento (Energía)', value: 'accent' },
                                ],
                            },
                            initialValue: 'primary',
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            subtitle: 'description',
                        },
                    },
                },
            ],
        }),
    ],
})
