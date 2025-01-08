import React from 'react';
import aboutBg from '../assets/about_bg.png';
import man from '../assets/man_1.png';

interface KeyMemberProps{
  avatar: string;
  name: string;
  position: string;
}


const KeyMember:React.FC<KeyMemberProps> = ({ avatar, name, position  }) =>{
  return(
    <div className='flex justify-center flex-col text-center'>
      <img className='w-44 rounded-full' src={avatar} alt="" />
      <p className='text-xl font-bold mt-2'>{name}</p>
      <p>{position}</p>
    </div>
  )
}


function About() {
  return (
    <>
      <div
      className="w-full bg-cover bg-center h-[34vh] "
      style={{ backgroundImage: `url(${aboutBg})` }}
      ></div>
      
      <div className='px-10 py-10'>
        <h1 className='text-3xl font-bold mb-3'>About Us</h1>
        <div>
          Welcome to Instyle Co., where fashion meets quality. 
          Established in 2000, we have been at the forefront of the clothing manufacturing industry, 
          delivering top-notch apparel to brands worldwide. 
          Our mission is to blend creativity with craftsmanship, 
          ensuring every piece is a testament to quality and style.
        </div>

        <div className='flex justify-center px-10 mt-10 gap-x-60'>
          <KeyMember 
            avatar={man} 
            name="David Yu" 
            position="CEO" 
          />
          <KeyMember 
            avatar={man} 
            name="David Yu" 
            position="CEO" 
          />
          <KeyMember 
            avatar={man} 
            name="David Yu" 
            position="CEO" 
          />
        </div>
      </div>
    </>

    


  );
}

export default About;