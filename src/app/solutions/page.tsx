import Image from 'next/image';
import { BuildingStorefrontIcon, ChartBarIcon, CogIcon, CpuChipIcon, CursorArrowRaysIcon, MegaphoneIcon, RocketLaunchIcon, ScaleIcon, ShoppingBagIcon, SparklesIcon, TruckIcon, UserGroupIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Multi-Platform Distribution Solutions | HDG Distribution',
  description: 'Comprehensive import and distribution solutions including local retail partnerships, TikTok Shop integration, eBay marketplace optimization, and international supply chain management.',
  keywords: 'distribution solutions, import services, local retail, TikTok Shop, eBay marketplace, supply chain management, logistics network, international shipping',
};

export default function Solutions() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/bg.jpg"
            alt="HDG Distribution Solutions Background"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Global Import & Multi-Platform Distribution Solutions
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Leveraging our extensive warehousing capabilities, international sourcing expertise, and 32 years of distribution experience to maximize your market reach
            </p>
          </div>
        </div>
      </section>

      {/* Platform Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {/* Local Shops Solution */}
            <div className="bg-white p-8 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <BuildingStorefrontIcon className="h-16 w-16 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold">Local Retail Partnership Solutions</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Expand your reach into local communities through our network of retail partners. We provide the logistical support and relationships needed to get your products onto local store shelves.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">Retailer Network Access</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <UserGroupIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Connections with local shops
                    </li>
                    <li className="flex items-start">
                      <MegaphoneIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Negotiation support
                    </li>
                    <li className="flex items-start">
                      <CursorArrowRaysIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Placement strategies
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">Localized Distribution</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <TruckIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Targeted local delivery
                    </li>
                    <li className="flex items-start">
                      <CogIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      In-store inventory management
                    </li>
                    <li className="flex items-start">
                      <WrenchScrewdriverIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Replenishment coordination
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">Retail Support</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <ShoppingBagIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Merchandising assistance
                    </li>
                    <li className="flex items-start">
                      <MegaphoneIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Promotional material distribution
                    </li>
                    <li className="flex items-start">
                      <ChartBarIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Sales data reporting
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <Link href="/contact">
                  <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Partner with Local Retailers
                  </button>
                </Link>
              </div>
            </div>

            {/* TikTok Solution */}
            <div className="bg-white p-8 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="relative w-48 h-16">
                  <Image
                    src="/images/tiktoklogo.png"
                    alt="TikTok Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">AI-Enhanced TikTok Shop Solutions</h2>
              <p className="text-gray-600 mb-6">
                Harness the power of AI to dominate the fastest-growing social commerce platform. Our machine learning algorithms analyze trends, optimize content strategy, and automate engagement for viral success.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">AI Content Strategy</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <SparklesIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      AI-driven trend analysis
                    </li>
                    <li className="flex items-start">
                      <MegaphoneIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Optimized content creation
                    </li>
                    <li className="flex items-start">
                      <UserGroupIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Influencer partnerships
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">Smart Shop Management</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <ShoppingBagIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Intelligent product listings
                    </li>
                    <li className="flex items-start">
                      <CogIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Automated inventory sync
                    </li>
                    <li className="flex items-start">
                      <TruckIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Efficient order fulfillment
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">AI Growth Strategy</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <ChartBarIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Performance tracking
                    </li>
                    <li className="flex items-start">
                      <CpuChipIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Audience insights analysis
                    </li>
                    <li className="flex items-start">
                      <RocketLaunchIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      AI campaign optimization
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <Link href="/contact">
                  <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Optimize Your TikTok Shop
                  </button>
                </Link>
              </div>
            </div>

            {/* eBay Solution */}
            <div className="bg-white p-8 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="relative w-48 h-16">
                  <Image
                    src="/images/ebaylogo.png"
                    alt="eBay Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">Intelligent eBay Marketplace Solutions</h2>
              <p className="text-gray-600 mb-6">
                Transform your eBay presence with AI-powered optimization. Our smart algorithms continuously analyze market data, adjust pricing strategies, and optimize listings for maximum visibility and sales.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">AI Listing Management</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <SparklesIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      AI-optimized titles
                    </li>
                    <li className="flex items-start">
                      <CursorArrowRaysIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Professional imaging
                    </li>
                    <li className="flex items-start">
                      <ScaleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Dynamic competitive pricing
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">Smart Store Optimization</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <BuildingStorefrontIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Optimized store design
                    </li>
                    <li className="flex items-start">
                      <CogIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Intelligent category management
                    </li>
                    <li className="flex items-start">
                      <MegaphoneIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Automated promotion setup
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">AI Performance Tracking</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <ChartBarIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Advanced sales analytics
                    </li>
                    <li className="flex items-start">
                      <CpuChipIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      AI-driven market insights
                    </li>
                    <li className="flex items-start">
                      <ScaleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Competitor analysis & response
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <Link href="/contact">
                  <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Boost Your eBay Sales
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Import & Distribution Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <TruckIcon className="h-16 w-16 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold">Import & Distribution Solutions</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Streamline your product importation and distribution with our comprehensive logistics network. We handle everything from international shipping to local supplier delivery, ensuring your products reach the right markets efficiently.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">Import Management</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <ShoppingBagIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      International sourcing
                    </li>
                    <li className="flex items-start">
                      <ScaleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Customs clearance
                    </li>
                    <li className="flex items-start">
                      <CogIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Quality control
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">Distribution Network</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <TruckIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Nationwide coverage
                    </li>
                    <li className="flex items-start">
                      <BuildingStorefrontIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Local supplier partnerships
                    </li>
                    <li className="flex items-start">
                      <ChartBarIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Route optimization
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">Supply Chain Management</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CpuChipIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Real-time tracking
                    </li>
                    <li className="flex items-start">
                      <WrenchScrewdriverIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Inventory forecasting
                    </li>
                    <li className="flex items-start">
                      <SparklesIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Demand planning
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <Link href="/contact">
                  <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Start Importing & Distributing
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Distribution Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities and experienced team to support your growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/advanced_warehousing.jpg"
                alt="HDG Advanced Warehousing"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-4 [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">Advanced Warehousing</h3>
                <ul className="text-white space-y-2 [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 mr-2" />
                    Large-scale storage facilities
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 mr-2" />
                    Modern inventory systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 mr-2" />
                    Efficient order fulfillment
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/expert_operations.jpg"
                alt="HDG Expert Operations"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-4 [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">Expert Operations</h3>
                <ul className="text-white space-y-2 [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 mr-2" />
                    Experienced warehouse staff
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 mr-2" />
                    Quality control processes
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 mr-2" />
                    Fast shipping capabilities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 