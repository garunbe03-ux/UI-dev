import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import GoogleAnalytics from "@/components/google-analytics"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Triangulate - Environmental, Social Accountability & Governance",
  description:
    "Triangulate (Worldwide) Limited - Independent audit firm operating in Environmental, Social Accountability & Governance fields",
  keywords: [
    "audit firm",
    "social accountability",
    "environmental compliance",
    "governance",
    "SA8000",
    "SA8000:2025",
    "responsible business",
    "sustainability audit",
    "corporate social responsibility",
    "CSR",
    "ESG",
    "environmental social governance",
    "business ethics",
    "supply chain audit",
    "workplace standards",
    "labor rights",
    "environmental management",
    "sustainable business practices",
    "compliance audit",
    "social audit",
    "triangulate worldwide",
    "independent audit",
    "certification",
    "responsible sourcing",
    "ethical business",
  ].join(", "),
  robots: "index, follow",
  author: "Triangulate (Worldwide) Limited",
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <GoogleAnalytics />
          {children}
        </Suspense>
      </body>
    </html>
  )
}
