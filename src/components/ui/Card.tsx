// src/components/ui/Card.tsx
import { FC } from 'react'

interface CardProps {
  className?: string
  children: React.ReactNode
}

export const Card: FC<CardProps> = ({ className, children }) => {
  return (
    <div className={`rounded-lg border border-gray-700 p-6 ${className}`}>
      {children}
    </div>
  )
}