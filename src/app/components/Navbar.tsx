'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'About', href: '/about' },
  { name: 'People', href: '/people' },
  { name: 'Brands', href: '/brands' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-blue-900 shadow-lg' : 'bg-blue-900 shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-start items-center ${
          scrolled ? 'h-20 sm:h-24' : 'h-24 sm:h-32'
        } transition-all duration-300`}>
          <div className="flex-shrink-0 mr-8">
            <Link href="/" className="flex-shrink-0">
              <div className={`relative ${
                scrolled 
                  ? 'w-[200px] sm:w-[280px] md:w-[350px] h-[60px] sm:h-[80px]' 
                  : 'w-[240px] sm:w-[320px] md:w-[400px] h-[70px] sm:h-[90px]'
              } transition-all duration-300`}>
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
          
          {/* Desktop menu - visible from lg and above */}
          <div className="hidden lg:flex items-center">
            <div className="flex space-x-6 xl:space-x-8">
              {navigation.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="text-gray-300 hover:text-white px-2 py-2 text-base xl:text-lg font-medium border-b-2 border-transparent hover:border-white transition-all whitespace-nowrap"
                >
                  {item.name === 'About' ? 'About Us' : item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button - visible below lg */}
          <div className="lg:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
              aria-expanded={isOpen}
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

      {/* Mobile menu - visible below lg */}
      {isOpen && (
        <div className="lg:hidden bg-blue-900 border-t border-blue-800 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navigation.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="text-gray-300 hover:text-white hover:bg-blue-800 block px-3 py-3 text-base font-medium rounded-md transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.name === 'About' ? 'About Us' : item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 