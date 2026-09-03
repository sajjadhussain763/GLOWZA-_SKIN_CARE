import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, Sparkles, MessageSquare, ThumbsUp } from 'lucide-react';
import { REVIEWS, BRAND_INFO } from '../data/products';
import { getWhatsAppGeneralLink } from '../utils/whatsapp';

export default function ReviewsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <section id="reviews" className="py-16 bg-gradient-to-b from-white via-[#FFF5F3]/50 to-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#FFF5F3] border border-[#C5A059]/40 px-3.5 py-1 rounded-full text-xs font-bold text-[#1A1A1A]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" /> 50,000+ Nationwide Verified Purchases
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A]">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-sm">
            Read real reviews and experience stories from salon owners and skincare lovers across Pakistan.
          </p>
        </div>

        {/* Aggregate Ratings Overview Box */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#E5D9CB] mb-12 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Rating Score */}
          <div className="text-center md:border-r border-gray-300 md:pr-6">
            <span className="text-5xl font-serif font-bold text-[#1A1A1A]">4.9</span>
            <div className="flex justify-center text-amber-400 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-gray-600 font-medium">Based on 50,000+ Verified Orders</p>
          </div>

          {/* Breakdown bars */}
          <div className="space-y-1.5 text-xs text-gray-700 md:border-r border-gray-300 md:px-6">
            <div className="flex items-center gap-2">
              <span className="w-12 font-semibold">5 Stars</span>
              <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-[#C5A059] h-full w-[94%]"></div>
              </div>
              <span className="font-bold text-gray-900">94%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 font-semibold">4 Stars</span>
              <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-[#C5A059] h-full w-[5%]"></div>
              </div>
              <span className="font-bold text-gray-900">5%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 font-semibold">3 Stars</span>
              <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-[#C5A059] h-full w-[1%]"></div>
              </div>
              <span className="font-bold text-gray-900">1%</span>
            </div>
          </div>

          {/* Callout */}
          <div className="text-center md:text-left space-y-3">
            <h4 className="font-serif font-bold text-base text-gray-900">
              Trusted by 500+ Beauty Salons Nationwide
            </h4>
            <p className="text-xs text-gray-600">
              From Rawalpindi & Islamabad to Lahore, Karachi & Peshawar — Glowza facial kits bring salon brilliance home.
            </p>
            <a
              href={getWhatsAppGeneralLink('Hi Glowza team! I am a salon owner / retail customer and want to order.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 underline"
            >
              <MessageSquare className="w-3.5 h-3.5" /> Direct WhatsApp Consultation
            </a>
          </div>

        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-400">{review.date}</span>
                </div>

                {/* Comment */}
                <p className="text-xs text-gray-700 italic leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-gray-100 mt-4 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-gray-900 flex items-center gap-1.5">
                    {review.name}
                    {review.verified && (
                      <span className="inline-flex items-center gap-0.5 text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px] font-semibold">
                        <CheckCircle2 className="w-3 h-3" /> Verified Buyer
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-gray-500">{review.city}, Pakistan</div>
                </div>

                <span className="text-[10px] text-[#C5A059] font-medium bg-[#FAF7F2] px-2 py-1 rounded-md border border-amber-200/60 max-w-[120px] truncate">
                  {review.product}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
