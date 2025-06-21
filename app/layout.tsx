import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pragyanand Sahoo - Full Stack Developer & AI/ML Enthusiast",
  description:
    "Portfolio of Pragyanand Sahoo, a passionate full stack developer and AI/ML enthusiast creating innovative digital solutions.",
  keywords: "full stack developer, AI, ML, machine learning, web development, portfolio, Pragyanand Sahoo",
  authors: [{ name: "Pragyanand Sahoo" }],
  openGraph: {
    title: "Pragyanand Sahoo - Full Stack Developer & AI/ML Enthusiast",
    description: "Portfolio showcasing innovative projects in full stack development and AI/ML",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
