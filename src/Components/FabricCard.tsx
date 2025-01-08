import React from 'react';

interface FabricCardProps {
  imageUrl: string;
  description: string;
}

const FabricCard: React.FC<FabricCardProps> = ({ imageUrl, description }) => {
  return (
    <div className="min-h-96  my-5 flex flex-col md:flex-row bg-gray-100 rounded-lg overflow-hidden">
      <div className="w-full md:w-1/3 p-4 flex flex-col justify-center bg-white">
        <p className="text-gray-600 text-lg italic pl-5">{description}</p>
      </div>

      <div
        className="w-full md:w-2/3 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    </div>
  );
};

export default FabricCard;