import React from 'react';

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="relative rounded-lg w-full shadow-md overflow-hidden h-64">
     
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          filter: 'blur(1.5px)', 
          width: '100%',
          height: '100%',

        }}
      ></div>
     
      <div className="relative p-6 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-lg h-full">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className='text-white'>{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
