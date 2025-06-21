// "use client"

// import { motion } from "framer-motion"
// import { useEffect, useState } from "react"

// export function StatsSection() {
//   const [counts, setCounts] = useState({
//     projects: 0,
//     clients: 0,
//     experience: 0,
//     technologies: 0,
//   })

//   const stats = [
//     { key: "projects", label: "Projects Completed", value: 50, suffix: "+" },
//     { key: "clients", label: "Happy Clients", value: 25, suffix: "+" },
//     { key: "experience", label: "Years Experience", value: 4, suffix: "+" },
//     { key: "technologies", label: "Technologies", value: 30, suffix: "+" },
//   ]

//   useEffect(() => {
//     const animateCounters = () => {
//       stats.forEach((stat) => {
//         let start = 0
//         const end = stat.value
//         const duration = 2000
//         const increment = end / (duration / 16)

//         const timer = setInterval(() => {
//           start += increment
//           if (start >= end) {
//             setCounts((prev) => ({ ...prev, [stat.key]: end }))
//             clearInterval(timer)
//           } else {
//             setCounts((prev) => ({ ...prev, [stat.key]: Math.floor(start) }))
//           }
//         }, 16)
//       })
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           animateCounters()
//           observer.disconnect()
//         }
//       },
//       { threshold: 0.5 },
//     )

//     const element = document.getElementById("stats-section")
//     if (element) observer.observe(element)

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section id="stats-section" className="py-20 bg-primary/5">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">Achievements</h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Numbers that reflect my journey and commitment to excellence
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.key}
//               initial={{ opacity: 0, scale: 0.5 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="text-center"
//             >
//               <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
//                 {counts[stat.key as keyof typeof counts]}
//                 {stat.suffix}
//               </div>
//               <div className="text-muted-foreground font-medium">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Stat = {
  key: string
  label: string
  value: number
  suffix: string
}

type StatsProps = {
  stats: Stat[]
}

export function StatsSection({ stats }: StatsProps) {
  const [counts, setCounts] = useState(
    stats.reduce((acc, stat) => ({ ...acc, [stat.key]: 0 }), {} as { [key: string]: number })
  )

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat) => {
        let start = 0
        const end = stat.value
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCounts((prev) => ({ ...prev, [stat.key]: end }))
            clearInterval(timer)
          } else {
            setCounts((prev) => ({ ...prev, [stat.key]: Math.floor(start) }))
          }
        }, 16)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('stats-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [stats])

  return (
    <section id="stats-section" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers that reflect my journey and commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
                {counts[stat.key]}
                {stat.suffix}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}