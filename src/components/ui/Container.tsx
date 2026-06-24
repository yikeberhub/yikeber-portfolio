// src/components/ui/Container.tsx
import { FC } from 'react'

interface ContainerProps {
  className?: string
  children: React.ReactNode
}

export const Container: FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={`max-w-4xl mx-auto px-4 ${className}`}>
      {children}
    </div>
  )
}