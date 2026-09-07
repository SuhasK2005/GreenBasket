"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import FarmerCard from "@/components/FarmerCard";
import { CATEGORIES, FARMERS } from "@/data/products";

export default function Home() {
  const [stats, setStats] = useState({
    farms: 0,
    families: 0,
    plastic: 0,
    delivery: 0,
  });

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const interval = 30;
    const steps = duration / interval;

    const timer = setInterval(() => {
      start++;
      const progress = Math.min(start / steps, 1);
      setStats({
        farms: Math.floor(progress * 500),
        families: Math.floor(progress * 10),
        plastic: Math.floor(progress * 250),
        delivery: Math.floor(progress * 42),
      });

      if (progress >= 1) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />

      <main className="flex-1 overflow-hidden">
        {/* ── Hero Section ── */}
        <header className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 pb-16">
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container rounded-full text-on-secondary-container font-label-md">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  eco
                </span>
                <span className="font-semibold">Directly from 500+ Local Farms</span>
              </div>

              <h1 className="font-display-lg text-4xl md:text-6xl lg:text-7xl font-bold text-on-background max-w-xl leading-tight">
                Freshness Delivered <br />
                <span className="text-primary italic">with Intent.</span>
              </h1>

              <p className="font-body-lg text-on-surface-variant max-w-lg text-lg leading-relaxed">
                Experience the pinnacle of organic sourcing. We bridge the gap between conscientious farmers and your kitchen with an uncompromising eye for quality.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/shop"
                  className="px-8 py-4 bg-primary text-on-primary rounded-xl font-headline-md font-semibold hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 text-center shadow-lg shadow-primary/20"
                >
                  Start Shopping
                </Link>
                <Link
                  href="/#story"
                  className="px-8 py-4 bg-surface-container-high text-on-surface rounded-xl font-headline-md font-semibold border border-outline-variant hover:bg-surface-container-highest transition-all active:scale-95 text-center"
                >
                  Our Sourcing
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-outline-variant/30 aspect-[4/5] md:aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=90"
                  alt="Fresh organic produce crate with heirloom tomatoes and leafy kale"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating Glass Card */}
              <div className="absolute bottom-10 -left-6 md:-left-10 glass-card p-6 rounded-2xl shadow-xl animate-float hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-fixed text-on-primary-fixed rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">
                      temp_preferences_custom
                    </span>
                  </div>
                  <div>
                    <p className="font-label-md text-on-surface font-semibold">
                      Freshly Picked Today
                    </p>
                    <p className="font-label-sm text-on-surface-variant">
                      Arriving in 2 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Featured Categories Bento Grid ── */}
        <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display-lg text-3xl md:text-5xl font-bold text-on-background mb-2">
                Curated Collections
              </h2>
              <p className="font-body-md text-on-surface-variant text-lg">
                Hand-picked selections for every season.
              </p>
            </div>
            <Link
              href="/shop"
              className="text-primary font-label-md font-semibold flex items-center gap-2 hover:underline"
            >
              View all categories{" "}
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter min-h-[600px]">
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="bg-surface-container-low py-24 border-y border-outline-variant/30">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display-lg text-3xl md:text-5xl font-bold text-on-background mb-4">
                Why GreenBasket?
              </h2>
              <p className="font-body-lg text-on-surface-variant text-lg">
                We believe that quality should never be a compromise. Our system is built on three pillars of excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="p-8 bg-white rounded-3xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group">
                <div className="w-16 h-16 bg-primary-fixed/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                  <span
                    className="material-symbols-outlined text-primary text-3xl group-hover:text-white transition-colors"
                  >
                    verified
                  </span>
                </div>
                <h3 className="font-headline-md text-xl font-bold mb-4">Certified Sourcing</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  Every farm in our network undergoes rigorous soil and water testing to ensure 100% organic integrity.
                </p>
              </div>

              <div className="p-8 bg-white rounded-3xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group">
                <div className="w-16 h-16 bg-primary-fixed/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                  <span
                    className="material-symbols-outlined text-primary text-3xl group-hover:text-white transition-colors"
                  >
                    local_shipping
                  </span>
                </div>
                <h3 className="font-headline-md text-xl font-bold mb-4">Cold-Chain Delivery</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  Our custom fleet maintains precise temperatures to preserve the cellular integrity and flavor of every item.
                </p>
              </div>

              <div className="p-8 bg-white rounded-3xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group">
                <div className="w-16 h-16 bg-primary-fixed/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                  <span
                    className="material-symbols-outlined text-primary text-3xl group-hover:text-white transition-colors"
                  >
                    energy_savings_leaf
                  </span>
                </div>
                <h3 className="font-headline-md text-xl font-bold mb-4">Zero-Waste Promise</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  All packaging is either compostable or part of our circular return program. We leave no footprint behind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Farmers Carousel ── */}
        <section id="farmers" className="py-24 overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
            <h2 className="font-display-lg text-3xl md:text-5xl font-bold text-on-background mb-2">
              The Hands Behind Your Food
            </h2>
            <p className="font-body-md text-on-surface-variant text-lg">
              Meet the families dedicated to sustainable agriculture.
            </p>
          </div>

          <div className="flex gap-8 px-margin-mobile md:px-margin-desktop overflow-x-auto pb-8 snap-x no-scrollbar">
            {FARMERS.map((farmer) => (
              <FarmerCard key={farmer.id} farmer={farmer} />
            ))}
          </div>
        </section>

        {/* ── Stats Section ── */}
        <section className="py-24 bg-primary text-on-primary">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
              <div className="space-y-2">
                <h3 className="font-display-lg text-4xl md:text-6xl font-bold">{stats.farms}+</h3>
                <p className="font-label-md uppercase tracking-widest opacity-90 text-sm">
                  Local Farms
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-display-lg text-4xl md:text-6xl font-bold">{stats.families}k+</h3>
                <p className="font-label-md uppercase tracking-widest opacity-90 text-sm">
                  Happy Families
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-display-lg text-4xl md:text-6xl font-bold">{stats.plastic}k</h3>
                <p className="font-label-md uppercase tracking-widest opacity-90 text-sm">
                  Plastic-Free Kg
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-display-lg text-4xl md:text-6xl font-bold">{stats.delivery}</h3>
                <p className="font-label-md uppercase tracking-widest opacity-90 text-sm">
                  Cities Served
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Express Checkout FAB */}
      <Link
        href="/shop"
        className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-40 group"
        title="Express Checkout"
      >
        <span className="material-symbols-outlined text-3xl">shopping_basket</span>
        <span className="absolute right-full mr-4 bg-white text-on-surface px-4 py-2 rounded-xl border border-outline-variant shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none font-label-md font-semibold">
          Express Checkout
        </span>
      </Link>

      <Footer />
    </>
  );
}
