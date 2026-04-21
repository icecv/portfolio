'use client'

import Link from 'next/link'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { Project } from '@/data/projects'
import { Badge } from '@/components/ui/Badge'
import { formatDateShort } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300"
    >
      {/* Gradient header */}
      <div className={`relative h-36 bg-gradient-to-br ${project.gradient} flex items-end p-5`}>
        <div className="absolute inset-0 bg-black/5" />
        <div className="relative flex items-center justify-between w-full">
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
              project.status === 'completed'
                ? 'bg-white/20 text-white'
                : 'bg-amber-400/20 text-amber-100'
            }`}
          >
            {project.status === 'completed' ? '已完成' : '进行中'}
          </span>
          <span className="text-xs text-white/70">{formatDateShort(project.date)}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge variant="outline">+{project.tags.length - 4}</Badge>
          )}
        </div>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Live demo"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 group-hover:gap-2 transition-all">
            案例详情 <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  )
}
