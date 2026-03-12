import React from "react";
import { FaBullseye, FaHandshake, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Testimony from "./Testimony";
import { Shield, Users, Clock, Award } from "lucide-react";

const visionData = [
  { content: "MMD Bespoke Funerals aims to set the benchmark for dignified funeral services in South Africa by combining traditional values with modern professional service delivery." },
  { content: "We strive to empower communities by creating opportunities that enable individuals to participate in the mainstream economy through entrepreneurship." },
  { content: "Our goal is to provide guidance, resources, and support that help individuals and families navigate challenging moments with confidence and dignity." },
  { content: "Through innovation and service excellence, we envision a future where funeral services uplift communities while preserving respect and honour for every life." },
];

const missionData = [
  { icon: <FaBullseye />, title: "Empower Communities", description: "We empower families and communities through dignified funeral solutions and compassionate support." },
  { icon: <FaHandshake />, title: "Build Partnerships",  description: "We collaborate with local businesses and partners to create sustainable economic opportunities."    },
  { icon: <FaChartLine />, title: "Drive Growth",        description: "Our services contribute to community development and long-term economic sustainability."           },
];

const stats = [
  { icon: Users,  value: "10,000+", label: "Families Served"  },
  { icon: Shield, value: "3+ Yrs",  label: "Years of Service" },
  { icon: Clock,  value: "24hr",    label: "Claim Response"   },
  { icon: Award,  value: "98%",     label: "Satisfaction"     },
];

const About = () => (
  <>
    {/* Hero */}
    <section className="relative bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 text-white py-28 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_50%_0%,_#06b6d4_0%,_transparent_65%)]" />
      <div className="relative max-w-4xl mx-auto">
        <span className="inline-block bg-cyan-600/30 border border-cyan-500/40 text-cyan-300 text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
          About Us
        </span>
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
          Honouring Lives<br />With Dignity
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          At <span className="font-bold text-white">MMD Bespoke Funerals</span>, we are committed to delivering
          compassionate funeral services that support families during their most difficult moments.
        </p>
      </div>
    </section>

    {/* Stats bar */}
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <Icon size={22} className="text-cyan-600 mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-black text-slate-900">{s.value}</p>
              <p className="text-slate-500 text-sm">{s.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* Vision */}
    <section className="max-w-6xl mx-auto py-20 px-6">
      <div className="text-center mb-12">
        <span className="section-label">Our Vision</span>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">What We Stand For</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {visionData.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border-l-4 border-cyan-600"
          >
            <p className="text-slate-700 leading-relaxed">{v.content}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Mission */}
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Our Mission</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">How We Make a Difference</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {missionData.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center group"
            >
              <div className="text-cyan-600 text-3xl mb-4 flex justify-center group-hover:scale-110 transition">
                {m.icon}
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">{m.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{m.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-to-r from-slate-900 to-cyan-900 text-center text-white">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-black mb-4 tracking-tight">Secure Your Family's Future</h2>
        <p className="text-slate-300 mb-8">
          Our funeral plans provide peace of mind by ensuring your loved ones receive dignified support when it matters most.
        </p>
        <Link
          to="/plans"
          className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-4 rounded-xl text-base font-bold transition shadow-lg"
        >
          View Funeral Plans
        </Link>
      </div>
    </section>

    <Testimony />
  </>
);

export default About;
