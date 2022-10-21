import { defineClientConfig } from '@vuepress/client'
import uiRepo from 'ui-repo'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(uiRepo)
  },
  setup() {},
  rootComponents: [],
})