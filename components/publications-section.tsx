"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Download, Calendar, Users, Award, BookOpen, FileText, Presentation } from "lucide-react"

export function PublicationsSection() {
    const publications = [
        {
            title: "Scalable Machine Learning Architecture for Real-time Web Applications",
            authors: ["Pragyanand Sahoo", "Dr. Jane Smith", "Prof. John Doe"],
            journal: "International Journal of AI & Web Technologies",
            year: "2024",
            type: "Journal Paper",
            status: "Published",
            abstract:
                "This paper presents a novel architecture for integrating machine learning models into web applications with real-time inference capabilities, achieving 40% better performance than traditional approaches.",
            tags: ["Machine Learning", "Web Architecture", "Real-time Systems", "Performance Optimization"],
            citations: 15,
            doi: "10.1000/xyz123",
            pdfUrl: "#",
            featured: true,
            icon: BookOpen,
        },
        {
            title: "AI-Powered Code Generation: A Comparative Study of Modern Approaches",
            authors: ["Pragyanand Sahoo", "Dr. Alice Johnson"],
            conference: "International Conference on Software Engineering (ICSE 2024)",
            year: "2024",
            type: "Conference Paper",
            status: "Accepted",
            abstract:
                "Comprehensive analysis of various AI-powered code generation tools and their effectiveness in different programming paradigms and languages.",
            tags: ["AI", "Code Generation", "Software Engineering", "Comparative Study"],
            citations: 8,
            pdfUrl: "#",
            featured: true,
            icon: FileText,
        },
        {
            title: "Building Intelligent Chatbots with Natural Language Processing",
            authors: ["Pragyanand Sahoo"],
            journal: "Tech Insights Quarterly",
            year: "2023",
            type: "Technical Article",
            status: "Published",
            abstract:
                "A comprehensive guide to building intelligent chatbots using modern NLP techniques and frameworks, with practical implementation examples.",
            tags: ["NLP", "Chatbots", "AI", "Tutorial"],
            citations: 22,
            pdfUrl: "#",
            featured: false,
            icon: Presentation,
        },
        {
            title: "Full Stack Development Best Practices in the AI Era",
            authors: ["Pragyanand Sahoo"],
            conference: "DevCon India 2023",
            year: "2023",
            type: "Conference Talk",
            status: "Presented",
            abstract:
                "Exploring how AI is changing full stack development practices and the new patterns emerging in modern web applications.",
            tags: ["Full Stack", "AI Integration", "Best Practices", "Web Development"],
            citations: 5,
            videoUrl: "#",
            slidesUrl: "#",
            featured: false,
            icon: Presentation,
        },
    ]

    const stats = [
        { label: "Publications", value: publications.length, icon: BookOpen },
        { label: "Citations", value: publications.reduce((sum, pub) => sum + pub.citations, 0), icon: Award },
        { label: "H-Index", value: 4, icon: Users },
        { label: "Years Active", value: 3, icon: Calendar },
    ]

    return (
        <section id="publications" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Publications & Research</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Contributing to the academic and technical community through research papers, articles, and conference
                        presentations
                    </p>
                </motion.div>

                {/* Publication Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center p-4 bg-muted/30 rounded-lg"
                        >
                            <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                                <stat.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Featured Publications */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-8 text-center">Featured Publications</h3>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {publications
                            .filter((pub) => pub.featured)
                            .map((publication, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="h-full hover:shadow-lg transition-shadow group">
                                        <CardHeader>
                                            <div className="flex items-start gap-3 mb-3">
                                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <publication.icon className="h-5 w-5 text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Badge variant="secondary">{publication.type}</Badge>
                                                        <Badge variant={publication.status === "Published" ? "default" : "outline"}>
                                                            {publication.status}
                                                        </Badge>
                                                    </div>
                                                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                                        {publication.title}
                                                    </CardTitle>
                                                </div>
                                            </div>
                                            <CardDescription className="text-sm">
                                                <div className="mb-2">
                                                    <strong>Authors:</strong> {publication.authors.join(", ")}
                                                </div>
                                                <div className="mb-2">
                                                    <strong>
                                                        {publication.journal ? "Journal" : publication.conference ? "Conference" : "Publication"}:
                                                    </strong>{" "}
                                                    {publication.journal || publication.conference} ({publication.year})
                                                </div>
                                                {publication.citations > 0 && (
                                                    <div className="mb-2">
                                                        <strong>Citations:</strong> {publication.citations}
                                                    </div>
                                                )}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground mb-4 leading-relaxed">{publication.abstract}</p>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {publication.tags.map((tag, tagIndex) => (
                                                    <Badge key={tagIndex} variant="outline" className="text-xs">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {publication.pdfUrl && (
                                                    <Button variant="outline" size="sm">
                                                        <Download className="mr-2 h-4 w-4" />
                                                        PDF
                                                    </Button>
                                                )}
                                                {publication.doi && (
                                                    <Button variant="outline" size="sm">
                                                        <ExternalLink className="mr-2 h-4 w-4" />
                                                        DOI
                                                    </Button>
                                                )}
                                                {publication.videoUrl && (
                                                    <Button variant="outline" size="sm">
                                                        <ExternalLink className="mr-2 h-4 w-4" />
                                                        Video
                                                    </Button>
                                                )}
                                                {publication.slidesUrl && (
                                                    <Button variant="outline" size="sm">
                                                        <Download className="mr-2 h-4 w-4" />
                                                        Slides
                                                    </Button>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                    </div>
                </div>

                {/* All Publications */}
                <div>
                    <h3 className="text-2xl font-semibold mb-8 text-center">All Publications</h3>
                    <div className="space-y-6">
                        {publications
                            .filter((pub) => !pub.featured)
                            .map((publication, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="hover:shadow-md transition-shadow">
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <publication.icon className="h-5 w-5 text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                                        <Badge variant="secondary">{publication.type}</Badge>
                                                        <Badge variant={publication.status === "Published" ? "default" : "outline"}>
                                                            {publication.status}
                                                        </Badge>
                                                        <span className="text-sm text-muted-foreground">{publication.citations} citations</span>
                                                    </div>
                                                    <h4 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                                                        {publication.title}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground mb-2">
                                                        {publication.authors.join(", ")} • {publication.year}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground mb-3">
                                                        {publication.journal || publication.conference}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        {publication.tags.slice(0, 3).map((tag, tagIndex) => (
                                                            <Badge key={tagIndex} variant="outline" className="text-xs">
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                    <div className="flex gap-2">
                                                        {publication.pdfUrl && (
                                                            <Button variant="ghost" size="sm">
                                                                <Download className="h-4 w-4" />
                                                            </Button>
                                                        )}
                                                        <Button variant="ghost" size="sm">
                                                            <ExternalLink className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </div>
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
                    <Button variant="outline" size="lg">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View All on Google Scholar
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
