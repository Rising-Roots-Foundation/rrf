import type {StructureBuilder} from '@sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
import type {StructureBuilder} from '@sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category', 'author'].includes(item.getId()!),
      ),
    ])
