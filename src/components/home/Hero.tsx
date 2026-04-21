'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, MapPin, Zap } from 'lucide-react'
import Link from 'next/link'
import { personal } from '@/data/personal'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          {/* Status badge */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {personal.availability}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]"
          >
            Building{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              AI products
            </span>{' '}
            that actually work.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl"
          >
            {personal.description}
          </motion.p>

          {/* Location */}
          <motion.div
            variants={item}
            className="mt-4 flex items-center gap-1.5 text-sm text-slate-400"
          >
            <MapPin size={14} />
            <span>{personal.location}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 shadow-md hover:shadow-lg transition-all duration-200"
            >
              查看项目
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-white text-slate-800 border border-slate-200 hover:border-indigo-300 hover:bg-slate-50 transition-all duration-200 shadow-sm"
            >
              关于我
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="mt-8 flex items-center gap-4">
            <span className="text-xs text-slate-400">关注我</span>
            <div className="flex gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all"
              >
                <Github size={18} />
              </a>
            </div>
          </motion.div>

          {/* Skill highlights */}
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-2">
            {[
              '多智能体系统',
              'RAG 检索管道',
              'Prompt 工程',
              'LLM 产品设计',
              'Next.js',
              'Python',
            ].map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600"
              >
                <Zap size={10} className="text-indigo-500" />
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
