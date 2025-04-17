import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/bg.jpg"
            alt="HDG Background"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Hill Distribution Group
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto text-white">
              Transforming distribution with innovative technology and decades of expertise.
            </p>
            <div className="mt-8 sm:mt-10">
              <Link 
                href="/people" 
                className="inline-block bg-white text-blue-900 font-medium py-3 px-6 rounded-md shadow hover:bg-gray-100 transition-colors mobile-touch-target"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Large-Scale Distribution Operations
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Extensive warehousing facilities and experienced operations team ready to handle your distribution needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            <div className="relative h-[250px] sm:h-[280px] md:h-[300px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/modern_facilities.jpg"
                alt="HDG Modern Facilities"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Modern Facilities</h3>
                <p className="text-sm sm:text-base">State-of-the-art warehousing with advanced inventory management systems</p>
              </div>
            </div>

            <div className="relative h-[250px] sm:h-[280px] md:h-[300px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/expert_team.jpg"
                alt="HDG Expert Team"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Expert Team</h3>
                <p className="text-sm sm:text-base">Highly skilled warehouse staff with decades of combined experience</p>
              </div>
            </div>

            <div className="relative h-[250px] sm:h-[280px] md:h-[300px] rounded-lg overflow-hidden shadow-md sm:col-span-2 md:col-span-1">
              <Image
                src="/images/strong_financial.jpg"
                alt="HDG Strong Financial Foundation"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Strong Financial Foundation</h3>
                <p className="text-sm sm:text-base">High capital investment and strong financial backing to support rapid growth and expansion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Partner With HDG Distribution
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6">
                With our extensive warehouse facilities, experienced team, and strong financial position, we&apos;re the ideal partner for wholesalers and suppliers looking to expand their market reach.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">
                Our 32 years of industry expertise and established presence across major e-commerce platforms ensures your products reach their full market potential.
              </p>
            </div>
            <div className="relative h-[200px] sm:h-[300px] md:h-[400px] order-1 md:order-2 mb-6 md:mb-0">
              <Image
                src="/images/logo2.png"
                alt="HDG Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Grow Your Business With Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join our network of successful wholesalers and suppliers. Let&apos;s expand your market reach together.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-700 font-bold py-3 px-6 sm:px-8 rounded-full hover:bg-gray-100 transition duration-300 mobile-touch-target">
            Partner With Us Today
          </Link>
        </div>
      </section>
    </div>
  )
} 