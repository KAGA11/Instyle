import React from 'react';
import Card from './Card'; // 导入 Card 组件
interface DescriptionProps {
  title?: string;
  descList?: string[];
  header?: string[];
  body?: string[];
}

 const Description: React.FC<DescriptionProps> = ({ title, descList,header = [],body = [] }) => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <Card
            imageUrl={descList?.[0]}
            title={header[0]}
            description={body[0]}
          />

          <Card
            imageUrl={descList?.[1]}
            title={header[1]}
            description={body[1]}
          />

          <Card
            imageUrl={descList?.[2]}
            title={header[2]}
            description={body[2]}
          />
        </div>
      </div>
    </div>
  );
};

export default Description;