export async function saveSiteField(path: string, value: string) {
  const res = await fetch('/__preview-save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path, value }),
  })
  if (!res.ok) {
    throw new Error('Speichern fehlgeschlagen')
  }
}
