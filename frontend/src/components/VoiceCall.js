import React from 'react';
import { FaMicrophone, FaPhoneSlash } from 'react-icons/fa';

const VoiceCall = () => {
  return (
    <div className="bg-white p-6 mt-8 rounded-lg shadow-lg text-center">
      <h3 className="text-xl font-bold mb-4">Voice Call</h3>
      <button className="bg-green text-white px-6 py-3 rounded-full mb-4">Start Voice Call</button>
      <div className="flex justify-center space-x-8">
        <button className="bg-gray-200 text-gray-500 p-4 rounded-full">
          <FaMicrophone className="text-2xl" />
        </button>
        <button className="bg-red-500 text-white p-4 rounded-full">
          <FaPhoneSlash className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default VoiceCall;
