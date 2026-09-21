import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

type Variant = 'primary' | 'secondary'

type ButtonProps = {
  variant?: Variant
  children: ReactNode
  href?: string
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  variant = 'primary',
  href,
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  const classes = ['btn', `btn-${variant}`, className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
