import React, { useState, useEffect, useRef } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const planLinks = [
  { to: "/plans/1", label: "Bespoke Plan",   sub: "R100/m — R10,000 benefit" },
  { to: "/plans/2", label: "Premium Plan",   sub: "R160/m — R25,000 benefit" },
  { to: "/plans/3", label: "Executive Plan", sub: "R220/m — R35,000 benefit" },
];

const NavLinks = ({ closeMenu, mobile }) => {
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-cyan-700" : "text-slate-700 hover:text-cyan-700"
    }`;

  const coreLinks = [
    { to: "/",       label: "Home",    exact: true },
    { to: "/about",  label: "About" },
    { to: "/contact",label: "Contact" },
  ];

  return (
    <div className={`flex ${mobile ? "flex-col gap-5" : "items-center gap-7"}`}>
      {coreLinks.map((l) => (
        <RouterNavLink key={l.to} to={l.to} end={l.exact} onClick={closeMenu} className={linkClass}>
          {({ isActive }) => (
            <>
              {l.label}
              {!mobile && isActive && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-cyan-700 rounded-full"
                />
              )}
            </>
          )}
        </RouterNavLink>
      ))}

      {/* Dropdown */}
      <div className="relative" ref={dropRef}>
        <button
          onClick={() => setDropOpen(!dropOpen)}
          className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
            dropOpen ? "text-cyan-700" : "text-slate-700 hover:text-cyan-700"
          }`}
        >
          Funeral Plans
          <ChevronDown size={14} className={`transition-transform duration-300 ${dropOpen ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {dropOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className={
                mobile
                  ? "mt-2 flex flex-col gap-1 pl-4 border-l-2 border-cyan-200"
                  : "absolute top-9 left-0 bg-white shadow-2xl border border-slate-100 rounded-2xl p-2 w-72 z-50"
              }
            >
              {planLinks.map((p) => (
                <RouterNavLink
                  key={p.to}
                  to={p.to}
                  onClick={() => { closeMenu(); setDropOpen(false); }}
                  className="flex flex-col gap-0.5 p-3 rounded-xl hover:bg-cyan-50 transition group"
                >
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-cyan-700 transition">{p.label}</span>
                  <span className="text-xs text-slate-400">{p.sub}</span>
                </RouterNavLink>
              ))}
              <div className="border-t border-slate-100 mt-1 pt-1">
                <RouterNavLink
                  to="/plans"
                  onClick={() => { closeMenu(); setDropOpen(false); }}
                  className="block text-center text-xs font-semibold text-cyan-700 hover:text-cyan-900 py-2"
                >
                  View All Plans →
                </RouterNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!mobile && (
        <RouterNavLink
          to="/contact"
          className="ml-2 bg-cyan-700 text-white text-sm px-5 py-2.5 rounded-xl font-semibold hover:bg-cyan-800 shadow hover:shadow-md transition-all"
        >
          Get a Quote
        </RouterNavLink>
      )}

      {mobile && (
        <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
          <RouterNavLink
            to="/contact"
            onClick={closeMenu}
            className="block text-center bg-cyan-700 text-white text-sm py-2.5 rounded-xl font-semibold"
          >
            Get a Quote
          </RouterNavLink>
          <a href="tel:+27645582706" className="flex items-center justify-center gap-2 text-sm text-slate-500">
            <Phone size={13} className="text-cyan-600" /> 064 558 2706
          </a>
        </div>
      )}
    </div>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/96 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm shadow-sm"
      }`}
    >
      {/* Top contact bar */}
      <div className="hidden md:flex bg-slate-900 text-white/70 text-xs px-8 py-1.5 justify-end items-center gap-6">
        <a href="tel:+27645582706" className="flex items-center gap-1.5 hover:text-cyan-400 transition">
          <Phone size={11} /> 064 558 2706
        </a>
        <a href="mailto:info@mmbespoke.co.za" className="flex items-center gap-1.5 hover:text-cyan-400 transition">
          <Mail size={11} /> info@mmbespoke.co.za
        </a>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3.5">
        <Logo />
        <nav className="hidden md:flex items-center">
          <NavLinks closeMenu={() => {}} />
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-700 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-5">
              <NavLinks closeMenu={() => setIsOpen(false)} mobile />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
