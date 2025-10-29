import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isDev = command === 'serve'
  return {
    plugins: [react()],
    // In dev only, add a relaxed CSP that allows `unsafe-eval` so dev tooling
    // (Vite client, overlays, source maps) that rely on eval-like APIs won't
    // be blocked by the browser. Do NOT enable this in production.
    server: isDev
      ? {
          headers: {
            'Content-Security-Policy':
              "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline';"
          }
        }
      : undefined,

    // Also inject a dev-only meta tag into the served `index.html` as a
    // fallback in case the response header is overridden by a proxy or
    // extension. This runs only in dev mode.
    ...(isDev
      ? {
          plugins: [
            // keep react plugin first and add our small html-transform plugin
            react(),
            {
              name: 'dev-csp-meta',
              transformIndexHtml(html) {
                return {
                  html,
                  tags: [
                    {
                      tag: 'meta',
                      attrs: {
                        'http-equiv': 'Content-Security-Policy',
                        content:
                          "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline';"
                      },
                      injectTo: 'head'
                    }
                  ]
                }
              }
            }
          ]
        }
      : {})
  }
})
