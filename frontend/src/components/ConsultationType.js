import React from 'react';
import { FaPhone, FaComments, FaVideo } from 'react-icons/fa';

const ConsultationTypeSelector = () => {
  return (
    <div className="flex justify-around mt-10 text-center">
      <div className="cursor-pointer">
        <FaPhone className="text-4xl text-green mb-2" />
        <p>Voice Call</p>
      </div>
      <div className="cursor-pointer">
        <FaComments className="text-4xl text-green mb-2" />
        <p>Text Chat</p>
      </div>
      <div className="cursor-pointer">
        <FaVideo className="text-4xl text-gray-400 mb-2" />
        <p className="text-gray-400">Video (Coming Soon)</p>
      </div>
    </div>
  );
};

export default ConsultationTypeSelector;
