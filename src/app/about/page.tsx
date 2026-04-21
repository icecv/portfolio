import type { Metadata } from 'next'
import { MapPin, Mail, Github, Linkedin } from 'lucide-react'
import { personal } from '@/data/personal'
import { Badge } from '@/components/ui/Badge'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PageTransition } from '@/components/ui/PageTransition'

export const metadata: Metadata = {
  title: 'About',
  description: `Learn more about ${personal.name} — ${personal.title}.`,
}

const categoryColors: Record<string, string> = {
  'AI & LLM': 'bg-violet-50 text-violet-700 border border-violet-200',
  Frontend: 'bg-blue-50 text-blue-700 border border-blue-200',
  Backend: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  Infrastructure: 'bg-amber-50 text-amber-700 border border-amber-200',
}

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-20 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <AnimatedSection className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                {/* Avatar placeholder */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold mb-5">
                  {personal.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>

                <h1 className="text-2xl font-bold text-slate-900">{personal.name}</h1>
                <p className="text-indigo-600 font-medium mt-1">{personal.title}</p>

                <div className="mt-4 flex items-center gap-1.5 text-sm text-slate-500">
                  <MapPin size={14} />
                  {personal.location}
                </div>

                <div className="mt-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {personal.availability}
                  </span>
                </div>

                {/* Links */}
                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href={`mailto:${personal.email}`}
                    className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600 transition-colors"
                  >
                    <Mail size={15} />
                    {personal.email}
                  </a>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600 transition-colors"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600 transition-colors"
                  >
                    <Linkedin size={15} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Bio */}
              <AnimatedSection delay={0.08}>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                    个人简介
                  </h2>
                  <div className="space-y-4">
                    {personal.bio.map((paragraph, i) => (
                      <p key={i} className="text-slate-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Experience */}
              <AnimatedSection delay={0.12}>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
                    工作经历
                  </h2>
                  <div className="space-y-6">
                    {personal.experience.map((exp, i) => (
                      <div key={i} className="flex gap-5">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
                          {exp.company[0]}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-semibold text-slate-900">{exp.role}</h3>
                            <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-sm text-indigo-600 font-medium mt-0.5">{exp.company}</p>
                          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Education */}
              <AnimatedSection delay={0.16}>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
                    教育背景
                  </h2>
                  <div className="space-y-4">
                    {personal.education.map((edu, i) => (
                      <div key={i} className="flex gap-5">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center text-violet-600 font-bold text-sm">
                          {edu.school[0]}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900">{edu.school}</h3>
                          <p className="text-sm text-slate-600">{edu.degree}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{edu.period}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Skills */}
              <AnimatedSection delay={0.2}>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
                    技能与工具
                  </h2>
                  <div className="space-y-6">
                    {Object.entries(personal.skills).map(([category, skills]) => (
                      <div key={category}>
                        <h3 className="text-sm font-semibold text-slate-700 mb-3">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill) => (
                            <span
                              key={skill}
                              className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium ${categoryColors[category] ?? 'bg-slate-100 text-slate-600'}`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
