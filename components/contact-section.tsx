// "use client"

// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

// export function ContactSection() {
//   const contactInfo = [
//     {
//       icon: Mail,
//       title: "Email",
//       value: "pragyanand.sahoo@email.com",
//       href: "mailto:pragyanand.sahoo@email.com",
//     },
//     {
//       icon: Phone,
//       title: "Phone",
//       value: "+91 XXXXX XXXXX",
//       href: "tel:+91XXXXXXXXX",
//     },
//     {
//       icon: MapPin,
//       title: "Location",
//       value: "India",
//       href: "#",
//     },
//   ]

//   const socialLinks = [
//     { icon: Github, href: "#", label: "GitHub" },
//     { icon: Linkedin, href: "#", label: "LinkedIn" },
//     { icon: Twitter, href: "#", label: "Twitter" },
//   ]

//   return (
//     <section id="contact" className="py-20 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life with
//             cutting-edge technology.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <Card>
//               <CardHeader>
//                 <CardTitle>Send a Message</CardTitle>
//                 <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium mb-2">
//                         Name
//                       </label>
//                       <Input id="name" placeholder="Your name" />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium mb-2">
//                         Email
//                       </label>
//                       <Input id="email" type="email" placeholder="your.email@example.com" />
//                     </div>
//                   </div>
//                   <div>
//                     <label htmlFor="subject" className="block text-sm font-medium mb-2">
//                       Subject
//                     </label>
//                     <Input id="subject" placeholder="Project discussion" />
//                   </div>
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium mb-2">
//                       Message
//                     </label>
//                     <Textarea id="message" placeholder="Tell me about your project or idea..." rows={6} />
//                   </div>
//                   <Button type="submit" className="w-full">
//                     <Send className="mr-2 h-4 w-4" />
//                     Send Message
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div>
//               <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
//               <div className="space-y-4">
//                 {contactInfo.map((info, index) => (
//                   <motion.a
//                     key={index}
//                     href={info.href}
//                     initial={{ opacity: 0, y: 10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="flex items-center gap-4 p-4 rounded-lg bg-background hover:shadow-md transition-shadow group"
//                   >
//                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                       <info.icon className="h-6 w-6 text-primary" />
//                     </div>
//                     <div>
//                       <p className="font-medium">{info.title}</p>
//                       <p className="text-muted-foreground">{info.value}</p>
//                     </div>
//                   </motion.a>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
//               <div className="flex gap-4">
//                 {socialLinks.map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.href}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.4, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="w-12 h-12 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm hover:shadow-md"
//                     aria-label={social.label}
//                   >
//                     <social.icon className="h-5 w-5" />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-background rounded-lg p-6">
//               <h4 className="font-semibold mb-3">Let's Build Something Amazing</h4>
//               <p className="text-muted-foreground mb-4">
//                 Whether you have a project in mind, need consultation on AI/ML integration, or just want to discuss the
//                 latest in tech, I'm always excited to connect with fellow innovators.
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
//                   Available for freelance
//                 </span>
//                 <span className="px-3 py-1 bg-secondary/10 text-secondary-foreground rounded-full text-sm">
//                   Open to collaboration
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export function ContactSection() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      setStatus('Message sent successfully!')
      setFormData({ from_name: '', from_email: '', subject: '', message: '' })
    } catch (error) {
      console.error(error)
      setStatus('Failed to send message. Please try again.')
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'pragyanandasaho@gmail.com',
      href: 'mailto:pragyanandasaho@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 6398665353',
      href: 'tel:+916398665353',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      href: '#',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/pragyananda',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/pragyanandsaho',
      label: 'LinkedIn',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/your-username', // Replace with your Twitter handle
      label: 'Twitter',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life with
            cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="from_name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="from_name"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="from_email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="from_email"
                        name="from_email"
                        type="email"
                        value={formData.from_email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project discussion"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                  {status && <p className="text-center text-sm mt-2">{status}</p>}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-background hover:shadow-md transition-shadow group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-12 h-12 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm hover:shadow-md"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-lg p-6">
              <h4 className="font-semibold mb-3">Let's Build Something Amazing</h4>
              <p className="text-muted-foreground mb-4">
                Whether you have a project in mind, need consultation on AI/ML integration, or just want to discuss the
                latest in tech, I'm always excited to connect with fellow innovators.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Available for freelance
                </span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary-foreground rounded-full text-sm">
                  Open to collaboration
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}