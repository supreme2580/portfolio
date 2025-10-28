import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  apiVersion: '2023-11-01',
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: any) => builder.image(source).url()

