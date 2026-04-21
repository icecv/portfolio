import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PageTransition } from '@/components/ui/PageTransition'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Deep-dive case studies on AI systems, agents, and LLM-powered products I\'ve built.',
}

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-20 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection className="mb-14">
            <SectionTitle
              label="作品集"
              title="项目"
              subtitle="AI 系统的深度案例分析——涵盖设计决策、技术架构、Prompt 工程和生产落地经验。"
            />
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.08}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <p>暂无项目，敬请期待。</p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  )
}
