import React, { useState } from 'react';
import FeatureCard from './FeatureCard';
import doctor from '../images/doctor.jpg';
import voice from '../images/voice.jpg';
import symptom from '../images/symptom.jpg';
import files from '../images/files.jpg';
import medication from '../images/medication.jpg';
import tele from '../images/tele.jpg';

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
    description: 'Quickly assess your symptoms using AI-powered tools to guide you on the next steps for your health.',
    image: symptom,
  },
  {
    title: 'Health Records Management',
    description: 'Easily store and access your medical records, lab results, and prescriptions in one secure place.',
    image: files,
  },
  {
    title: 'Telehealth Services',
    description: 'Connect with healthcare professionals remotely through video consultations.',
    image: tele, 
  },
  {
    title: 'Medication Reminders',
    description: 'Stay on track with your medications through automated reminders sent to your device.',
    image: medication, 
  },
];

const FeaturesSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const featuresPerPage = 3;

  const nextFeatures = () => {
    if (startIndex + featuresPerPage < features.length) {
      setStartIndex(startIndex + featuresPerPage);
    }
  };

  const prevFeatures = () => {
    if (startIndex - featuresPerPage >= 0) {
      setStartIndex(startIndex - featuresPerPage);
    }
  };

  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center text-green mb-12">Our Key Features</h2>
        <div className="flex items-center justify-between">
          <button
            onClick={prevFeatures}
            disabled={startIndex === 0}
            className="bg-green text-white py-2 px-4 rounded-full hover:bg-nude transition duration-300 disabled:opacity-50"
          >
            ←
          </button>
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${(startIndex * 100) / featuresPerPage}%)` }}
            >
              {features.map((feature, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 p-2">
                  <FeatureCard 
                    title={feature.title}
                    description={feature.description}
                    image={feature.image} 
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={nextFeatures}
            disabled={startIndex + featuresPerPage >= features.length}
            className="bg-green text-white py-2 px-4 rounded-full hover:bg-nude transition duration-300 disabled:opacity-50"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
