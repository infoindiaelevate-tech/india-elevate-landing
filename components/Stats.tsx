"use client";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: "Schools Partnered", value: 150, suffix: "+" },
  { label: "Students Impacted", value: 25000, suffix: "+" },
  { label: "States Covered", value: 12, suffix: "" },
  { label: "Competitions Won", value: 45, suffix: "+" },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section id="stats" className="py-20 bg-secondary text-white relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <h3 className="text-4xl font-bold text-accent">
                {inView ? <CountUp end={stat.value} duration={2.5} /> : 0}
                {stat.suffix}
              </h3>
              <p className="mt-2 text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-gray-400 text-sm tracking-widest uppercase">Trusted by schools across India</p>
      </div>
    </section>
  );
}