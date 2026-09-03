import React, { useState } from 'react';
import { ShoppingBag, Star, Phone, Search, Menu, X, Sparkles, ShieldCheck, Truck } from 'lucide-react';
import { BRAND_INFO } from '../data/products';
import { getWhatsAppGeneralLink } from '../utils/whatsapp';

export default function Header({ cartCount, onOpenCart, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const categories = ['All Products', 'Facial Kits', 'Whitening & Polishing', 'Daily Care'];

  return (
    <header className="sticky top-0 z-40 w-full font-sans shadow-xs">
      {/* Announcement Bar */}
      <div className="bg-[#1A1A1A] text-white text-xs py-2 px-4 border-b border-[#C5A059]/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <div className="flex items-center justify-center gap-2 font-medium tracking-wide">
            <span className="bg-[#C5A059] text-[#1A1A1A] px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
              5 Years
            </span>
            <span className="text-amber-200">✨ 5 Years of Skincare Excellence</span>
            <span className="hidden sm:inline opacity-40">|</span>
            <span className="hidden sm:flex items-center gap-1 text-emerald-300">
              <Truck className="w-3.5 h-3.5 inline" /> Free Shipping on Orders Over PKR 5,000
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-gray-300">
            <span className="hidden lg:inline text-amber-100">
              🚚 Cash on Delivery (COD) Available Across Pakistan
            </span>
            <div className="flex items-center gap-3">
              <a
                href={getWhatsAppGeneralLink('Hi Glowza team, I want to talk to Ali Sher.', BRAND_INFO.contacts[0].phone)}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-emerald-400" /> Ali Sher: {BRAND_INFO.contacts[0].formatted}
              </a>
              <span className="opacity-30">|</span>
              <a
                href={getWhatsAppGeneralLink('Hi Glowza team, I want to talk to Sajjad Hussain.', BRAND_INFO.contacts[1].phone)}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-emerald-400" /> Sajjad: {BRAND_INFO.contacts[1].formatted}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="glass-nav border-b border-amber-900/10 px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Logo & Social Proof Badge */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex flex-col">
              <span className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-[#1A1A1A]">
                GLOWZA<span className="text-[#C5A059]">.</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#8A7561] font-semibold uppercase -mt-1">
                Luxury Skincare
              </span>
            </a>

            {/* 4.9 Rating Badge */}
            <div className="hidden sm:flex items-center gap-1.5 bg-[#FFF5F3] border border-[#C5A059]/40 px-2.5 py-1 rounded-full text-xs text-[#1A1A1A]">
              <div className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="font-bold text-gray-900">4.9★</span>
              <span className="text-gray-500 text-[11px]">(50,000+ Happy Customers)</span>
            </div>
          </div>

          {/* Desktop Category Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
            {categories.map((cat) => {
              const categoryKey = cat === 'All Products' ? 'All' : cat;
              const isActive = selectedCategory === categoryKey;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(categoryKey)}
                  className={`transition-all relative py-1 hover:text-[#C5A059] ${
                    isActive ? 'text-[#C5A059] font-bold' : 'text-gray-700'
                  }`}
                >
                  {cat}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C5A059] rounded-full"></span>
                  )}
                </button>
              );
            })}
            <a href="#reviews" className="hover:text-[#C5A059] transition-colors">
              Customer Reviews
            </a>
            <a href="#about" className="hover:text-[#C5A059] transition-colors">
              Our 5-Year Journey
            </a>
          </nav>

          {/* Right Actions (Search & Cart) */}
          <div className="flex items-center gap-3">
            {/* Search Input Bar */}
            <div className="relative">
              {showSearch ? (
                <div className="flex items-center gap-2 bg-white border border-[#C5A059] rounded-full px-3 py-1.5 shadow-sm w-48 md:w-64 transition-all">
                  <Search className="w-4 h-4 text-gray-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search facial kits..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full text-xs outline-none bg-transparent"
                    autoFocus
                  />
                  <button onClick={() => setShowSearch(false)} className="text-gray-400 hover:text-gray-600">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="p-2 rounded-full hover:bg-[#F3ECE5] text-gray-700 transition-colors"
                  title="Search products"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#C5A059] text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm group"
            >
              <ShoppingBag className="w-4 h-4 text-[#D4AF37] group-hover:text-white transition-colors" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="bg-[#C5A059] group-hover:bg-white group-hover:text-[#1A1A1A] text-[#1A1A1A] font-bold text-xs px-2 py-0.5 rounded-full transition-all">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-[#F3ECE5]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-gray-200/60 flex flex-col gap-3">
            <div className="flex items-center gap-2 bg-[#FFF5F3] p-2 rounded-lg border border-[#C5A059]/30 text-xs">
              <Star className="w-4 h-4 text-amber-500 fill-current" />
              <span className="font-bold">4.9★ Rated Brand</span> - 5 Years of Trusted Skincare Excellence
            </div>
            {categories.map((cat) => {
              const categoryKey = cat === 'All Products' ? 'All' : cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(categoryKey);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-sm py-1.5 px-2 rounded-md ${
                    selectedCategory === categoryKey ? 'bg-[#F3ECE5] font-bold text-[#C5A059]' : 'text-gray-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm py-1.5 px-2 text-gray-700 hover:text-[#C5A059]"
            >
              Customer Reviews & Photos
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm py-1.5 px-2 text-gray-700 hover:text-[#C5A059]"
            >
              Rawalpindi Office & Support
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
