import type { Metadata } from 'next'
import { getAllBlogPosts } from '@/data/blog'
import { BlogCard } from '@/components/blog/BlogCard'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PageTransition } from '@/components/ui/PageTransition'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing on AI systems, LLM product design, prompt engineering, and lessons from building in the AI space.',
}

export default function BlogPage() {
  const posts = getAllBlogPosts()
  const [featured, ...rest] = posts

  return (
    <PageTransition>
      <div className="pt-24 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14">
            <SectionTitle
              label="文章"
              title="博客"
              subtitle="关于 AI 系统、Prompt 工程，以及构建可靠 LLM 产品所需一切的思考与记录。"
            />
          </AnimatedSection>

          {/* Featured post */}
          {featured && (
            <AnimatedSection delay={0.05} className="mb-8">
              <BlogCard post={featured} featured />
            </AnimatedSection>
          )}

          {/* Rest */}
          {rest.length > 0 && (
            <div className="space-y-4">
              {rest.map((post, i) => (
                <AnimatedSection key={post.id} delay={0.08 + i * 0.07}>
                  <BlogCard post={post} />
                </AnimatedSection>
              ))}
            </div>
          )}

          {posts.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <p>暂无文章，敬请期待。</p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  )
}
