import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { ArrowLeft, Phone, Shield, Users, DollarSign, Star } from "lucide-react";

import planImage1 from "../assets/plan1.jpg";
import planImage2 from "../assets/plan2.jpg";
import planImage3 from "../assets/plan3.jpg";

const planDetails = {
  1: {
    title: "Bespoke Plan", price: "R100/m", cash: "R10,000", coverage: "14 Members",
    description: "Entry-level funeral cover offering reliable protection with dignified services for families seeking affordable peace of mind.",
    services: ["Casket","Tombstone","Full Service Repatriation","Hearse","Family Cars x2","Radio Announcement","Cemetery Decor (50 pax)","VIP Refreshments","Funeral Programs (100)","Airtime Support R200"],
    image: planImage1,
  },
  2: {
    title: "Premium Plan", price: "R160/m", cash: "R25,000", coverage: "14 Members",
    description: "Our most popular plan providing enhanced services and greater support for families during difficult times.",
    services: ["Casket","Tombstone","Full Service Repatriation","Hearse","Family Cars x3","Radio Announcement","Coffin Spray (Fresh Flowers)","Cemetery Decor (50 pax)","VIP Refreshments","Funeral Programs (100)","Airtime Support R300","Sound System"],
    image: planImage2,
  },
  3: {
    title: "Executive Plan", price: "R220/m", cash: "R35,000", coverage: "14 Members",
    description: "Our most comprehensive funeral plan delivering premium services and luxury arrangements for dignified farewells.",
    services: ["Luxury Casket","Tombstone","Full Service Repatriation","Luxury Family Cars x4","Radio Announcement","Coffin Spray (Fresh Flowers)","Sympathy Flowers","VIP Refreshments","VIP Toilet","Funeral Programs (150)","Airtime Support R300","Sound System"],
    image: planImage3,
  },
};

const trustPoints = [
  { icon: Shield, title: "Immediate Cover",    desc: "No waiting period for qualifying members."              },
  { icon: Star,   title: "Trusted Service",    desc: "Professional funeral support with dignity and care."     },
  { icon: Users,  title: "Family Protection",  desc: "Coverage designed for South African families."           },
];

const PlanDetails = () => {
  const { id }    = useParams();
  const navigate  = useNavigate();
  const plan      = planDetails[id];

  if (!plan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button onClick={() => navigate("/plans")} className="bg-cyan-700 text-white px-6 py-3 rounded-xl font-semibold">
          Back to Plans
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="relative h-[420px] md:h-[500px] overflow-hidden">
        <img src={plan.image} alt={plan.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-8 md:px-16">
          <button
            onClick={() => navigate("/plans")}
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition w-fit"
          >
            <ArrowLeft size={16} /> Back to Plans
          </button>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2">{plan.title}</h1>
          <p className="text-cyan-400 text-2xl font-black mb-3">{plan.price}</p>
          <p className="text-slate-300 text-sm max-w-md leading-relaxed">{plan.description}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: DollarSign, label: "Cash Benefit",    value: plan.cash,     sub: "Paid to support funeral arrangements" },
            { icon: Users,      label: "Family Coverage", value: plan.coverage, sub: "Cover your entire household"         },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-cyan-600 text-center"
              >
                <Icon className="text-cyan-700 mx-auto mb-3 w-10 h-10" />
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">{card.label}</p>
                <p className="text-4xl font-black text-slate-900">{card.value}</p>
                <p className="text-slate-400 text-xs mt-2">{card.sub}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Services */}
        <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-cyan-600">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <FaCheckCircle className="text-cyan-600" /> Included Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {plan.services.map((svc, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl">
                <FaCheckCircle className="text-cyan-600 flex-shrink-0" />
                <span className="text-slate-700 text-sm font-medium">{svc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust */}
        <div className="bg-gradient-to-br from-slate-900 to-cyan-900 text-white rounded-2xl p-10">
          <h2 className="text-xl font-bold mb-8 text-center">Why Families Choose MMD</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {trustPoints.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={i} className="bg-white/10 rounded-xl p-6">
                  <Icon size={28} className="mx-auto mb-3 text-cyan-400" />
                  <h3 className="font-bold mb-1">{t.title}</h3>
                  <p className="text-white/70 text-sm">{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://wa.me/27645582706"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold transition shadow-lg"
          >
            <FaWhatsapp size={20} /> Apply via WhatsApp
          </a>
          <a
            href="tel:+27645582706"
            className="flex items-center justify-center gap-3 bg-cyan-700 hover:bg-cyan-800 text-white py-4 rounded-2xl font-bold transition shadow-lg"
          >
            <Phone size={18} /> Call an Advisor
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
