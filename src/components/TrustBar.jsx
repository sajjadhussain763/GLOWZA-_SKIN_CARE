import React from 'react';
import { Award, ShieldCheck, Truck, Star, RefreshCw } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: Award,
      title: '5 Years of Trust',
      subtitle: 'Serving Pakistan Since 2021'
    },
    {
      icon: Star,
      title: '4.9★ Rating',
      subtitle: '50,000+ Verified Customers'
    },
    {
      icon: ShieldCheck,
      title: '100% Authentic',
      subtitle: 'Dermatologist Tested Formulas'
    },
    {
      icon: Truck,
      title: 'Nationwide COD',
      subtitle: 'Free Shipping Over PKR 5,000'
    }
  ];

  return (
    <div className="bg-[#1A1A1A] text-white py-6 border-y border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/50 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">{item.title}</h4>
                  <p className="text-xs text-gray-400">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
