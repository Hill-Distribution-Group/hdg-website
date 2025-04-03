import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/bg.jpg"
            alt="HDG Background"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About HDG Distribution
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              A legacy of excellence in distribution, built on 32 years of industry expertise and strong partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-xl text-gray-600 mb-6">
                Founded in 2023, HDG Distribution has quickly established itself as a trusted partner for wholesalers and suppliers looking to expand their market reach through major e-commerce platforms.
              </p>
              <p className="text-xl text-gray-600">
                Our extensive warehouse facilities and experienced team enable us to provide comprehensive distribution solutions that drive growth and success for our partners.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/warehouse1.jpg"
                alt="HDG Warehouse"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in our warehouse operations and distribution services, ensuring optimal results for our partners.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Partnership</h3>
              <p className="text-gray-600">
                We build strong, lasting relationships with our partners, working together to achieve mutual growth and success.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our operations and services to provide the best possible distribution solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team brings decades of combined experience in distribution operations and sales strategy development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Distribution Operations</h3>
              <p className="text-gray-600">
                Our warehouse team excels in inventory management, order fulfillment, and quality control, ensuring efficient and reliable distribution services.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sales Strategy</h3>
              <p className="text-gray-600">
                We leverage our deep understanding of e-commerce platforms to maximize sales potential and market reach for our partners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 