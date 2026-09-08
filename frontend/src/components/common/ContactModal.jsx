import React, { useState } from 'react';
import { submitEnquiry } from '../../services/api';
import { X, CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, defaultInterest = "General Enquiry" }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestType: defaultInterest,
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const response = await submitEnquiry(formData);
      setSuccessMsg(response.message || 'Thank you! Your enquiry has been submitted to Royal Farms.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        interestType: defaultInterest,
        message: ''
      });
      setTimeout(() => {
        setSuccessMsg('');
        onClose();
      }, 3000);
    } catch (err) {
      setErrorMsg(err.message || 'Failed to submit enquiry. Please check your details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/65 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-gray-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 pr-8 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B5136]">
            Royal Farms Enquiry
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            Book A Slot / Get In Touch
          </h2>
          <p className="text-xs text-gray-500">
            Fill in your details below and our livestock investment specialist will call you.
          </p>
        </div>

        {/* Success Alert */}
        {successMsg && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 mb-6">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-sm font-medium">{successMsg}</p>
          </div>
        )}

        {/* Error Alert */}
        {errorMsg && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-start gap-3 mb-6">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <p className="text-sm font-medium">{errorMsg}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#0B5136] focus:ring-2 focus:ring-emerald-100 outline-none text-sm transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="rahul@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#0B5136] focus:ring-2 focus:ring-emerald-100 outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 9876543210"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#0B5136] focus:ring-2 focus:ring-emerald-100 outline-none text-sm transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Livestock Operation / Interest
            </label>
            <select
              name="interestType"
              value={formData.interestType}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#0B5136] focus:ring-2 focus:ring-emerald-100 outline-none text-sm transition-all bg-white"
            >
              <option value="General Enquiry">General Enquiry</option>
              <option value="Integrated Poultry Farming EC Shed">Integrated Poultry Farming EC Shed</option>
              <option value="Cattle Operations">Cattle Operations</option>
              <option value="Sheep & Goat Farming">Sheep &amp; Goat Farming</option>
              <option value="Investment Comparison">Investment Comparison</option>
              <option value="Payment Details">Payment Details</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Message or Preferred Slot
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your investment budget or preferred discussion slot..."
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#0B5136] focus:ring-2 focus:ring-emerald-100 outline-none text-sm transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl bg-[#0B5136] hover:bg-[#1f7a4d] text-white font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting to Royal Farms...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#FF9046]" />
                <span>Submit Enquiry</span>
              </>
            )}
          </button>

        </form>

      </div>
    </div>
  );
}
