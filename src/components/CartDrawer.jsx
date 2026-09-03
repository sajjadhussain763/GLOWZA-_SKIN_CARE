import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Truck, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) {
  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = BRAND_INFO.freeShippingThreshold; // 5000
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Overlay Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-gray-200">
          
          {/* Header */}
          <div className="p-6 border-b border-gray-100 bg-[#FAF7F2]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
                <h3 className="font-serif font-bold text-lg text-gray-900">Your Shopping Cart</h3>
                <span className="bg-[#1A1A1A] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Meter */}
            <div className="mt-4 bg-white p-3 rounded-xl border border-gray-200 shadow-xs space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-gray-700">
                {subtotal >= freeShippingThreshold ? (
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <Truck className="w-4 h-4" /> 🎉 You Unlocked FREE Nationwide Delivery!
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-[#C5A059]">PKR {remainingForFreeShipping.toLocaleString()}</strong> more for FREE Shipping
                  </span>
                )}
                <span className="font-bold text-gray-900">{Math.round(progressPercent)}%</span>
              </div>

              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#C5A059] to-emerald-500 h-full transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-gray-100">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.id} className="pt-4 first:pt-0 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-xl border border-gray-200 bg-[#FAF7F2] shrink-0"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-xs text-gray-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-[#C5A059] font-medium mt-0.5">
                      PKR {item.price.toLocaleString()}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-gray-200 rounded-md bg-gray-50 text-xs">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-gray-600 hover:bg-gray-200 font-bold rounded-l-md"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-0.5 font-bold text-gray-900">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-gray-600 hover:bg-gray-200 font-bold rounded-r-md"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-bold text-xs text-gray-900">
                      PKR {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center text-[#C5A059] mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-base text-gray-900">Your Cart is Empty</h4>
                <p className="text-xs text-gray-500">
                  Discover Glowza's 5-year trusted skincare kits and add your favorites.
                </p>
              </div>
            )}
          </div>

          {/* Footer Summary & Checkout Button */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-gray-200 bg-[#FAF7F2] space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-bold text-gray-900">PKR {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Estimated Nationwide Shipping</span>
                  <span className="font-bold text-[#C5A059]">
                    {subtotal >= freeShippingThreshold ? 'FREE' : 'PKR 250'}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-gray-900 pt-2 border-t border-gray-200">
                  <span>Estimated Total</span>
                  <span className="text-[#1A1A1A]">
                    PKR {(subtotal >= freeShippingThreshold ? subtotal : subtotal + 250).toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={onProceedToCheckout}
                className="w-full gold-gradient-btn text-white py-3.5 rounded-xl font-medium text-xs flex items-center justify-center gap-2 shadow-md group"
              >
                <span>Proceed to Order Checkout</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Cash on Delivery (COD) & Instant Invoice PDF Provided</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
