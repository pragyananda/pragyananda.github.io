// "use client"

// import { motion } from "framer-motion"
// import { Card, CardContent } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Star, Quote } from "lucide-react"

// export function TestimonialsSection() {
//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "CTO, TechStart Inc.",
//       avatar: "/placeholder.svg?height=60&width=60",
//       content:
//         "Pragyanand delivered exceptional work on our AI-powered platform. His expertise in both full-stack development and machine learning made him invaluable to our project.",
//       rating: 5,
//     },
//     {
//       name: "Michael Chen",
//       role: "Product Manager, InnovateLab",
//       avatar: "/placeholder.svg?height=60&width=60",
//       content:
//         "Working with Pragyanand was a game-changer. He not only built our application but also provided insights that improved our overall product strategy.",
//       rating: 5,
//     },
//     {
//       name: "Emily Rodriguez",
//       role: "Founder, DataDriven Solutions",
//       avatar: "/placeholder.svg?height=60&width=60",
//       content:
//         "His ability to integrate complex AI features seamlessly into our web application exceeded our expectations. Highly professional and reliable.",
//       rating: 5,
//     },
//   ]

//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">What clients say about working with me</p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <Card className="h-full hover:shadow-lg transition-shadow relative">
//                 <CardContent className="p-6">
//                   <Quote className="h-8 w-8 text-primary/20 mb-4" />
//                   <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

//                   <div className="flex items-center gap-1 mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                     ))}
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <Avatar>
//                       <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
//                       <AvatarFallback>
//                         {testimonial.name
//                           .split(" ")
//                           .map((n) => n[0])
//                           .join("")}
//                       </AvatarFallback>
//                     </Avatar>
//                     <div>
//                       <p className="font-semibold">{testimonial.name}</p>
//                       <p className="text-sm text-muted-foreground">{testimonial.role}</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, Quote } from 'lucide-react'

type Testimonial = {
  name: string
  role: string
  avatar: string
  content: string
  rating: number
}

type TestimonialsProps = {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">What clients say about working with me</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow relative">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || '/placeholder.svg'} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}