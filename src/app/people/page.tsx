'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BuildingStorefrontIcon, ChartBarIcon, FilmIcon, MegaphoneIcon, PresentationChartLineIcon, ShoppingCartIcon, SparklesIcon, TagIcon, TruckIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/outline';

// Team member type definition
type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedinUrl: string;
  expertise: string[];
};

// Team members data
const teamMembers: TeamMember[] = [
  {
    name: "Thomas Bamford-Murphy",
    role: "Chief Financial Officer & Co-Founder",
    bio: "Thomas leads HDG's financial strategy and trading operations. His expertise in pricing strategies and market analysis drives the company's financial growth and helps optimize our trading performance across multiple platforms.",
    imageUrl: "/images/team/tom.jpg",
    linkedinUrl: "https://www.linkedin.com/in/thomas-bamford-murphy-34015526/",
    expertise: ["Financial Strategy", "Market Analysis", "Trading Operations"]
  },
  {
    name: "Daman Sandhu",
    role: "Chief Operating Officer & Co-Founder",
    bio: "Daman oversees HDG's warehouse operations and supplier relationships. His expertise in supply chain management and vendor negotiations ensures smooth operations and strong partnerships with our growing network of suppliers.",
    imageUrl: "/images/team/daman.jpg",
    linkedinUrl: "https://www.linkedin.com/in/daman-sandhu-8a010b122/",
    expertise: ["Supply Chain", "Vendor Relations", "Operations"]
  },
  {
    name: "Mert Atanmis",
    role: "Head of Technology & Business Strategy",
    bio: "Mert bridges the gap between technology and business strategy at HDG. His expertise in technical analysis and business processes helps optimize our operations and drive innovation.",
    imageUrl: "/images/team/mert.jpg",
    linkedinUrl: "https://www.linkedin.com/in/mertatanmis/",
    expertise: ["Technology", "Business Strategy", "Innovation"]
  },
  {
    name: "Damandeep",
    role: "Head of Warehouse Operations",
    bio: "Damandeep manages the day-to-day operations of our warehouse facility, ensuring efficient inventory management and smooth logistics processes. Her hands-on approach and attention to detail help maintain our high standards of operation.",
    imageUrl: "/images/team/damandeep.jpg",
    linkedinUrl: "#",
    expertise: ["Warehouse Management", "Logistics", "Inventory Control"]
  },
  {
    name: "Ben Capper",
    role: "Senior Buyer",
    bio: "Ben is responsible for sourcing and purchasing inventory. His analytical skills and market knowledge help optimize our procurement strategies.",
    imageUrl: "/images/team/ben.JPG",
    linkedinUrl: "https://www.linkedin.com/in/ben-capper-a7725a134/",
    expertise: ["Procurement", "Market Research", "Inventory Planning"]
  },
  {
    name: "Ash Suven",
    role: "Senior Buyer",
    bio: "Ash focuses on identifying new product opportunities and negotiating with suppliers. His strategic approach contributes to expanding our product range.",
    imageUrl: "/images/team/ash.JPG",
    linkedinUrl: "https://www.linkedin.com/in/ashwinsuvendran/",
    expertise: ["Product Sourcing", "Negotiation", "Market Expansion"]
  },
];

export default function People() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Design */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-24 overflow-hidden">
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
              Meet Our Leadership Team
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 mb-8">
              Experienced professionals driving innovation and excellence in global distribution
            </p>
            
            {/* Team Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-sm text-blue-100">Years Combined Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white mb-1">6</div>
                <div className="text-sm text-blue-100">Industry Experts</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white mb-1">3</div>
                <div className="text-sm text-blue-100">Core Specializations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At HDG Distribution, we're more than just colleagues – we're a unified team committed to excellence, innovation, and mutual growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">Working together to achieve shared goals</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Constantly seeking better solutions</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600 text-sm">Personal and professional development</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PresentationChartLineIcon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">Delivering the best in everything we do</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section with Enhanced Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our senior leadership brings decades of industry expertise to drive HDG's vision forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {member.bio}
                  </p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group/link"
                  >
                    <svg 
                      className="h-5 w-5 mr-2 group-hover/link:scale-110 transition-transform" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    Connect on LinkedIn
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Broader Team Acknowledgment */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Powered by Our Entire Team
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              While our leadership provides direction, HDG's success is driven by the dedication and expertise of our entire 200+ member team across warehouse operations, customer service, technology, and administration.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <TruckIcon className="w-10 h-10 text-white mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-blue-100">Warehouse Staff</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <UsersIcon className="w-10 h-10 text-white mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">30+</div>
                <div className="text-sm text-blue-100">Customer Service</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <ShoppingCartIcon className="w-10 h-10 text-white mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">25+</div>
                <div className="text-sm text-blue-100">Sales & Buying</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <BuildingStorefrontIcon className="w-10 h-10 text-white mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">95+</div>
                <div className="text-sm text-blue-100">Support Staff</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for excellence in distribution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/careers" 
              className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              View Open Positions
            </Link>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-full border-2 border-blue-600 hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 