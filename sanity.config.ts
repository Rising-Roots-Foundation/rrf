'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
// import {structure} from 'sanity/structure' // Remove this line

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    visionTool({defaultApiVersion: apiVersion}),
  ],
  structure: (S) => { // Add this structure function
    return S.list()
      .title('Content')
      .items([
        // Add your structure items here
        S.listItem()
          .title('Activities')
          .child(
            S.documentTypeList('post').title('Activities')
          ),
        ...S.documentTypeListItems().filter(listItem => !['post'].includes(listItem.getId()))
      ])
  },
})
