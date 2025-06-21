// "use client"

// import { motion } from "framer-motion"
// import { Code, Brain, Rocket, Users } from "lucide-react"

// export function AboutSection() {
//   const highlights = [
//     {
//       icon: Code,
//       title: "Full Stack Development",
//       description: "Expertise in modern web technologies, from responsive frontends to scalable backends",
//     },
//     {
//       icon: Brain,
//       title: "AI/ML Innovation",
//       description: "Passionate about machine learning, neural networks, and intelligent automation",
//     },
//     {
//       icon: Rocket,
//       title: "Performance Focused",
//       description: "Building fast, efficient, and user-centric applications with optimal performance",
//     },
//     {
//       icon: Users,
//       title: "Collaborative Spirit",
//       description: "Strong team player with excellent communication and project management skills",
//     },
//   ]

//   return (
//     <section id="about" className="py-20 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             I'm a passionate full stack developer with a deep fascination for artificial intelligence and machine
//             learning. I love creating innovative solutions that bridge the gap between cutting-edge technology and
//             real-world applications.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {highlights.map((highlight, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="text-center p-6 rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow"
//             >
//               <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
//                 <highlight.icon className="h-8 w-8 text-primary" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
//               <p className="text-muted-foreground">{highlight.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="mt-16 max-w-4xl mx-auto"
//         >
//           <div className="bg-background rounded-lg p-8 shadow-sm">
//             <h3 className="text-2xl font-semibold mb-6 text-center">My Journey</h3>
//             <div className="prose prose-lg max-w-none text-muted-foreground">
//               <p className="mb-4">
//                 My journey in technology began with a curiosity about how things work behind the scenes. This curiosity
//                 evolved into a passion for creating digital solutions that make a real impact.
//               </p>
//               <p className="mb-4">
//                 As a full stack developer, I've worked with various technologies across the entire development spectrum.
//                 From crafting intuitive user interfaces to designing robust backend architectures, I enjoy every aspect
//                 of the development process.
//               </p>
//               <p>
//                 My interest in AI and machine learning drives me to stay at the forefront of technological innovation.
//                 I'm constantly exploring new ways to integrate intelligent features into applications, making them more
//                 intuitive and powerful.
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
'use client'

import { motion } from 'framer-motion'
import { Code, Brain, Rocket, Users } from 'lucide-react'
import { PortableText } from '@portabletext/react'

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Code,
  Brain,
  Rocket,
  Users,
}

type AboutProps = {
  about: {
    bio: string
    highlights: { title: string; description: string; icon: string }[]
    journey: any[]
  }
}

export function AboutSection({ about }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {about.bio}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {about.highlights.map((highlight, index) => {
            const Icon = iconMap[highlight.icon] || Code
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-background rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-center">My Journey</h3>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <PortableText value={about.journey} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}