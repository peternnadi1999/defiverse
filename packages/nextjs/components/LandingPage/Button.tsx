import Link from 'next/link'

interface ButtonProps {
  href: string
  className?: string
  children: React.ReactNode
}

export default function Button({ href, className, children }: ButtonProps) {
  return (
    <Link href={href} className={`inline-block px-6 py-3 rounded-md font-semibold ${className}`}>
      {children}
    </Link>
  )
}

