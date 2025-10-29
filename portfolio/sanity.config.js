import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import words from './schemas/words'
import experience from './schemas/experience'
import skills from './schemas/skills'
import projects from './schemas/project'

export default defineConfig({
  name: 'default',
  title: 'portfolio',
  projectId: '1g47lhop',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [
        words,
        experience,
        skills,
        projects
    ],
  },
})


