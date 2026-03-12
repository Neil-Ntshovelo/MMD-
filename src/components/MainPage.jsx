import React from "react";
import { ShieldCheck, Users, HeartHandshake, Clock, Award, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    icon:  ShieldCheck,
    title: "No Waiting Period",
    text:  "Immediate protection so your family is covered from day one, giving you peace of mind in uncertain times.",
    color: "from-cyan-500 to-cyan-700",
  },
  {
    icon:  Users,
    title: "Family Coverage",
    text:  "Flexible funeral plans protecting up to 14 members — ensuring everyone important to you is taken care of.",
    color: "from-sky-500 to-cyan-600",
  },
  {
    icon:  HeartHandshake,
    title: "Dignified Services",
    text:  "Professional and respectful funeral services tailored to honour your loved one's life and lasting legacy.",
    color: "from-teal-500 to-cyan-700",
  },
  {
    icon:  Clock,
    title: "24hr Claim Turnaround",
    text:  "Fast claim processing with SMS updates at every step. Your peace of mind is our top priority.",
    color: "from-cyan-600 to-slate-700",
  },
  {
    icon:  Award,
    title: "Trusted Excellence",
    text:  "Serving thousands of South African families with dignity, respect, and unwavering compassionate care.",
    color: "from-sky-600 to-cyan-700",
  },
  {
    icon:  Phone,
    title: "Dedicated Support",
    text:  "Our caring advisors are available to guide you through every step of the process with empathy.",
    color: "from-cyan-500 to-sky-700",
  },
];

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const MainPage = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">

      {/* Header */}
      <div className="text-center mb-16">
        <span className="section-label">Why Choose Us</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          Funeral Protection You Can Trust
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          MMD Bespoke Funerals provides dignified and personalised funeral protection
          designed to honour lives and support South African families.
        </p>
      </div>

      {/* Feature Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={i}
              variants={item}
              className="group relative bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-default"
            >
              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${f.color} opacity-5 rounded-bl-[70px] group-hover:opacity-10 transition-opacity duration-300`} />

              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${f.color} text-white rounded-xl mb-4 shadow-md`}>
                <Icon size={22} />
              </div>

              <h3 className="font-bold text-lg text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.text}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom CTA bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-14 bg-gradient-to-r from-slate-900 to-cyan-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white"
      >
        <div>
          <p className="font-bold text-xl mb-1">Ready to protect your family?</p>
          <p className="text-slate-300 text-sm">Get covered today — no waiting period, immediate protection.</p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Link to="/plans" className="bg-cyan-600 hover:bg-cyan-700 text-white px-7 py-2.5 rounded-xl font-semibold text-sm transition shadow-lg">
            View Plans
          </Link>
          <a href="tel:+27645582706" className="border border-white/40 text-white px-7 py-2.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition">
            Call Us
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MainPage;
