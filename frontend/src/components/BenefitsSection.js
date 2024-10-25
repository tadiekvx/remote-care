import React from 'react';
import { FaCheckCircle, FaUserMd, FaRobot } from 'react-icons/fa'; // Import desired icons

const benefits = [
  {
    title: 'Convenience',
    description: 'Book appointments and access your medical records from anywhere, at any time.',
    icon: <FaCheckCircle className="text-nude w-6 h-8 mr-4" />, // Add desired icon here
  },
  {
    title: 'Personalized Care',
    description: 'Get matched with doctors who meet your specific health needs and preferences.',
    icon: <FaUserMd className="text-nude w-6 h-8 mr-4" />, // Add desired icon here
  },
  {
    title: 'Expert Guidance',
    description: 'Access AI-powered tools and resources to guide you in managing your health effectively.',
    icon: <FaRobot className="text-nude w-6 h-8 mr-4" />, // Add desired icon here
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-gray">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center text-green mb-8">Benefits of CareConnect</h2>
        <div className="flex flex-col items-start space-y-10 text-green">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center">
              {benefit.icon}
              <div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
