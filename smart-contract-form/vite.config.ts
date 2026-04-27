import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

const STUB_FILE = path.resolve(__dirname, './src/stubs/empty.ts')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // App paths
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
      { find: '@utils', replacement: path.resolve(__dirname, './src/utils') },
      { find: '@types', replacement: path.resolve(__dirname, './src/types') },
      // Hoisted packages — point to workspace root copies to avoid dual-context crashes
      { find: 'styletron-react', replacement: path.dirname(require.resolve('styletron-react/package.json')) },
      { find: 'styletron-engine-monolithic', replacement: path.dirname(require.resolve('styletron-engine-monolithic/package.json')) },
      { find: 'styletron-engine-atomic', replacement: path.dirname(require.resolve('styletron-engine-atomic/package.json')) },
      { find: 'styletron-standard', replacement: path.dirname(require.resolve('styletron-standard/package.json')) },
      { find: 'react-router-dom', replacement: path.dirname(require.resolve('react-router-dom/package.json')) },
      { find: 'react-router', replacement: path.dirname(require.resolve('react-router/package.json')) },
      { find: 'date-fns', replacement: path.dirname(require.resolve('date-fns/package.json')) },
      { find: 'react-is', replacement: path.dirname(require.resolve('react-is/package.json')) },
      // Stub optional peer deps of design-system not used in this app.
      // IMPORTANT: regex must match the FULL import string (include .*$ for subpaths)
      // so Vite's String.replace() replaces the whole thing, not just the prefix.
      { find: /^@webdoxclm\/document-viewer-front.*$/, replacement: STUB_FILE },
      { find: /^i18next.*$/, replacement: STUB_FILE },
      { find: /^react-i18next$/, replacement: STUB_FILE },
      // lodash is real (resolved from the workspace root node_modules); the
      // design-system relies on accurate behavior of helpers like `isEqual`
      // (used in useLayoutEffect bail-outs in data-table). A stubbed `isEqual`
      // returning `false` causes infinite render loops.
      { find: /^lodash$/, replacement: path.dirname(require.resolve('lodash/package.json')) },
      { find: /^lodash\/(.*)$/, replacement: path.dirname(require.resolve('lodash/package.json')) + '/$1' },
      { find: /^@hello-pangea\/dnd$/, replacement: STUB_FILE },
      { find: /^@dnd-kit\/.*$/, replacement: STUB_FILE },
      { find: /^react-use$/, replacement: STUB_FILE },
      { find: /^react-idle-timer$/, replacement: STUB_FILE },
      { find: /^react-intersection-observer$/, replacement: STUB_FILE },
      { find: /^resize-observer-polyfill$/, replacement: path.resolve(__dirname, './src/stubs/resize-observer.ts') },
      // @tanstack/react-virtual is real (resolved from node_modules); the
      // data-table relies on it to render rows. Stubbing produces empty rows.
      { find: /^@tanstack\/react-virtual$/, replacement: path.dirname(require.resolve('@tanstack/react-virtual/package.json')) },
      { find: /^react-hook-form$/, replacement: STUB_FILE },
      { find: /^@hookform\/resolvers.*$/, replacement: STUB_FILE },
      { find: /^yup$/, replacement: STUB_FILE },
      { find: /^@tiptap\/.*$/, replacement: STUB_FILE },
      { find: /^@formkit\/auto-animate.*$/, replacement: STUB_FILE },
      { find: /^nanoid$/, replacement: STUB_FILE },
      { find: /^marked$/, replacement: STUB_FILE },
      { find: /^turndown$/, replacement: STUB_FILE },
      { find: /^dompurify$/, replacement: STUB_FILE },
      { find: /^html-minifier-terser$/, replacement: STUB_FILE },
      { find: /^javascript-obfuscator$/, replacement: STUB_FILE },
      { find: /^@newrelic\/.*$/, replacement: STUB_FILE },
      { find: /^react-pdf.*$/, replacement: STUB_FILE },
      { find: /^pdfjs-dist.*$/, replacement: STUB_FILE },
      { find: /^react-dropzone$/, replacement: STUB_FILE },
    ],
    dedupe: [
      'react',
      'react-dom',
      'styletron-react',
      'styletron-engine-atomic',
      'styletron-engine-monolithic',
      'styletron-standard',
      'baseui',
      'react-router-dom',
      'react-router',
    ],
  },

  server: {
    fs: {
      allow: [
        path.resolve(__dirname, '..'),
        path.resolve(__dirname, '../../../design-system/dist'),
      ],
    },
  },
})
