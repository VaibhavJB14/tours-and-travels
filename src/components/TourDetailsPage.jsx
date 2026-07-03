import React, { useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { 
  ArrowLeft, MapPin, Clock, CheckCircle2, 
  XCircle, Calendar, MessageCircle, Star, Image as ImageIcon
} from 'lucide-react';
import { detailedTourTemplate, tourGallery } from '../mockData';

// Curated travel images specifically for the itinerary timeline
const itineraryImages = [
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80", // Arrival/Airport
  "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80", // Sightseeing
  "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80", // Culture
  "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=800&q=80", // Adventure/Nature
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80", // Dinner
  "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=800&q=80"  // Departure/Memories
];

export default function TourDetailsPage({ destination, onBack }) {
  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsApp = () => {
    const phoneNumber = "9876543210";
    const message = `Hi Tours and Travels! I am interested in the ${destination.name} package. Can you share more details?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-24">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <Motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          src={destination.image} 
          alt={destination.name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

        <div className="absolute top-6 left-6 z-30">
          <button onClick={onBack} className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-slate-900 font-semibold shadow-lg hover:bg-white transition">
            <ArrowLeft size={16} /> Back
          </button>
        </div>

        {/* Hero Content */}
        <Motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute bottom-0 left-0 w-full px-6 md:px-12 pb-12 max-w-7xl mx-auto"
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="bg-brand-500 text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center">
              <MapPin size={16} className="mr-1.5" /> {destination.name}
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-1.5 rounded-full text-sm font-bold flex items-center">
              <Clock size={16} className="mr-1.5" /> {detailedTourTemplate.duration}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            Experience {destination.name}
          </h1>
          <div className="flex items-center text-yellow-400 font-medium">
            <Star fill="currentColor" size={20} className="mr-1" />
            <Star fill="currentColor" size={20} className="mr-1" />
            <Star fill="currentColor" size={20} className="mr-1" />
            <Star fill="currentColor" size={20} className="mr-1" />
            <Star fill="currentColor" size={20} className="mr-2" />
            <span className="text-white/90 text-sm">(4.9/5 based on 124 reviews)</span>
          </div>
        </Motion.div>
      </div>

      {/* 2. MAIN CONTENT AREA (2-Column Layout) */}
      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* LEFT COLUMN: Details */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Overview */}
          <Motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Tour Overview</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {detailedTourTemplate.overview}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {detailedTourTemplate.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center text-slate-700 font-medium">
                  <CheckCircle2 className="text-brand-500 mr-2 shrink-0" size={20} />
                  {highlight}
                </div>
              ))}
            </div>
          </Motion.section>

          {/* Day-by-Day Itinerary */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Detailed Itinerary</h2>
            
            {/* Timeline Line Wrapper */}
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[19px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
              
              {detailedTourTemplate.itinerary.map((item, idx) => (
                <div key={idx} className="relative flex items-center md:justify-between md:odd:flex-row-reverse group">
                  
                  {/* TEXT CARD */}
                  <Motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-[calc(100%-3rem)] ml-auto md:ml-0 md:w-[calc(50%-2.5rem)] bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center text-brand-500 font-bold mb-1 text-sm">
                      <Calendar size={14} className="mr-1" /> Day {item.day}
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </Motion.div>

                  {/* CENTER ICON */}
                  <Motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute left-0 md:static flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-500 text-white font-bold shadow shrink-0 z-10 transition-transform group-hover:scale-110 group-hover:bg-brand-600 duration-300"
                  >
                    {item.day}
                  </Motion.div>

                  {/* IMAGE CARD */}
                  <Motion.div 
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="hidden md:block w-[calc(50%-2.5rem)] h-48 rounded-2xl overflow-hidden shadow-sm border border-slate-100"
                  >
                    <img 
                      src={itineraryImages[idx % itineraryImages.length]} 
                      alt={`Day ${item.day} - ${item.title}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </Motion.div>
                  
                </div>
              ))}
            </div>
          </section>

          {/* UNIQUE ASYMMETRICAL MASONRY GALLERY */}
          <Motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                <ImageIcon className="mr-3 text-brand-500" size={28} /> 
                Trip Highlights
              </h2>
            </div>

            {/* CSS Grid for the Asymmetrical Layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px]">
              {tourGallery.map((img, idx) => {
                // Determine classes to create the unique interwoven shapes
                let spanClasses = "col-span-1 row-span-1"; 
                if (idx === 0) spanClasses = "col-span-2 row-span-2 md:col-span-2"; // Big main hero block
                if (idx === 1) spanClasses = "col-span-1 row-span-2"; // Tall vertical block
                if (idx === 3) spanClasses = "col-span-2 md:col-span-1 row-span-1"; // Wide block on mobile

                return (
                  <Motion.div 
                    key={img.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm ${spanClasses}`}
                  >
                    <img 
                      src={img.url} 
                      alt={img.caption} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                      <p className="text-white font-bold text-sm tracking-wide">{img.caption}</p>
                    </div>
                  </Motion.div>
                );
              })}
            </div>
          </Motion.section>

          {/* Inclusions & Exclusions */}
          <Motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-brand-50/50 p-8 rounded-3xl border border-brand-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <CheckCircle2 className="text-brand-500 mr-2" /> What's Included
              </h3>
              <ul className="space-y-4">
                {detailedTourTemplate.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start text-slate-700 text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-3 mt-1.5 shrink-0" /> {inc}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-red-50/50 p-8 rounded-3xl border border-red-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <XCircle className="text-red-500 mr-2" /> What's Excluded
              </h3>
              <ul className="space-y-4">
                {detailedTourTemplate.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start text-slate-700 text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 mt-1.5 shrink-0" /> {exc}
                  </li>
                ))}
              </ul>
            </div>
          </Motion.section>

        </div>

        {/* RIGHT COLUMN: Sticky Booking Sidebar */}
        <div className="lg:col-span-1">
          <Motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="sticky top-32 bg-white rounded-[2rem] p-8 shadow-2xl border border-slate-100"
          >
            <div className="mb-6 pb-6 border-b border-slate-100">
              <p className="text-slate-500 font-medium mb-1">Starting from</p>
              <div className="flex items-end">
                <span className="text-4xl font-extrabold text-slate-900">{detailedTourTemplate.price}</span>
                <span className="text-slate-500 ml-2 mb-1">/ person</span>
              </div>
            </div>
            
            <form className="space-y-4 mb-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-bold text-slate-700 mb-2 block">Travel Date</label>
                <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-brand-500 text-slate-600" />
              </div>
              <div>
                <label className="text-sm font-bold text-slate-700 mb-2 block">Travelers</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-brand-500 text-slate-600">
                  <option>2 Adults</option>
                  <option>2 Adults, 1 Child</option>
                  <option>3 Adults</option>
                  <option>Group (4+)</option>
                </select>
              </div>
              <button className="w-full bg-[#f15a24] hover:bg-[#d94b1a] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#f15a24]/30 mt-4">
                Request to Book
              </button>
            </form>

            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium">OR</span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>

            <button 
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white font-bold py-4 rounded-xl transition-all flex justify-center items-center group"
            >
              <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" /> Chat on WhatsApp
            </button>
          </Motion.div>
        </div>

      </div>
    </div>
  );
}
