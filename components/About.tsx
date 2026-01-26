"use client";
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const values = [
    "Innovation First Mindset",
    "Hands-on Learning Methodology",
    "Inclusivity in Tech Education",
    "Future-Ready Skill Development"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Building the <span className="text-blue-500">Innovators</span> of Tomorrow</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2025, IndiaElevate was born from a simple idea: Textbooks aren't enough. 
              We believe that every child in India deserves access to world-class tools to experiment, break, build, and learn.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Today, we are a team of engineers, educators, and dreamers working with schools to bridge the gap between theoretical knowledge and real-world application.
            </p>

            <div className="space-y-3">
              {values.map((v, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400 w-5 h-5" />
                  <span className="text-white font-medium">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual Block */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 w-full"
          >
            <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
              {/* Using a solid glass block as placeholder for an image */}
              <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center hover:bg-slate-800/40 transition duration-500">
                 <h3 className="text-6xl font-bold text-white/20 mb-4 group-hover:text-white/40 transition duration-500">MISSION</h3>
                 <p className="text-xl text-white font-serif italic relative z-10">
                   "To equip 1 million Indian students with the power of AI and robotics by 2027."
                 </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}