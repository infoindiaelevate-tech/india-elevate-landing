"use client";
import { motion } from 'framer-motion';
import { Microscope, Brain, Award, Rocket, MonitorPlay, Users, Bot } from 'lucide-react';

const services = [
  { title: "Lab Setup", icon: <Microscope />, desc: "Complete turnkey Robotics & AI labs for schools." },
  { title: "Curriculum Integration", icon: <Brain />, desc: "NEP-aligned STEM syllabus from Grade 1 to 12." },
  { title: "Teacher Training", icon: <Users />, desc: "Certified workshops to upskill educators in tech." },
  { title: "Workshops & Bootcamps", icon: <Rocket />, desc: "Intensive 3-day hackathons and coding camps." },
  { title: "Robots for School ", icon: <Bot />, desc: "Custom built chatbots, AI agents and moving robots." },
  { title: "Competitions", icon: <Award />, desc: "National level robotics leagues & hackathons." },
];

export default function Services() {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We don't just supply kits; we build entire ecosystems for innovation within your institution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {/* Icon wrapper to ensure size consistency */}
                <div className="w-8 h-8 flex items-center justify-center">
                    {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}