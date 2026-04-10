import { defineConfig, type HtmlTagDescriptor } from 'vite'
import react from '@vitejs/plugin-react'
import { seo } from './src/content/siteData'

function seoHeadTags(): HtmlTagDescriptor[] {
  return [
    { tag: 'title', children: seo.title, injectTo: 'head' },
    {
      tag: 'meta',
      attrs: { name: 'description', content: seo.description },
      injectTo: 'head',
    },
    {
      tag: 'meta',
      attrs: { property: 'og:title', content: seo.ogTitle },
      injectTo: 'head',
    },
    {
      tag: 'meta',
      attrs: { property: 'og:description', content: seo.ogDescription },
      injectTo: 'head',
    },
    {
      tag: 'meta',
      attrs: { property: 'og:locale', content: seo.ogLocale },
      injectTo: 'head',
    },
    { tag: 'meta', attrs: { property: 'og:type', content: 'website' }, injectTo: 'head' },
  ]
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inject-seo-from-site-data',
      transformIndexHtml(html) {
        return {
          html,
          tags: seoHeadTags(),
        }
      },
    },
  ],
})
