// import { Bot, Code, Cpu } from 'lucide-react';

// const products = [
//   { title: "STEM Kits", icon: <Cpu />, desc: "Hands-on science learning." },
//   { title: "Robotics Kits", icon: <Bot />, desc: "Beginner to Advanced bots." },
//   { title: "AI Platforms", icon: <Code />, desc: "Interactive coding dashboards." },
// ];

// export default function Products() {
//   return (
//     <section id="products" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-12 text-secondary">Our Products</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {products.map((p, i) => (
//             <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2 cursor-pointer group">
//               <div className="text-primary mb-4 group-hover:scale-110 transition">{p.icon}</div>
//               <h3 className="text-xl font-bold mb-2">{p.title}</h3>
//               <p className="text-gray-600 mb-4">{p.desc}</p>
//               <span className="text-primary font-semibold">Learn More →</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


//version 2
import { Bot, Code, Cpu } from 'lucide-react';

const products = [
  { title: "STEM Kits", icon: <Cpu />, desc: "Hands-on science learning." },
  { title: "Robotics Kits", icon: <Bot />, desc: "Beginner to Advanced bots." },
  { title: "AI Platforms", icon: <Code />, desc: "Interactive coding dashboards." },
];

export default function Products() {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition hover:-translate-y-2 cursor-pointer group">
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition">{p.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{p.title}</h3>
              <p className="text-gray-400 mb-4">{p.desc}</p>
              <span className="text-blue-400 font-semibold group-hover:text-blue-300">Learn More →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}