import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string; // 可选
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg ">
      {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg overflow-hidden" />}
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Card;