import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Truck, MessageSquare, CreditCard, Send } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

function buildWhatsAppOrderLink(formData, cart, subtotal, shipping, grandTotal) {
  const paymentLabel = formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Bank Transfer';

  const itemsText = cart
    .map((item) => `• ${item.name} x ${item.quantity} - PKR ${(item.price * item.quantity).toLocaleString()}`)
    .join('\n');

  const message = `🛍️ NEW ORDER - GLOWZA SKINCARE

📋 Customer Details:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Address: ${formData.address}, ${formData.city}
• Payment Method: ${paymentLabel}

🛒 Ordered Items:
${itemsText}

💰 Subtotal: PKR ${subtotal.toLocaleString()}
🚚 Shipping: ${shipping === 0 ? 'FREE' : `PKR ${shipping}`}
💎 Total Amount: PKR ${grandTotal.toLocaleString()}

Please confirm availability and dispatch my order!`;

  return `https://wa.me/923315563759?text=${encodeURIComponent(message)}`;
}

export default function CheckoutModal({ isOpen, onClose, cart, onClearCart }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Rawalpindi',
    address: '',
    paymentMethod: 'cod'
  });

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= BRAND_INFO.freeShippingThreshold ? 0 : 250;
  const grandTotal = subtotal + shipping;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmViaWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Please fill in your name, phone number, and delivery address.');
      return;
    }

    const whatsappUrl = buildWhatsAppOrderLink(formData, cart, subtotal, shipping, grandTotal);
    window.open(whatsappUrl, '_blank');
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full my-8 shadow-2xl border border-gray-100 relative overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#1A1A1A] text-white p-6 flex items-center justify-between border-b border-[#C5A059]/40">
          <div>
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block">
              Glowza Checkout
            </span>
            <h3 className="font-serif font-bold text-xl text-white">
              Shipping & Payment Details
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Checkout Form */}
        <form onSubmit={handleConfirmViaWhatsApp} className="p-6 sm:p-8 space-y-6">
          
          {/* Customer Details */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-sm text-gray-900 border-b border-gray-100 pb-2">
              1. Delivery & Contact Information
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Fatima Khan"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:border-[#C5A059] focus:outline-none bg-gray-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="e.g. 0331 5563759"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:border-[#C5A059] focus:outline-none bg-gray-50/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  City *
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:border-[#C5A059] focus:outline-none bg-gray-50/50 cursor-pointer"
                >
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Multan">Multan</option>
                  <option value="Faisalabad">Faisalabad</option>
                  <option value="Quetta">Quetta</option>
                  <option value="Other">Other City</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Complete Shipping Address *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="House / Plaza #, Street, Sector / Colony"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:border-[#C5A059] focus:outline-none bg-gray-50/50"
                />
              </div>
            </div>
          </div>

          {/* Payment Method Selector */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-gray-900 border-b border-gray-100 pb-2">
              2. Select Payment Method
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                  formData.paymentMethod === 'cod'
                    ? 'border-[#C5A059] bg-[#FFF5F3] ring-1 ring-[#C5A059]'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleInputChange}
                  className="mt-1 accent-[#C5A059]"
                />
                <div>
                  <span className="font-bold text-xs text-gray-900 block flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-emerald-600" /> Cash on Delivery (COD)
                  </span>
                  <span className="text-[11px] text-gray-500 mt-0.5 block">
                    Pay cash to the rider upon delivery at your doorstep.
                  </span>
                </div>
              </label>

              <label
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                  formData.paymentMethod === 'bank'
                    ? 'border-[#C5A059] bg-[#FFF5F3] ring-1 ring-[#C5A059]'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={formData.paymentMethod === 'bank'}
                  onChange={handleInputChange}
                  className="mt-1 accent-[#C5A059]"
                />
                <div>
                  <span className="font-bold text-xs text-gray-900 block flex items-center gap-1">
                    <CreditCard className="w-3.5 h-3.5 text-[#C5A059]" /> Bank / EasyPaisa / JazzCash
                  </span>
                  <span className="text-[11px] text-gray-500 mt-0.5 block">
                    Transfer payment & share screenshot on WhatsApp.
                  </span>
                </div>
              </label>
            </div>

            {formData.paymentMethod === 'bank' && (
              <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E5D9CB] text-xs text-gray-700 space-y-1.5">
                <span className="font-bold text-[#1A1A1A] block">
                  🏦 Direct Bank & Mobile Wallet Details:
                </span>
                <p>• <strong>JazzCash / EasyPaisa:</strong> 0331 5563759 (Sajjad Hussain)</p>
                <p>• <strong>Account Holder:</strong> Sajjad Hussain Shah</p>
                <p className="text-[11px] text-amber-800 font-semibold">
                  * After completing order, please share payment receipt screenshot on WhatsApp to 03315563759.
                </p>
              </div>
            )}
          </div>

          {/* Order Summary Box */}
          <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-gray-200 space-y-2 text-xs">
            <h5 className="font-bold text-gray-900">Order Summary ({cart.length} Items)</h5>
            <div className="divide-y divide-gray-200 max-h-36 overflow-y-auto pr-1 space-y-1.5">
              {cart.map((item) => (
                <div key={item.id} className="pt-1.5 flex justify-between text-gray-700">
                  <span>{item.quantity}x {item.name}</span>
                  <span className="font-semibold">PKR {(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-gray-300 space-y-1 font-semibold text-gray-800">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>PKR {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>{shipping === 0 ? 'FREE' : `PKR ${shipping}`}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#1A1A1A] pt-1 border-t border-gray-300">
                <span>Grand Total</span>
                <span className="text-[#C5A059]">PKR {grandTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Order Message Preview */}
          <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-xs text-gray-700 space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
              <MessageSquare className="w-4 h-4" />
              <span>Your order will be sent directly via WhatsApp to Glowza team</span>
            </div>
            <p className="text-[11px] text-emerald-700 leading-relaxed">
              Clicking the button below will open WhatsApp with your complete order details pre-filled. Our team will confirm availability and dispatch within minutes.
            </p>
          </div>

          {/* Confirm via WhatsApp Button */}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg transition-all hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]"
          >
            <Send className="w-5 h-5" />
            <span>Confirm Order via WhatsApp</span>
          </button>

          <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Secure • No backend needed • Order confirmed directly on WhatsApp</span>
          </div>

        </form>

      </div>
    </div>
  );
}
