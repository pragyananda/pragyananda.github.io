import { type SchemaTypeDefinition } from 'sanity'
import project from '../schemas/projects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project],
}
