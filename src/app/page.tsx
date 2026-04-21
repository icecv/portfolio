import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { Skills } from '@/components/home/Skills'
import { Contact } from '@/components/home/Contact'
import { personal } from '@/data/personal'

export const metadata: Metadata = {
  title: `${personal.name} — AI Product Builder`,
  description: personal.description,
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </>
  )
}
