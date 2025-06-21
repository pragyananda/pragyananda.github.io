import { MongoClient } from 'mongodb'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { StatsSection } from '@/components/stats-section'
import { SkillsSection } from '@/components/skills-section'
import { ServicesSection } from '@/components/services-section'
import { ProjectsSection } from '@/components/projects-section'
import { ExperienceSection } from '@/components/experience-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { BlogSection } from '@/components/blog-section'
import { ContactSection } from '@/components/contact-section'

type Project = {
  _id: string
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
}

async function getProjects() {
  const client = new MongoClient(process.env.MONGODB_URI!)
  try {
    await client.connect()
    const db = client.db('portfolio')
    const projects = await db.collection('project').find({}).toArray()
    console.log('Fetched projects:', projects);
    return JSON.parse(JSON.stringify(projects)) as Project[]
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  } finally {
    await client.close()
  }
}

export default async function Home() {
  const projects = await getProjects()

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection projects={projects} />
      <ExperienceSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
    </main>
  )
}

export const revalidate = 0