import {defineConfig, isDev} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial';
import {schemaTypes} from './schemas';

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'Ubar',

  projectId: 'ss79b5h9',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})
