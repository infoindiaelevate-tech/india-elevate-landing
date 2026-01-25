// import Navbar from '@/components/Navbar';
// import Hero from '@/components/Hero';
// import Journey from '@/components/Journey';
// import Products from '@/components/Products';
// // Import Services, Testimonials, About... (Assuming you created files following the patterns above)
// import Stats from '@/components/Stats';
// import Contact from '@/components/Contact';
// import Footer from '@/components/Footer';

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <Navbar />
//       <Hero />
//       <Stats />
//       <Journey />
//       <Products />
//       {/* <Services />  -- Add similar to Products */}
//       {/* <Testimonials /> -- Add similar to Products but with quotes */}
//       {/* <About /> -- Add similar to Hero but with text/image reversed */}
//       <Contact />
//       <Footer />
//     </main>
//   );
// }

//version 2

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Journey from '@/components/Journey';
import Products from '@/components/Products';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
export default function Home() {
  return (
    <main className="relative min-h-screen font-sans text-white">
      
      {/* 🌍 GLOBAL FIXED BACKGROUND VIDEO */}
      <div className="fixed top-0 left-0 w-full h-full z-[0] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bg2_video.mp4" type="video/mp4" />
        </video>
        {/* Heavy overlay to ensure text readability on all sections */}
        <div className="absolute inset-0 bg-black/60 "></div>
      </div>

      {/* 📜 SCROLLABLE CONTENT */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        {/* Sections now just need to be transparent or glass */}
        <Hero />
        {/* <Stats /> */}
        <Journey />
        <Products />
        <Services />
        <Testimonials />
        <About />
        <Contact />
        
        {/* Footer stays opaque/solid as requested */}
        <Footer />
      </div>
    </main>
  );
}