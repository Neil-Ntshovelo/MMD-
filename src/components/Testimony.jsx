import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name:   "Sarah Mokoena",
    role:   "Premium Plan Member",
    avatar: "https://i.pravatar.cc/80?u=sarah-mokoena-za",
    rating: 5,
    quote:  "MMD Bespoke provided exceptional service during our time of need. Their professionalism and compassion made an incredibly difficult time so much easier for our entire family.",
  },
  {
    name:   "John Dlamini",
    role:   "Bespoke Plan Member",
    avatar: "https://i.pravatar.cc/80?u=john-dlamini-za",
    rating: 5,
    quote:  "Professional, dignified, and affordable. The team went above and beyond for us. I highly recommend MMD Bespoke to every South African family looking for peace of mind.",
  },
  {
    name:   "Emily Radebe",
    role:   "Executive Plan Member",
    avatar: "https://i.pravatar.cc/80?u=emily-radebe-za",
    rating: 5,
    quote:  "The Executive Plan was worth every penny. The luxury casket and all the arrangements were handled with such care. Thank you MMD for your incredible support.",
  },
  {
    name:   "Thabo Nkosi",
    role:   "Premium Plan Member",
    avatar: "https://i.pravatar.cc/80?u=thabo-nkosi-za",
    rating: 5,
    quote:  "From the moment I called, the MMD team guided us every step of the way. The 24-hour claim response was truly remarkable. I am genuinely grateful for their help.",
  },
  {
    name:   "Nomsa Khumalo",
    role:   "Bespoke Plan Member",
    avatar: "https://i.pravatar.cc/80?u=nomsa-khumalo-za",
    rating: 5,
    quote:  "Affordable and dignified service. The family coverage gave us complete peace of mind. We couldn't have asked for better support during such a challenging time.",
  },
];

const Card = ({ t }) => (
  <div className="px-3 pb-6">
    <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100">
      <div className="flex gap-1 mb-4">
        {[...Array(t.rating)].map((_, i) => (
          <FaStar key={i} className="text-amber-400 text-sm" />
        ))}
      </div>
      <p className="text-slate-600 text-sm leading-relaxed italic flex-grow mb-6">"{t.quote}"</p>
      <div className="flex items-center gap-3">
        <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-cyan-100" />
        <div>
          <p className="font-bold text-slate-900 text-sm">{t.name}</p>
          <p className="text-cyan-600 text-xs">{t.role}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimony = () => {
  const settings = {
    dots:            true,
    infinite:        true,
    speed:           600,
    slidesToShow:    3,
    slidesToScroll:  1,
    autoplay:        true,
    autoplaySpeed:   4500,
    pauseOnHover:    true,
    arrows:          false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">What Our Clients Say</h2>
          <p className="text-slate-500">Trusted by thousands of South African families</p>
        </div>
        <Slider {...settings}>
          {testimonials.map((t, i) => <Card key={i} t={t} />)}
        </Slider>
      </div>
    </section>
  );
};

export default Testimony;
