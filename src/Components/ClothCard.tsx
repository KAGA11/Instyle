import React from 'react';

interface ClothCardProps {
  imageUrl: string;
  title: string;
}

const ClothCard: React.FC<ClothCardProps> = ({ imageUrl, title }) => {
  return (
    <div className="flex max-w-sm rounded-lg overflow-hidden bg-white shadow-lg">
      <img
        className="h-60 object-cover rounded-t-lg"
        src={imageUrl}
        alt={title}
      />

      <div className="p-4 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
    </div>
  );
};

export default ClothCard;