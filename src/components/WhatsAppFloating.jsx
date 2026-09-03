import React, { useState } from 'react';
import { MessageSquare, Phone, X, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/products';
import { getWhatsAppGeneralLink } from '../utils/whatsapp';

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Expandable Menu Popup */}
      {isOpen && (
        <div className="mb-3 bg-white rounded-2xl p-4 shadow-2xl border border-gray-200 w-72 animate-fadeIn text-xs text-gray-800 space-y-3">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-bold text-gray-900">Glowza WhatsApp Support</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-gray-600 leading-snug">
            Need help choosing a facial kit or placing an order? Click below to chat directly with our team in Rawalpindi.
          </p>

          <div className="space-y-2">
            <a
              href={getWhatsAppGeneralLink('Hi Glowza team, I want to talk to Ali Sher.', BRAND_INFO.contacts[0].phone)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 text-emerald-900 transition-colors font-medium"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600" />
                <div>
                  <div className="font-bold">Ali Sher</div>
                  <div className="text-[10px] text-emerald-700">{BRAND_INFO.contacts[0].formatted}</div>
                </div>
              </div>
              <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold">Chat</span>
            </a>

            <a
              href={getWhatsAppGeneralLink('Hi Glowza team, I want to talk to Sajjad Hussain.', BRAND_INFO.contacts[1].phone)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 text-emerald-900 transition-colors font-medium"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600" />
                <div>
                  <div className="font-bold">Sajjad Hussain</div>
                  <div className="text-[10px] text-emerald-700">{BRAND_INFO.contacts[1].formatted}</div>
                </div>
              </div>
              <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold">Chat</span>
            </a>
          </div>

          <div className="text-[10px] text-center text-gray-400 pt-1">
            ⚡ Typical response time: Under 5 minutes
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group relative border-2 border-white"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white animate-ping"></span>
      </button>

    </div>
  );
}
