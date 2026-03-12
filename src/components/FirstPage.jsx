import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import cover1 from "../assets/cover.jpg";
import cover2 from "../assets/family.jpg";
import cover3 from "../assets/claims.jpg";
import MainPage from "./MainPage";
import Impact from "./Impact";
import Plans from "./Plans";
import Claims from "./Claims";

const slides = [
  {
    image: cover1,
    tag:      "Trusted Funeral Protection",
    title:    "MMD Bespoke Funerals",
    subtitle: "Honouring Lives • Dignified Farewells",
    cta:      "View Plans",
    ctaLink:  "/plans",
  },
  {
    image: cover2,
    tag:      "Family First",
    title:    "Family Protection Plans",
    subtitle: "Affordable Funeral Cover For Complete Peace Of Mind",
    cta:      "Get Covered",
    ctaLink:  "/plans",
  },
  {
    image: cover3,
    tag:      "Fast Claims Support",
    title:    "Claims Resolved In 24hrs",
    subtitle: "Standing With Families When It Matters Most",
    cta:      "Our Plans",
    ctaLink:  "/plans",
  },
];

const floatingStats = [
  { value: "10,000+", label: "Families Protected" },
  { value: "3+",      label: "Years of Service"   },
  { value: "24hr",    label: "Claim Support"       },
  { value: "98%",     label: "Satisfaction Rate"   },
];

const FirstPage = () => {
  const navigate  = useNavigate();
  const [index, setIndex] = useState(0);
  const timerRef  = useRef(null);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex((p) => (p + 1) % slides.length), 7000);
  };

  useEffect(() => { resetTimer(); return () => clearInterval(timerRef.current); }, []);

  const goNext = () => { setIndex((p) => (p + 1) % slides.length); resetTimer(); };
  const goPrev = () => { setIndex((p) => (p - 1 + slides.length) % slides.length); resetTimer(); };

  const slide = slides[index];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[620px] overflow-hidden">

        {/* Background image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.image}
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/65 via-slate-900/45 to-slate-900/80" />

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.65 }}
              className="flex flex-col items-center max-w-4xl"
            >
              {/* Tag pill */}
              <span className="inline-flex items-center gap-2 bg-cyan-600/25 backdrop-blur-sm border border-cyan-400/35 text-cyan-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
                {slide.tag}
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-5 drop-shadow-lg">
                {slide.title}
              </h1>

              <p className="text-lg sm:text-xl text-slate-200 mb-9 max-w-2xl font-light leading-relaxed">
                {slide.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate(slide.ctaLink)}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-9 py-3.5 rounded-xl font-bold shadow-lg shadow-cyan-900/50 hover:shadow-xl transition-all text-sm tracking-wide"
                >
                  {slide.cta}
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="border-2 border-white/60 text-white px-9 py-3.5 rounded-xl font-bold hover:bg-white/10 backdrop-blur-sm transition-all text-sm tracking-wide"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating stat badges (desktop) */}
        <div className="absolute bottom-16 left-0 right-0 hidden md:flex justify-center gap-3 px-6">
          {floatingStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
              className="bg-white/15 backdrop-blur-md border border-white/25 text-white text-center px-5 py-3 rounded-2xl min-w-[110px]"
            >
              <p className="font-black text-xl leading-none">{s.value}</p>
              <p className="text-xs text-white/65 mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setIndex(i); resetTimer(); }}
              className={`transition-all duration-300 rounded-full ${
                i === index ? "bg-white w-6 h-2" : "bg-white/40 w-2 h-2"
              }`}
            />
          ))}
        </div>

        {/* Scroll hint (mobile) */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-16 md:hidden left-1/2 -translate-x-1/2 text-white/50"
        >
          <ArrowDown size={18} />
        </motion.div>

        {/* Arrow nav */}
        <button
          onClick={goPrev}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 backdrop-blur-md p-2.5 rounded-full text-white transition"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={goNext}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 backdrop-blur-md p-2.5 rounded-full text-white transition"
        >
          <ChevronRight size={22} />
        </button>
      </section>

      {/* ── SECTIONS ── */}
      <MainPage />
      <Impact />
      <Plans showHero={false} />
      <Claims />
    </>
  );
};

export default FirstPage;
