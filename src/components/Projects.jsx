
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project_img_1.jpg";
import project2 from "../assets/project_img_2.jpg";
import project3 from "../assets/project_img_3.jpg";
import project4 from "../assets/project_img_4.jpg";
import project5 from "../assets/project_img_5.jpg";
import project6 from "../assets/project_img_6.jpg";




const projectsData = [
  { title: "Skyline Haven", image: project1, location: "California" },
  { title: "Vista Verde", image: project2, location: "San Francisco" },
  { title: "Serenity Suites", image: project3, location: "Chicago" },
  { title: "Central Square", image: project4, location: "Los Angeles" },
  { title: "Vista Verde", image: project5, location: "San Francisco" },
  { title: "Serenity Suites", image: project6, location: "Chicago" },
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesPerSlide, setImagesPerSlide] = useState(1);

  const updateImagesPerSlide = () => {
    if (window.innerWidth >= 1280) setImagesPerSlide(4); // Desktop
    else if (window.innerWidth >= 768) setImagesPerSlide(2); // Tablet
    else setImagesPerSlide(1); // Mobile
  };

  useEffect(() => {
    updateImagesPerSlide();
    window.addEventListener("resize", updateImagesPerSlide);
    return () => window.removeEventListener("resize", updateImagesPerSlide);
  }, []);

  const totalSlides = Math.ceil(projectsData.length / imagesPerSlide);
  const handleSlideClick = (index) => setCurrentSlide(index);
  const startIndex = currentSlide * imagesPerSlide;
  const currentProjects = projectsData.slice(startIndex, startIndex + imagesPerSlide);

  return (
    <motion.div


initial={{opacity:0, x:-200}}
transition={{duration:1}}
whileInView={{opacity:1, x:0}}
viewport={{once:true}}




     className="min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-20 lg:px-32">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-3">
        Projects
        <span className="underline underline-offset-4 font-light"> Completed</span>
      </h1>

      <p className="text-gray-500 max-w-80 text-center mb-10">
        Crafting Spaces, Building Legacies — Explore Our Portfolio
      </p>

      {/* Carousel */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6 overflow-visible" id="Projects">
        {currentProjects.map((project, index) => (
          <div key={index} className="relative overflow-visible">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-72 md:h-72 lg:h-80 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 px-4 py-3 text-center rounded-b-lg">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">{project.title}</h2>
              <p className="text-gray-600 text-sm md:text-base">{project.location}</p>
            </div>

          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex space-x-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideClick(index)}
            className={`w-5 h-5 rounded-full ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
