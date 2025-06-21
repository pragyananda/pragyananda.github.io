"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ShoppingCart } from "lucide-react"

export function ProjectsSection({ projects }: { projects: any[] }) {
  const transformedProjects = projects.map((project) => ({
    ...project,
    icon: ShoppingCart,
    featured: true,
  }))

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work combining full-stack development with AI/ML technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {transformedProjects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project._id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center">
                        <project.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech: string, techIndex: number) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="bg-background text-foreground">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="bg-background text-foreground">
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
