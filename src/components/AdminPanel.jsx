import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Trash2, Plus, LogOut, Users, Map } from 'lucide-react';

export default function AdminPanel({ onLogout }) {
  const { tours, addTour, deleteTour, enquiries, deleteEnquiry } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState('enquiries'); 
  const [newTour, setNewTour] = useState({ title: '', category: '', budget: '', image: '', duration: '', description: '' });

  const handleAddTour = (e) => {
    e.preventDefault();
    if (!newTour.title) return alert("Please add a title");
    addTour(newTour);
    setNewTour({ title: '', category: '', budget: '', image: '', duration: '', description: '' });
    alert("Tour added successfully! It will now instantly appear on the main page.");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white p-6 shadow-xl h-screen sticky top-0 flex flex-col">
        <h2 className="text-2xl font-bold mb-10 text-brand-500">Admin Dashboard</h2>
        <div className="space-y-4 flex-grow">
          <button onClick={() => setActiveTab('enquiries')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeTab === 'enquiries' ? 'bg-brand-500 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>
            <Users size={18} className="mr-3" /> Enquiries ({enquiries.length})
          </button>
          <button onClick={() => setActiveTab('tours')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeTab === 'tours' ? 'bg-brand-500 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>
            <Map size={18} className="mr-3" /> Manage Tours
          </button>
        </div>
        <button onClick={onLogout} className="w-full mt-auto flex items-center text-slate-400 hover:text-white px-4 py-3 rounded-lg hover:bg-slate-800 transition">
          <LogOut size={18} className="mr-3" /> Back to Website
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 max-h-screen overflow-y-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8 capitalize">{activeTab}</h1>

        {activeTab === 'enquiries' && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {enquiries.length === 0 ? (
              <p className="p-8 text-slate-500">No new enquiries yet.</p>
            ) : (
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-slate-700">Date</th>
                    <th className="px-6 py-4 font-semibold text-slate-700">Name</th>
                    <th className="px-6 py-4 font-semibold text-slate-700">Contact</th>
                    <th className="px-6 py-4 font-semibold text-slate-700">Message</th>
                    <th className="px-6 py-4 font-semibold text-slate-700">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {enquiries.map((enq) => (
                    <tr key={enq.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-sm text-slate-500">{enq.date}</td>
                      <td className="px-6 py-4 font-medium text-slate-900">{enq.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{enq.phone}<br/>{enq.email}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 max-w-xs truncate">{enq.message || 'No message'}</td>
                      <td className="px-6 py-4">
                        <button onClick={() => deleteEnquiry(enq.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-lg"><Trash2 size={16}/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {activeTab === 'tours' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-10">
                <h3 className="text-xl font-bold mb-6">Add New Tour</h3>
                <form onSubmit={handleAddTour} className="space-y-4">
                  <input type="text" placeholder="Tour Title" value={newTour.title} onChange={e => setNewTour({...newTour, title: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-brand-500 text-sm" required />
                  <input type="text" placeholder="Category (e.g. Trekking)" value={newTour.category} onChange={e => setNewTour({...newTour, category: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-brand-500 text-sm" required />
                  <input type="text" placeholder="Price (e.g. ₹ 2,500)" value={newTour.budget} onChange={e => setNewTour({...newTour, budget: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-brand-500 text-sm" required />
                  <input type="text" placeholder="Image URL" value={newTour.image} onChange={e => setNewTour({...newTour, image: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-brand-500 text-sm" required />
                  <textarea placeholder="Short Description" value={newTour.description} onChange={e => setNewTour({...newTour, description: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-brand-500 text-sm h-24" required />
                  <button type="submit" className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 rounded-lg flex justify-center items-center">
                    <Plus size={18} className="mr-2" /> Publish Tour
                  </button>
                </form>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xl font-bold mb-4">Active Tours ({tours.length})</h3>
              {tours.map(tour => (
                <div key={tour.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={tour.image} alt={tour.title} className="w-16 h-16 rounded-lg object-cover mr-4" />
                    <div>
                      <h4 className="font-bold text-slate-900">{tour.title}</h4>
                      <p className="text-sm text-slate-500">{tour.category} • {tour.budget}</p>
                    </div>
                  </div>
                  <button onClick={() => deleteTour(tour.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition"><Trash2 size={18}/></button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}