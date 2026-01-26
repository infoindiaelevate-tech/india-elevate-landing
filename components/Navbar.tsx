// "use client";
// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import Link from 'next/link';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Our Journey', href: '#journey' },
//     { name: 'Products', href: '#products' },
//     { name: 'Services', href: '#services' },
//     { name: 'Impact', href: '#stats' },
//     { name: 'About', href: '#about' },
//   ];

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-primary cursor-pointer">
//           India<span className="text-secondary">Elevate</span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8 items-center">
//           {navLinks.map((link) => (
//             <Link key={link.name} href={link.href} className="text-gray-700 hover:text-primary font-medium transition">
//               {link.name}
//             </Link>
//           ))}
//           <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg">
//             Partner With Us
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X className="text-gray-800" /> : <Menu className="text-gray-800" />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-white absolute w-full shadow-lg flex flex-col items-center py-6 space-y-4">
//           {navLinks.map((link) => (
//             <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-800 font-medium">
//               {link.name}
//             </Link>
//           ))}
//           <button className="bg-primary text-white px-6 py-2 rounded-full w-3/4">Partner With Us</button>
//         </div>
//       )}
//     </nav>
//   );
// }

//version 2

// "use client";
// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
//       <div className="container mx-auto px-6 flex justify-between items-center">
//          {/* Logo Image */}
//          <div className="flex items-center gap-3 mb-4">
//                     <Image 
//                       src="/logo-bg-removed.png" 
//                       alt="India Elevate Logo" 
//                       width={40} 
//                       height={40} 
//                       className="object-contain"
//                     />
//         <div className="text-2xl font-bold text-white cursor-pointer">
//           India<span className="text-blue-400"> Elevate</span>
//         </div>
//         </div>
//         <div className="hidden md:flex space-x-8 items-center">
//           {['Journey', 'Products', 'Services', 'Testimonials', 'About'].map((item) => (
//             <Link key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white font-medium transition">
//               {item}
//             </Link>
//           ))}
//           <Link 
//             href="/#contact" 
//             className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-500 transition shadow-[0_0_15px_rgba(37,99,235,0.5)]"
//           >
//             Partner With Us
//           </Link>
//         </div>

//         <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X /> : <Menu />}
//         </button>
//       </div>
      
//       {/* Mobile Menu (Glass) */}
//       {isOpen && (
//         <div className="md:hidden bg-slate-900/95 backdrop-blur-xl absolute w-full border-b border-white/10 flex flex-col items-center py-6 space-y-4">
//             {['Journey', 'Products', 'Services', 'Testimonials', 'About'].map((item) => (
//             <Link key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white font-medium transition">
//               {item}
//             </Link>
//           ))}
//          {/* ✅ UPDATED: Mobile Button Link */}
//          <Link 
//             href="/#contact" 
//             onClick={() => setIsOpen(false)}
//             className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold"
//           >
//             Partner With Us
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }

//version 3

"use client";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ⚡ FIX: Custom Smooth Scroll Handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault(); // Stop Next.js from jumping instantly
    setIsOpen(false); // Close mobile menu if open

    // Extract the ID (e.g., "#journey" -> "journey")
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);

    // Scroll nicely
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: 'Our Journey', href: '#journey' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    // { name: 'Impact', href: '#testimonials' }, // Mapped 'Impact' text to 'stats' ID
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
      <div className="flex items-center gap-3 mb-4">
                     <Image 
                       src="/india-elevate-landing/logo-bg-removed.png" 
                       alt="India Elevate Logo" 
                       width={40} 
                       height={40} 
                       className="object-contain"
                    />
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-400 cursor-pointer" onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          India<span className="text-[#fd901d]"> Elevate</span>
        </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)} // 👈 Attach Handler Here
              className="text-gray-300 hover:text-white font-medium transition cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="#contact" 
            onClick={(e) => handleScroll(e, "#contact")} // 👈 Attach Handler Here
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-500 transition shadow-[0_0_15px_rgba(37,99,235,0.5)] cursor-pointer"
          >
            Partner With Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 absolute w-full flex flex-col items-center py-6 space-y-4 shadow-xl border-t border-white/10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)} // 👈 Attach Handler Here
              className="text-gray-300 hover:text-white font-medium cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="#contact" 
            onClick={(e) => handleScroll(e, "#contact")} // 👈 Attach Handler Here
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold cursor-pointer"
          >
            Partner With Us
          </Link>
        </div>
      )}
    </nav>
  );
}