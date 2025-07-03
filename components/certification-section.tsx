"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, CheckCircle } from "lucide-react"

export function CertificationsSection() {
    const certifications = [
        {
            title: "AWS Certified Solutions Architect - Professional",
            issuer: "Amazon Web Services",
            date: "2024",
            credentialId: "AWS-PSA-2024-001",
            status: "Active",
            level: "Professional",
            description: "Advanced certification demonstrating expertise in designing distributed systems on AWS",
            skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"],
            verifyUrl: "#",
            badgeUrl: "/placeholder.svg?height=80&width=80",
            featured: true,
        },
        {
            title: "Google Cloud Professional Machine Learning Engineer",
            issuer: "Google Cloud",
            date: "2024",
            credentialId: "GCP-MLE-2024-002",
            status: "Active",
            level: "Professional",
            description: "Expertise in designing, building, and productionizing ML models using Google Cloud",
            skills: ["Machine Learning", "TensorFlow", "Google Cloud", "MLOps"],
            verifyUrl: "#",
            badgeUrl: "/placeholder.svg?height=80&width=80",
            featured: true,
        },
        {
            title: "Microsoft Azure AI Engineer Associate",
            issuer: "Microsoft",
            date: "2023",
            credentialId: "MS-AI-2023-003",
            status: "Active",
            level: "Associate",
            description: "Implementing AI solutions using Azure Cognitive Services and Machine Learning",
            skills: ["Azure AI", "Cognitive Services", "Bot Framework", "Computer Vision"],
            verifyUrl: "#",
            badgeUrl: "/placeholder.svg?height=80&width=80",
            featured: false,
        },
        {
            title: "Certified Kubernetes Administrator (CKA)",
            issuer: "Cloud Native Computing Foundation",
            date: "2023",
            credentialId: "CKA-2023-004",
            status: "Active",
            level: "Professional",
            description: "Hands-on certification for Kubernetes administration and troubleshooting",
            skills: ["Kubernetes", "Container Orchestration", "DevOps", "Cloud Native"],
            verifyUrl: "#",
            badgeUrl: "/placeholder.svg?height=80&width=80",
            featured: false,
        },
        {
            title: "MongoDB Certified Developer Associate",
            issuer: "MongoDB Inc.",
            date: "2023",
            credentialId: "MDB-DEV-2023-005",
            status: "Active",
            level: "Associate",
            description: "Proficiency in MongoDB development, data modeling, and performance optimization",
            skills: ["MongoDB", "NoSQL", "Database Design", "Performance Tuning"],
            verifyUrl: "#",
            badgeUrl: "/placeholder.svg?height=80&width=80",
            featured: false,
        },
    ]

    return (
        <section id="certifications" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Certifications & Credentials</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Professional certifications validating expertise in cloud technologies, AI/ML, and modern development
                        practices
                    </p>
                </motion.div>

                {/* Featured Certifications */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
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
                                            <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center border">
                                                <img
                                                    src={certification.badgeUrl || "/placeholder.svg"}
                                                    alt={`${certification.title} badge`}
                                                    className="w-12 h-12 object-contain"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Badge variant="default">{certification.level}</Badge>
                                                    <Badge variant="outline" className="text-green-600 border-green-600">
                                                        <CheckCircle className="w-3 h-3 mr-1" />
                                                        {certification.status}
                                                    </Badge>
                                                </div>
                                                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                                    {certification.title}
                                                </CardTitle>
                                                <CardDescription className="text-sm">
                                                    {certification.issuer} • {certification.date}
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-4">{certification.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {certification.skills.map((skill, skillIndex) => (
                                                <Badge key={skillIndex} variant="secondary" className="text-xs">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted-foreground">ID: {certification.credentialId}</span>
                                            <Button variant="outline" size="sm">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Verify
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                </div>

                {/* All Certifications */}
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
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center border flex-shrink-0">
                                                <img
                                                    src={certification.badgeUrl || "/placeholder.svg"}
                                                    alt={`${certification.title} badge`}
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                                    <h4 className="font-semibold">{certification.title}</h4>
                                                    <Badge variant="outline" className="text-green-600 border-green-600">
                                                        <CheckCircle className="w-3 h-3 mr-1" />
                                                        {certification.status}
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-2">
                                                    {certification.issuer} • {certification.date}
                                                </p>
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
        </section>
    )
}
