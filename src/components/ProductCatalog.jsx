import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Filter, SlidersHorizontal, Sparkles } from 'lucide-react';

export default function ProductCatalog({
  products,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  onAddToCart,
  onQuickView
}) {
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['All', 'Facial Kits', 'Whitening & Polishing', 'Daily Care'];

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.keyFeature.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    // default: popular (best sellers first)
    return (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0);
  });

  return (
    <section id="catalog" className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-1">
            <Sparkles className="w-3.5 h-3.5" /> 5 Years of Proven Results
          </div>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#1A1A1A]">
            Explore Glowza Signature Range
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Salon-grade facial kits and daily whitening essentials crafted for Pakistani skin types.
          </p>
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-2 self-start md:self-auto bg-white border border-gray-200 rounded-xl px-3 py-1.5 shadow-xs">
          <SlidersHorizontal className="w-4 h-4 text-gray-500" />
          <span className="text-xs text-gray-500 font-medium">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs font-semibold text-gray-800 bg-transparent outline-none cursor-pointer"
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated (5.0★)</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-gray-200/80 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-[#1A1A1A] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-[#F3ECE5] border border-gray-200'
            }`}
          >
            {cat === 'All' ? '✨ All Products' : cat}
          </button>
        ))}
      </div>

      {/* Active Search Notification */}
      {searchQuery && (
        <div className="mb-6 flex items-center justify-between bg-[#FFF5F3] p-3 rounded-xl border border-[#C5A059]/40 text-xs">
          <span>
            Showing results for <strong className="text-[#1A1A1A]">"{searchQuery}"</strong> ({sortedProducts.length} items found)
          </span>
          <button
            onClick={() => setSearchQuery('')}
            className="text-[#C5A059] font-bold hover:underline"
          >
            Clear Filter
          </button>
        </div>
      )}

      {/* Products Grid */}
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 p-8 max-w-md mx-auto">
          <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center text-[#C5A059] mx-auto mb-4">
            <Filter className="w-8 h-8" />
          </div>
          <h3 className="font-serif font-bold text-lg text-gray-900">No Products Found</h3>
          <p className="text-xs text-gray-500 mt-1 mb-4">
            No items matched your search criteria. Try clearing filters or searching for another facial set.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#C5A059] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

    </section>
  );
}
