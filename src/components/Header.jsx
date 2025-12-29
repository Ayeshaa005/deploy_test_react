import React from 'react'
import Navbar from './Navbar';
import { motion } from "framer-motion";


const Header = () => {
  return (
    <div
  className="min-h-screen mb-4 bg-cover bg-center flex flex-col w-full"
  style={{ backgroundImage: "url('/header_img.png')" }}
  id="Header"
>

      <Navbar/>



<motion.div

initial={{opacity:0, y:100}}
transition={{duration:1.5}}
whileInView={{opacity:1, y:0}}
viewport={{once:true}}



 className="flex-1 flex flex-col justify-center items-center text-white text-center px-6 md:px-20 lg:px-32 space-y-6">
        <h2 className="md:text-[80px]  text-[35px] md:font-semibold font-bold leading-none   mb-6 max-w-3xl pt-20">
          Explore homes that fit your dreams
        </h2>

        <div className="flex gap-4 mt-16 space-x-6">
          <button className="border border-white px-8 py-3 rounded">
            <a href="#Projects">Projects</a>
          </button>
          <button className="bg-blue-500 px-8 py-3 rounded">
            <a href="#Contact">Contact Us</a>
          </button>
        </div>
      </motion.div>

    </div>



    
  )
}

export default Header
