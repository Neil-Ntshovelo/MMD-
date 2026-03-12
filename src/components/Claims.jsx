import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaFileAlt, FaEnvelope, FaPhone, FaCheckCircle, FaChevronDown, FaChevronUp, FaWhatsapp, FaClock } from 'react-icons/fa';

const steps = [
  { num: "01", title: "Gather Documents",  desc: "Collect all required documents including Death Certificate, ID copies, and claim form." },
  { num: "02", title: "Submit Claim",      desc: "Submit your completed package to claims@mmbespoke.co.za or any MMD office." },
  { num: "03", title: "SMS Confirmation",  desc: "Receive an SMS with your claim reference number within hours of submission." },
  { num: "04", title: "Claim Processed",   desc: "Outcome communicated within 24hrs. Payment made to your specified bank account." },
];

const requiredDocs = [
  "Completed claim form (downloadable from our website)",
  "Policy Document",
  "SAPS Certified copy of Death Certificate",
  "SAPS Certified copy of deceased ID book/Smart ID",
];

const additionalDocs = [
  "SAPS Certified copy of deceased ID, stamped 'deceased' or alternative",
  "DHA1663 Form / Notification of Death",
  "DHA 1680 Form / Declaration by traditional leader (if applicable)",
  "SAPS Certified copy of the beneficiary's ID book/Smart ID",
  "Proof of bank account",
  "Latest 3 months bank statement for debit order policies",
  "Latest Salary Advice for Persal clients",
  "'Confirmation letter' from the mortuary",
  "'Police report' if the death is due to unnatural causes",
  "Proof of marriage when claiming for a 'Spouse'",
];

const Claims = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label">Claims Process</span>
          <h2 className="text-4xl font-black text-slate-900 mb-3 tracking-tight">How to Submit a Claim</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Our streamlined claims process ensures your family receives support quickly and with minimal stress.
          </p>
        </motion.div>

        {/* Step timeline */}
        <div className="grid md:grid-cols-4 gap-6 mb-14 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-200" />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="text-center relative"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-700 text-white font-bold text-sm flex items-center justify-center mx-auto mb-3 shadow-lg shadow-cyan-700/30 relative z-10">
                {step.num}
              </div>
              <h3 className="font-bold text-slate-900 mb-1.5 text-sm">{step.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Documents card */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden">
          <div className="p-8 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <FaFileAlt className="text-cyan-600" /> Required Documents
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Submit your claim to{" "}
              <a href="mailto:claims@mmbespoke.co.za" className="text-cyan-700 font-semibold underline">
                claims@mmbespoke.co.za
              </a>{" "}
              with these documents:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {requiredDocs.map((doc, i) => (
                <div key={i} className="flex items-start gap-3 bg-cyan-50/70 p-3.5 rounded-xl">
                  <FaCheckCircle className="text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{doc}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-6 flex items-center gap-2 text-cyan-700 font-semibold text-sm hover:text-cyan-900 transition mx-auto"
            >
              {expanded
                ? <><FaChevronUp size={11} /> Show Less</>
                : <><FaChevronDown size={11} /> View Additional Documents</>
              }
            </button>
          </div>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden bg-slate-50 px-8 pb-8"
              >
                <h4 className="font-bold text-slate-800 pt-6 mb-4">Additional Required Documents</h4>
                <ul className="space-y-2">
                  {additionalDocs.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                      <FaCheckCircle className="text-cyan-500 mt-0.5 flex-shrink-0" /> {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 bg-cyan-50 border border-cyan-100 rounded-xl p-5">
                  <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-3">
                    <FaClock className="text-cyan-600" /> Claim Turnaround Time
                  </h4>
                  <ul className="space-y-1.5">
                    {[
                      "SMS confirmation with reference number sent upon submission.",
                      "Follow-up SMS with claim progress within 12 hours.",
                      "Claim outcome communicated within 24 hours.",
                      "Payment made to specified bank account upon approval.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                        <span className="text-cyan-600 font-bold mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Contact footer */}
          <div className="bg-gradient-to-r from-slate-900 to-cyan-900 p-8 text-white">
            <h3 className="text-lg font-bold mb-5 text-center">Need Assistance?</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: FaEnvelope, label: "claims@mmbespoke.co.za" },
                { icon: FaPhone,    label: "064 558 2706" },
                { icon: FaWhatsapp, label: "Chat on WhatsApp" },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
                    <Icon className="mx-auto text-xl mb-2 text-cyan-400" />
                    <p className="text-sm text-white/80">{c.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Claims;
