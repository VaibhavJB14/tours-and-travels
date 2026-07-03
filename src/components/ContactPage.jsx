import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 min-h-screen">
      
      {/* Header */}
      <div 
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">How can we help you?</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Whether you're ready to book your dream vacation or just have a few questions, our luxury travel experts are here for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left Column: Contact Information */}
        <div 
          className="md:col-span-1 space-y-8"
        >
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Details</h3>
            
            <div className="space-y-6 text-slate-600">
              <div className="flex items-start">
                <div className="bg-brand-50 p-3 rounded-full text-brand-500 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Call Us</p>
                  <p className="hover:text-brand-500 cursor-pointer transition-colors">+1 (800) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-50 p-3 rounded-full text-brand-500 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email Us</p>
                  <p className="hover:text-brand-500 cursor-pointer transition-colors">support@luxetravel.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-50 p-3 rounded-full text-brand-500 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Visit Us</p>
                  <p>123 Adventure Ave, Suite 400<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-lg">
            <div className="flex items-center mb-4">
              <Clock className="text-brand-500 mr-3" size={24} />
              <h3 className="text-xl font-bold">Business Hours</h3>
            </div>
            <ul className="space-y-2 text-slate-300">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 8:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 4:00 PM</span></li>
              <li className="flex justify-between text-brand-400 font-medium"><span>Sunday:</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div 
          className="md:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100"
        >
          <div className="flex items-center mb-8">
            <MessageSquare className="text-brand-500 mr-3" size={28} />
            <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">First Name</label>
                <input type="text" placeholder="John" className="w-full bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none rounded-xl p-4 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Last Name</label>
                <input type="text" placeholder="Doe" className="w-full bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none rounded-xl p-4 transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none rounded-xl p-4 transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">What are you inquiring about?</label>
              <select className="w-full bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none rounded-xl p-4 transition-all text-slate-700">
                <option>New Tour Booking</option>
                <option>Existing Reservation</option>
                <option>Visa Assistance</option>
                <option>Other Queries</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Message</label>
              <textarea rows="4" placeholder="Tell us about your dream trip..." className="w-full bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none rounded-xl p-4 transition-all resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-4 rounded-xl flex justify-center items-center transition-all shadow-lg hover:shadow-brand-500/30">
              Send Message <Send size={18} className="ml-2" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}