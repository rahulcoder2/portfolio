import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import pageInfo from './schemas/pageInfo'
import skills from './schemas/skills'
import project from './schemas/project'
import social from './schemas/social'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, pageInfo, skills, project, social],
}
