#!/usr/bin/env node
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const ref = process.argv[2]
const port = process.env.PORT ?? '5174'
const root = resolve(import.meta.dirname, '..')

if (!ref) {
  console.error('Nutzung: npm run preview:commit -- <commit|branch|tag>')
  process.exit(1)
}

const safeName = ref.replace(/[^a-zA-Z0-9._-]/g, '_')
const dest = resolve(root, '.preview', safeName)

function run(command, args, cwd = root) {
  const result = spawnSync(command, args, { cwd, stdio: 'inherit' })
  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

mkdirSync(resolve(root, '.preview'), { recursive: true })

if (!existsSync(dest)) {
  run('git', ['worktree', 'add', '--detach', dest, ref])
  run('npm', ['install'], dest)
} else {
  console.log(`Worktree existiert bereits: ${dest}`)
}

console.log(`\nVorschau für ${ref} auf http://localhost:${port}`)
console.log('Im App-in-Browser diese URL öffnen. Aktueller Stand bleibt auf Port 5173.\n')

run('npm', ['run', 'dev', '--', '--port', port, '--host', 'true'], dest)
