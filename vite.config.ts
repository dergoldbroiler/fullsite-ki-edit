import { spawnSync } from 'node:child_process'
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

function json(res: ServerResponse, status: number, body: unknown) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(body))
}

function isSafeRef(ref: string) {
  return /^(HEAD|[0-9a-f]{7,40})$/i.test(ref)
}

function previewSavePlugin(): Plugin {
  return {
    name: 'preview-save',
    configureServer(server) {
      server.middlewares.use('/__preview-stands', (req, res, next) => {
        if (req.method !== 'GET') {
          next()
          return
        }
        const result = spawnSync(
          'git',
          ['log', '-20', '--pretty=format:%h\t%s'],
          { cwd: rootDir, encoding: 'utf8' },
        )
        if (result.status !== 0) {
          json(res, 500, [])
          return
        }
        const stands = result.stdout
          .trim()
          .split('\n')
          .filter(Boolean)
          .map((line) => {
            const [sha, ...rest] = line.split('\t')
            return { sha, message: rest.join('\t') }
          })
        json(res, 200, stands)
      })

      server.middlewares.use('/__preview-stand', (req, res, next) => {
        if (req.method !== 'GET') {
          next()
          return
        }
        const url = new URL(req.url ?? '', 'http://127.0.0.1')
        const ref = url.searchParams.get('ref') ?? ''
        if (!isSafeRef(ref)) {
          json(res, 400, { error: 'invalid-ref' })
          return
        }
        const result = spawnSync('git', ['show', `${ref}:src/site.json`], {
          cwd: rootDir,
          encoding: 'utf8',
        })
        if (result.status !== 0) {
          json(res, 404, { error: 'no-site' })
          return
        }
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(result.stdout)
      })

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
