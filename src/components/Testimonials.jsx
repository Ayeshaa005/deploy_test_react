import React from 'react';
import { motion } from "framer-motion";
import profile_img_1 from "../assets/profile_img_1.png";
import profile_img_2 from "../assets/profile_img_2.png";
import profile_img_3 from "../assets/profile_img_3.png";


const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "Richard Nelson",
        title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "James Washington",
        title: "Co-Founder",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
];






const Testimonials = () => {
  return (
    <motion.div 

    
initial={{opacity:0, x:100}}
transition={{duration:1}}
whileInView={{opacity:1, x:0}}
viewport={{once:true}}




    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id="Testimonials">
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Customer <span className='underline underline-offset-4 decoration-1 under font-light'> Testimonials </span></h1>
      <p className='text-gray-500 mx-auto max-w-md text-center mb-8'>Real
         Stories From  Those Who Found Home With Us</p>



<div className='flex flex-wrap justify-center gap-8'>
  {testimonialsData.map((testimonial,index)=>(
    <div key={index} className='max-w-[300px] border shadow-lg rounded-[10px] px-8 py-8 text-center'>
      <img
        className='w-20 h-20 rounded-full mx-auto mb-4'
        src={testimonial.image}
        alt={testimonial.alt}
      />
      <h3 className='text-lg font-semibold text-gray-800'>{testimonial.name}</h3>
      <p className='text-gray-500 text-sm'>{testimonial.title}</p>
      <p className='text-gray-700 mt-4'>{testimonial.text}</p>
      <p className='text-yellow-400 mt-2'>{"⭐".repeat(testimonial.rating)}</p>
    </div>
  ))}
</div>




    </motion.div>



  )
}

export default Testimonials
