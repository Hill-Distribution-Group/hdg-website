import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hill Distribution Group',
  description: 'Official website for Hill Distribution Group',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo2.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logo2.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo2.png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">HDG Distribution</h3>
                <p className="text-gray-300">Revolutionising the Flow with Decades of Expertise and Innovation</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
                  <li><Link href="/solutions" className="text-gray-300 hover:text-white">Solutions</Link></li>
                  <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@hilldistributiongroup.co.uk" className="hover:text-white transition-colors">
                      info@hilldistributiongroup.co.uk
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>020 3633 0115</span>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <svg className="h-5 w-5 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p>Unit 4</p>
                      <p>Spitfireway</p>
                      <p>Hounslow</p>
                      <p>TW5 9NR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
              <p>&copy; {new Date().getFullYear()} HDG Distribution. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 