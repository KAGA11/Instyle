import React from 'react';
import { Carousel, Button } from 'antd';
import assets from '../assets/assets';

const App: React.FC = () => (
  <div className='relative'>
    <Carousel >
      <div>
        <img className='w-full h-[600px] object-cover' src={assets.building1} />
      </div>
    </Carousel>
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
      <h1 className='text-5xl text-white'>Craft Your Fashion With Us</h1>
      <div className='mt-8 flex justify-center'>
        <Button size='large'>EXPLORE OUR PRODUCT</Button>
      </div>
    </div>
  </div>
);

export default App;