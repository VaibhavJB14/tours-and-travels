import React, { useState, useContext } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { AppContext } from '../context/AppContext';

export default function EnquireModal({ isOpen, onClose }) {
  const { addEnquiry } = useContext(AppContext);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addEnquiry(formData); // Instantly sends to Admin Panel!
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <Motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white w-full max-w-lg rounded-3xl p-8 relative shadow-2xl">
            
            <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors">
              <X size={20} />
            </button>

            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={30} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Enquiry Sent!</h3>
                <p className="text-slate-500">Our travel experts will contact you shortly.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Plan Your Trip</h2>
                <p className="text-slate-500 mb-8">Drop your details and we'll craft the perfect itinerary for you.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" placeholder="Full Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-brand-500 text-slate-700" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-brand-500 text-slate-700" />
                    <input type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-brand-500 text-slate-700" />
                  </div>
                  <textarea placeholder="Where do you want to go? (Optional)" rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-brand-500 text-slate-700 resize-none"></textarea>
                  
                  <button type="submit" className="w-full bg-[#f15a24] hover:bg-[#d94b1a] text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-[#f15a24]/30 mt-2">
                    Submit Enquiry
                  </button>
                </form>
              </>
            )}
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
