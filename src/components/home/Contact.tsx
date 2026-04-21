import { Mail, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react'
import { personal } from '@/data/personal'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function Contact() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
              联系我
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              一起构建{' '}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                有趣的东西。
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              欢迎联系——无论是高级工程或 AI 产品岗位、咨询项目，还是有意思的合作。想聊 AI 系统、产品设计，或者任何相关话题，随时欢迎。
            </p>

            <a
              href={`mailto:${personal.email}`}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-400 hover:to-indigo-400 transition-all duration-200 shadow-lg"
            >
              <Mail size={16} />
              {personal.email}
              <ArrowRight size={15} />
            </a>

            <div className="mt-8 flex items-center gap-4">
              {[
                { icon: Github, href: personal.github, label: 'GitHub' },
                { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
                { icon: Twitter, href: personal.twitter, label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
