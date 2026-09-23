import type { ElementType, KeyboardEvent } from 'react'
import { usePreviewEdit } from './PreviewEditContext'
import { saveSiteField } from './save'

type EditableProps = {
  path: string
  text: string
  as?: ElementType
  id?: string
  className?: string
  multiline?: boolean
}

export function Editable({
  path,
  text,
  as: Tag = 'span',
  id,
  className,
  multiline = false,
}: EditableProps) {
  const editing = usePreviewEdit()

  function onKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (!multiline && event.key === 'Enter') {
      event.preventDefault()
      event.currentTarget.blur()
    }
  }

  if (!editing) {
    return (
      <Tag id={id} className={className}>
        {text}
      </Tag>
    )
  }

  return (
    <Tag
      id={id}
      className={className ? `${className} preview-editable` : 'preview-editable'}
      contentEditable
      suppressContentEditableWarning
      onKeyDown={onKeyDown}
      onBlur={(event) => {
        const next = event.currentTarget.innerText.replace(/\n+$/, '')
        if (next !== text) {
          void saveSiteField(path, next)
        }
      }}
    >
      {text}
    </Tag>
  )
}
