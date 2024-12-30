import React from 'react';

const About = () => {
  return (
    <section className='absolute w-full z-10'>
        <h1 className='text-2xl text-center'>Let Me Indroduce MySelf</h1>
        <div className='flex flex-col md:flex-row mx-10'>
            <div className='w-2/3 bg-orange-300'>
                <h1>I’m a <span>web developer</span> passionate about creating <span>clean, functional,</span> and <span>user-friendly</span> websites</h1>
            </div>
            <div className='w-1/3 bg-cyan-200'>
                <img src="#" alt="AboutImg" />
            </div>
        </div>
        <div>
            <h1>Find Me On</h1>
        </div>
    </section>
  );
};

export default About;
