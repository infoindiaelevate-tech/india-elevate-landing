"use client";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const [status, setStatus] = useState('');

  const sendEmail = (data: any) => {
    setStatus('Sending...');
    
    // REPLACE THESE WITH YOUR EMAILJS CREDENTIALS
    const serviceID = 'service_fm1hq5t';
    const templateID = 'template_fgumo7l';
    const publicKey = '_LtO4lFm94GK6MMMa';

    emailjs.send(serviceID, templateID, data, publicKey)
      .then((response) => {
        setStatus('Message Sent Successfully!');
        reset();
      }, (err) => {
        setStatus('Failed to send. Please try again.');
        console.error('FAILED...', err);
      });
  };


return (
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
              
              {/* Left Info Panel */}
              <div className="bg-blue-600/20 p-10 text-white md:w-1/3 flex flex-col justify-center border-r border-white/10">
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <p className="mb-4 text-gray-300">Ready to transform your institution?</p>
                <p className="text-sm opacity-80">info.indiaelevate@gmail.com</p>
              </div>
    
              {/* Right Form */}
              <div className="p-10 md:w-2/3">
                <form onSubmit={handleSubmit(sendEmail)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input {...register("name")} placeholder="Name" className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none" required />
                    <input {...register("phone")} placeholder="Phone" className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none" />
                  </div>
                  <input {...register("email")} type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none" required />
                  <input {...register("org_name")} placeholder="Organizations's Name" className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none" required />
                  <select {...register("role")} className="w-full p-3 rounded-lg bg-slate-800 border border-white/20 text-white focus:border-blue-500 focus:outline-none" required>
                    <option value="School">School Principal</option>
                    <option value="Parent">Parent</option>
                    <option value="Partner">CSR Partner</option>
                  </select>
                  <textarea {...register("message")} placeholder="Your Requirement" rows={4} className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"></textarea>
                  <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-500 transition shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                    Request Callback
                  </button>
                  {status && <p className="text-center text-sm mt-2">{status}</p>}
                </form>
              </div>
            </div>
          </div>
        </section>
      );
    }
