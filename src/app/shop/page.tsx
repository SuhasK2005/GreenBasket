"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(30);
  const [selectedFarms, setSelectedFarms] = useState<string[]>([]);

  const categories = ["All", "Fresh Produce", "Dairy & Eggs", "Bakery", "Pantry"];
  const farmsList = ["Oak Creek Farm", "Sunrise Valley", "Green Meadow Co.", "Artisan Hearth", "Estate Gold"];

  const handleFarmToggle = (farm: string) => {
    if (selectedFarms.includes(farm)) {
      setSelectedFarms(selectedFarms.filter((f) => f !== farm));
    } else {
      setSelectedFarms([...selectedFarms, farm]);
    }
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.farm.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price <= maxPrice;
    const matchesFarm =
      selectedFarms.length === 0 || selectedFarms.includes(product.farm);

    return matchesCategory && matchesSearch && matchesPrice && matchesFarm;
  });

  return (
    <>
      <Navbar />

      <main className="pt-28 pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex-1">
        {/* Header */}
        <header className="mb-10">
          <h1 className="font-display-lg text-4xl md:text-6xl font-bold text-on-surface mb-6">
            Our Marketplace
          </h1>

          <div className="flex flex-wrap gap-3 items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-label-md font-medium transition-soft cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary text-white"
                    : "bg-surface-container-high text-on-surface-variant hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="sticky top-32 space-y-8 bg-surface-container-low p-6 rounded-3xl border border-outline-variant/30">
              {/* Search */}
              <div>
                <h3 className="font-headline-md text-lg font-bold text-on-surface mb-3">
                  Search
                </h3>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">
                    search
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search harvest..."
                    className="w-full bg-white border border-outline-variant/50 rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-soft"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-headline-md text-lg font-bold text-on-surface">
                    Max Price
                  </h3>
                  <span className="font-bold text-primary">${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="30"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-2 text-label-sm text-on-surface-variant">
                  <span>$4</span>
                  <span>$30</span>
                </div>
              </div>

              {/* Farm Origin */}
              <div>
                <h3 className="font-headline-md text-lg font-bold text-on-surface mb-3">
                  Farm Origin
                </h3>
                <div className="space-y-2.5">
                  {farmsList.map((farm) => (
                    <label
                      key={farm}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFarms.includes(farm)}
                        onChange={() => handleFarmToggle(farm)}
                        className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20 cursor-pointer"
                      />
                      <span className="font-body-md text-sm text-on-surface-variant group-hover:text-primary transition-colors">
                        {farm}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Certification Badges */}
              <div className="p-4 rounded-2xl bg-primary-container/10 border border-primary/10">
                <h3 className="font-label-md text-primary font-bold mb-2">
                  Certification Guarantee
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white text-primary text-[10px] font-bold uppercase tracking-wider rounded-md border border-primary/20">
                    USDA Organic
                  </span>
                  <span className="px-3 py-1 bg-white text-primary text-[10px] font-bold uppercase tracking-wider rounded-md border border-primary/20">
                    Non-GMO
                  </span>
                  <span className="px-3 py-1 bg-white text-primary text-[10px] font-bold uppercase tracking-wider rounded-md border border-primary/20">
                    Pesticide Free
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Feed */}
          <div className="flex-1">
            {/* Sorting Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/30">
              <p className="font-body-md text-on-surface-variant">
                Showing{" "}
                <span className="font-bold text-on-surface">
                  {filteredProducts.length}
                </span>{" "}
                organic items
              </p>
              <div className="flex items-center gap-4">
                <select className="bg-white border border-outline-variant/50 rounded-xl px-4 py-2 font-label-md text-sm outline-none focus:border-primary transition-soft text-on-surface cursor-pointer">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating: High to Low</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center bg-white rounded-3xl border border-outline-variant/30">
                <span className="material-symbols-outlined text-5xl text-on-surface-variant mb-4">
                  search_off
                </span>
                <h3 className="font-headline-md text-xl font-bold mb-2">No produce found</h3>
                <p className="text-on-surface-variant font-body-md max-w-sm mx-auto mb-6">
                  Try adjusting your filters or price range to find fresh items.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                    setMaxPrice(30);
                    setSelectedFarms([]);
                  }}
                  className="px-6 py-2.5 bg-primary text-white rounded-full font-label-md font-semibold hover:bg-primary-container transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="mt-16 flex justify-center items-center gap-2">
                <button className="w-10 h-10 rounded-xl flex items-center justify-center border border-outline-variant/50 text-on-surface-variant hover:border-primary hover:text-primary transition-soft">
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary text-white font-bold text-sm">
                  1
                </button>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center border border-outline-variant/50 text-on-surface-variant hover:border-primary hover:text-primary transition-soft text-sm">
                  2
                </button>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center border border-outline-variant/50 text-on-surface-variant hover:border-primary hover:text-primary transition-soft">
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
