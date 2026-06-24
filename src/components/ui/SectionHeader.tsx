// src/components/ui/SectionHeader.tsx
import { FC } from 'react'

interface SectionHeaderProps {
  className?: string
  children: React.ReactNode
}

export const SectionHeader: FC<SectionHeaderProps> = ({ className, children }) => {
  return (
    <div className={`text-center ${className}`}>
      {children}
    </div>
  )
}