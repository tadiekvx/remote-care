import React from 'react';

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="relative rounded-lg w-full shadow-md overflow-hidden h-64">
      {/* Background Image with Blur Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          filter: 'blur(2px)', // Apply blur effect to the background image
          width: '100%',
          height: '100%',

        }}
      ></div>
      {/* Overlay for Text */}
      <div className="relative p-6 bg-black bg-opacity-30 flex flex-col items-center justify-center rounded-lg h-full">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className='text-white'>{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
