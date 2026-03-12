import React, { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { Users, Clock, Star, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { icon: Users, end: 10000, suffix: "+",      separator: ",", label: "Families Protected", desc: "Across South Africa"   },
  { icon: Award, end: 3,     suffix: "+ Years", separator: "",  label: "Years of Service",   desc: "Trusted & established" },
  { icon: Clock, end: 24,    suffix: "hr",      separator: "",  label: "Claim Turnaround",   desc: "Fast claim processing" },
  { icon: Star,  end: 98,    suffix: "%",       separator: "",  label: "Satisfaction Rate",  desc: "Client happiness"      },
];

const Impact = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-slate-900 py-20 px-6 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_50%_0%,_#0e7490_0%,_transparent_65%)]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
          <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Our Impact</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2 tracking-tight">Making a Real Difference</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center hover:bg-white/8 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-600/20 text-cyan-400 rounded-xl mb-4 group-hover:bg-cyan-600/30 transition">
                  <Icon size={22} />
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">
                  {inView
                    ? <CountUp start={0} end={s.end} duration={2.5} suffix={s.suffix} separator={s.separator} />
                    : <span>0{s.suffix}</span>
                  }
                </div>
                <p className="text-slate-200 font-semibold text-sm">{s.label}</p>
                <p className="text-slate-500 text-xs mt-0.5">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;
