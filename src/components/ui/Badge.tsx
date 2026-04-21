import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variant === 'default' && 'bg-slate-100 text-slate-700',
        variant === 'primary' && 'bg-indigo-50 text-indigo-700',
        variant === 'outline' && 'border border-slate-200 text-slate-600',
        className,
      )}
    >
      {children}
    </span>
  )
}
