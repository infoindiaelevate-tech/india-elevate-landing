"use client";
import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Dr. Anjali Sharma",
    role: "Principal, DPS Bangalore",
    text: "IndiaElevate completely transformed our science wing. The robotics lab is now the students' favorite place to be. The curriculum is perfectly aligned with NEP 2020 guidelines.",
    rating: 5,
    initial: "A"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Parent, Grade 8 Student",
    text: "My son used to struggle with math. After joining the robotics club, he sees the practical application of geometry. His confidence has skyrocketed and he loves the hands-on kits.",
    rating: 5,
    initial: "R"
  },
  {
    id: 3,
    name: "Sneha Gupta",
    role: "Student, Grade 9",
    text: "I built my first AI bot using their platform! The mentors are super helpful and the kits are really fun to use. I want to be a robotics engineer now.",
    rating: 4,
    initial: "S"
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Director, Green Valley School",
    text: "The teacher training module was exceptional. Our staff is now fully certified and confident in teaching AI concepts to primary school students.",
    rating: 5,
    initial: "V"
  },
  {
    id: 5,
    name: "Priya Mehta",
    role: "CSR Partner, TechCorp",
    text: "We partnered with IndiaElevate for our village education initiative. seeing 500+ rural kids coding on tablets was a vision come true.",
    rating: 5,
    initial: "P"
  },
  {
    id: 6,
    name: "Arjun Das",
    role: "Robotics Club Head",
    text: "The quality of the hardware is top-notch. Unlike other kits that break easily, these are durable and designed for rough classroom usage.",
    rating: 4,
    initial: "A"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Trusted by Educators & Parents</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-300">Don't just take our word for it. Hear from the community.</p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative flex flex-col hover:bg-slate-800/50 transition-colors duration-300 shadow-lg"
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-6 right-6 text-blue-500/20 w-10 h-10 rotate-180" />
              
              {/* Star Rating */}
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                   <Star 
                     key={i} 
                     className={`w-4 h-4 ${i < t.rating ? 'fill-current' : 'text-gray-600'}`} 
                   />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-200 italic mb-6 leading-relaxed flex-grow text-sm">
                "{t.text}"
              </p>
              
              {/* Author Info */}
              <div className="mt-auto border-t border-white/10 pt-4 flex items-center gap-4">
                {/* Avatar / Initial */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-md">
                  {t.initial}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm tracking-wide">{t.name}</h4>
                  <p className="text-xs text-blue-300 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}