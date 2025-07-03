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
import { client, urlFor } from '@/lib/sanityClient'
import { PublicationsSection } from '@/components/publications-section'
import { EducationSection } from '@/components/education-section'
import { CertificationsSection } from '@/components/certification-section'

// Force static rendering for GitHub Pagesloca
// export const dynamic = 'force-static'

type About = {
  bio: string
  highlights: { title: string; description: string; icon: string }[]
  journey: any[] // Portable text
}

type Stat = {
  key: string
  label: string
  value: number
  suffix: string
}

type SkillCategory = {
  title: string
  skills: string[]
}

type Service = {
  title: string
  description: string
  features: string[]
  price: string
  icon: string
}

type Project = {
  _id: string
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
  github?: string
  featured: boolean
}

type Experience = {
  title: string
  company: string
  location: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

type Testimonial = {
  name: string
  role: string
  avatar: string
  content: string
  rating: number
}

type Blog = {
  title: string
  excerpt: string
  image: string
  category: string
  readTime: string
  date: string
  views: string
  featured: boolean
  content: any[] // Portable text
}

export default async function Home() {
  let about: About = { bio: '', highlights: [], journey: [] }
  let stats: Stat[] = []
  let skillCategories: SkillCategory[] = []
  let services: Service[] = []
  let projects: Project[] = []
  let experiences: Experience[] = []
  let testimonials: Testimonial[] = []
  let blogs: Blog[] = []

  try {
    about = await client.fetch(`
      *[_type == "about"][0] {
        bio,
        highlights,
        journey
      }
    `) || about

    stats = await client.fetch(`
      *[_type == "stats"][0].stats
    `) || stats

    skillCategories = await client.fetch(`
      *[_type == "skillCategory"] | order(title asc) {
        title,
        skills
      }
    `) || skillCategories

    services = await client.fetch(`
      *[_type == "service"] | order(title asc) {
        title,
        description,
        features,
        price,
        icon
      }
    `) || services

    projects = await client.fetch(`
      *[_type == "projects"] | order(_createdAt desc) {
        _id,
        title,
        description,
        image,
        technologies,
        link,
        github,
        featured
      }
    `) || projects

    projects = projects.map((project: any) => ({
      ...project,
      image: project.image ? urlFor(project.image).url() : '',
    }))

    experiences = await client.fetch(`
      *[_type == "experience"] | order(_createdAt desc) {
        title,
        company,
        location,
        period,
        description,
        achievements,
        technologies
      }
    `) || experiences

    testimonials = await client.fetch(`
      *[_type == "testimonial"] | order(_createdAt desc) {
        name,
        role,
        avatar,
        content,
        rating
      }
    `) || testimonials

    testimonials = testimonials.map((testimonial: any) => ({
      ...testimonial,
      avatar: testimonial.avatar ? urlFor(testimonial.avatar).url() : '',
    }))

    blogs = await client.fetch(`
      *[_type == "blog"] | order(date desc) {
        title,
        excerpt,
        image,
        category,
        readTime,
        date,
        views,
        featured,
        content
      }
    `) || blogs

    blogs = blogs.map((blog: any) => ({
      ...blog,
      image: blog.image ? urlFor(blog.image).url() : '',
      date: new Date(blog.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    }))
  } catch (error) {
    console.error('Error fetching data:', error)
  }

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection about={about} />
      <StatsSection stats={stats} />
      <SkillsSection skillCategories={skillCategories} />
      <ServicesSection services={services} />
      <ProjectsSection projects={projects} />
      {/* <PublicationsSection />
      <EducationSection />
      <CertificationsSection /> */}
      <ExperienceSection experiences={experiences} />
      {/* <TestimonialsSection testimonials={testimonials} /> */}
      {/* <BlogSection blogs={blogs} /> */}
      <ContactSection />
    </main>
  )
}