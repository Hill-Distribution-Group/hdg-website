import { JobPosition } from '../types/job';

// Company-wide benefits that apply to all positions
export const commonBenefits: string[] = [
  '28 days holiday (including Bank Holidays)',
  'Company pension scheme',
  'Professional development and mentoring',
  'Hybrid work flexibility',
  'Collaborative and supportive team culture',
  'Industry events and training seminars'
];

// All open positions
export const openPositions: JobPosition[] = [
  {
    title: 'Graduate Buyer',
    type: 'Full-time',
    location: 'Hybrid (Hounslow, TW5)',
    salary: '£27,000 - £29,000 per annum + Discretionary Bonus',
    description: 'Join Hill Distribution Group (HDG) at an early stage of its growth journey, where you will have the chance to learn and develop rapidly in a fast-paced, tech-driven eCommerce environment. As a Graduate Buyer, you will play a pivotal role in our direct-to-consumer (D2C) strategy.',
    responsibilities: [
      'Order Management: Oversee purchasing processes, from negotiating prices to placing and managing orders',
      'Tech Utilization: Use proprietary software to analyze market trends and monitor product performance',
      'Platform Optimization: Collaborate with internal teams to align purchasing decisions',
      'Supplier Relationships: Develop and maintain strong communication with suppliers',
      'Warehouse Coordination: Work closely with the warehouse team',
      'Data-Driven Insights: Use system-generated data to refine buying strategies'
    ],
    requirements: [
      'Bachelor\'s degree in STEM, business, finance, eCommerce, marketing, or related fields',
      'Strong analytical and problem-solving abilities',
      'Excellent communication and negotiation skills',
      'Proficiency in IT, especially Microsoft Excel',
      'Tech-savvy and eager to learn new systems',
      'Detail-oriented with the ability to manage multiple tasks effectively'
    ],
    benefits: commonBenefits
  }
  // To add a new position, simply copy the template below and fill in the details:
  /*
  {
    title: '',
    type: 'Full-time', // or 'Part-time', 'Contract', etc.
    location: 'Hybrid (Hounslow, TW5)',
    salary: '',
    description: '',
    responsibilities: [
      '',
      '',
      ''
    ],
    requirements: [
      '',
      '',
      ''
    ],
    benefits: commonBenefits // or custom benefits array
  }
  */
]; 