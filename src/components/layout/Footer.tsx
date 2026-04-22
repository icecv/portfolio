import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { personal } from '@/data/personal'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-indigo-100/60 bg-white/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {personal.name}
            </span>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">{personal.tagline}</p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                导航
              </p>
              <ul className="space-y-2">
                {[
                  { label: '项目', href: '/projects' },
                  { label: '博客', href: '/blog' },
                  { label: '关于', href: '/about' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-indigo-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
              社交媒体
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: personal.github, label: 'GitHub' },
                { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
                { icon: Twitter, href: personal.twitter, label: 'Twitter' },
                { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
              ].filter((item) => item.href).map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-400">
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">使用 Next.js & Tailwind CSS 构建</p>
        </div>
      </div>
    </footer>
  )
}
