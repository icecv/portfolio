import { personal } from '@/data/personal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const categoryColors: Record<string, string> = {
  'AI & Agent': 'bg-violet-50 text-violet-700 border-violet-200',
  '编程语言': 'bg-blue-50 text-blue-700 border-blue-200',
  '工具': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  '英语能力': 'bg-amber-50 text-amber-700 border-amber-200',
}

export function Skills() {
  return (
    <section className="py-24 bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            label="技术能力"
            title="我的技术栈"
            subtitle="用于设计和交付 AI 原生产品的工具与技术。"
          />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(personal.skills).map(([category, skills], i) => (
            <AnimatedSection key={category} delay={i * 0.08}>
              <div className="p-6 rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50/50 transition-all duration-300">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${categoryColors[category] ?? 'bg-slate-100 text-slate-600 border-slate-200'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
