import Image from 'next/image';
import Link from 'next/link';
import { brandCategories } from '../data/brands';

const BrandsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/bg.jpg"
            alt="HDG Background"
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
              Our Brand Partners
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 mb-8">
              Trusted by Leading Brands Across Multiple Industries
            </p>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto text-white/90 mb-10">
              We're proud to distribute for some of the world's most recognized brands, delivering excellence across diverse product categories.
            </p>
            
            {/* Brand Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-blue-100">Brand Partners</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white mb-1">9</div>
                <div className="text-sm text-blue-100">Product Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white mb-1">32+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Categories Section - Unified Tree Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete Brand Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of brand partnerships organized by product categories
            </p>
          </div>
          
          {/* Main Tree Structure */}
          <div className="relative">
            {/* Main vertical trunk */}
            <div className="absolute left-8 top-0 w-1 bg-gray-300 h-full"></div>
            
            <div className="space-y-12">
              {brandCategories.map((category, categoryIndex) => (
                <div key={category.title} className="relative">
                  {/* Category Branch */}
                  <div className="flex items-center mb-8">
                    <div className="w-8 h-1 bg-gray-300"></div>
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-6">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-700 tracking-wide">{category.title}</h3>
                  </div>
                  
                  <div className="ml-14">
                    {/* Main category brands (if any) */}
                    {category.brands.length > 0 && (
                      <div className="mb-8 relative">
                        <div className="absolute left-0 top-0 w-0.5 h-full bg-gray-200"></div>
                        
                        <div className="ml-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                          {category.brands.map((brand) => (
                            <div key={brand.name} className="group relative">
                              {/* Branch line to brand */}
                              <div className="absolute left-0 top-16 w-4 h-0.5 bg-gray-200 -translate-x-4"></div>
                              
                              <div className="bg-gray-50 hover:bg-blue-50 rounded-lg p-4 text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md border-2 border-transparent hover:border-blue-200 h-32 flex flex-col items-center justify-center">
                                {brand.logo ? (
                                  <div className="flex-1 flex items-center justify-center mb-2">
                                    <Image
                                      src={brand.logo}
                                      alt={brand.name}
                                      width={80}
                                      height={40}
                                      className="object-contain max-h-12"
                                    />
                                  </div>
                                ) : null}
                                <p className="font-medium text-sm text-gray-900 group-hover:text-blue-700 transition-colors text-center">
                                  {brand.name}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Subcategories */}
                    {category.subCategories?.map((subCategory, subIndex) => (
                      <div key={subCategory.title} className="mb-8 last:mb-0 relative">
                        {/* Vertical line continuing from category */}
                        <div className="absolute left-0 top-0 w-0.5 h-full bg-gray-200"></div>
                        
                        {/* Subcategory Branch */}
                        <div className="flex items-center mb-6">
                          <div className="w-8 h-0.5 bg-gray-200 mr-4"></div>
                          <div className="w-4 h-4 bg-blue-500 rounded-full mr-4"></div>
                          <h4 className="text-lg font-light text-gray-600 tracking-wider italic">{subCategory.title}</h4>
                        </div>
                        
                        {/* Brands in subcategory */}
                        <div className="ml-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                          {subCategory.brands.map((brand) => (
                            <div key={brand.name} className="group relative">
                              {/* Branch line to brand */}
                              <div className="absolute left-0 top-16 w-4 h-0.5 bg-gray-200 -translate-x-4"></div>
                              
                              <div className="bg-gray-50 hover:bg-blue-50 rounded-lg p-4 text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md border-2 border-transparent hover:border-blue-200 h-32 flex flex-col items-center justify-center">
                                {brand.logo ? (
                                  <div className="flex-1 flex items-center justify-center mb-2">
                                    <Image
                                      src={brand.logo}
                                      alt={brand.name}
                                      width={80}
                                      height={40}
                                      className="object-contain max-h-12"
                                    />
                                  </div>
                                ) : null}
                                <p className="font-medium text-sm text-gray-900 group-hover:text-blue-700 transition-colors text-center">
                                  {brand.name}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Join Our Brand Family?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with HDG and leverage our proven distribution network to grow your brand across multiple platforms and markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-700 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300"
            >
              Become a Partner
            </Link>
            <Link 
              href="/solutions" 
              className="inline-block bg-transparent text-white font-bold py-4 px-8 rounded-full border-2 border-white hover:bg-white hover:text-blue-700 transform hover:-translate-y-1 transition-all duration-300"
            >
              Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandsPage; 