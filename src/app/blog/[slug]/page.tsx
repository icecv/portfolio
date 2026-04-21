import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getBlogPostBySlug, blogPosts } from '@/data/blog'
import { Badge } from '@/components/ui/Badge'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PageTransition } from '@/components/ui/PageTransition'
import { formatDate } from '@/lib/utils'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <PageTransition>
      <div className="pt-24 pb-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 transition-colors mb-10"
            >
              <ArrowLeft size={15} /> 返回博客
            </Link>
          </AnimatedSection>

          {/* Header */}
          <AnimatedSection delay={0.06}>
            <div className="mb-10">
              <div className="flex flex-wrap gap-1.5 mb-5">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="primary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-5">
                {post.title}
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">{post.description}</p>

              <div className="flex items-center gap-4 text-sm text-slate-400 pb-6 border-b border-slate-200">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={14} />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} />
                  {post.readingTime}
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.1}>
            <article className="prose max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </article>
          </AnimatedSection>

          {/* Footer */}
          <AnimatedSection delay={0.15}>
            <div className="mt-14 pt-8 border-t border-slate-200">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                <ArrowLeft size={15} /> 全部文章
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  )
}
