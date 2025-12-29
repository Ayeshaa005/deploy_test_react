import React from 'react';
import About_image from '../assets/brand_img.png'
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div


initial={{opacity:0, x:200}}
transition={{duration:1}}
whileInView={{opacity:1, x:0}}
viewport={{once:true}}




     className="flex flex-col justify-center items-center container mx-auto lg:px-32 
    md:px-20 px-14 w-full overflow-hidden" id="About">
        <h1 className='text-2xl md:text-4xl font-bold  mb-2 '> About
            <span className='underline underline-offset-4 decoration-1 under font-light '> Our Brand</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8 '>Passionate About properties,Dedicated to Your Vision.</p>

        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20 '>

            <img className='md:w-1/2 w-full ' src={About_image} alt="image of about section"/>

            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600 '>

                <div className='grid grid-cols-2  gap-6 md:gap-10 w-full 2xl:pr-28 '>

                    <div>
                        <p className='text-4xl font-medium text-gray-800 '>10+</p>
                        <p>Years of Excellence</p>

                    </div>


                    
                    <div>
                        <p className='text-4xl font-medium text-gray-800 '>12+</p>
                        <p>Projects Completed</p>

                    </div>



                    
                    <div>
                        <p className='text-4xl font-medium text-gray-800 '>20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>

                    </div>


                    
                    <div>
                        <p className='text-4xl font-medium text-gray-800 '>25+</p>
                        <p>Ongoing Projects</p>

                    </div>

                </div>


             <p className='my-10 max-w-lg '>Lorem Ipsum is simply dummy text of printing and typesetting industory.
                Lorem Ipsum has been the industory's standard dummy text ever since the 1500s ,when an unknown 
                printer took a gallery of type and scrambled it to make a type specimen book.
             </p>

             <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>


            </div>

        </div>

</motion.div>





      
    
  )
}

export default About
