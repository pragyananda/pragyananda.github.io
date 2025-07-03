"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award, ExternalLink, BookOpen, Trophy } from "lucide-react"

export function EducationSection() {
    const education = [
        {
            degree: "Master of Technology (M.Tech)",
            field: "Computer Science & Engineering",
            specialization: "Artificial Intelligence & Machine Learning",
            institution: "Indian Institute of Technology (IIT) Delhi",
            location: "New Delhi, India",
            duration: "2020 - 2022",
            grade: "CGPA: 8.7/10",
            status: "Completed",
            description:
                "Specialized in AI/ML with focus on deep learning, computer vision, and natural language processing. Completed thesis on 'Scalable Machine Learning Architectures for Real-time Applications'.",
            achievements: [
                "Dean's List for Academic Excellence",
                "Best Thesis Award in AI/ML Category",
                "Teaching Assistant for Machine Learning Course",
                "Published 3 research papers in top-tier conferences",
            ],
            coursework: [
                "Advanced Machine Learning",
                "Deep Learning",
                "Computer Vision",
                "Natural Language Processing",
                "Distributed Systems",
                "Algorithm Design & Analysis",
            ],
            projects: [
                "Real-time Object Detection System",
                "Sentiment Analysis for Social Media",
                "Distributed ML Training Framework",
            ],
            featured: true,
            icon: GraduationCap,
        },
        {
            degree: "Bachelor of Technology (B.Tech)",
            field: "Computer Science & Engineering",
            institution: "National Institute of Technology (NIT) Rourkela",
            location: "Rourkela, Odisha, India",
            duration: "2016 - 2020",
            grade: "CGPA: 8.9/10",
            status: "Completed",
            description:
                "Strong foundation in computer science fundamentals with focus on software engineering and web technologies. Active in coding competitions and technical societies.",
            achievements: [
                "Graduated Magna Cum Laude",
                "President of Computer Science Society",
                "Winner of Inter-NIT Coding Competition 2019",
                "Google Summer of Code Participant",
            ],
            coursework: [
                "Data Structures & Algorithms",
                "Database Management Systems",
                "Software Engineering",
                "Web Technologies",
                "Operating Systems",
                "Computer Networks",
            ],
            projects: ["E-commerce Web Application", "Student Management System", "Network Security Tool"],
            featured: true,
            icon: GraduationCap,
        },
    ]

    const certifications = [
        {
            title: "Machine Learning Specialization",
            provider: "Stanford University (Coursera)",
            instructor: "Andrew Ng",
            duration: "6 months",
            completed: "2023",
            skills: ["Machine Learning", "Python", "TensorFlow", "Neural Networks"],
            certificateUrl: "#",
            featured: true,
        },
        {
            title: "Full Stack Web Development",
            provider: "freeCodeCamp",
            duration: "8 months",
            completed: "2022",
            skills: ["React", "Node.js", "MongoDB", "Express.js"],
            certificateUrl: "#",
            featured: true,
        },
        {
            title: "AWS Solutions Architect",
            provider: "Amazon Web Services",
            duration: "4 months",
            completed: "2023",
            skills: ["AWS", "Cloud Architecture", "DevOps", "Security"],
            certificateUrl: "#",
            featured: false,
        },
        {
            title: "Advanced React Development",
            provider: "Meta (Coursera)",
            duration: "3 months",
            completed: "2023",
            skills: ["React", "Redux", "Testing", "Performance"],
            certificateUrl: "#",
            featured: false,
        },
    ]

    const stats = [
        { label: "Degrees", value: 2, icon: GraduationCap },
        { label: "CGPA Average", value: "8.8", icon: Trophy },
        { label: "Certifications", value: 15, icon: Award },
        { label: "Research Papers", value: 5, icon: BookOpen },
    ]

    return (
        <section id="education" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Education & Learning</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Academic foundation and continuous learning journey in computer science, AI/ML, and modern technologies
                    </p>
                </motion.div>

                {/* Education Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center p-4 bg-background rounded-lg shadow-sm"
                        >
                            <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                                <stat.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Formal Education */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8 text-center">Formal Education</h3>
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="relative mb-12 md:ml-16"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute -left-20 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                                    <Card className="hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <edu.icon className="h-6 w-6 text-primary" />
                                                    </div>
                                                    <div>
                                                        <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                                                        <CardDescription className="text-base">
                                                            <div className="font-medium text-primary mb-1">{edu.field}</div>
                                                            {edu.specialization && (
                                                                <div className="text-sm mb-2">Specialization: {edu.specialization}</div>
                                                            )}
                                                            <div className="text-sm">{edu.institution}</div>
                                                        </CardDescription>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col lg:items-end gap-2">
                                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                        <Calendar className="h-4 w-4" />
                                                        {edu.duration}
                                                    </div>
                                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                        <MapPin className="h-4 w-4" />
                                                        {edu.location}
                                                    </div>
                                                    <Badge variant="default" className="w-fit">
                                                        {edu.grade}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground mb-6">{edu.description}</p>

                                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                                {/* Achievements */}
                                                <div>
                                                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                                                        <Trophy className="h-4 w-4 text-primary" />
                                                        Key Achievements
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {edu.achievements.map((achievement, achievementIndex) => (
                                                            <li
                                                                key={achievementIndex}
                                                                className="text-sm text-muted-foreground flex items-start gap-2"
                                                            >
                                                                <Award className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                                                                {achievement}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Major Projects */}
                                                <div>
                                                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                                                        <BookOpen className="h-4 w-4 text-primary" />
                                                        Major Projects
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {edu.projects.map((project, projectIndex) => (
                                                            <li key={projectIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                                                {project}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Relevant Coursework */}
                                            <div>
                                                <h4 className="font-semibold mb-3">Relevant Coursework</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {edu.coursework.map((course, courseIndex) => (
                                                        <Badge key={courseIndex} variant="secondary" className="text-xs">
                                                            {course}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Online Certifications & Courses */}
                <div>
                    <h3 className="text-2xl font-semibold mb-8 text-center">Professional Certifications & Online Courses</h3>

                    {/* Featured Certifications */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {certifications
                            .filter((cert) => cert.featured)
                            .map((certification, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="h-full hover:shadow-lg transition-shadow group">
                                        <CardHeader>
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <BookOpen className="h-6 w-6 text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <CardTitle className="text-lg group-hover:text-primary transition-colors mb-2">
                                                        {certification.title}
                                                    </CardTitle>
                                                    <CardDescription>
                                                        <div className="font-medium text-primary mb-1">{certification.provider}</div>
                                                        {certification.instructor && (
                                                            <div className="text-sm mb-1">Instructor: {certification.instructor}</div>
                                                        )}
                                                        <div className="text-sm">
                                                            {certification.duration} • Completed {certification.completed}
                                                        </div>
                                                    </CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {certification.skills.map((skill, skillIndex) => (
                                                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <Button variant="outline" size="sm" className="w-full bg-transparent">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                View Certificate
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                    </div>

                    {/* Other Certifications */}
                    <div className="space-y-4">
                        {certifications
                            .filter((cert) => !cert.featured)
                            .map((certification, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="hover:shadow-md transition-shadow">
                                        <CardContent className="p-6">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4 flex-1">
                                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                                        <BookOpen className="h-5 w-5 text-primary" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                            <div>
                                                                <h4 className="font-semibold">{certification.title}</h4>
                                                                <p className="text-sm text-muted-foreground">
                                                                    {certification.provider} • {certification.completed}
                                                                </p>
                                                            </div>
                                                            <div className="flex flex-wrap gap-1">
                                                                {certification.skills.slice(0, 3).map((skill, skillIndex) => (
                                                                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                                                                        {skill}
                                                                    </Badge>
                                                                ))}
                                                                {certification.skills.length > 3 && (
                                                                    <Badge variant="secondary" className="text-xs">
                                                                        +{certification.skills.length - 3}
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Button variant="ghost" size="sm">
                                                    <ExternalLink className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <div className="bg-background rounded-lg p-8 shadow-sm max-w-2xl mx-auto">
                        <h4 className="font-semibold mb-3">Continuous Learning Philosophy</h4>
                        <p className="text-muted-foreground">
                            I believe in lifelong learning and staying updated with the latest technologies. Currently pursuing
                            advanced courses in
                            <span className="text-primary font-medium"> Generative AI</span>,
                            <span className="text-primary font-medium"> Cloud Architecture</span>, and
                            <span className="text-primary font-medium"> System Design</span> to enhance my expertise.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
