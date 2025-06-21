import { type SchemaTypeDefinition } from 'sanity'
import projects from '../schemas/projects'
import about from '../schemas/about'
import blog from '../schemas/blog'
import experience from '../schemas/experience'
import services from '../schemas/services'
import skills from '../schemas/skills'
import stats from '../schemas/stats'
import testimonial from '../schemas/testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projects,
    about,
    blog,
    experience,
    services,
    skills,
    stats,
    testimonial,
  ],
}
