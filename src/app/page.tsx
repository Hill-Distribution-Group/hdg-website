import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Design */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/bg.jpg"
            alt="HDG Background"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400 rounded-full opacity-10 animate-pulse delay-700"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                Hill Distribution Group
              </h1>
              <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-blue-100 mb-8">
                Your Trusted Partner in Global Distribution Excellence
              </p>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto text-white/90 mb-10">
                Leveraging 32 years of expertise to transform your distribution strategy with cutting-edge technology and unmatched reliability.
              </p>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-1">32+</div>
                <div className="text-sm text-blue-100">Years of Excellence</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-1">500K+</div>
                <div className="text-sm text-blue-100">Sq Ft Warehouse Space</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-blue-100">Client Satisfaction</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/solutions" 
                className="inline-block bg-white text-blue-900 font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Our Solutions
              </Link>
              <Link 
                href="/contact" 
                className="inline-block bg-transparent text-white font-semibold py-4 px-8 rounded-full border-2 border-white hover:bg-white hover:text-blue-900 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase Section */}
      <section className="py-16 bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We proudly partner with premium brands across diverse industries, delivering exceptional distribution services that drive growth and success
            </p>
          </div>
          
          {/* Brand Logos Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-x">
              <div className="flex items-center justify-center space-x-16 px-8">
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Flying_Goose-logo.png"
                    alt="Flying Goose"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Airwick-logo.png"
                    alt="Airwick"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/MyProtein-logo.png"
                    alt="MyProtein"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Loreal-logo.png"
                    alt="L'Oreal"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Schwarzkopf-logo.png"
                    alt="Schwarzkopf"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Samyang-logo.png"
                    alt="Samyang"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Lindt-logo.png"
                    alt="Lindt"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/A.Vogel-logo.png"
                    alt="A.Vogel"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Dettol-logo.png"
                    alt="Dettol"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Nestle-logo.png"
                    alt="Nestle"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Grenade-logo.png"
                    alt="Grenade"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Kenco-logo.png"
                    alt="Kenco"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Heinz-logo.png"
                    alt="Heinz"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {/* Duplicate for seamless scroll */}
              <div className="flex items-center justify-center space-x-16 px-8">
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Flying_Goose-logo.png"
                    alt="Flying Goose"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Airwick-logo.png"
                    alt="Airwick"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/MyProtein-logo.png"
                    alt="MyProtein"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Loreal-logo.png"
                    alt="L'Oreal"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Schwarzkopf-logo.png"
                    alt="Schwarzkopf"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Samyang-logo.png"
                    alt="Samyang"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Lindt-logo.png"
                    alt="Lindt"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/A.Vogel-logo.png"
                    alt="A.Vogel"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Dettol-logo.png"
                    alt="Dettol"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Nestle-logo.png"
                    alt="Nestle"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Grenade-logo.png"
                    alt="Grenade"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Kenco-logo.png"
                    alt="Kenco"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-40 h-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Image
                    src="/brand-logos/Heinz-logo.png"
                    alt="Heinz"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-6">Join our growing family of successful brand partners...</p>
            <Link 
              href="/brands" 
              className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Our Brand Partners
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose HDG Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Leading Brands Choose HDG
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven track record and comprehensive capabilities set us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Reliability</h3>
              <p className="text-gray-600">99.9% on-time delivery rate with real-time tracking</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Scaling</h3>
              <p className="text-gray-600">Flexible capacity to handle seasonal peaks</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Technology</h3>
              <p className="text-gray-600">AI-powered inventory and order management</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Dedicated account managers and 24/7 assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Enhanced Design */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              World-Class Distribution Infrastructure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities and experienced teams ready to handle your most demanding distribution needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative h-[350px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/modern_facilities.jpg"
                alt="HDG Modern Facilities"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Modern Facilities</h3>
                <p className="text-sm opacity-90">State-of-the-art warehousing with advanced inventory management systems</p>
                <div className="mt-4 flex items-center text-sm">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  500,000+ sq ft capacity
                </div>
              </div>
            </div>

            <div className="group relative h-[350px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/expert_team.jpg"
                alt="HDG Expert Team"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Expert Team</h3>
                <p className="text-sm opacity-90">Highly skilled warehouse staff with decades of combined experience</p>
                <div className="mt-4 flex items-center text-sm">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  200+ dedicated professionals
                </div>
              </div>
            </div>

            <div className="group relative h-[350px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <Image
                src="/images/strong_financial.jpg"
                alt="HDG Strong Financial Foundation"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Strong Financial Foundation</h3>
                <p className="text-sm opacity-90">High capital investment and strong financial backing for rapid growth</p>
                <div className="mt-4 flex items-center text-sm">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  AAA credit rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Success Stories That Drive Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our partners achieve extraordinary growth with HDG's distribution expertise
            </p>
          </div>

          {/* Statistics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">300%</div>
              <div className="text-sm text-gray-600">Average Growth Rate</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">18</div>
              <div className="text-sm text-gray-600">Months to Scale</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Retention Rate</div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Testimonial */}
            <div className="lg:col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-white">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium">5.0 out of 5</span>
              </div>
              <blockquote className="text-xl sm:text-2xl font-medium mb-6">
                "HDG transformed our distribution operations completely. Their advanced warehousing and multi-platform expertise helped us achieve 300% growth in just 18 months. The team's dedication and technology integration made all the difference."
              </blockquote>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">JD</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-lg">John Davidson</div>
                  <div className="text-blue-100">CEO, Global Retail Solutions</div>
                </div>
              </div>
            </div>

            {/* Secondary Testimonial 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 mb-6">
                "The efficiency and reliability of HDG's services allowed us to focus on what we do best - product development. Their seamless integration with major platforms boosted our online sales by 250%."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                  <div className="text-gray-600 text-sm">Founder, Premium Nutrition Co.</div>
                </div>
              </div>
            </div>

            {/* Secondary Testimonial 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 mb-6">
                "HDG's logistics expertise and warehouse capabilities are unmatched. They helped us expand into new markets while maintaining the quality and speed our customers expect."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MR</span>
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Michael Rodriguez</div>
                  <div className="text-gray-600 text-sm">Operations Director, Swift Logistics</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-50 rounded-full px-6 py-3">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Trusted by 500+ businesses worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Enhanced Design */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Your Growth Is Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With extensive warehouse facilities, experienced teams, and strong financial backing, HDG is the ideal partner for ambitious wholesalers and suppliers ready to scale.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our 32 years of industry expertise and established presence across major e-commerce platforms ensures your products reach their full market potential with unmatched efficiency.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Reach</h4>
                    <p className="text-sm text-gray-600">Access to international markets</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Full Service</h4>
                    <p className="text-sm text-gray-600">End-to-end distribution solutions</p>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/about" 
                className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative h-[400px] sm:h-[500px] order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl transform rotate-3"></div>
              <div className="relative h-full bg-white rounded-3xl shadow-xl overflow-hidden">
                <Image
                  src="/images/growth-mission.png"
                  alt="Your Growth Is Our Mission"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Design */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our network of successful partners and unlock your full distribution potential with HDG's proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-700 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Partnership
            </Link>
            <Link 
              href="/solutions" 
              className="inline-block bg-transparent text-white font-bold py-4 px-8 rounded-full border-2 border-white hover:bg-white hover:text-blue-700 transform hover:-translate-y-1 transition-all duration-300"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 