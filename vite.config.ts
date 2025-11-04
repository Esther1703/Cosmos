// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'



// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],

//   build: {

//   }
// })

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { readdirSync } from 'node:fs'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const htmlFiles = readdirSync(__dirname)
  .filter((file) => file.endsWith('.html'))
  .reduce((entries: Record<string, string>, file) => {
    const name = file.replace('.html', '')
    entries[name] = path.resolve(__dirname, file)
    return entries
  }, {})

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],

  build: {
    rollupOptions: {
      input: htmlFiles,
    },
  },
})
