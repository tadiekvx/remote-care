import React from 'react';
import { FaSmile, FaUserMd, FaCalendarCheck } from 'react-icons/fa'; // Import desired icons
import CountUp from 'react-countup';

const stats = [
  {
    number: 644,
    label: 'Happy Patients',
    icon: <FaSmile className="text-green w-8 h-8 mr-6" />, // Add icon for Happy Patients
  },
  {
    number: 205,
    label: 'Doctors Available',
    icon: <FaUserMd className="text-green w-8 h-8 mr-6" />, // Add icon for Doctors Available
  },
  {
    number: 112,
    label: 'Successful Appointments',
    icon: <FaCalendarCheck className="text-green w-8 h-8 mr-6" />, // Add icon for Successful Appointments
  },
];

const StatsSection = () => {
  return (
    <section className="bg-white text-nude py-16">
      <div className="container mx-auto px-8 ">
        <div className="flex flex-col md:flex-row justify-around">
          {stats.map((stat, index) => (
            <div key={index} className="bg-transparent p-4 flex items-center mb-4 md:mb-0">
              {stat.icon} {/* Render the icon */}
              <div>
                <CountUp start={0} end={stat.number} duration={4.5} className="text-4xl font-bold" />
                <p className="text-lg">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
