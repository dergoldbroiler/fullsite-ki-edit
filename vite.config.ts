import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Plugin } from 'vite'
import { defineConfig } from 'vite'

const rootDir = path.dirname(fileURLToPath(import.meta.url))
const siteFile = path.join(rootDir, 'src/site.json')

function setPath(target: Record<string, unknown>, fieldPath: string, value: string) {
  const parts = fieldPath.split('.')
  let current: Record<string, unknown> | unknown[] = target
  for (let i = 0; i < parts.length - 1; i += 1) {
    const key = parts[i]
    const nextKey = /^\d+$/.test(key) ? Number(key) : key
    current = current[nextKey as never] as Record<string, unknown>
  }
  const last = parts[parts.length - 1]
  const lastKey = /^\d+$/.test(last) ? Number(last) : last
  ;(current as Record<string, unknown>)[lastKey as never] = value
}

function readBody(req: IncomingMessage) {
  return new Promise<string>((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk) => chunks.push(chunk as Buffer))
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    req.on('error', reject)
  })
}

function previewSavePlugin(): Plugin {
  return {
    name: 'preview-save',
    configureServer(server) {
      server.middlewares.use(
        '/__preview-save',
        (req: IncomingMessage, res: ServerResponse, next) => {
          if (req.method !== 'POST') {
            next()
            return
          }
          void readBody(req)
            .then((raw) => {
              const { path: fieldPath, value } = JSON.parse(raw) as {
                path: string
                value: string
              }
              if (!fieldPath || typeof value !== 'string') {
                res.statusCode = 400
                res.end('invalid')
                return
              }
              const data = JSON.parse(fs.readFileSync(siteFile, 'utf8')) as Record<
                string,
                unknown
              >
              setPath(data, fieldPath, value)
              fs.writeFileSync(siteFile, `${JSON.stringify(data, null, 2)}\n`)
              res.statusCode = 200
              res.end('ok')
            })
            .catch(() => {
              res.statusCode = 500
              res.end('error')
            })
        },
      )
    },
  }
}

export default defineConfig({
  plugins: [react(), previewSavePlugin()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  preview: {
    host: true,
    port: 4173,
    strictPort: true,
  },
})
