import React, { useState, useEffect, useContext } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Map, Mountain, FileText, 
  IndianRupee, Shield, Clock, Bell, 
  ChevronDown, Menu, Lock, Star, MapPin,
  Compass, Plane, Briefcase, Camera, Globe, Tent, Sun, Users,
  Navigation, Train, Ship, Ticket, Coffee, Binoculars, Backpack, Umbrella, Bike, Anchor, Wind
} from 'lucide-react';
import { 
  popularDestinations, faqs, testimonials,
  megaMenuDestinations, megaMenuCategories, heroSlides
} from './mockData';
import AdminPanel from './components/AdminPanel';
import TourCard from './components/TourCard';
import ContactPage from './components/ContactPage';
import EnquireModal from './components/EnquireModal';
import TourDetailsPage from './components/TourDetailsPage';
import './App.css';

import { AppContext } from './context/AppContext';
import { AppProvider } from './context/AppProvider';

// --- FadeIn helper (unchanged) ---
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <Motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay }} className={className}>
    {children}
  </Motion.div>
);

const staggerContainer = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const cardVariant = { hidden: { opacity: 0, y: 40, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } } };

// --- App Component (no intro) ---
export default function App() {
  return (
    <AppProvider>
      <MainWebsite />
    </AppProvider>
  );
}

// --- Main Website Content ---
function MainWebsite() {
  const { tours } = useContext(AppContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [currentPage, setCurrentPage] = useState('home'); 
  const [activeDropdown, setActiveDropdown] = useState(null); 
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isNavSearchOpen, setIsNavSearchOpen] = useState(false);
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  const handleOpenTourDetails = (destinationData) => {
    setSelectedDestination(destinationData);
    setCurrentPage('tourDetails');
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000); 
    return () => clearInterval(heroInterval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsEnquireModalOpen(true), 5000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      
      {/* STICKY NAVBAR - No delay (was 2.8s) */}
      {currentPage !== 'admin' && (
        <Motion.nav 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0, duration: 1.0, ease: "easeOut" }}
          className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}
        >
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative w-full">
            
            <img 
              src="/logo1.jpg" alt="Tours and Travels Logo" 
              className="w-12 h-12 rounded-full absolute top-1/2 -translate-y-1/2 left-6 z-50 object-cover border-2 border-white shadow-sm"
            />

            <div onClick={() => setCurrentPage('home')} className="flex items-center cursor-pointer z-40 relative">
              <div className="w-12 h-12 mr-3 shrink-0 pointer-events-none"></div>
              <div className={`text-2xl font-bold tracking-tighter transition-colors leading-tight ${isScrolled || currentPage !== 'home' ? 'text-brand-900' : 'text-white'}`}>
                TOURS<br/><span className="text-brand-500">TRAVELS</span>
              </div>
            </div>

            {/* Center Links */}
            <div className={`hidden lg:flex space-x-8 font-medium ${isScrolled || currentPage !== 'home' ? 'text-slate-600' : 'text-white/90'}`}>
              <button onClick={() => setCurrentPage('home')} className="hover:text-brand-500 transition-colors py-2">Home</button>
              
              <div className="relative py-2" onMouseEnter={() => setActiveDropdown('categories')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className="flex items-center hover:text-brand-500 transition-colors">Categories <ChevronDown size={16} className="ml-1" /></button>
                <AnimatePresence>
                  {activeDropdown === 'categories' && (
                    <Motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[800px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 flex space-x-4">
                      {megaMenuCategories.map(cat => (
                        <div key={cat.id} onClick={() => setCurrentPage('home')} className="flex-1 relative rounded-2xl overflow-hidden h-40 group cursor-pointer">
                          <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex flex-col justify-end">
                            <h4 className="text-white font-bold text-lg">{cat.name}</h4>
                            <p className="text-brand-200 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">{cat.desc}</p>
                          </div>
                        </div>
                      ))}
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative py-2" onMouseEnter={() => setActiveDropdown('destinations')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className="flex items-center hover:text-brand-500 transition-colors">Destinations <ChevronDown size={16} className="ml-1" /></button>
                <AnimatePresence>
                  {activeDropdown === 'destinations' && (
                    <Motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[1000px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 grid grid-cols-5 gap-3">
                      {megaMenuDestinations.map(dest => (
                        <div key={dest.id} onClick={() => handleOpenTourDetails(dest)} className="relative rounded-xl overflow-hidden h-32 group cursor-pointer">
                          <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 flex flex-col justify-end">
                            <h4 className="text-white font-bold text-sm leading-tight">{dest.name}</h4>
                            <p className="text-brand-200 text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0">{dest.highlight}</p>
                          </div>
                        </div>
                      ))}
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button onClick={() => setCurrentPage('about')} className="hover:text-brand-500 transition-colors py-2">About Us</button>
              
              <button 
                onClick={() => {
                  if (currentPage !== 'home') setCurrentPage('home');
                  setTimeout(() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }} 
                className="hover:text-brand-500 transition-colors py-2"
              >
                Testimonials
              </button>
            </div>

            {/* Right Side Tools */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative flex items-center justify-end">
                <AnimatePresence>
                  {isNavSearchOpen && (
                    <Motion.input
                      initial={{ width: 0, opacity: 0 }} animate={{ width: 220, opacity: 1 }} exit={{ width: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}
                      type="text" placeholder="Search adventures..."
                      className={`absolute right-10 py-2 px-4 rounded-full outline-none text-sm shadow-inner transition-colors ${isScrolled || currentPage !== 'home' ? 'bg-slate-100 text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-brand-500/50' : 'bg-white/20 text-white placeholder-white/70 backdrop-blur-md focus:bg-white/30'}`} autoFocus
                    />
                  )}
                </AnimatePresence>
                <button onClick={() => setIsNavSearchOpen(!isNavSearchOpen)} className={`p-2.5 rounded-full transition-colors relative z-10 ${isScrolled || currentPage !== 'home' ? 'text-slate-600 hover:bg-slate-100 hover:text-brand-500' : 'text-white hover:bg-white/20'}`}>
                  <Search size={20} />
                </button>
              </div>
              
              <button 
                onClick={() => setCurrentPage('contact')} 
                className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                  isScrolled || currentPage !== 'home' 
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' 
                  : 'bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/20'
                }`}
              >
                Contact Us
              </button>

              <button onClick={() => setIsEnquireModalOpen(true)} className="bg-[#f15a24] hover:bg-[#d94b1a] text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-[#f15a24]/30 whitespace-nowrap">
                Enquire Now
              </button>
            </div>

            <div className="lg:hidden">
              <Menu className={`${isScrolled || currentPage !== 'home' ? 'text-slate-900' : 'text-white'}`} />
            </div>
          </div>
        </Motion.nav>
      )}

      {/* PAGE ROUTING LOGIC */}
      {currentPage === 'home' ? (
        <main>
          {/* HERO SECTION */}
          <header className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
            <AnimatePresence mode="popLayout">
              <Motion.img 
                key={heroIndex} src={heroSlides[heroIndex]?.image} alt={heroSlides[heroIndex]?.title}
                initial={{ scale: 1.1 }} animate={{ scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 4.0, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/40 z-10" />

            <div className="relative z-20 text-center px-4 w-full max-w-4xl">
              <AnimatePresence mode="wait">
                {/* HERO TEXT â€“ delay removed (was heroIndex === 0 ? 2.8 : 0) */}
                <Motion.div
                  key={heroIndex} 
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -20 }} 
                  transition={{ duration: 1.0, delay: 0, ease: "easeOut" }}
                >
                  <div className="flex justify-center items-center space-x-4 mb-6">
                    <span className="bg-brand-500/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center">
                      <IndianRupee size={16} className="mr-1" /> {heroSlides[heroIndex]?.price}
                    </span>
                    <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center">
                      <Clock size={16} className="mr-1" /> {heroSlides[heroIndex]?.time}
                    </span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">{heroSlides[heroIndex]?.title}</h1>
                  <p className="text-lg md:text-2xl text-white/90 drop-shadow-md max-w-2xl mx-auto">{heroSlides[heroIndex]?.subtitle}</p>
                </Motion.div>
              </AnimatePresence>
            </div>
          </header>

          {/* MAIN CATEGORIES */}
          <section className="py-24 max-w-7xl mx-auto px-6 relative z-30 -mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "TOURS AND TRAAVELS Treks", icon: Mountain, desc: "Explore the historic peaks." },
                { title: "Divine Tours", icon: Map, desc: "Spiritual journeys across India." },
                { title: "Adventure", icon: FileText, desc: "Watersports & safaris." }
              ].map((cat, i) => (
                <Motion.div 
                  key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col items-center text-center group"
                >
                  <div className="bg-brand-50 text-brand-500 p-4 rounded-full mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors"><cat.icon size={32} /></div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">{cat.title}</h3>
                  <p className="text-slate-500">{cat.desc}</p>
                </Motion.div>
              ))}
            </div>
          </section>

          {/* UPCOMING TOURS */}
          <section id="tours" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Adventures</h2>
                <p className="text-slate-500 mb-12 max-w-2xl">Handpicked tours and travels treks and Domestic packages curated for Tours and Travels travelers.</p>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tours.map((tour, i) => (
                  <FadeIn key={tour.id} delay={i * 0.1}>
                    <TourCard tour={tour} onViewDetails={() => handleOpenTourDetails({ name: tour.title, image: tour.image })} />
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* EXPANDED DESTINATIONS */}
          <section id="destinations" className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Explore Tours and Travels</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">From global gateways to divine spiritual ghats, discover destinations that speak to your soul.</p>
            </FadeIn>

            <div className="space-y-24">
              <div>
                <FadeIn><h3 className="text-2xl md:text-3xl font-bold mb-8 text-slate-800 flex items-center"><span className="bg-brand-500 w-2 h-8 rounded-full mr-4 shadow-sm"></span>International Trips</h3></FadeIn>
                <Motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {popularDestinations.international?.map((dest) => (
                    <Motion.div key={dest.id} variants={cardVariant} onClick={() => handleOpenTourDetails(dest)} className="relative h-64 md:h-72 rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all">
                      <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <h4 className="absolute bottom-5 left-5 text-xl font-bold text-white group-hover:-translate-y-1 transition-transform">{dest.name}</h4>
                    </Motion.div>
                  ))}
                </Motion.div>
              </div>

              <div>
                <FadeIn><h3 className="text-2xl md:text-3xl font-bold mb-8 text-slate-800 flex items-center"><span className="bg-brand-500 w-2 h-8 rounded-full mr-4 shadow-sm"></span>Domestic Trips</h3></FadeIn>
                <Motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {popularDestinations.domestic?.map((dest) => (
                    <Motion.div key={dest.id} variants={cardVariant} onClick={() => handleOpenTourDetails(dest)} className="relative h-64 md:h-72 rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all">
                      <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <h4 className="absolute bottom-5 left-5 text-xl font-bold text-white group-hover:-translate-y-1 transition-transform">{dest.name}</h4>
                    </Motion.div>
                  ))}
                </Motion.div>
              </div>

              <div>
                <FadeIn><h3 className="text-2xl md:text-3xl font-bold mb-8 text-slate-800 flex items-center"><span className="bg-amber-500 w-2 h-8 rounded-full mr-4 shadow-sm"></span>Divine Spiritual Journeys</h3></FadeIn>
                <Motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {popularDestinations.teertayatra?.map((dest) => (
                    <Motion.div key={dest.id} variants={cardVariant} onClick={() => handleOpenTourDetails(dest)} className="relative h-64 md:h-72 rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all">
                      <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <h4 className="absolute bottom-5 left-5 text-xl font-bold text-white group-hover:-translate-y-1 transition-transform">{dest.name}</h4>
                    </Motion.div>
                  ))}
                </Motion.div>
              </div>
            </div>
          </section>

          {/* SCROLLING TESTIMONIALS */}
          <section id="testimonials" className="py-24 bg-white overflow-hidden border-t border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Traveler Stories</h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg">Hear from our community of adventurers who have traveled with us.</p>
              </FadeIn>
            </div>
            <div className="flex w-full overflow-hidden">
              <Motion.div className="flex w-max" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 35 }}>
                <div className="flex gap-6 px-3">
                  {testimonials.map((testimonial, i) => (
                    <div key={`set1-${i}`} className="w-80 md:w-96 shrink-0 bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
                      <div className="h-48 relative">
                        <img src={testimonial.image} alt={testimonial.trip} className="w-full h-full object-cover" />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center shadow-sm"><MapPin size={12} className="mr-1 text-brand-500" /> {testimonial.trip}</div>
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center text-yellow-400 mb-4">{[...Array(testimonial.rating)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}</div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-8 whitespace-normal italic">"{testimonial.review}"</p>
                        <div className="flex items-center mt-auto">
                          <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-white shadow-sm" />
                          <div><h4 className="text-sm font-bold text-slate-900">{testimonial.name}</h4><p className="text-xs text-slate-500">{testimonial.location}</p></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-6 px-3">
                  {testimonials.map((testimonial, i) => (
                    <div key={`set2-${i}`} className="w-80 md:w-96 shrink-0 bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
                      <div className="h-48 relative">
                        <img src={testimonial.image} alt={testimonial.trip} className="w-full h-full object-cover" />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center shadow-sm"><MapPin size={12} className="mr-1 text-brand-500" /> {testimonial.trip}</div>
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center text-yellow-400 mb-4">{[...Array(testimonial.rating)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}</div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-8 whitespace-normal italic">"{testimonial.review}"</p>
                        <div className="flex items-center mt-auto">
                          <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-white shadow-sm" />
                          <div><h4 className="text-sm font-bold text-slate-900">{testimonial.name}</h4><p className="text-xs text-slate-500">{testimonial.location}</p></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Motion.div>
            </div>
          </section>
          
          {/* WHY CHOOSE US */}
          <section className="py-20 bg-brand-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
              <FadeIn className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Travel With Tours and Travels</h2></FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { icon: IndianRupee, title: "Best Pricing", desc: "Local expertise at honest rates." },
                  { icon: Shield, title: "Certified Guides", desc: "Fully insured and local expert partners." },
                  { icon: Clock, title: "Fast Booking", desc: "Seamless digital reservations." },
                  { icon: Bell, title: "24/7 Support", desc: "We're here whenever you need us." }
                ].map((feature, i) => (
                  <FadeIn key={i} delay={i * 0.1} className="text-center">
                    <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-500"><feature.icon size={28} /></div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-white/70 text-sm">{feature.desc}</p>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-24 max-w-4xl mx-auto px-6">
            <FadeIn className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2></FadeIn>
            <div className="space-y-4 mb-12">
              {faqs.map((faq, i) => (
                <Motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-5 text-left flex justify-between items-center font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                    {faq.question}
                    <ChevronDown className={`transform transition-transform ${openFaq === i ? 'rotate-180 text-brand-500' : 'text-slate-400'}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <Motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-5 text-slate-600">{faq.answer}</Motion.div>
                    )}
                  </AnimatePresence>
                </Motion.div>
              ))}
            </div>
          </section>
        </main>
      ) : currentPage === 'about' ? (
        <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center bg-slate-50">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">About Us</h1>
          <p className="text-slate-600 text-lg max-w-2xl text-center mb-8">We are Tours and Travels, dedicated to bringing you the best local treks, domestic adventures, and spiritual journeys across India.</p>
          <button onClick={() => setCurrentPage('home')} className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-full font-medium transition-colors">Back to Home</button>
        </div>
      ) : currentPage === 'contact' ? (
        <ContactPage />
      ) : currentPage === 'tourDetails' && selectedDestination ? (
        <TourDetailsPage destination={selectedDestination} onBack={() => setCurrentPage('home')} />
      ) : currentPage === 'admin' ? (
        <AdminPanel onLogout={() => setCurrentPage('home')} />
      ) : null}

      {/* FOOTER */}
      {currentPage !== 'admin' && (
        <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div onClick={() => setCurrentPage('home')} className="text-2xl font-bold tracking-tighter text-white mb-6 cursor-pointer hover:opacity-80 transition-opacity leading-tight flex items-center">
                <img src="/logo1.jpg" alt="Logo" className="w-10 h-10 rounded-full mr-3 border-2 border-white/20 object-cover" />
                <div>TOURS<br/><span className="text-brand-500">TRAVELS</span></div>
              </div>
              <p className="mb-6">Curating extraordinary journeys for the Tours and Travels explorer.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-brand-500 transition-colors">Home</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-brand-500 transition-colors">About Us</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-brand-500 transition-colors">Contact Support</button></li>
                <li><button onClick={() => setCurrentPage('admin')} className="text-slate-600 hover:text-brand-500 transition-colors mt-4 text-sm flex items-center"><Lock size={14} className="mr-1"/> Admin Login</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-3">
                <li>123 Trekker Street, Pune, MH</li>
                <li>support@toursandtravels.com</li>
                <li>+91 98765 43210</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Newsletter</h4>
              <p className="mb-4">Subscribe for local deals and updates.</p>
              <div className="flex">
                <input type="email" placeholder="Email address" className="bg-slate-800 border-none outline-none px-4 py-2 rounded-l-lg w-full text-white" />
                <button className="bg-brand-500 hover:bg-brand-600 px-4 rounded-r-lg text-white font-bold transition-colors">GO</button>
              </div>
            </div>
          </div>
        </footer>
      )}

      {/* FLOATING WHATSAPP */}
      {currentPage !== 'admin' && (
        <button 
          onClick={() => { window.open(`https://wa.me/9876543210?text=${encodeURIComponent("Hi Tours and Travels! I'm interested in planning a trip.")}`, '_blank'); }}
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all flex items-center justify-center group"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </button>
      )}

      {/* ENQUIRE MODAL */}
      <EnquireModal isOpen={isEnquireModalOpen} onClose={() => setIsEnquireModalOpen(false)} />
    </div>
  );
}
