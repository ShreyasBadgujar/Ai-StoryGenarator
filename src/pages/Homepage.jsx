// import React, { useState } from 'react';
// import Description from './Description';
// import Navbar from '../common/Navbar';
// import Footer from '../common/Footer';

// const Homepage = () => {
//   const [activeIndex, setActiveIndex] = useState(0); // State to track active carousel item index

//   // Function to handle clicking on the previous button
//   const handlePrevClick = () => {
//     setActiveIndex(prevIndex => (prevIndex === 0 ? 4 : prevIndex - 1));
//   };

//   // Function to handle clicking on the next button
//   const handleNextClick = () => {
//     setActiveIndex(prevIndex => (prevIndex === 4 ? 0 : prevIndex + 1));
//   };

//   return (
   
//     <div>
//       <div id="controls-carousel" className="relative w-full" data-carousel="static">
//         <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//           {/* Use activeIndex state to control visibility */}
//           <div className={`duration-700 ease-in-out ${activeIndex === 2 ? 'block' : 'hidden'}`} data-carousel-item>
//             <img src="https://www.shutterstock.com/image-photo/create-your-own-story-written-600nw-378537394.jpg" className="lg:object-none  absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//           </div>
//           <div className={`duration-700 ease-in-out ${activeIndex === 1 ? 'block' : 'hidden'}`} data-carousel-item="active">
//             <img src="https://www.shutterstock.com/image-photo/create-your-own-story-shown-260nw-2313986335.jpg" className="lg:object-none absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//           </div>
//           <div className={`duration-700 ease-in-out ${activeIndex === 0 ? 'block' : 'hidden'}`} data-carousel-item>
//             <img src="https://media.slidesgo.com/storage/56208764/responsive-images/0-create-your-own-story___media_library_original_655_368.jpg" className="lg:object-none  absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//           </div>
//           <div className={`duration-700 ease-in-out ${activeIndex === 3 ? 'block' : 'hidden'}`} data-carousel-item>
//             <img src="https://www.shutterstock.com/image-vector/your-story-matters-sign-on-260nw-2064525593.jpg" className="lg:object-none absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//           </div>
//           <div className={`duration-700 ease-in-out ${activeIndex === 4 ? 'block' : 'hidden'}`} data-carousel-item>
//             <img src="https://c8.alamy.com/comp/R85AX4/word-writing-text-create-your-own-story-business-concept-for-be-the-creator-of-your-demonstratingal-destiny-and-chances-color-pages-of-open-book-phot-R85AX4.jpg" className="lg:object-none absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//           </div>
//         </div>

//         {/* Previous Button */}
//         <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={handlePrevClick}>
//           <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
//             </svg>
//             <span className="sr-only">Previous</span>
//           </span>
//         </button>

//         {/* Next Button */}
//         <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={handleNextClick}>
//           <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
//             </svg>
//             <span className="sr-only">Next</span>
//           </span>
//         </button>
//       </div>
      

//        <Description/>
        
        

//     </div>
//   );
// };

// export default Homepage;
import React,{useState,useEffect} from "react";
import Description from "./Description"

const Homepage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
const images = [
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ];



  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, images.length]);

  const handlePrevClick = () => {
    setIsAutoPlaying(false);
    setActiveIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setIsAutoPlaying(false);
    setActiveIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Enhanced Carousel */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-10"></div>
        
        {/* Images */}
        <div className="relative h-full">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                activeIndex === index 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-110'
              }`}
            >
              <img 
                src={src} 
                className="w-full h-full object-cover"
                alt={`Story creation slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            Unleash Your
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Creative Power
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fadeInUp delay-300">
            Where every word becomes a world, and every idea transforms into an epic adventure
          </p>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={handlePrevClick}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 group"
        >
          <svg className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={handleNextClick}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 group"
        >
          <svg className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Description Component */}
      <Description />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
};

export default Homepage;