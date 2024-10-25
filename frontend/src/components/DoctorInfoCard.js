import React from 'react';
import doctorImage from '../images/doctor.jpg';

const DoctorInfoCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-8 text-center">
      <img src={doctorImage} alt="Doctor" className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-bold">Dr. Jane Smith</h3>
      <p className="text-gray-600">General Practitioner</p>
      <p className="text-yellow-400 mt-2">★★★★☆</p>
      <p className="text-green mt-4">Available Now</p>
    </div>
  );
};

export default DoctorInfoCard;
