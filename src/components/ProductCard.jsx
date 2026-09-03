import React from 'react';
import { Star, ShoppingBag, Eye, MessageSquare, Check, Sparkles } from 'lucide-react';
import { getWhatsAppProductLink } from '../utils/whatsapp';

export default function ProductCard({ product, onAddToCart, onQuickView }) {
  const discountAmount = product.originalPrice - product.price;

  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 hover:border-[#C5A059] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between group overflow-hidden relative">
      
      {/* Discount & Best Seller Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
        {product.bestSeller && (
          <span className="bg-[#1A1A1A] text-[#D4AF37] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
            <Sparkles className="w-3 h-3 fill-current" /> Best Seller
          </span>
        )}
        {discountAmount > 0 && (
          <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
            Save PKR {discountAmount.toLocaleString()}
          </span>
        )}
      </div>

      {/* Quick View Floating Button */}
      <button
        onClick={() => onQuickView(product)}
        className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-gray-700 hover:text-[#C5A059] hover:bg-white flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100"
        title="Quick View Details"
      >
        <Eye className="w-4 h-4" />
      </button>

      {/* Image Container */}
      <div className="relative overflow-hidden bg-[#FAF7F2] cursor-pointer" onClick={() => onQuickView(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {/* Pieces Badge Pill */}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm border border-gray-200 px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-gray-800 shadow-xs">
          {product.pieces} {product.pieces === 1 ? 'Pc Pack' : 'Pcs Set'}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Category & Star Rating */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-[#8A7561] font-semibold text-[11px] uppercase tracking-wider">
              {product.category}
            </span>
            <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md text-amber-700 border border-amber-200/60 font-bold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-gray-400 text-[10px] font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif font-bold text-gray-900 text-base group-hover:text-[#C5A059] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Key Feature Subtitle */}
          <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed">
            {product.keyFeature}
          </p>
        </div>

        {/* Pricing Block */}
        <div className="pt-2 border-t border-gray-100 flex items-baseline gap-2">
          <span className="text-lg font-bold text-[#1A1A1A]">
            PKR {product.price.toLocaleString()}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-gray-400 line-through">
              PKR {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-1">
          {/* WhatsApp Direct Order Button */}
          <a
            href={getWhatsAppProductLink(product.name, product.price)}
            target="_blank"
            rel="noreferrer"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-3 rounded-xl font-medium text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Order via WhatsApp</span>
          </a>

          {/* Add to Cart Button */}
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-[#1A1A1A] hover:bg-[#C5A059] text-white py-2.5 px-3 rounded-xl font-medium text-xs flex items-center justify-center gap-2 transition-all group/btn"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37] group-hover/btn:text-white transition-colors" />
            <span>Add to Cart</span>
          </button>
        </div>

      </div>

    </div>
  );
}
