import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido Principal')
    .items([
      S.listItem()
        .title('Configuración Global')
        .id('globalSettings')
        .child(
          S.document()
            .schemaType('globalSettings')
            .documentId('globalSettings')
        ),
      S.listItem()
        .title('Política de Datos')
        .id('privacyPolicy')
        .child(
          S.document()
            .schemaType('privacyPolicy')
            .documentId('privacyPolicy')
        ),
      S.listItem()
        .title('Sección Hero')
        .id('heroSection')
        .child(
          S.document()
            .schemaType('heroSection')
            .documentId('heroSection')
        ),
      S.listItem()
        .title('Sección de Beneficios')
        .id('benefitsSection')
        .child(
          S.document()
            .schemaType('benefitsSection')
            .documentId('benefitsSection')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['globalSettings', 'privacyPolicy', 'heroSection', 'benefitsSection'].includes(listItem.getId() as string)
      ),
    ])
