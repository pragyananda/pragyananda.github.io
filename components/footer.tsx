"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Twitter, Mail, Send, Heart, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ]

  const services = [
    { label: "Full Stack Development", href: "#" },
    { label: "AI/ML Integration", href: "#" },
    { label: "Mobile Development", href: "#" },
    { label: "Cloud Solutions", href: "#" },
    { label: "Consulting", href: "#" },
  ]

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:pragyanand.sahoo@email.com", label: "Email" },
  ]

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  PS
                </div>
                <span className="text-xl font-bold">Pragyanand Sahoo</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Full Stack Developer & AI/ML Enthusiast passionate about creating innovative digital solutions that make
                a real impact.
              </p>
              <div className="flex space-x-2">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="w-9 h-9 p-0 hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href={service.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-4">
                Subscribe to get the latest updates on new projects and articles.
              </p>
              <div className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <span>© 2024 Pragyanand Sahoo. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>in India</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
