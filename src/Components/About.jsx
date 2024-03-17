import React from 'react'
import { ImHtmlFive2, ImCss3, } from "react-icons/im";
const About = () => {
  return (
    <div className='flex justify-center' >
      <div className='w-2/5 text-center'>
      <div className=' ml-10 text-2xl '>About Me</div>
      <div className='ml-10 text-3xl text-sky-400 '>WHO AM I?</div>
      <div className=' text-center mt-4 text-gray-400 ml-10'>Hello, my name is <strong className='text-white'>Jatin.</strong> I’m currently pursuing a degree in <strong className='text-white'>Computer Science.</strong> I have a keep interest in software engineering and technology. I’m passionate about learning new things and exploring new <strong className='text-white'>technologies.</strong> I believe that technology has the power to change the world for the better and I’m excited to be a part of this change. I have experience researching new things and developing innovative solutions</div>
      <div className='text-2xl mt-8'>
       <div className='mb-4'> Tools of the Trade</div>
       <div className='flex justify-center items-center'>      
        <div className='text-center'>
          <ImHtmlFive2 size={70} className='m-auto mx-6' style={{color:'rgb(56 189 248'}}/>
          <p>HTML</p>
        </div>
        <div className='text-center'>
        <ImCss3 size={70} className='m-auto mx-6' style={{color:'rgb(56 189 248'}}/>
          <p>CSS</p>
        </div>

       </div>
      </div>
    </div>
    </div>
    
  )
}

export default About