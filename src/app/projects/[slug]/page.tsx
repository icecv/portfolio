import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Calendar, CheckCircle2, AlertCircle, TrendingUp, Lightbulb, type LucideIcon } from 'lucide-react'
import { getProjectBySlug, projects } from '@/data/projects'
import { Badge } from '@/components/ui/Badge'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PageTransition } from '@/components/ui/PageTransition'
import { formatDateShort } from '@/lib/utils'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
  }
}

function SectionCard({
  icon: Icon,
  title: sectionTitle,
  color,
  children,
}: {
  icon: LucideIcon
  title: string
  color: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
      <div className={`px-6 py-4 border-b border-slate-100 flex items-center gap-3 bg-gradient-to-r ${color}`}>
        <Icon size={18} className="text-white/90" />
        <h2 className="font-semibold text-white">{sectionTitle}</h2>
      </div>
      <div className="p-6">{children}</div>
    </div>
  )
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const { detail } = project

  return (
    <PageTransition>
      <div className="pt-24 pb-20 min-h-screen bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <AnimatedSection>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 transition-colors mb-8"
            >
              <ArrowLeft size={15} /> 返回项目列表
            </Link>
          </AnimatedSection>

          {/* Hero */}
          <AnimatedSection delay={0.05}>
            <div className={`rounded-3xl bg-gradient-to-br ${project.gradient} p-8 sm:p-12 mb-8 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
                  {project.title}
                </h1>
                <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
                  {project.subtitle}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-1.5 text-white/70 text-sm">
                    <Calendar size={14} />
                    {formatDateShort(project.date)}
                  </div>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                    >
                      <Github size={15} /> GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-white text-slate-800 hover:bg-white/90 transition-colors"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Main content grid */}
          <div className="space-y-6">
            {/* Background */}
            <AnimatedSection delay={0.1}>
              <SectionCard icon={Lightbulb} title="背景——为什么做这个" color="from-amber-500 to-orange-500">
                <p className="text-slate-700 leading-relaxed">{detail.background}</p>
              </SectionCard>
            </AnimatedSection>

            {/* Problem Breakdown */}
            <AnimatedSection delay={0.12}>
              <SectionCard icon={AlertCircle} title="问题拆解" color="from-rose-500 to-pink-500">
                <ul className="space-y-3">
                  {detail.problemBreakdown.map((problem, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 text-rose-600 text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-slate-700 leading-relaxed">{problem}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            </AnimatedSection>

            {/* Solution */}
            <AnimatedSection delay={0.14}>
              <SectionCard icon={CheckCircle2} title="解决方案与系统架构" color="from-emerald-500 to-teal-500">
                <p className="text-slate-700 leading-relaxed mb-5">{detail.solution}</p>
                {detail.architecture && (
                  <>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">系统架构</h4>
                    <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 rounded-xl p-4 border border-slate-100">
                      {detail.architecture}
                    </p>
                  </>
                )}
              </SectionCard>
            </AnimatedSection>

            {/* Tech Stack */}
            <AnimatedSection delay={0.16}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="font-semibold text-slate-900 mb-4">技术栈</h2>
                <div className="flex flex-wrap gap-2">
                  {detail.techStack.map((tech) => (
                    <Badge key={tech} variant="primary" className="text-sm px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Prompt Design */}
            {detail.promptDesign && (
              <AnimatedSection delay={0.18}>
                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-100 text-indigo-700">
                      Prompt 工程
                    </span>
                    <h2 className="font-semibold text-slate-900">Prompt 设计</h2>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{detail.promptDesign}</p>
                </div>
              </AnimatedSection>
            )}

            {/* Workflow */}
            {detail.workflow && detail.workflow.length > 0 && (
              <AnimatedSection delay={0.19}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h2 className="font-semibold text-slate-900 mb-4">系统工作流程</h2>
                  <ol className="space-y-2">
                    {detail.workflow.map((step, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                          {i + 1}
                        </div>
                        <span className="text-slate-700 leading-relaxed pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </AnimatedSection>
            )}

            {/* Challenges */}
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="font-semibold text-slate-900 mb-5">遇到的问题 & 优化过程</h2>
                <div className="space-y-5">
                  {detail.challenges.map((c, i) => (
                    <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-xl bg-rose-50 border border-rose-100 p-4">
                        <p className="text-xs font-semibold text-rose-600 uppercase tracking-wide mb-2">问题</p>
                        <p className="text-sm text-slate-700 leading-relaxed">{c.problem}</p>
                      </div>
                      <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
                        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-2">解决方案</p>
                        <p className="text-sm text-slate-700 leading-relaxed">{c.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Results */}
            <AnimatedSection delay={0.22}>
              <SectionCard icon={TrendingUp} title="结果" color="from-blue-500 to-indigo-600">
                <ul className="space-y-2.5">
                  {detail.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={17} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            </AnimatedSection>

            {/* Reflection */}
            <AnimatedSection delay={0.24}>
              <div className="rounded-2xl border-l-4 border-indigo-400 bg-indigo-50/50 p-6">
                <h2 className="font-semibold text-slate-900 mb-3">反思</h2>
                <p className="text-slate-700 leading-relaxed italic">{detail.reflection}</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Nav to next project */}
          <AnimatedSection delay={0.26} className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex justify-between items-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                <ArrowLeft size={15} /> 全部项目
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  )
}
