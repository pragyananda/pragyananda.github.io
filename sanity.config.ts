'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\admin\[[...tool]]\page.tsx` route
 */
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

const projectId = "k22gzpyd"
const dataset = "production"
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
if (!projectId || !dataset) {
  throw new Error('Missing required environment variables: projectId or dataset')
}
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { schema } from './sanity/schemaTypes'
import { structure } from './sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Portfolio CMS',
  basePath: '/admin',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    deskTool(),
    visionTool({ defaultApiVersion: "2025-06-21" }),
  ],
})
