import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { ShieldCheck, Star, Users } from "lucide-react";

const plans = [
  {
    id:          1,
    title:       "Bespoke Plan",
    price:       "R100",
    period:      "p/m",
    cash:        "R10,000",
    coverage:    "Up to 14 Members",
    description: "Affordable essential funeral protection ensuring dignity and respect for your loved ones.",
    highlights:  ["No Waiting Period", "Cash Benefit Paid Fast", "14 Members Covered", "Radio Announcement"],
  },
  {
    id:          2,
    title:       "Premium Plan",
    price:       "R160",
    period:      "p/m",
    cash:        "R25,000",
    coverage:    "Up to 14 Members",
    description: "Enhanced funeral protection with added family support and premium memorial services.",
    highlights:  ["Everything in Bespoke", "Fresh Flower Coffin Spray", "Sound System", "R300 Airtime Support"],
    featured:    true,
  },
  {
    id:          3,
    title:       "Executive Plan",
    price:       "R220",
    period:      "p/m",
    cash:        "R35,000",
    coverage:    "Up to 14 Members",
    description: "Comprehensive funeral coverage designed for a dignified and premium farewell experience.",
    highlights:  ["Everything in Premium", "Luxury Casket", "VIP Toilet", "4 Luxury Family Cars"],
  },
];

const PlanCard = ({ plan, onReadMore, index }) => {
  const { id, title, price, period, cash, coverage, description, highlights, featured } = plan;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      viewport={{ once: true }}
      className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 ${
        featured
          ? "bg-gradient-to-b from-cyan-700 to-cyan-900 text-white shadow-2xl shadow-cyan-900/50 ring-2 ring-cyan-400 md:scale-[1.04]"
          : "bg-white text-slate-800 shadow-lg hover:shadow-xl border border-slate-100"
      }`}
    >
      {featured && (
        <div className="absolute top-0 left-0 right-0 bg-cyan-500 text-white text-center py-1.5 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-1.5">
          <Star size={10} fill="currentColor" /> Most Popular <Star size={10} fill="currentColor" />
        </div>
      )}

      <div className={`p-8 flex flex-col flex-grow ${featured ? "pt-11" : ""}`}>
        <h3 className={`text-xl font-bold mb-4 ${featured ? "text-cyan-200" : "text-cyan-700"}`}>{title}</h3>

        {/* Price */}
        <div className="mb-5">
          <div className="flex items-baseline gap-1">
            <span className={`text-5xl font-black ${featured ? "text-white" : "text-slate-900"}`}>{price}</span>
            <span className={`text-sm font-medium ${featured ? "text-cyan-300" : "text-slate-500"}`}>{period}</span>
          </div>
          <p className={`text-xs mt-0.5 ${featured ? "text-cyan-300" : "text-slate-400"}`}>Monthly Premium</p>
        </div>

        {/* Cash benefit */}
        <div className={`rounded-xl p-4 mb-5 ${featured ? "bg-white/15" : "bg-cyan-50"}`}>
          <p className={`text-xs font-semibold mb-0.5 ${featured ? "text-cyan-300" : "text-slate-500"}`}>Cash Benefit</p>
          <p className={`text-2xl font-black ${featured ? "text-white" : "text-cyan-800"}`}>{cash}</p>
        </div>

        {/* Coverage */}
        <div className="flex items-center gap-2 mb-4">
          <Users size={14} className={featured ? "text-cyan-300" : "text-cyan-600"} />
          <p className={`text-sm font-medium ${featured ? "text-cyan-200" : "text-slate-600"}`}>{coverage}</p>
        </div>

        <p className={`text-sm leading-relaxed mb-5 ${featured ? "text-cyan-100" : "text-slate-500"}`}>{description}</p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6 flex-grow">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <FaCheckCircle className={featured ? "text-cyan-300 flex-shrink-0" : "text-cyan-600 flex-shrink-0"} />
              <span className={featured ? "text-cyan-100" : "text-slate-600"}>{h}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => onReadMore(id)}
          className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all ${
            featured
              ? "bg-white text-cyan-700 hover:bg-cyan-50 shadow-lg"
              : "bg-cyan-700 text-white hover:bg-cyan-800 shadow-md"
          }`}
        >
          View Plan Details
        </button>
      </div>
    </motion.div>
  );
};

const Plans = ({ showHero = true }) => {
  const navigate = useNavigate();
  const handleReadMore = (id) => navigate(`/plans/${id}`);

  return (
    <div className="bg-slate-50">
      {/* Hero — only on standalone /plans page */}
      {showHero ? (
        <section className="bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 text-white py-28 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <span className="inline-block bg-cyan-600/30 border border-cyan-500/40 text-cyan-300 text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
              Funeral Plans
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-5 tracking-tight leading-tight">
              Protection Built<br />For Your Family
            </h1>
            <p className="text-lg text-slate-300 max-w-xl mx-auto">
              Affordable funeral insurance designed to protect your family and honour every life with dignity.
            </p>
          </div>
        </section>
      ) : (
        <div className="text-center pt-20 pb-4 px-6">
          <span className="section-label">Funeral Plans</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Choose Your Plan</h2>
          <p className="text-slate-500 max-w-xl mx-auto mt-3 text-lg">
            Affordable coverage for every family. No waiting period. Immediate protection.
          </p>
        </div>
      )}

      {/* Cards */}
      <section className={`max-w-6xl mx-auto px-6 pb-24 ${showHero ? "py-16" : "py-12"}`}>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} onReadMore={handleReadMore} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-12 bg-gradient-to-r from-slate-900 to-cyan-900 rounded-2xl p-10 text-center text-white"
        >
          <ShieldCheck size={36} className="text-cyan-400 mx-auto mb-3" />
          <h2 className="text-2xl font-bold mb-2">Protect Your Family Today</h2>
          <p className="text-slate-300 mb-6 text-sm max-w-md mx-auto">
            Speak with our advisors and get immediate funeral coverage. Peace of mind is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-xl font-semibold text-sm transition shadow-lg"
            >
              Get a Quote
            </button>
            <a
              href="https://wa.me/27645582706"
              className="flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 transition"
            >
              <FaWhatsapp size={16} /> WhatsApp Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Plans;
