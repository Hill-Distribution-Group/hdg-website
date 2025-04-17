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
};

// Team members data
const teamMembers: TeamMember[] = [
  {
    name: "Thomas Bamford-Murphy",
    role: "Chief Financial Officer & Co-Founder",
    bio: "Thomas leads HDG's financial strategy and trading operations. His expertise in pricing strategies and market analysis drives the company's financial growth and helps optimize our trading performance across multiple platforms.",
    imageUrl: "/images/team/tom.jpg",
    linkedinUrl: "https://www.linkedin.com/in/thomas-bamford-murphy-34015526/",
  },
  {
    name: "Daman Sandhu",
    role: "Chief Operating Officer & Co-Founder",
    bio: "Daman oversees HDG's warehouse operations and supplier relationships. His expertise in supply chain management and vendor negotiations ensures smooth operations and strong partnerships with our growing network of suppliers.",
    imageUrl: "/images/team/daman.jpg",
    linkedinUrl: "https://www.linkedin.com/in/daman-sandhu-8a010b122/",
  },
  {
    name: "Mert Atanmis",
    role: "Head of Technology & Business Strategy",
    bio: "Mert bridges the gap between technology and business strategy at HDG. His expertise in technical analysis and business processes helps optimize our operations and drive innovation.",
    imageUrl: "/images/team/mert.jpg",
    linkedinUrl: "https://www.linkedin.com/in/mertatanmis/",
  },
  {
    name: "Damandeep",
    role: "Head of Warehouse Operations",
    bio: "Damandeep manages the day-to-day operations of our warehouse facility, ensuring efficient inventory management and smooth logistics processes. Her hands-on approach and attention to detail help maintain our high standards of operation.",
    imageUrl: "/images/team/damandeep.jpg",
    linkedinUrl: "#", // Add Daman Deep's LinkedIn URL when available
  },
  {
    name: "Ben Capper",
    role: "Senior Buyer",
    bio: "Ben is responsible for sourcing and purchasing inventory. His analytical skills and market knowledge help optimize our procurement strategies.",
    imageUrl: "/images/team/ben.JPG", // Updated to use Ben's photo
    linkedinUrl: "https://www.linkedin.com/in/ben-capper-a7725a134/", // Updated LinkedIn URL
  },
  {
    name: "Ash Suven",
    role: "Senior Buyer",
    bio: "Ash focuses on identifying new product opportunities and negotiating with suppliers. His strategic approach contributes to expanding our product range.",
    imageUrl: "/images/team/ash.JPG", // Updated to use Ash's photo
    linkedinUrl: "https://www.linkedin.com/in/ashwinsuvendran/", // Updated LinkedIn URL
  },
];

export default function People() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 py-20">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Key Senior Leadership Team
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-white">
              Meet the passionate individuals leading HDG Distribution, dedicated to revolutionizing the distribution landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Added text to acknowledge the broader team - Moved higher */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              While this page highlights our Key Senior Leadership Team, HDG Distribution thrives thanks to the dedication and hard work of our entire talented team across all departments.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                <div className="relative h-80 w-full">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600">
                      {member.bio}
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link 
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <svg 
                        className="h-5 w-5 mr-2" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      Connect on LinkedIn
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 