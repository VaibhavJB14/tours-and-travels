import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function TourCard({ tour, onViewDetails }) { // <-- Notice we added onViewDetails here
  
  const handleWhatsAppInquiry = () => {
    const phoneNumber = "9876543210"; 
    const message = `Hi LuxeTravel! I am very interested in booking the "${tour.title}" package (${tour.budget}). Could you share more details?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group flex flex-col h-full">
      
      {/* Clickable Image */}
      <div className="relative h-64 overflow-hidden shrink-0 cursor-pointer" onClick={onViewDetails}>
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-brand-900 shadow-sm">
          {tour.budget}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="text-xs font-semibold text-brand-500 uppercase tracking-wider mb-2">
          {tour.category}
        </div>
        
        {/* Clickable Title */}
        <h3 
          className="text-xl font-bold mb-2 cursor-pointer hover:text-brand-500 transition-colors" 
          onClick={onViewDetails}
        >
          {tour.title}
        </h3>
        <p className="text-slate-500 text-sm mb-6 line-clamp-2 flex-1">{tour.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          
          {/* Clickable Details Button */}
          <button 
            onClick={onViewDetails} 
            className="flex items-center text-brand-900 font-semibold group/btn text-sm"
          >
            Details <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={handleWhatsAppInquiry}
            className="flex items-center bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white px-3 py-1.5 rounded-full text-sm font-bold transition-colors"
          >
            <MessageCircle size={16} className="mr-1.5" />
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
}