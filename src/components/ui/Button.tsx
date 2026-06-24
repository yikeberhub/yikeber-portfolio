// src/components/ui/Button.tsx
import { FC } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'lg' | 'md' | 'sm'
  children: React.ReactNode
  className?: string
}

export const Button: FC<ButtonProps> = ({ variant = 'primary', size = 'lg', children, className }) => {
  const baseClasses = 'font-medium rounded-lg transition-colors duration-200'
  const primaryClasses = 'bg-blue-600 hover:bg-blue-700 text-white'
  const secondaryClasses = 'bg-gray-700 hover:bg-gray-600 text-gray-200'
  const sizeClasses = {
    lg: 'px-6 py-3 text-lg',
    md: 'px-4 py-2 text-base',
    sm: 'px-3 py-1 text-sm'
  }

  return (
    <button
      className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  )
}