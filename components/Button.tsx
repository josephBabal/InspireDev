import Link from 'next/link'
import React from 'react'

type ButtonProps = {
  href: string
  classes?: string
  children: React.ReactNode
}

const Button = ({href, classes, children}: ButtonProps) => {
  return (
    <Link className={`btn`} href={href}>{children}</Link>
  )
}

export default Button