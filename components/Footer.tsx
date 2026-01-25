// import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="relative z-20 bg-slate-950 text-white py-12 border-t border-white/10">
//       <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
//         <div>
//           <h4 className="text-xl font-bold mb-4">IndiaElevate</h4>
//           <p className="text-gray-400 text-sm">Building the future of India through innovation and hands-on learning.</p>
//         </div>
//         <div>
//           <h4 className="font-bold mb-4">Quick Links</h4>
//           <ul className="space-y-2 text-sm text-gray-400">
//             <li>About Us</li>
//             <li>Our Products</li>
//             <li>Success Stories</li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-bold mb-4">Contact</h4>
//           <p className="text-sm text-gray-400">123 Innovation Park, Bangalore, India</p>
//         </div>
//         <div>
//           <h4 className="font-bold mb-4">Follow Us</h4>
//           <div className="flex space-x-4">
//             <Facebook className="w-5 h-5 hover:text-primary cursor-pointer" />
//             <Twitter className="w-5 h-5 hover:text-primary cursor-pointer" />
//             <Linkedin className="w-5 h-5 hover:text-primary cursor-pointer" />
//           </div>
//         </div>
//       </div>
//       <div className="border-t border-gray-700 mt-8 pt-8 text-center text-xs text-gray-500">
//         © 2024 India Elevate. All rights reserved.
//       </div>
//     </footer>
//   );
// }

import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative z-50 bg-slate-950 text-white py-12 border-t border-white/10 w-full">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        
        {/* 1️⃣ First Column: Logo + Brand Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            {/* Logo Image */}
            <Image 
              src="/logo-bg-removed.png" 
              alt="India Elevate Logo" 
              width={40} 
              height={40} 
              className="object-contain"
            />
            <h4 className="text-xl font-bold">India Elevate</h4>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Building the future of India through innovation, AI, and hands-on learning.
          </p>
        </div>

        {/* 2️⃣ Second Column: Quick Links */}
        <div>
          <h4 className="font-bold mb-4 text-gray-200">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
            <li><a href="#products" className="hover:text-blue-400 transition">Our Products</a></li>
            <li><a href="#testimonials" className="hover:text-blue-400 transition">Success Stories</a></li>
          </ul>
        </div>

        {/* 3️⃣ Third Column: Contact */}
        <div>
          <h4 className="font-bold mb-4 text-gray-200">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>123 Innovation Park, Bangalore, India</li>
            <li>info.indiaelevate@gmail.com</li>
            <li>+91 1234567890 </li>
          </ul>
        </div>

        {/* 4️⃣ Fourth Column: Socials */}
        <div>
          <h4 className="font-bold mb-4 text-gray-200">Follow Us</h4>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer transition transform hover:scale-110" />
            <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer transition transform hover:scale-110" />
            <Linkedin className="w-5 h-5 hover:text-blue-600 cursor-pointer transition transform hover:scale-110" />
            <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer transition transform hover:scale-110" />
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
        © 2024 India Elevate. All rights reserved.
      </div>
    </footer>
  );
}