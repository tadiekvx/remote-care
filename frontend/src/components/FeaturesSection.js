import React from 'react';
import FeatureCard from './FeatureCard';
import doctor from '../images/doctor.jpg';
import voice from '../images/voice.jpg';
import symptom from '../images/symptom.jpg';

const features = [
  {
    title: 'AI-Doctor Matching',
    description: 'Get matched with the right doctor based on your symptoms and medical history for personalized care.',
    image: doctor,
  },
  {
    title: 'Voice Command Feature',
    description: 'Use voice commands to book appointments, check symptoms, and set medication reminders easily.',
    image: voice,
  },
  {
    title: 'Symptom Checker',
    description: 'Quickly assess your symptoms using AI-powered tools to guide you on the next steps for your health, whether it’s self-care, telemedicine, or an in-person visit.',
    image: symptom,
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center text-green mb-12">Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
