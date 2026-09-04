"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"desc" | "nutrition" | "farm">("desc");
  const [added, setAdded] = useState(false);

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <Navbar />

      <main className="pt-28 pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex-1">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-on-surface-variant mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-primary transition-colors">
            Marketplace
          </Link>
          <span>/</span>
          <span className="text-on-surface font-semibold">{product.name}</span>
        </nav>

        {/* Product Details Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Image Gallery */}
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white border border-outline-variant/30 premium-shadow">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {product.tag && (
              <span className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-primary uppercase tracking-widest border border-outline-variant/30">
                {product.tag}
              </span>
            )}
          </div>

          {/* Product Meta */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/50 rounded-full text-on-secondary-container font-label-md text-xs font-bold">
              <span className="material-symbols-outlined text-base">eco</span>
              <span>{product.farm}</span>
            </div>

            <h1 className="font-display-lg text-3xl md:text-5xl font-bold text-on-surface">
              {product.name}
            </h1>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-tertiary">
                <span
                  className="material-symbols-outlined text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="font-bold text-on-surface">{product.rating.toFixed(1)}</span>
                <span className="text-on-surface-variant text-sm font-normal">
                  ({product.reviewsCount || 48} reviews)
                </span>
              </div>
              <span className="text-outline-variant">•</span>
              <span className="text-sm text-primary font-bold">In Stock & Ready to Deliver</span>
            </div>

            <div className="flex items-baseline gap-3 py-2 border-y border-outline-variant/30">
              <span className="font-display-lg text-4xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-on-surface-variant font-body-md">/ {product.unit}</span>
            </div>

            <p className="font-body-lg text-on-surface-variant text-base leading-relaxed">
              {product.description}
            </p>

            {/* Quantity & CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="flex items-center bg-surface-container-high rounded-2xl border border-outline-variant/50 p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white text-on-surface font-bold transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center font-bold font-display-lg text-lg">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white text-on-surface font-bold transition-colors"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex-1 min-w-[200px] py-4 rounded-2xl font-headline-md font-bold text-center transition-soft shadow-lg ${
                  added
                    ? "bg-secondary text-white shadow-secondary/20"
                    : "bg-primary text-white hover:bg-primary-container shadow-primary/20"
                }`}
              >
                {added ? "✓ Added to Basket" : `Add to Basket • $${(product.price * quantity).toFixed(2)}`}
              </button>
            </div>

            {/* Guarantee Pills */}
            <div className="grid grid-cols-3 gap-4 pt-6 text-center">
              <div className="p-3 bg-surface-container-low rounded-2xl border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-2xl mb-1">
                  nest_clock_framer
                </span>
                <p className="text-xs font-bold text-on-surface">Same-Day</p>
                <p className="text-[10px] text-on-surface-variant">Cold Delivery</p>
              </div>
              <div className="p-3 bg-surface-container-low rounded-2xl border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-2xl mb-1">
                  verified_user
                </span>
                <p className="text-xs font-bold text-on-surface">100% Organic</p>
                <p className="text-[10px] text-on-surface-variant">Certified Farm</p>
              </div>
              <div className="p-3 bg-surface-container-low rounded-2xl border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-2xl mb-1">
                  recycling
                </span>
                <p className="text-xs font-bold text-on-surface">Zero Waste</p>
                <p className="text-[10px] text-on-surface-variant">Glass & Crate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Info */}
        <section className="mb-20">
          <div className="flex border-b border-outline-variant/30 gap-8 mb-8">
            <button
              onClick={() => setActiveTab("desc")}
              className={`pb-4 font-headline-md font-bold text-lg transition-all cursor-pointer ${
                activeTab === "desc"
                  ? "text-primary border-b-2 border-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Description & Sourcing
            </button>
            <button
              onClick={() => setActiveTab("nutrition")}
              className={`pb-4 font-headline-md font-bold text-lg transition-all cursor-pointer ${
                activeTab === "nutrition"
                  ? "text-primary border-b-2 border-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Nutrition Facts
            </button>
            <button
              onClick={() => setActiveTab("farm")}
              className={`pb-4 font-headline-md font-bold text-lg transition-all cursor-pointer ${
                activeTab === "farm"
                  ? "text-primary border-b-2 border-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              About {product.farm}
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-outline-variant/30 leading-relaxed">
            {activeTab === "desc" && (
              <div className="space-y-4">
                <h3 className="font-bold text-xl text-on-surface">Organic Harvesting Philosophy</h3>
                <p className="text-on-surface-variant">
                  {product.description} Hand-harvested at peak ripeness to maximize micronutrient density and natural sugars. Delivered directly in temperature-monitored zero-waste totes.
                </p>
              </div>
            )}

            {activeTab === "nutrition" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-4 bg-surface-container-low rounded-2xl">
                  <p className="text-xs text-on-surface-variant uppercase font-bold">Calories</p>
                  <p className="text-lg font-bold text-primary mt-1">{product.nutrition?.calories || "42 kcal"}</p>
                </div>
                <div className="p-4 bg-surface-container-low rounded-2xl">
                  <p className="text-xs text-on-surface-variant uppercase font-bold">Carbs</p>
                  <p className="text-lg font-bold text-primary mt-1">{product.nutrition?.carbs || "4.5g"}</p>
                </div>
                <div className="p-4 bg-surface-container-low rounded-2xl">
                  <p className="text-xs text-on-surface-variant uppercase font-bold">Dietary Fiber</p>
                  <p className="text-lg font-bold text-primary mt-1">{product.nutrition?.fiber || "2.1g"}</p>
                </div>
                <div className="p-4 bg-surface-container-low rounded-2xl">
                  <p className="text-xs text-on-surface-variant uppercase font-bold">Protein</p>
                  <p className="text-lg font-bold text-primary mt-1">{product.nutrition?.protein || "1.2g"}</p>
                </div>
              </div>
            )}

            {activeTab === "farm" && (
              <div className="space-y-3">
                <h3 className="font-bold text-xl text-on-surface">{product.farm}</h3>
                <p className="text-on-surface-variant">
                  {product.farm} operates under strict regenerative farming practices, utilizing cover crops, zero chemical insecticides, and solar-powered cold storage.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Related Products */}
        <section>
          <h2 className="font-display-lg text-2xl md:text-3xl font-bold mb-8">
            You Might Also Enjoy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
