// export default function Journey() {
//     const milestones = [
//       { year: "2018", title: "Inception", desc: "Started with a vision to revolutionize STEM in 5 schools." },
//       { year: "2020", title: "Digital Shift", desc: "Launched AI & Coding platforms during the pandemic." },
//       { year: "2023", title: "National Expansion", desc: "Partnered with 100+ institutions across 10 states." },
//     ];
  
//     return (
//       <section id="journey" className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12 text-secondary">Our Journey</h2>
//           <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
//             {milestones.map((item, idx) => (
//               <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
//                 <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
//                   {/* Icon placeholder */}
//                 </div>
//                 <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded border border-slate-200 shadow">
//                   <div className="flex items-center justify-between space-x-2 mb-1">
//                     <span className="font-bold text-slate-900">{item.title}</span>
//                     <time className="font-caveat font-medium text-primary">{item.year}</time>
//                   </div>
//                   <div className="text-slate-500">{item.desc}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//version 2
export default function Journey() {
    const milestones = [
      { year: "", title: "Step 1: The Problem We Saw", desc: "We saw a gap between what students learn in classrooms and the real-world skills required in STEM, Robotics, and AI." },
      { year: "", title: "Step 2: The Solution We’re Building", desc: "India Elevate is building practical, hands-on learning programs that make STEM, Robotics, and AI accessible, engaging, and future-ready." },
      { year: "", title: "Step 3: The Impact We Aim to Create", desc: "Our goal is to empower schools and students across India with future-ready skills—starting small, growing responsibly, and scaling with impact." },
    ];
  
    return (
      <section id="journey" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Journey</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500 before:to-transparent">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-400 bg-slate-900 text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
                {/* Glass Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition duration-300">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <span className="font-bold text-white">{item.title}</span>
                    <time className="font-mono font-bold text-blue-400">{item.year}</time>
                  </div>
                  <div className="text-gray-300 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }