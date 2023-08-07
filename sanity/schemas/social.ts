import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Social Platform',
      type: 'string',
    }),
    {
      name: 'imageurl',
      title: 'ImageUrl',
      type: 'url'
    }
  ]
})