import React from 'react';
import { Star, ShieldCheck, Sparkles, Truck, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import { BRAND_INFO } from '../data/products';
import { getWhatsAppGeneralLink } from '../utils/whatsapp';

export default function Hero({ onExploreClick }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FFF5F3] to-[#FAF7F2] py-12 md:py-20 border-b border-[#E5D9CB]">
      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F4E8D0]/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#FFF0ED]/70 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Content & Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Pill & 5-Year Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-white/90 border border-[#C5A059]/40 px-3.5 py-1.5 rounded-full shadow-xs text-xs font-semibold text-[#1A1A1A]">
              <span className="flex items-center gap-1 text-[#C5A059] font-bold">
                <Sparkles className="w-3.5 h-3.5 fill-current" /> 5th Anniversary
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-700">Serving Premium Skincare Across Pakistan Since 2021</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1A1A] leading-tight tracking-tight">
              Unveil Your <span className="gold-gradient-text">Natural Glow</span> With Pure Excellence.
            </h1>

            {/* Tagline & Subheading */}
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experience Pakistan's most loved 5-star salon-grade facial kits and daily whitening care. Formulated with organic botanical extracts, pure Vitamin C, and advanced skin-smoothing complexes.
            </p>

            {/* Social Proof Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-xs">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-sm text-gray-900">4.9 / 5.0 Rating</span>
              </div>
              <div className="text-xs text-gray-600 font-medium">
                <strong className="text-gray-900 block text-sm">50,000+ Customers</strong>
                Nationwide Satisfied Orders
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto gold-gradient-btn text-white px-8 py-3.5 rounded-full font-medium text-sm flex items-center justify-center gap-2 group shadow-md"
              >
                <span>Shop Facial Kits & Creams</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={getWhatsAppGeneralLink('Hi Glowza team, I want to inquire about products and place an order.')}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-full font-medium text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Quick WhatsApp Order</span>
              </a>
            </div>

            {/* Value Props Bullet Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-amber-900/10 text-xs text-gray-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>100% Authentic Products</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Dermatologist Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Fast 2-3 Day Nationwide Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Column - Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glass Visual Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/images/orange-facial.png"
                  alt="Glowza Desire Orange Facial Kit"
                  className="w-full h-[420px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Floating Product Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gray-100 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block">
                      Featured Best Seller
                    </span>
                    <h3 className="font-serif font-bold text-gray-900 text-sm">Desire Orange Facial (9 Pcs)</h3>
                    <p className="text-xs text-emerald-600 font-bold">PKR 7,000 <span className="line-through text-gray-400 font-normal">PKR 8,000</span></p>
                  </div>
                  <span className="bg-[#1A1A1A] text-white text-xs px-3 py-1.5 rounded-full font-medium shrink-0">
                    5.0 ★ (1,420+)
                  </span>
                </div>
              </div>

              {/* Decorative 5-Year Excellence Seal Badge */}
              <div className="absolute -top-6 -right-6 bg-[#C5A059] text-white p-4 rounded-full shadow-xl border-4 border-white animate-float hidden sm:flex flex-col items-center justify-center w-24 h-24 text-center">
                <span className="text-xs font-bold uppercase tracking-tighter leading-none">5 Years</span>
                <span className="text-[9px] text-amber-100 leading-tight">Trusted Skincare</span>
              </div>

              {/* Social Guarantee Badge */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-[#C5A059]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Original Guarantee</div>
                  <div className="text-[10px] text-gray-500">100% Cash on Delivery</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
