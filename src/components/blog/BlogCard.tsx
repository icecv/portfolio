import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { BlogPost } from '@/data/blog'
import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300 ${featured ? 'md:flex-row md:gap-8 md:p-8' : ''}`}
    >
      <div className="flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock size={12} />
            {post.readingTime}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug ${featured ? 'text-xl sm:text-2xl' : 'text-base'}`}
        >
          {post.title}
        </h3>

        {/* Description */}
        <p
          className={`mt-2 text-slate-500 leading-relaxed ${featured ? 'text-base' : 'text-sm line-clamp-2'}`}
        >
          {post.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="primary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 group-hover:gap-2 transition-all">
          阅读全文 <ArrowRight size={13} />
        </div>
      </div>
    </Link>
  )
}
