import React from 'react';
import { FaFacebook, FaWhatsapp, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { icon: FaFacebook, href: "https://www.facebook.com",  color: "hover:text-blue-400"  },
    { icon: FaWhatsapp, href: "https://wa.me/27645582706", color: "hover:text-green-400" },
    { icon: FaLinkedin, href: "https://www.linkedin.com",  color: "hover:text-blue-400"  },
    { icon: FaTwitter,  href: "https://www.twitter.com",   color: "hover:text-sky-400"   },
  ];

  const quickLinks = [
    { to: "/",       label: "Home" },
    { to: "/about",  label: "About Us" },
    { to: "/plans",  label: "Funeral Plans" },
    { to: "/contact",label: "Contact" },
  ];

  const planLinks = [
    { to: "/plans/1", label: "Bespoke Plan – R100/m" },
    { to: "/plans/2", label: "Premium Plan – R160/m" },
    { to: "/plans/3", label: "Executive Plan – R220/m" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="bg-cyan-700 text-white p-2 rounded-xl">
                <ShieldCheck size={20} strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-none">MMD Bespoke</div>
                <div className="text-cyan-500 text-[9px] font-bold tracking-[0.22em] uppercase mt-0.5">Funerals</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Honouring Lives, Embracing Memories. Providing dignified and personalised funeral protection across South Africa.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, href, color }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all ${color}`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm hover:text-cyan-400 transition flex items-center gap-1.5">
                    <span className="text-cyan-700 text-xs">›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plans */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm tracking-wide">Our Plans</h4>
            <ul className="space-y-2.5">
              {planLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm hover:text-cyan-400 transition flex items-center gap-1.5">
                    <span className="text-cyan-700 text-xs">›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm tracking-wide">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm">
                <Phone size={14} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+27645582706" className="hover:text-cyan-400 transition block">064 558 2706</a>
                  <a href="tel:+27729998983" className="hover:text-cyan-400 transition block">072 999 8983</a>
                </div>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Mail size={14} className="text-cyan-500 flex-shrink-0" />
                <a href="mailto:info@mmbespoke.co.za" className="hover:text-cyan-400 transition">info@mmbespoke.co.za</a>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <MapPin size={14} className="text-cyan-500 flex-shrink-0" />
                South Africa
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
          <p>© {year} MMD Bespoke Funerals. All rights reserved.</p>
          <p className="text-slate-600">Providing dignified services with compassion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
