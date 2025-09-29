"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { trackNavigation, trackCourseInterest, trackSocialClick } from "@/lib/analytics"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleNavClick = (page: string) => {
    trackNavigation(page)
  }

  const handleCourseClick = () => {
    trackCourseInterest("SA8000:2025 Requirements Course")
  }

  const handleSocialClick = (platform: string) => {
    trackSocialClick(platform)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source
          src="https://www.responsiblejewellery.com/wp-content/uploads/GettyImages-2106124711.mp4"
          type="video/mp4"
        />
      </video>

      <header className="absolute top-0 left-0 right-0 z-30 bg-black/90 backdrop-blur-sm">
        <div className="flex justify-between items-center px-4 md:px-8 h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="https://cdn.prod.website-files.com/666ff324027ce26e1993ba2c/666ff324027ce26e1993ba68_Triangulate_Logo_Horizontal_02_RGB.svg"
              alt="Triangulate Logo"
              width={150}
              height={45}
              className="bg-white p-1 rounded w-24 h-auto md:w-32 lg:w-40"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              href="https://www.triangulate-worldwide.com/environmental"
              className="px-3 py-2 text-sm text-gray-200 hover:bg-slate-600 hover:underline transition-colors rounded"
              onClick={() => handleNavClick("Environmental")}
            >
              Environmental
            </Link>
            <Link
              href="#"
              className="px-3 py-2 text-sm text-gray-200 hover:bg-slate-600 hover:underline transition-colors rounded"
              onClick={() => handleNavClick("Social Accountability")}
            >
              Social Accountability
            </Link>
            <Link
              href="#"
              className="px-3 py-2 text-sm text-gray-200 hover:bg-slate-600 hover:underline transition-colors rounded"
              onClick={() => handleNavClick("Governance")}
            >
              Governance
            </Link>
            <Link
              href="#"
              className="px-3 py-2 text-sm text-gray-200 hover:bg-slate-600 hover:underline transition-colors rounded"
              onClick={() => handleNavClick("About")}
            >
              About
            </Link>
            <Link
              href="#"
              className="px-3 py-2 text-sm text-gray-200 hover:bg-slate-600 hover:underline transition-colors rounded"
              onClick={() => handleNavClick("Credentials")}
            >
              Credentials
            </Link>
            <Link
              href="#"
              className="px-3 py-2 text-sm text-gray-200 hover:bg-slate-600 hover:underline transition-colors rounded"
              onClick={() => handleNavClick("Policies")}
            >
              Policies
            </Link>
            <Link
              href="#"
              className="px-3 py-2 text-sm text-gray-200 hover:bg-slate-600 hover:underline transition-colors rounded"
              onClick={() => handleNavClick("News")}
            >
              News
            </Link>
            <Link
              href="#"
              className="px-3 py-2 text-sm text-gray-200 hover:bg-slate-600 hover:underline transition-colors rounded"
              onClick={() => handleNavClick("Blog")}
            >
              Blog
            </Link>
          </nav>

          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 text-white hover:bg-gray-700 rounded"
              aria-label="Toggle sidebar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:bg-gray-700 rounded"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zM12 13a1 1 0 110-2 1 1 0 010 2zM12 20a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-gray-700">
            <div className="px-4 py-2 space-y-1">
              <Link
                href="https://www.triangulate-worldwide.com/environmental"
                className="block px-3 py-3 text-gray-200 hover:bg-gray-700 rounded text-base"
                onClick={() => handleNavClick("Environmental")}
              >
                Environmental
              </Link>
              <Link
                href="#"
                className="block px-3 py-3 text-gray-200 hover:bg-gray-700 rounded text-base"
                onClick={() => handleNavClick("Social Accountability")}
              >
                Social Accountability
              </Link>
              <Link
                href="#"
                className="block px-3 py-3 text-gray-200 hover:bg-gray-700 rounded text-base"
                onClick={() => handleNavClick("Governance")}
              >
                Governance
              </Link>
              <Link
                href="#"
                className="block px-3 py-3 text-gray-200 hover:bg-gray-700 rounded text-base"
                onClick={() => handleNavClick("About")}
              >
                About
              </Link>
              <Link
                href="#"
                className="block px-3 py-3 text-gray-200 hover:bg-gray-700 rounded text-base"
                onClick={() => handleNavClick("Credentials")}
              >
                Credentials
              </Link>
              <Link
                href="#"
                className="block px-3 py-3 text-gray-200 hover:bg-gray-700 rounded text-base"
                onClick={() => handleNavClick("Policies")}
              >
                Policies
              </Link>
              <Link
                href="#"
                className="block px-3 py-3 text-gray-200 hover:bg-gray-700 rounded text-base"
                onClick={() => handleNavClick("News")}
              >
                News
              </Link>
              <Link
                href="#"
                className="block px-3 py-3 text-gray-200 hover:bg-gray-700 rounded text-base"
                onClick={() => handleNavClick("Blog")}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </header>

      <aside
        className={`fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-gray-900/95 backdrop-blur-sm transform transition-transform duration-300 z-20 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0 lg:w-52`}
      >
        <div className="p-4">
          <h3 className="text-white font-semibold mb-4 text-lg lg:hidden">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link
                href="#"
                className="block px-3 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded text-base"
                onClick={() => handleNavClick("Course Library")}
              >
                Course Library
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-3 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded text-base"
                onClick={() => handleNavClick("Course Schedule")}
              >
                Course Schedule
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-3 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded text-base"
                onClick={() => handleNavClick("Contacts")}
              >
                Contacts
              </Link>
            </li>
            <li>
              <button
                className="block w-full text-left px-3 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded text-base"
                onClick={() => handleSocialClick("Email")}
              >
                <i className="fas fa-envelope mr-2"></i>
                Email
              </button>
            </li>
            <li>
              <button
                className="block w-full text-left px-3 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded text-base"
                onClick={() => handleSocialClick("Facebook")}
              >
                <i className="fab fa-facebook-f mr-2"></i>
                Facebook
              </button>
            </li>
            <li>
              <button
                className="block w-full text-left px-3 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded text-base"
                onClick={() => handleSocialClick("X")}
              >
                X
              </button>
            </li>
            <li>
              <button
                className="block w-full text-left px-3 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded text-base"
                onClick={() => handleSocialClick("LinkedIn")}
              >
                <i className="fab fa-linkedin-in mr-2"></i>
                LinkedIn
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-10 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      <main className="relative z-10 min-h-screen flex items-end pb-4 px-4 lg:pb-8 lg:px-8">
        <div className="w-full max-w-2xl">
          <div className="bg-white/95 backdrop-blur-sm text-black p-4 md:p-6 rounded-lg shadow-xl">
            <div className="space-y-4">
              <h1 className="text-lg md:text-xl font-bold text-gray-900">Triangulate (Worldwide) Limited</h1>

              <div className="text-sm md:text-base leading-relaxed space-y-3">
                <p>
                  Triangulate (Worldwide) Limited is incorporated within the United Kingdom as an Audit Firm operating
                  Independently, Impartially and with Integrity within the Fields of the Environment, Social
                  Accountability & Governance.
                </p>

                <p>
                  Triangulate is your reliable partner for Second & Third Party Audits. Allow us to assist with
                  improving the Compliance Performance within your Supply Chain.
                </p>

                <p>
                  Triangulate Senior Management all have comprehensive experience in over 75 countries across all 5
                  Continents over the past 30 years.
                </p>

                <div className="border-t pt-4">
                  <h2 className="font-semibold text-base md:text-lg mb-2">SA8000:2025 Requirements of the Standard</h2>
                  <p className="mb-4">
                    Triangulate shall offer a 2 Day On-Line, Live and Tutor Led Course, covering the History,
                    Principles, Fundamental and Requirements of the SA8000:2025 Social Accountability Standard.
                  </p>

                  <Link
                    href="https://www.triangulate-worldwide.com/courses/sa8000-2025-requirements-course"
                    target="_blank"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-base"
                    onClick={handleCourseClick}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
