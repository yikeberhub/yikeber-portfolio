// src/components/ui/TimelineItem.tsx
import { FC } from 'react'

interface TimelineItemProps {
  children: React.ReactNode
  className?: string
}

export const TimelineItem: FC<TimelineItemProps> = ({ children, className }) => {
  return (
    <div className={`flex items-start gap-4 ${className}`}>
      <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
        •
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}