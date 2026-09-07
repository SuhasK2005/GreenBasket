"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  PRODUCTS,
  Product,
  INITIAL_ADMIN_ORDERS,
  AdminOrder,
  INITIAL_ADMIN_FARMS,
  AdminFarm,
  INITIAL_CUSTOMERS,
  AdminCustomer,
} from "@/data/products";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "products" | "orders" | "farms" | "customers" | "settings"
  >("overview");

  // State Management
  const [productsList, setProductsList] = useState<Product[]>(PRODUCTS);
  const [ordersList, setOrdersList] = useState<AdminOrder[]>(INITIAL_ADMIN_ORDERS);
  const [farmsList, setFarmsList] = useState<AdminFarm[]>(INITIAL_ADMIN_FARMS);
  const [customersList] = useState<AdminCustomer[]>(INITIAL_CUSTOMERS);

  // Filters & Search
  const [productSearch, setProductSearch] = useState("");
  const [productCategoryFilter, setProductCategoryFilter] = useState("All");
  const [orderStatusFilter, setOrderStatusFilter] = useState("All");

  // Modals State
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState<AdminOrder | null>(null);
  const [showAddFarmModal, setShowAddFarmModal] = useState(false);

  // New Product Form State
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: "",
    category: "Fresh Produce",
    farm: "Oak Creek Farm",
    unit: "lb",
    price: 5.0,
    inStock: true,
    tag: "Fresh Harvest",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=1200&q=85",
    description: "Sustainably grown organic produce from certified local farmers.",
  });

  // New Farm Form State
  const [newFarm, setNewFarm] = useState<Partial<AdminFarm>>({
    farmName: "",
    farmerName: "",
    location: "California, USA",
    certification: "USDA Organic",
    rating: 5.0,
    productsCount: 1,
    status: "Verified",
  });

  // Product CRUD Actions
  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;
    const slug = newProduct.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const created: Product = {
      id: `prod-${Date.now()}`,
      slug,
      name: newProduct.name,
      category: newProduct.category || "Fresh Produce",
      farm: newProduct.farm || "Oak Creek Farm",
      unit: newProduct.unit || "unit",
      price: Number(newProduct.price),
      rating: 5.0,
      reviewsCount: 1,
      inStock: newProduct.inStock ?? true,
      tag: newProduct.tag || "New Item",
      image:
        newProduct.image ||
        "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=1200&q=85",
      description: newProduct.description || "Fresh organic product.",
    };
    setProductsList([created, ...productsList]);
    setShowAddProductModal(false);
    setNewProduct({
      name: "",
      category: "Fresh Produce",
      farm: "Oak Creek Farm",
      unit: "lb",
      price: 5.0,
      inStock: true,
      tag: "Fresh Harvest",
      image: "",
      description: "",
    });
  };

  const handleUpdateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;
    setProductsList(
      productsList.map((p) => (p.id === editingProduct.id ? editingProduct : p))
    );
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm("Are you sure you want to remove this product from inventory?")) {
      setProductsList(productsList.filter((p) => p.id !== id));
    }
  };

  const handleToggleStock = (id: string) => {
    setProductsList(
      productsList.map((p) =>
        p.id === id ? { ...p, inStock: !p.inStock } : p
      )
    );
  };

  // Order Actions
  const handleUpdateOrderStatus = (
    orderId: string,
    status: AdminOrder["status"]
  ) => {
    setOrdersList(
      ordersList.map((o) => (o.id === orderId ? { ...o, status } : o))
    );
  };

  // Farm Actions
  const handleCreateFarm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFarm.farmName || !newFarm.farmerName) return;
    const farm: AdminFarm = {
      id: `farm-${Date.now()}`,
      farmName: newFarm.farmName,
      farmerName: newFarm.farmerName,
      location: newFarm.location || "California, USA",
      certification: newFarm.certification || "USDA Organic",
      rating: 5.0,
      productsCount: Number(newFarm.productsCount) || 1,
      status: (newFarm.status as AdminFarm["status"]) || "Verified",
    };
    setFarmsList([farm, ...farmsList]);
    setShowAddFarmModal(false);
  };

  // Computed Filters
  const filteredProducts = productsList.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
      p.farm.toLowerCase().includes(productSearch.toLowerCase());
    const matchesCat =
      productCategoryFilter === "All" || p.category === productCategoryFilter;
    return matchesSearch && matchesCat;
  });

  const filteredOrders = ordersList.filter((o) => {
    return orderStatusFilter === "All" || o.status === orderStatusFilter;
  });

  // Calculate Metrics
  const totalRevenue = ordersList.reduce((sum, o) => sum + o.total, 0) + 128400;
  const activeOrdersCount = ordersList.filter((o) => o.status !== "Delivered" && o.status !== "Cancelled").length;

  return (
    <>
      <Navbar />

      <main className="pt-28 pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex-1">
        {/* Top Header & Overview Banner */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 bg-surface-container-low p-6 md:p-8 rounded-3xl border border-outline-variant/30">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-2">
              <span className="material-symbols-outlined text-sm">admin_panel_settings</span>
              <span>GreenBasket Admin Portal</span>
            </div>
            <h1 className="font-display-lg text-3xl md:text-4xl font-bold text-on-surface">
              Store Command Center
            </h1>
            <p className="text-on-surface-variant text-sm mt-1">
              Manage inventory, streamline cold-chain fulfillment, and monitor regional farm partners.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => setShowAddProductModal(true)}
              className="flex-1 md:flex-initial px-5 py-3 bg-primary text-white font-label-md font-bold rounded-2xl shadow-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">add_box</span>
              <span>Add Product</span>
            </button>
            <Link
              href="/dashboard"
              className="px-5 py-3 bg-white text-on-surface font-label-md font-bold rounded-2xl border border-outline-variant/50 hover:bg-surface-container-high transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-xl">person</span>
              <span className="hidden sm:inline">Customer View</span>
            </Link>
          </div>
        </div>

        {/* Executive KPI Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="p-6 bg-white rounded-3xl border border-outline-variant/30 premium-shadow">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                Total Revenue
              </span>
              <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">payments</span>
              </div>
            </div>
            <p className="font-display-lg text-2xl md:text-3xl font-bold text-on-surface">
              ${totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="text-xs text-primary font-bold mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span>+14.8% this month</span>
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-outline-variant/30 premium-shadow">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                Active Orders
              </span>
              <div className="w-10 h-10 rounded-2xl bg-secondary-container/30 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">local_shipping</span>
              </div>
            </div>
            <p className="font-display-lg text-2xl md:text-3xl font-bold text-on-surface">
              {activeOrdersCount}
            </p>
            <p className="text-xs text-on-surface-variant font-medium mt-1">
              {ordersList.length} total orders recorded
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-outline-variant/30 premium-shadow">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                Catalog Items
              </span>
              <div className="w-10 h-10 rounded-2xl bg-tertiary-fixed/40 text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">inventory_2</span>
              </div>
            </div>
            <p className="font-display-lg text-2xl md:text-3xl font-bold text-on-surface">
              {productsList.length}
            </p>
            <p className="text-xs text-on-surface-variant font-medium mt-1">
              {productsList.filter((p) => p.inStock).length} items currently in stock
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-outline-variant/30 premium-shadow">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                Farm Partners
              </span>
              <div className="w-10 h-10 rounded-2xl bg-primary-fixed/40 text-on-primary-fixed-variant flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">agriculture</span>
              </div>
            </div>
            <p className="font-display-lg text-2xl md:text-3xl font-bold text-on-surface">
              {farmsList.length}
            </p>
            <p className="text-xs text-primary font-bold mt-1">
              100% Certified organic & regional
            </p>
          </div>
        </div>

        {/* Admin Navigation Tabs */}
        <div className="flex overflow-x-auto gap-2 p-1.5 bg-surface-container-high rounded-2xl mb-8 no-scrollbar">
          {[
            { id: "overview", label: "Overview & Analytics", icon: "analytics" },
            { id: "products", label: "Product Inventory", icon: "inventory" },
            { id: "orders", label: "Order Fulfillment", icon: "receipt_long" },
            { id: "farms", label: "Farm Partners", icon: "agriculture" },
            { id: "customers", label: "Customer Roster", icon: "group" },
            { id: "settings", label: "Store Settings", icon: "settings" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-label-md text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? "bg-white text-primary shadow-md"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-white/50"
              }`}
            >
              <span className="material-symbols-outlined text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* ── Tab 1: Overview & Analytics ── */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sales Chart Mockup */}
              <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-outline-variant/30">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-display-lg text-xl font-bold text-on-surface">
                      Weekly Revenue Stream
                    </h3>
                    <p className="text-xs text-on-surface-variant">Real-time daily checkout analytics</p>
                  </div>
                  <span className="px-3 py-1 bg-surface-container-low rounded-full text-xs font-bold text-primary border border-primary/20">
                    August 2026
                  </span>
                </div>

                {/* Visual Bar Chart */}
                <div className="h-64 flex items-end justify-between gap-4 pt-8 pb-2 border-b border-outline-variant/30 px-4">
                  {[
                    { day: "Mon", height: "65%", amount: "$14.2k" },
                    { day: "Tue", height: "80%", amount: "$18.5k" },
                    { day: "Wed", height: "45%", amount: "$10.1k" },
                    { day: "Thu", height: "90%", amount: "$22.4k" },
                    { day: "Fri", height: "75%", amount: "$17.8k" },
                    { day: "Sat", height: "95%", amount: "$26.0k" },
                    { day: "Sun", height: "85%", amount: "$19.4k" },
                  ].map((bar) => (
                    <div key={bar.day} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                      <span className="text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        {bar.amount}
                      </span>
                      <div
                        style={{ height: bar.height }}
                        className="w-full bg-primary/20 group-hover:bg-primary rounded-t-xl transition-all duration-300 relative"
                      ></div>
                      <span className="text-xs font-semibold text-on-surface-variant mt-2">{bar.day}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-4 text-xs text-on-surface-variant font-medium">
                  <span>Peak Order Hours: 8:00 AM - 11:00 AM</span>
                  <span>Average Basket Value: <strong className="text-on-surface">$54.20</strong></span>
                </div>
              </div>

              {/* Low Stock & Alerts */}
              <div className="bg-white p-8 rounded-3xl border border-outline-variant/30 space-y-6">
                <h3 className="font-display-lg text-xl font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-error">warning</span>
                  <span>Inventory Alerts</span>
                </h3>

                <div className="space-y-4">
                  <div className="p-4 bg-error-container/20 border border-error/20 rounded-2xl flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm text-on-surface">Pasture-Raised Eggs</p>
                      <p className="text-xs text-on-surface-variant">Sunrise Valley • 12 boxes remaining</p>
                    </div>
                    <button
                      onClick={() => setActiveTab("products")}
                      className="px-3 py-1 bg-error text-white text-xs font-bold rounded-lg cursor-pointer"
                    >
                      Re-stock
                    </button>
                  </div>

                  <div className="p-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm text-on-surface">Classic Sourdough</p>
                      <p className="text-xs text-on-surface-variant">Artisan Hearth • High Demand</p>
                    </div>
                    <span className="text-xs font-bold text-primary">In Stock</span>
                  </div>

                  <div className="p-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm text-on-surface">Cold-Chain Route #4</p>
                      <p className="text-xs text-on-surface-variant">Temperature optimal (3.2°C)</p>
                    </div>
                    <span className="text-xs font-bold text-secondary">Optimal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders Overview Table */}
            <div className="bg-white p-8 rounded-3xl border border-outline-variant/30">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display-lg text-xl font-bold text-on-surface">
                  Latest Harvest Orders
                </h3>
                <button
                  onClick={() => setActiveTab("orders")}
                  className="text-primary text-sm font-bold hover:underline cursor-pointer"
                >
                  View All Orders →
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant/30 text-xs font-bold text-on-surface-variant uppercase">
                      <th className="pb-3 px-4">Order ID</th>
                      <th className="pb-3 px-4">Customer</th>
                      <th className="pb-3 px-4">Date & Time</th>
                      <th className="pb-3 px-4">Status</th>
                      <th className="pb-3 px-4">Amount</th>
                      <th className="pb-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/20 text-sm">
                    {ordersList.slice(0, 4).map((order) => (
                      <tr key={order.id} className="hover:bg-surface-container-low/50">
                        <td className="py-4 px-4 font-bold text-on-surface">{order.id}</td>
                        <td className="py-4 px-4">
                          <p className="font-semibold text-on-surface">{order.customerName}</p>
                          <p className="text-xs text-on-surface-variant">{order.customerEmail}</p>
                        </td>
                        <td className="py-4 px-4 text-on-surface-variant text-xs">{order.date}</td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              order.status === "Delivered"
                                ? "bg-secondary-container text-on-secondary-container"
                                : order.status === "In Transit"
                                ? "bg-primary-container text-on-primary-container"
                                : "bg-tertiary-fixed text-on-tertiary-fixed"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-bold text-on-surface">
                          ${order.total.toFixed(2)}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <button
                            onClick={() => setSelectedOrderDetails(order)}
                            className="px-3 py-1.5 bg-surface-container-high hover:bg-primary hover:text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                          >
                            Inspect
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ── Tab 2: Product Inventory CRUD ── */}
        {activeTab === "products" && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Search & Category Filter */}
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto flex-1 max-w-2xl">
                <div className="relative flex-1">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">
                    search
                  </span>
                  <input
                    type="text"
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                    placeholder="Search by product name or farm..."
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <select
                  value={productCategoryFilter}
                  onChange={(e) => setProductCategoryFilter(e.target.value)}
                  className="bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm font-semibold text-on-surface focus:outline-none cursor-pointer"
                >
                  <option value="All">All Categories</option>
                  <option value="Fresh Produce">Fresh Produce</option>
                  <option value="Dairy & Eggs">Dairy & Eggs</option>
                  <option value="Bakery">Bakery</option>
                  <option value="Pantry">Pantry</option>
                </select>
              </div>

              <button
                onClick={() => setShowAddProductModal(true)}
                className="w-full md:w-auto px-6 py-2.5 bg-primary text-white font-bold rounded-xl shadow hover:bg-primary-container transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">add</span>
                <span>Add New Product</span>
              </button>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-3xl border border-outline-variant/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-outline-variant/30 text-xs font-bold text-on-surface-variant uppercase">
                      <th className="py-4 px-6">Product</th>
                      <th className="py-4 px-4">Category</th>
                      <th className="py-4 px-4">Farm Origin</th>
                      <th className="py-4 px-4">Price / Unit</th>
                      <th className="py-4 px-4">Rating</th>
                      <th className="py-4 px-4">Stock Status</th>
                      <th className="py-4 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/20 text-sm">
                    {filteredProducts.map((product) => (
                      <tr key={product.id} className="hover:bg-surface-container-low/40">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-surface-container-low flex-shrink-0 border border-outline-variant/30">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-bold text-on-surface">{product.name}</p>
                              <p className="text-xs text-on-surface-variant">ID: {product.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-medium text-on-surface">
                          {product.category}
                        </td>
                        <td className="py-4 px-4 text-on-surface-variant">
                          {product.farm}
                        </td>
                        <td className="py-4 px-4 font-bold text-primary">
                          ${product.price.toFixed(2)} <span className="text-xs font-normal text-on-surface-variant">/ {product.unit}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center gap-1 text-tertiary font-bold">
                            <span className="material-symbols-outlined text-base">star</span>
                            <span>{product.rating.toFixed(1)}</span>
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <button
                            onClick={() => handleToggleStock(product.id)}
                            className={`px-3 py-1 rounded-full text-xs font-bold cursor-pointer transition-colors ${
                              product.inStock
                                ? "bg-secondary-container text-on-secondary-container hover:bg-secondary/20"
                                : "bg-error-container text-on-error-container hover:bg-error/20"
                            }`}
                          >
                            {product.inStock ? "✓ In Stock" : "✕ Out of Stock"}
                          </button>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setEditingProduct(product)}
                              className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-lg transition-colors cursor-pointer"
                              title="Edit product"
                            >
                              <span className="material-symbols-outlined text-xl">edit</span>
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              className="p-2 text-on-surface-variant hover:text-error hover:bg-error/10 rounded-lg transition-colors cursor-pointer"
                              title="Delete product"
                            >
                              <span className="material-symbols-outlined text-xl">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ── Tab 3: Order Management ── */}
        {activeTab === "orders" && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-outline-variant/30 flex flex-col sm:flex-row justify-between items-center gap-4">
              <h3 className="font-display-lg text-xl font-bold text-on-surface">
                Fulfillment Queue
              </h3>

              <div className="flex gap-2 overflow-x-auto w-full sm:w-auto">
                {["All", "Pending", "Processing", "In Transit", "Delivered"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setOrderStatusFilter(status)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer whitespace-nowrap transition-colors ${
                      orderStatusFilter === status
                        ? "bg-primary text-white"
                        : "bg-surface-container-high text-on-surface-variant hover:bg-primary/10"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-outline-variant/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-outline-variant/30 text-xs font-bold text-on-surface-variant uppercase">
                      <th className="py-4 px-6">Order ID</th>
                      <th className="py-4 px-4">Customer</th>
                      <th className="py-4 px-4">Address</th>
                      <th className="py-4 px-4">Date</th>
                      <th className="py-4 px-4">Status</th>
                      <th className="py-4 px-4">Total</th>
                      <th className="py-4 px-6 text-right">Update Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/20 text-sm">
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-surface-container-low/40">
                        <td className="py-4 px-6 font-bold text-on-surface">{order.id}</td>
                        <td className="py-4 px-4">
                          <p className="font-semibold text-on-surface">{order.customerName}</p>
                          <p className="text-xs text-on-surface-variant">{order.customerEmail}</p>
                        </td>
                        <td className="py-4 px-4 text-xs text-on-surface-variant max-w-xs truncate">
                          {order.shippingAddress}
                        </td>
                        <td className="py-4 px-4 text-xs text-on-surface-variant">{order.date}</td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              order.status === "Delivered"
                                ? "bg-secondary-container text-on-secondary-container"
                                : order.status === "In Transit"
                                ? "bg-primary-container text-on-primary-container"
                                : "bg-tertiary-fixed text-on-tertiary-fixed"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-bold text-on-surface">
                          ${order.total.toFixed(2)}
                        </td>
                        <td className="py-4 px-6 text-right">
                          <select
                            value={order.status}
                            onChange={(e) =>
                              handleUpdateOrderStatus(
                                order.id,
                                e.target.value as AdminOrder["status"]
                              )
                            }
                            className="bg-surface-container-high border border-outline-variant/40 rounded-xl px-3 py-1.5 text-xs font-bold text-on-surface outline-none cursor-pointer"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Processing">Processing</option>
                            <option value="In Transit">In Transit</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ── Tab 4: Farm Partners ── */}
        {activeTab === "farms" && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-outline-variant/30 flex justify-between items-center">
              <div>
                <h3 className="font-display-lg text-xl font-bold text-on-surface">
                  Regional Farm Partners
                </h3>
                <p className="text-xs text-on-surface-variant">Certified local growers supplying GreenBasket</p>
              </div>

              <button
                onClick={() => setShowAddFarmModal(true)}
                className="px-5 py-2.5 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-container transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">add</span>
                <span>Register Farm</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {farmsList.map((farm) => (
                <div
                  key={farm.id}
                  className="bg-white p-6 rounded-3xl border border-outline-variant/30 space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-md uppercase tracking-wider">
                        {farm.certification}
                      </span>
                      <h4 className="font-bold text-lg text-on-surface mt-2">{farm.farmName}</h4>
                      <p className="text-xs text-on-surface-variant font-medium">Tended by {farm.farmerName}</p>
                    </div>

                    <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold text-secondary">
                      {farm.status}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-outline-variant/20 flex justify-between items-center text-xs text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                      <span>{farm.location}</span>
                    </span>
                    <span className="font-bold text-on-surface">{farm.productsCount} Products</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Tab 5: Customer Roster ── */}
        {activeTab === "customers" && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-outline-variant/30">
              <h3 className="font-display-lg text-xl font-bold text-on-surface">
                Member Directory
              </h3>
              <p className="text-xs text-on-surface-variant">Registered customers & loyalty balances</p>
            </div>

            <div className="bg-white rounded-3xl border border-outline-variant/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-outline-variant/30 text-xs font-bold text-on-surface-variant uppercase">
                      <th className="py-4 px-6">Customer</th>
                      <th className="py-4 px-4">Membership Tier</th>
                      <th className="py-4 px-4">Orders Count</th>
                      <th className="py-4 px-4">Total Spent</th>
                      <th className="py-4 px-4">GreenPoints</th>
                      <th className="py-4 px-4">Joined</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/20 text-sm">
                    {customersList.map((cust) => (
                      <tr key={cust.id} className="hover:bg-surface-container-low/40">
                        <td className="py-4 px-6">
                          <p className="font-bold text-on-surface">{cust.name}</p>
                          <p className="text-xs text-on-surface-variant">{cust.email}</p>
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-xs font-bold">
                            {cust.tier} Member
                          </span>
                        </td>
                        <td className="py-4 px-4 font-bold text-on-surface">{cust.ordersCount}</td>
                        <td className="py-4 px-4 font-bold text-primary">${cust.totalSpent.toFixed(2)}</td>
                        <td className="py-4 px-4 font-bold text-secondary">{cust.greenPoints} pts</td>
                        <td className="py-4 px-4 text-xs text-on-surface-variant">{cust.joinDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ── Tab 6: Store Settings ── */}
        {activeTab === "settings" && (
          <div className="bg-white p-8 rounded-3xl border border-outline-variant/30 max-w-3xl space-y-8">
            <h3 className="font-display-lg text-2xl font-bold text-on-surface">
              Store Parameters & Delivery Rules
            </h3>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase mb-2">
                    Free Delivery Threshold ($)
                  </label>
                  <input
                    type="number"
                    defaultValue={50}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl p-3 text-sm font-bold text-on-surface outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase mb-2">
                    Standard Delivery Fee ($)
                  </label>
                  <input
                    type="number"
                    defaultValue={4.99}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl p-3 text-sm font-bold text-on-surface outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-2">
                  Operating Delivery Radius (Cities)
                </label>
                <input
                  type="text"
                  defaultValue="San Francisco, Sonoma, Napa, San Jose, Oakland, Palo Alto"
                  className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl p-3 text-sm font-medium text-on-surface outline-none focus:border-primary"
                />
              </div>

              <div className="pt-4 border-t border-outline-variant/30 flex justify-end">
                <button
                  onClick={() => alert("Settings saved successfully!")}
                  className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow hover:bg-primary-container transition-colors cursor-pointer"
                >
                  Save Parameters
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ── Modal: Add Product ── */}
      {showAddProductModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-xl w-full border border-outline-variant/30 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display-lg text-2xl font-bold text-on-surface">Add New Produce Item</h3>
              <button
                onClick={() => setShowAddProductModal(false)}
                className="p-2 text-on-surface-variant hover:text-on-surface rounded-full cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateProduct} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  required
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  placeholder="e.g. Honeycrisp Apple Tote"
                  className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl p-3 text-sm outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                    Category
                  </label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl p-3 text-sm outline-none focus:border-primary"
                  >
                    <option value="Fresh Produce">Fresh Produce</option>
                    <option value="Dairy & Eggs">Dairy & Eggs</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Pantry">Pantry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                    Farm Origin
                  </label>
                  <input
                    type="text"
                    value={newProduct.farm}
                    onChange={(e) => setNewProduct({ ...newProduct, farm: e.target.value })}
                    placeholder="e.g. Oak Creek Farm"
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl p-3 text-sm outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    required
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl p-3 text-sm outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                    Unit
                  </label>
                  <input
                    type="text"
                    value={newProduct.unit}
                    onChange={(e) => setNewProduct({ ...newProduct, unit: e.target.value })}
                    placeholder="e.g. 2lb / Dozen / Bunch"
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl p-3 text-sm outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                  Image URL
                </label>
                <input
                  type="text"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl p-3 text-sm outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl p-3 text-sm outline-none focus:border-primary"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-outline-variant/30">
                <button
                  type="button"
                  onClick={() => setShowAddProductModal(false)}
                  className="px-5 py-2.5 text-sm font-bold text-on-surface-variant hover:bg-surface-container-high rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-primary text-white font-bold text-sm rounded-xl shadow hover:bg-primary-container cursor-pointer"
                >
                  Publish Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Modal: Edit Product ── */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-xl w-full border border-outline-variant/30 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display-lg text-2xl font-bold text-on-surface">Edit Product</h3>
              <button
                onClick={() => setEditingProduct(null)}
                className="p-2 text-on-surface-variant hover:text-on-surface rounded-full cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleUpdateProduct} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  value={editingProduct.name}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, name: e.target.value })
                  }
                  className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl p-3 text-sm outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={editingProduct.price}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        price: Number(e.target.value),
                      })
                    }
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl p-3 text-sm outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                    Stock Status
                  </label>
                  <select
                    value={editingProduct.inStock ? "true" : "false"}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        inStock: e.target.value === "true",
                      })
                    }
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl p-3 text-sm outline-none focus:border-primary cursor-pointer"
                  >
                    <option value="true">In Stock</option>
                    <option value="false">Out of Stock</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={editingProduct.description}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      description: e.target.value,
                    })
                  }
                  className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl p-3 text-sm outline-none focus:border-primary"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-outline-variant/30">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-5 py-2.5 text-sm font-bold text-on-surface-variant hover:bg-surface-container-high rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-primary text-white font-bold text-sm rounded-xl shadow hover:bg-primary-container cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Modal: Add Farm Partner ── */}
      {showAddFarmModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-outline-variant/30 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display-lg text-xl font-bold text-on-surface">Register Farm Partner</h3>
              <button
                onClick={() => setShowAddFarmModal(false)}
                className="p-2 text-on-surface-variant hover:text-on-surface rounded-full cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateFarm} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                  Farm Name
                </label>
                <input
                  type="text"
                  required
                  value={newFarm.farmName}
                  onChange={(e) => setNewFarm({ ...newFarm, farmName: e.target.value })}
                  placeholder="e.g. Green Acres Farm"
                  className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl p-3 text-sm outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                  Farmer Name(s)
                </label>
                <input
                  type="text"
                  required
                  value={newFarm.farmerName}
                  onChange={(e) => setNewFarm({ ...newFarm, farmerName: e.target.value })}
                  placeholder="e.g. John & Emma Miller"
                  className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl p-3 text-sm outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={newFarm.location}
                  onChange={(e) => setNewFarm({ ...newFarm, location: e.target.value })}
                  className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl p-3 text-sm outline-none focus:border-primary"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-outline-variant/30">
                <button
                  type="button"
                  onClick={() => setShowAddFarmModal(false)}
                  className="px-5 py-2.5 text-sm font-bold text-on-surface-variant hover:bg-surface-container-high rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-primary text-white font-bold text-sm rounded-xl shadow hover:bg-primary-container cursor-pointer"
                >
                  Register Partner
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Modal: Order Details ── */}
      {selectedOrderDetails && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full border border-outline-variant/30 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-display-lg text-xl font-bold text-on-surface">
                  Order Details #{selectedOrderDetails.id}
                </h3>
                <p className="text-xs text-on-surface-variant">{selectedOrderDetails.date}</p>
              </div>
              <button
                onClick={() => setSelectedOrderDetails(null)}
                className="p-2 text-on-surface-variant hover:text-on-surface rounded-full cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-surface-container-low rounded-2xl">
                <p className="text-xs font-bold uppercase text-on-surface-variant">Customer Information</p>
                <p className="font-bold text-on-surface mt-1">{selectedOrderDetails.customerName}</p>
                <p className="text-xs text-on-surface-variant">{selectedOrderDetails.customerEmail}</p>
                <p className="text-xs text-on-surface-variant mt-2">{selectedOrderDetails.shippingAddress}</p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase text-on-surface-variant mb-2">Order Line Items</p>
                <div className="space-y-2 border-y border-outline-variant/30 py-3">
                  {selectedOrderDetails.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span>{item.quantity}x {item.productName}</span>
                      <span className="font-bold">${(item.quantity * item.unitPrice).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="font-bold text-on-surface">Total Charge</span>
                <span className="font-display-lg text-2xl font-bold text-primary">
                  ${selectedOrderDetails.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
