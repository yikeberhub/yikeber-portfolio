// src/components/ui/Section.tsx
import { FC } from 'react'

interface SectionProps {
  className?: string
  children: React.ReactNode
}

export const Section: FC<SectionProps> = ({ className, children }) => {
  return (
    <section className={`py-20 ${className}`}>
      {children}
    </section>
  )
}