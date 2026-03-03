import { type SchemaTypeDefinition } from 'sanity'
import { globalSettings } from './globalSettings'
import { privacyPolicy } from './privacyPolicy'
import { heroSection } from './heroSection'
import { benefitsSection } from './benefitsSection'
import { post } from './post'
import { asesoriaSection } from './asesoriaSection'
import { product } from './product'
import { category } from './category'
import { storeSection } from './storeSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [globalSettings, privacyPolicy, heroSection, benefitsSection, post, asesoriaSection, product, category, storeSection],
}
