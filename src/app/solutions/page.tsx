import Image from 'next/image';
import { BuildingStorefrontIcon, ChartBarIcon, CogIcon, CpuChipIcon, CursorArrowRaysIcon, MegaphoneIcon, RocketLaunchIcon, ScaleIcon, ShoppingBagIcon, SparklesIcon, TruckIcon, UserGroupIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Distribution Solutions for Suppliers | HDG Distribution',
  description: 'Comprehensive distribution services for suppliers including local retail partnerships, warehousing solutions, market expansion, and supply chain management across multiple channels.',
  keywords: 'distribution services, supplier partnerships, local retail distribution, warehousing solutions, market expansion, supply chain management, logistics network, retail partnerships',
};

export default function Solutions() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Design */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/bg.jpg"
            alt="HDG Distribution Solutions Background"
            fill
            sizes="100vw"
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
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Distribution Solutions for Suppliers
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 mb-8">
              Leveraging 32 years of expertise to expand your market reach and maximize sales across all retail channels
            </p>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-1">500K+</div>
                <div className="text-sm text-blue-100">Sq Ft Warehouse</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-blue-100">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-1">32+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-blue-100">Support Available</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-block bg-white text-blue-900 font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300"
              >
                Partner with Us Today
              </Link>
              <Link 
                href="/about" 
                className="inline-block bg-transparent text-white font-semibold py-4 px-8 rounded-full border-2 border-white hover:bg-white hover:text-blue-900 transform hover:-translate-y-1 transition-all duration-300"
              >
                Learn More About HDG
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Distribution Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with HDG to expand your reach and accelerate your growth across multiple retail channels
            </p>
          </div>
          
          <div className="space-y-16">
            {/* Local Retail Partnership Solutions */}
            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                        <BuildingStorefrontIcon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">Local Retail Distribution</h2>
                        <p className="text-blue-600 font-semibold">Expand Your Market Presence</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 mb-8">
                      Connect with thousands of local retailers through our established network. We provide complete distribution services to get your products on shelves and into customers' hands nationwide.
                    </p>
                    
                    {/* Key Benefits */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Established Retailer Network</h4>
                          <p className="text-gray-600">Direct access to thousands of local shops and regional chains</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Complete Logistics Support</h4>
                          <p className="text-gray-600">From warehouse to shelf - we handle every step of the process</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Performance Analytics</h4>
                          <p className="text-gray-600">Real-time sales data and market insights to optimize performance</p>
                        </div>
                      </div>
                    </div>
                    
                    <Link href="/contact">
                      <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-8 rounded-full hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Expand Your Retail Presence
                      </button>
                    </Link>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl transform rotate-3"></div>
                    <div className="relative h-[400px] bg-white rounded-3xl shadow-2xl overflow-hidden">
                      <Image
                        src="/images/warehouse1.jpg"
                        alt="Local Retail Distribution"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Warehousing & Storage Solutions */}
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative h-[400px] bg-white rounded-3xl shadow-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl transform -rotate-3"></div>
                      <div className="relative h-full bg-white rounded-3xl shadow-xl overflow-hidden">
                        <Image
                          src="/images/warehouse2.jpg"
                          alt="Advanced Warehousing Solutions"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4">
                        <CogIcon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">Advanced Warehousing Solutions</h2>
                        <p className="text-green-600 font-semibold">Secure, Scalable Storage</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 mb-8">
                      Store your products in our state-of-the-art facilities with climate control, security systems, and flexible storage options. Our warehousing solutions scale with your business growth.
                    </p>
                    
                    {/* Key Benefits */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Climate-Controlled Storage</h4>
                          <p className="text-gray-600">Optimal conditions for all product types including temperature-sensitive items</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Advanced Security Systems</h4>
                          <p className="text-gray-600">24/7 monitoring and access control for complete peace of mind</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Flexible Storage Options</h4>
                          <p className="text-gray-600">Scalable solutions from small batches to large-scale operations</p>
                        </div>
                      </div>
                    </div>
                    
                    <Link href="/contact">
                      <button className="bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 px-8 rounded-full hover:from-green-700 hover:to-green-800 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Secure Your Storage
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Expansion Solutions */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                        <ChartBarIcon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">Market Expansion Services</h2>
                        <p className="text-purple-600 font-semibold">Accelerate Your Growth</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 mb-8">
                      Enter new markets with confidence using our proven expansion strategies. We provide market analysis, retailer introductions, and strategic guidance to maximize your success.
                    </p>
                    
                    {/* Key Benefits */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Market Research & Analysis</h4>
                          <p className="text-gray-600">Deep insights into market opportunities and consumer behavior</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Retailer Introductions</h4>
                          <p className="text-gray-600">Leverage our relationships to open doors to new retail partners</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Strategic Launch Support</h4>
                          <p className="text-gray-600">Comprehensive planning and execution for successful market entry</p>
                        </div>
                      </div>
                    </div>
                    
                    <Link href="/contact">
                      <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 px-8 rounded-full hover:from-purple-700 hover:to-purple-800 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Expand Your Markets
                      </button>
                    </Link>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl transform rotate-3"></div>
                    <div className="relative h-[400px] bg-white rounded-3xl shadow-2xl overflow-hidden">
                      <Image
                        src="/images/warehouse3.jpg"
                        alt="Market Expansion"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Import & Supply Chain Solutions */}
            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative h-[400px] bg-white rounded-3xl shadow-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl transform -rotate-3"></div>
                      <div className="relative h-full bg-white rounded-3xl shadow-xl overflow-hidden">
                        <Image
                          src="/images/warehouse-check.png"
                          alt="Import & Supply Chain"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                        <TruckIcon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">Import & Supply Chain</h2>
                        <p className="text-orange-600 font-semibold">Streamlined Global Operations</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 mb-8">
                      Simplify your international operations with our comprehensive import and supply chain services. We handle customs, compliance, and logistics so you can focus on growing your business.
                    </p>
                    
                    {/* Key Benefits */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Customs & Compliance</h4>
                          <p className="text-gray-600">Expert handling of all import documentation and regulatory requirements</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Global Logistics Network</h4>
                          <p className="text-gray-600">Efficient shipping and distribution from origin to destination</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Supply Chain Optimization</h4>
                          <p className="text-gray-600">Streamlined processes to reduce costs and improve efficiency</p>
                        </div>
                      </div>
                    </div>
                    
                    <Link href="/contact">
                      <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold py-3 px-8 rounded-full hover:from-orange-700 hover:to-red-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Streamline Your Supply Chain
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Infrastructure Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              World-Class Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities and advanced technology to support your growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative h-[450px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/advanced_warehousing.jpg"
                alt="HDG Advanced Warehousing"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-4 text-shadow">Advanced Warehousing</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-white">
                    <CheckCircleIcon className="h-6 w-6 mr-3 text-green-400" />
                    <span className="text-lg">500,000+ sq ft modern facilities</span>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircleIcon className="h-6 w-6 mr-3 text-green-400" />
                    <span className="text-lg">Advanced inventory management</span>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircleIcon className="h-6 w-6 mr-3 text-green-400" />
                    <span className="text-lg">24/7 automated order processing</span>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircleIcon className="h-6 w-6 mr-3 text-green-400" />
                    <span className="text-lg">Climate-controlled storage</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative h-[450px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/expert_operations.jpg"
                alt="HDG Expert Operations"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-4 text-shadow">Expert Operations</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-white">
                    <CheckCircleIcon className="h-6 w-6 mr-3 text-green-400" />
                    <span className="text-lg">200+ experienced professionals</span>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircleIcon className="h-6 w-6 mr-3 text-green-400" />
                    <span className="text-lg">99.9% accuracy guarantee</span>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircleIcon className="h-6 w-6 mr-3 text-green-400" />
                    <span className="text-lg">Same-day shipping capability</span>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircleIcon className="h-6 w-6 mr-3 text-green-400" />
                    <span className="text-lg">Dedicated account managers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Supplier Success Story</h2>
              <p className="text-xl text-blue-100">See how we transformed a supplier's distribution strategy</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">300%</div>
                <div className="text-lg text-blue-100">Sales Growth</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">18</div>
                <div className="text-lg text-blue-100">Months to Scale</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-lg text-blue-100">New Retail Partners</div>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-xl italic mb-6">
                "HDG completely transformed our distribution operations. Their extensive retailer network and warehousing expertise helped us achieve incredible growth. The team's dedication and strategic approach made all the difference."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold">JD</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg">John Davidson</div>
                  <div className="text-blue-100">CEO, Global Manufacturing Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Scale Your Distribution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of successful suppliers leveraging our expertise to dominate retail channels and achieve unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-700 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Partnership
            </Link>
            <Link 
              href="/about" 
              className="inline-block bg-transparent text-white font-bold py-4 px-8 rounded-full border-2 border-white hover:bg-white hover:text-blue-700 transform hover:-translate-y-1 transition-all duration-300"
            >
              Learn About HDG
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 