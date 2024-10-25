import React, { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const faqs = [
  {
    question: "How does CareConnect work?",
    answer: "CareConnect helps you find doctors, book appointments, and manage your health records in one place."
  },
  {
    question: "Is CareConnect free to use?",
    answer: "Yes, CareConnect is free for users. Some services may have associated costs."
  },
  {
    question: "Can I book appointments online?",
    answer: "Absolutely! You can book appointments online with just a few clicks."
  },
  {
    question: "What services does CareConnect offer?",
    answer: "We offer a range of services, including telemedicine, symptom checking, and appointment booking."
  },
  {
    question: "How do I create an account?",
    answer: "You can create an account by clicking the 'Sign Up' button on the homepage and following the prompts."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-nude text-white">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`flex items-start border-b pb-4 ${openIndex === index ? 'border-gray' : ''}`}>
              <FaQuestionCircle className="text-white mr-2" />
              <div className={`flex-1 ${openIndex === index ? 'border-green' : ''}`}>
                <h3 
                  className={`font-bold text-lg cursor-pointer ${openIndex === index ? 'pb-6' : 'text-white'}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                </h3>
                {openIndex === index && (
                  <p className="mt-2 text-gray"> - {faq.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
