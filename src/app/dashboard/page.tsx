"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function DashboardPage() {
  const favoriteProducts = PRODUCTS.slice(0, 3);

  const orders = [
    {
      id: "GB-8924",
      date: "Today, Jul 30",
      status: "In Transit",
      itemsCount: 5,
      total: "$48.50",
      statusColor: "bg-primary-container text-on-primary-container",
    },
    {
      id: "GB-8412",
      date: "Jul 24, 2026",
      status: "Delivered",
      itemsCount: 8,
      total: "$72.10",
      statusColor: "bg-surface-container-high text-on-surface-variant",
    },
    {
      id: "GB-7901",
      date: "Jul 17, 2026",
      status: "Delivered",
      itemsCount: 4,
      total: "$35.00",
      statusColor: "bg-surface-container-high text-on-surface-variant",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="pt-28 pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex-1">
        {/* Profile Banner */}
        <section className="bg-white rounded-3xl p-8 border border-outline-variant/30 premium-shadow mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-primary-container/20 text-primary flex items-center justify-center font-display-lg text-3xl font-bold border-2 border-primary/30">
                EV
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-xs font-bold mb-2">
                  <span className="material-symbols-outlined text-sm">workspace_premium</span>
                  <span>GreenBasket Gold Member</span>
                </div>
                <h1 className="font-display-lg text-2xl md:text-3xl font-bold text-on-surface">
                  Welcome back, Eleanor
                </h1>
                <p className="text-on-surface-variant text-sm mt-0.5">
                  Member since September 2024 • Organic Tier II
                </p>
              </div>
            </div>

            <div className="flex gap-4 w-full md:w-auto">
              <div className="p-4 bg-surface-container-low rounded-2xl border border-outline-variant/30 text-center flex-1 md:flex-initial min-w-[120px]">
                <p className="text-xs text-on-surface-variant font-bold uppercase">GreenPoints</p>
                <p className="text-2xl font-bold text-primary mt-0.5">1,240</p>
              </div>
              <div className="p-4 bg-surface-container-low rounded-2xl border border-outline-variant/30 text-center flex-1 md:flex-initial min-w-[120px]">
                <p className="text-xs text-on-surface-variant font-bold uppercase">Impact</p>
                <p className="text-2xl font-bold text-primary mt-0.5">42 kg</p>
                <p className="text-[10px] text-on-surface-variant">Plastic saved</p>
              </div>
            </div>
          </div>
        </section>

        {/* Active Delivery Status Widget */}
        <section className="bg-primary text-on-primary rounded-3xl p-8 mb-10 relative overflow-hidden shadow-xl">
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-bold">
                <span className="material-symbols-outlined text-base">local_shipping</span>
                <span>Active Delivery #GB-8924</span>
              </div>
              <h2 className="font-display-lg text-2xl md:text-3xl font-bold">
                Arriving Today between 2:00 PM - 4:00 PM
              </h2>
              <p className="opacity-90 text-sm">
                Driver Arthur J. is on the temperature-controlled route with 5 fresh items.
              </p>
            </div>

            <Link
              href="/shop"
              className="px-6 py-3 bg-white text-primary rounded-xl font-label-md font-bold hover:bg-primary-fixed-dim transition-colors shadow-md whitespace-nowrap"
            >
              Track Live Delivery
            </Link>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Area: Orders & Subscription */}
          <div className="lg:col-span-2 space-y-10">
            {/* Orders History */}
            <div className="bg-white p-8 rounded-3xl border border-outline-variant/30">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display-lg text-xl font-bold text-on-surface">
                  Recent Harvest Orders
                </h3>
                <Link href="#" className="text-primary text-sm font-bold hover:underline">
                  View All
                </Link>
              </div>

              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="p-5 bg-surface-container-low rounded-2xl border border-outline-variant/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-primary/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-on-surface text-base">{order.id}</span>
                        <span
                          className={`px-3 py-0.5 rounded-full text-xs font-bold ${order.statusColor}`}
                        >
                          {order.status}
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-1">
                        {order.date} • {order.itemsCount} items
                      </p>
                    </div>

                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                      <span className="font-bold text-lg text-on-surface">{order.total}</span>
                      <button className="px-4 py-2 bg-white text-primary rounded-xl font-label-md text-xs font-bold border border-primary/30 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                        Re-order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscription Totes */}
            <div className="bg-white p-8 rounded-3xl border border-outline-variant/30">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-display-lg text-xl font-bold text-on-surface">
                  Weekly Farm Box Subscription
                </h3>
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold">
                  Active
                </span>
              </div>
              <p className="text-on-surface-variant text-sm mb-6">
                Next delivery scheduled for <span className="font-bold text-on-surface">Thursday, Aug 6</span>. Customized with your produce preferences.
              </p>

              <div className="p-4 bg-surface-container-low rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    local_mall
                  </span>
                  <div>
                    <p className="font-bold text-on-surface text-sm">Family Harvest Box (12kg)</p>
                    <p className="text-xs text-on-surface-variant">Includes Heirloom Produce, Dairy & Bread</p>
                  </div>
                </div>
                <button className="text-primary text-xs font-bold underline hover:text-primary-container">
                  Customize Box
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Favorite Produce */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-3xl border border-outline-variant/30">
              <h3 className="font-display-lg text-xl font-bold text-on-surface mb-6">
                Frequently Ordered
              </h3>
              <div className="space-y-6">
                {favoriteProducts.map((p) => (
                  <div key={p.id} className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-surface-container-low flex-shrink-0">
                      <Image src={p.image} alt={p.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-on-surface truncate">{p.name}</h4>
                      <p className="text-xs text-on-surface-variant">{p.farm}</p>
                      <p className="text-xs font-bold text-primary mt-0.5">${p.price.toFixed(2)}</p>
                    </div>
                    <button className="p-2 rounded-xl bg-primary-container/10 text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-lg">add</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
