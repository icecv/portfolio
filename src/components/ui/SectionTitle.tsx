import { cn } from '@/lib/utils'

interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionTitle({
  label,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
