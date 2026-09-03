import React, { useState } from 'react';
import { X, Star, CheckCircle, MessageSquare, ShoppingBag, ShieldCheck, Sparkles } from 'lucide-react';
import { getWhatsAppProductLink } from '../utils/whatsapp';

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          
          {/* Left Column: Image */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-[#FAF7F2] border border-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 sm:h-80 object-cover object-center"
              />
              <span className="absolute top-3 left-3 bg-[#1A1A1A] text-[#D4AF37] text-xs font-bold px-3 py-1 rounded-full uppercase">
                {product.pieces} {product.pieces === 1 ? 'Piece' : 'Pieces Kit'}
              </span>
            </div>

            {/* Trust Badges Pill */}
            <div className="bg-[#FFF5F3] p-3 rounded-xl border border-[#C5A059]/30 text-xs text-gray-700 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-[#1A1A1A]">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" /> 100% Authentic Glowza Guarantee
              </div>
              <p className="text-[11px] text-gray-600">
                Fresh stock directly dispatched from Rawalpindi main plaza warehouse.
              </p>
            </div>
          </div>

          {/* Right Column: Info & Actions */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-900">{product.rating}</span>
                <span className="text-xs text-gray-500">({product.reviewsCount}+ verified reviews)</span>
              </div>

              <h2 className="font-serif font-bold text-2xl text-gray-900 leading-tight">
                {product.name}
              </h2>
              <p className="text-xs text-[#C5A059] font-bold mt-1 uppercase tracking-wider">
                {product.subtitle}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 my-3">
                <span className="text-2xl font-bold text-[#1A1A1A]">
                  PKR {product.price.toLocaleString()}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-gray-400 line-through">
                    PKR {product.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Save PKR {(product.originalPrice - product.price).toLocaleString()}
                </span>
              </div>

              <p className="text-xs text-gray-700 leading-relaxed border-t border-gray-100 pt-3">
                {product.description}
              </p>
            </div>

            {/* Included Items List */}
            {product.includes && product.includes.length > 0 && (
              <div className="space-y-2 bg-[#FAF7F2] p-3.5 rounded-xl border border-gray-200">
                <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" /> Kit Package Contains ({product.includes.length} Items):
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-gray-700">
                  {product.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* How to Use Summary */}
            {product.howToUse && (
              <div className="text-[11px] text-gray-600">
                <strong className="text-gray-900 block font-semibold">How to Use:</strong>
                <p className="line-clamp-2">{product.howToUse}</p>
              </div>
            )}

            {/* Quantity Selector & CTAs */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-l-lg"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-xs font-bold text-gray-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-r-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {addedToast && (
                <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs p-2 rounded-lg text-center font-bold">
                  ✓ Added {quantity} x {product.name} to cart!
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={getWhatsAppProductLink(product.name, product.price * quantity)}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl font-medium text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order via WhatsApp</span>
                </a>

                <button
                  onClick={handleAddToCart}
                  className="bg-[#1A1A1A] hover:bg-[#C5A059] text-white py-3 px-4 rounded-xl font-medium text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
