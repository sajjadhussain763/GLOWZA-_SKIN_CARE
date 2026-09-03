import React from 'react';
import { MapPin, Phone, Mail, Star, ShieldCheck, Sparkles, Truck, Heart } from 'lucide-react';
import { BRAND_INFO } from '../data/products';
import { getWhatsAppGeneralLink } from '../utils/whatsapp';

export default function Footer() {
  return (
    <footer id="about" className="bg-[#1A1A1A] text-white pt-16 pb-8 border-t-4 border-[#C5A059] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand Info & Authority */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold tracking-tight text-white">
                GLOWZA<span className="text-[#C5A059]">.</span>
              </span>
              <span className="text-[10px] tracking-widest text-amber-200 font-semibold uppercase">
                Luxury Skincare Excellence
              </span>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              Pakistan's trusted luxury skincare brand for over 5 years. Specializing in organic facial sets, Vitamin C brighteners, and daily fairness treatments.
            </p>

            {/* 4.9 Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-[#C5A059]/40 px-3 py-1.5 rounded-full text-xs text-white">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
              <span className="font-bold">4.9★ Rating</span>
              <span className="text-gray-400 text-[11px]">(50,000+ Happy Customers)</span>
            </div>
          </div>

          {/* Col 2: Rawalpindi Main Office */}
          <div className="space-y-3" id="contact">
            <h4 className="font-serif font-bold text-base text-[#D4AF37] border-b border-gray-800 pb-2">
              Rawalpindi Head Office
            </h4>
            
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  Office # 11, Ground Floor, Aftab Plaza, Saidpur Road, Holy Family Stop, Rawalpindi, Pakistan.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-[#D4AF37] transition-colors">
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Direct Phone & WhatsApp Contacts */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-[#D4AF37] border-b border-gray-800 pb-2">
              Direct Contact & Support
            </h4>

            <div className="space-y-3 text-xs">
              <a
                href={getWhatsAppGeneralLink('Hi Glowza team, I want to talk to Ali Sher.', BRAND_INFO.contacts[0].phone)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 bg-white/5 hover:bg-white/10 rounded-xl border border-gray-800 transition-all text-gray-200"
              >
                <div>
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" /> Ali Sher
                  </div>
                  <div className="text-[11px] text-gray-400">{BRAND_INFO.contacts[0].formatted}</div>
                </div>
                <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold">WhatsApp</span>
              </a>

              <a
                href={getWhatsAppGeneralLink('Hi Glowza team, I want to talk to Sajjad Hussain.', BRAND_INFO.contacts[1].phone)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 bg-white/5 hover:bg-white/10 rounded-xl border border-gray-800 transition-all text-gray-200"
              >
                <div>
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" /> Sajjad Hussain
                  </div>
                  <div className="text-[11px] text-gray-400">{BRAND_INFO.contacts[1].formatted}</div>
                </div>
                <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 4: Nationwide Delivery & Trust */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-[#D4AF37] border-b border-gray-800 pb-2">
              Nationwide Delivery
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              We deliver orders nationwide across all cities in Pakistan via TCS, M&P, and Leopard Courier.
            </p>
            
            <div className="bg-white/5 p-3 rounded-xl border border-gray-800 text-xs text-gray-300 space-y-1.5">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <Truck className="w-4 h-4" /> Cash on Delivery Available
              </div>
              <p className="text-[11px] text-gray-400">
                Pay cash at your doorstep upon arrival. Free shipping on orders over PKR 5,000.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} Glowza Skincare. All rights reserved. 5 Years of Trusted Skincare Excellence.
          </p>
          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span>for Radiant Skin Across Pakistan</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
