'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'About', href: '/about' },
  { name: 'People', href: '/people' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-32">
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex-shrink-0">
              <div className="relative w-[500px] h-[100px]">
                <Image
                  src="/images/logo2.png"
                  alt="Hill Distribution Group Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center justify-end flex-1">
            <div className="flex space-x-12 mr-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-xl font-medium border-b-2 border-transparent hover:border-blue-600 transition-all whitespace-nowrap"
              >
                Home
              </Link>
              <Link 
                href="/solutions" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-xl font-medium border-b-2 border-transparent hover:border-blue-600 transition-all whitespace-nowrap"
              >
                Solutions
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-xl font-medium border-b-2 border-transparent hover:border-blue-600 transition-all whitespace-nowrap"
              >
                About&nbsp;Us
              </Link>
              <Link 
                href="/people" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-xl font-medium border-b-2 border-transparent hover:border-blue-600 transition-all whitespace-nowrap"
              >
                People
              </Link>
              <Link 
                href="/careers" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-xl font-medium border-b-2 border-transparent hover:border-blue-600 transition-all whitespace-nowrap"
              >
                Careers
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-xl font-medium border-b-2 border-transparent hover:border-blue-600 transition-all whitespace-nowrap"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Home
            </Link>
            <Link href="/solutions" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Solutions
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              About Us
            </Link>
            <Link href="/people" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              People
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Careers
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 