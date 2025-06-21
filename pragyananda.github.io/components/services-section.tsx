"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Brain, Smartphone, Database, Cloud, Zap, ArrowRight, CheckCircle } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "End-to-end web application development using modern technologies",
      features: ["React/Next.js", "Node.js/Python", "Database Design", "API Development"],
      price: "Starting at $2000",
    },
    {
      icon: Brain,
      title: "AI/ML Integration",
      description: "Integrate intelligent features into your applications",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      price: "Starting at $1500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications with native performance",
      features: ["React Native", "Flutter", "iOS/Android", "App Store Deployment"],
      price: "Starting at $2500",
    },
    {
      icon: Database,
      title: "Database Architecture",
      description: "Scalable database design and optimization",
      features: ["Database Design", "Performance Optimization", "Data Migration", "Backup Strategies"],
      price: "Starting at $800",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Deploy and scale your applications in the cloud",
      features: ["AWS/Azure/GCP", "DevOps Setup", "Auto-scaling", "Monitoring"],
      price: "Starting at $1200",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize your existing applications for better performance",
      features: ["Code Optimization", "Database Tuning", "Caching Strategies", "Load Testing"],
      price: "Starting at $600",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
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
          <p className="text-muted-foreground mb-4">Need a custom solution? Let's discuss your project requirements.</p>
          <Button size="lg">
            Get Custom Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
