import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Logo = () => (
  <Link to="/" className="flex items-center gap-2.5 group">
    <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 text-white p-2 rounded-xl shadow-md group-hover:shadow-cyan-300/40 group-hover:scale-105 transition-all duration-300">
      <ShieldCheck size={20} strokeWidth={2.5} />
    </div>
    <div className="flex flex-col leading-tight">
      <span className="text-[15px] font-bold text-slate-900 tracking-tight leading-none">MMD Bespoke</span>
      <span className="text-[9px] font-bold text-cyan-600 tracking-[0.22em] uppercase leading-none mt-0.5">Funerals</span>
    </div>
  </Link>
);

export default Logo;
