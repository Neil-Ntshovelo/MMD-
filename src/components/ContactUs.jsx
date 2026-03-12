import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaFacebook, FaWhatsapp, FaLinkedin, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData]   = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!formData.name.trim())    e.name    = 'Name is required';
    if (!formData.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Invalid email address';
    if (!formData.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactCards = [
    {
      icon: Phone, label: "Call Us",
      lines: [{ text: "064 558 2706", href: "tel:+27645582706" }, { text: "072 999 8983", href: "tel:+27729998983" }],
      bg: "from-cyan-50 to-sky-50", iconBg: "bg-cyan-700",
    },
    {
      icon: Mail, label: "Email Us",
      lines: [{ text: "info@mmbespoke.co.za", href: "mailto:info@mmbespoke.co.za" }, { text: "claims@mmbespoke.co.za", href: "mailto:claims@mmbespoke.co.za" }],
      bg: "from-slate-50 to-cyan-50", iconBg: "bg-slate-800",
    },
    {
      icon: MapPin, label: "Find Us",
      lines: [{ text: "South Africa", href: null }, { text: "Nationwide Service", href: null }],
      bg: "from-sky-50 to-cyan-50", iconBg: "bg-sky-600",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 py-24 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_50%_0%,_#06b6d4_0%,_transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block bg-cyan-600/30 border border-cyan-500/40 text-cyan-300 text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Contact Our Team</h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Our compassionate advisors are ready to help you find the right funeral plan for your family.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {contactCards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-br ${c.bg} border border-slate-100 rounded-2xl p-7 text-center shadow-sm hover:shadow-md transition`}
              >
                <div className={`${c.iconBg} text-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-slate-800 mb-3">{c.label}</h3>
                {c.lines.map((ln, j) =>
                  ln.href ? (
                    <a key={j} href={ln.href} className="block text-sm text-slate-600 hover:text-cyan-600 transition mb-0.5">{ln.text}</a>
                  ) : (
                    <p key={j} className="text-sm text-slate-500 mb-0.5">{ln.text}</p>
                  )
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Form + Map */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-black text-slate-900 mb-1 tracking-tight">Send Us a Message</h2>
            <p className="text-slate-400 text-sm mb-7">We'll respond within 24 hours.</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm mb-6">Thank you — we'll be in touch shortly.</p>
                <button onClick={() => setSubmitted(false)} className="text-cyan-600 font-semibold text-sm hover:underline">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: "name",    label: "Full Name",         type: "text",  placeholder: "Your full name"    },
                  { name: "email",   label: "Email Address",     type: "email", placeholder: "your@email.com"    },
                  { name: "phone",   label: "Phone (optional)",  type: "tel",   placeholder: "064 000 0000"      },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">{f.label}</label>
                    <input
                      type={f.type} name={f.name} value={formData[f.name]}
                      onChange={handleChange} placeholder={f.placeholder}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition outline-none focus:ring-2 focus:ring-cyan-500/20 ${
                        errors[f.name]
                          ? "border-red-300 bg-red-50"
                          : "border-slate-200 hover:border-cyan-300 focus:border-cyan-500"
                      }`}
                    />
                    {errors[f.name] && <p className="text-red-500 text-xs mt-1">{errors[f.name]}</p>}
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange}
                    rows={4} placeholder="How can we help you?"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition outline-none focus:ring-2 focus:ring-cyan-500/20 resize-none ${
                      errors.message
                        ? "border-red-300 bg-red-50"
                        : "border-slate-200 hover:border-cyan-300 focus:border-cyan-500"
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition shadow-md disabled:opacity-70"
                >
                  {loading
                    ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    : <><Send size={15} /> Send Message</>
                  }
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100 min-h-[450px]">
            <iframe
              width="100%" height="100%"
              style={{ minHeight: "450px" }}
              frameBorder="0" scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=450&hl=en&q=MMD%20Bespoke%20Funerals&ll=-29.0004206,26.6912809&z=14&ie=UTF8&iwloc=B&output=embed"
              title="MMD Bespoke Funerals Location"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Social links */}
        <div className="max-w-6xl mx-auto mt-10 text-center">
          <p className="text-slate-400 text-sm mb-4">Or connect with us on social media</p>
          <div className="flex justify-center gap-5">
            {[
              { icon: FaFacebook, href: "https://www.facebook.com",  label: "Facebook", color: "text-blue-600"  },
              { icon: FaWhatsapp, href: "https://wa.me/27645582706", label: "WhatsApp", color: "text-green-500" },
              { icon: FaLinkedin, href: "https://www.linkedin.com",  label: "LinkedIn", color: "text-blue-700"  },
            ].map(({ icon: Icon, href, label, color }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-2 ${color} text-sm font-semibold hover:underline`}>
                <Icon size={17} /> {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
