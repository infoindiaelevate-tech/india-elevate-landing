// "use client";
// import { motion } from 'framer-motion';

// export default function Hero() {
//   return (
//     <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-20 overflow-hidden">
//       <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
//         {/* Left Content */}
//         <motion.div 
//           initial={{ opacity: 0, x: -50 }} 
//           animate={{ opacity: 1, x: 0 }} 
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight">
//             Empowering India’s Next Generation with <span className="text-primary">STEM, Robotics & AI</span>
//           </h1>
//           <p className="mt-6 text-lg text-gray-600">
//             Hands-on learning programs designed for schools, institutions, and future innovators.
//           </p>
//           <div className="mt-8 flex gap-4">
//             <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-xl">
//               Book a Free Consultation
//             </button>
//             <button className="bg-white border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
//               Explore Programs
//             </button>
//           </div>
//         </motion.div>

//         {/* Right Animation/Image Placeholder */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9 }} 
//           animate={{ opacity: 1, scale: 1 }} 
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="relative"
//         >
//           <div className="w-full h-96 bg-gray-200 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
//              {/* Replace with <video> or <Image> */}
//              <span className="text-gray-400 font-bold text-xl">Interactive 3D Tech Visual</span>
//              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
//                 <p className="font-bold text-primary">100+ Schools</p>
//                 <p className="text-xs text-gray-500">Trust our labs</p>
//              </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

//version 2
// "use client";
// import { motion } from 'framer-motion';

// export default function Hero() {
//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
//       {/* 🎥 Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="/bg1_video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* 🌑 Overlay (Darkens video for readability) */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

//       {/* 📦 Content */}
//       <div className="container relative z-20 mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-20">
        
//         {/* Left Content */}
//         <motion.div 
//           initial={{ opacity: 0, x: -50 }} 
//           animate={{ opacity: 1, x: 0 }} 
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
//             Empowering India’s Next Generation with <span className="text-primary">STEM, Robotics & AI</span>
//           </h1>
//           <p className="mt-6 text-lg text-gray-200">
//             Hands-on learning programs designed for schools, institutions, and future innovators.
//           </p>
//           <div className="mt-8 flex gap-4">
//             <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition shadow-xl hover:scale-105 transform duration-200">
//               Book a Free Consultation
//             </button>
//             <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-secondary transition">
//               Explore Programs
//             </button>
//           </div>
//         </motion.div>

//         {/* Right Animation/Glassmorphism Card */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9 }} 
//           animate={{ opacity: 1, scale: 1 }} 
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="hidden md:block relative"
//         >
//           {/* Glass Card Effect */}
//           <div className="w-full h-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6 text-white relative">
//              <div className="text-center">
//                 <span className="text-5xl font-bold text-accent mb-2 block">100+</span>
//                 <span className="text-xl font-medium">Partner Schools</span>
//              </div>
//              <div className="mt-6 text-center">
//                 <span className="text-5xl font-bold text-green-400 mb-2 block">25k+</span>
//                 <span className="text-xl font-medium">Students Trained</span>
//              </div>
             
//              {/* Floating Badge */}
//              <div className="absolute -bottom-6 -right-6 bg-white text-secondary p-4 rounded-xl shadow-lg flex items-center gap-3">
//                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                 <span className="font-bold text-sm">Admissions Open</span>
//              </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// //version 3
// "use client";
// import { motion } from 'framer-motion';

// export default function Hero() {
//   return (
//     // ✅ NO background classes, NO local video. Just layout.
//     <section className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent">
      
//       {/* Content Container */}
//       <div className="container relative z-10 mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-20">
        
//         {/* Left Content */}
//         <motion.div 
//           initial={{ opacity: 0, x: -50 }} 
//           animate={{ opacity: 1, x: 0 }} 
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
//             Empowering India’s Next Generation with <span className="text-blue-400">STEM, Robotics & AI</span>
//           </h1>
//           <p className="mt-6 text-lg text-gray-100 drop-shadow-md">
//             Hands-on learning programs designed for schools, institutions, and future innovators.
//           </p>
//           <div className="mt-8 flex gap-4">
//             <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:scale-105 transform duration-200">
//               Book a Free Consultation
//             </button>
//             <button className="bg-transparent border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition">
//               Explore Programs
//             </button>
//           </div>
//         </motion.div>

//         {/* Right Animation / Glass Card */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9 }} 
//           animate={{ opacity: 1, scale: 1 }} 
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="hidden md:block relative"
//         >
//           {/* Glass Card - Keeps the 3D 'floating' feel */}
//           <div className="w-full h-80 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6 text-white relative">
//              <div className="text-center">
//                 <span className="text-5xl font-bold text-amber-400 mb-2 block drop-shadow-lg">100+</span>
//                 <span className="text-xl font-medium text-gray-200">Partner Schools</span>
//              </div>
//              <div className="mt-6 text-center">
//                 <span className="text-5xl font-bold text-green-400 mb-2 block drop-shadow-lg">25k+</span>
//                 <span className="text-xl font-medium text-gray-200">Students Trained</span>
//              </div>
             
//              {/* Floating Badge */}
//              <div className="absolute -bottom-6 -right-6 bg-slate-900/90 border border-white/10 text-white p-4 rounded-xl shadow-xl flex items-center gap-3">
//                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                 <span className="font-bold text-sm">Admissions Open</span>
//              </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  "/india-elevate-landing/hero-images/img1.jpg",
  "/india-elevate-landing/hero-images/img2.jpg",
  "/india-elevate-landing/hero-images/img3.jpg",
  "/india-elevate-landing/hero-images/img4.jpg",
  "/india-elevate-landing/hero-images/img5.jpg"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔄 Auto-Rotate Logic (Changes every 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent">
      
      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-20">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Empowering India’s Next Generation with <span className="text-blue-400">STEM, Robotics & AI</span>
          </h1>
          <p className="mt-6 text-lg text-gray-100 drop-shadow-md">
            Hands-on learning programs designed for schools, institutions, and future innovators.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:scale-105 transform duration-200">
              Book a Free Consultation
            </button>
            <button className="bg-transparent border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition">
              Explore Programs
            </button>
          </div>
        </motion.div>

        {/* Right Section: Image Carousel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block relative h-96 w-full"
        >
          {/* Glass/Image Container */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900/50 backdrop-blur-sm">
            
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image 
                  src={images[currentIndex]} 
                  alt="Students learning STEM"
                  fill
                  className="object-cover"
                  priority={currentIndex === 0} // Loads first image faster
                />
                
                {/* Gradient Overlay for Depth */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div> */}
              </motion.div>
            </AnimatePresence>

            {/* Carousel Indicators (Dots) */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-blue-500 w-6' : 'bg-white/50'}`}
                />
              ))}
            </div>

          </div>

          {/* Floating Badge (Kept outside carousel for stability) */}
          <div className="absolute -bottom-6 -right-6 bg-slate-900/90 border border-white/10 text-white p-4 rounded-xl shadow-xl flex items-center gap-3 z-20">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <span className="block font-bold text-sm leading-none">Collaborations Open</span>
              <span className="text-[10px] text-gray-400">Join with us</span>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}