"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Farms", href: "/#farmers" },
    { name: "Our Story", href: "/#story" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Admin Portal", href: "/admin" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 transition-all duration-300 ${
        scrolled ? "py-2.5 shadow-md" : "py-4 shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-1 max-w-container-max mx-auto">
        <div className="flex items-center gap-6 md:gap-10">
          <Link
            href="/"
            className="font-display-lg text-headline-md font-bold text-primary tracking-tight flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-3xl">eco</span>
            <span>GreenBasket</span>
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-body-md py-1 transition-all flex items-center gap-1 ${
                    isActive
                      ? "text-primary font-bold border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.name === "Admin Portal" && (
                    <span className="material-symbols-outlined text-base">admin_panel_settings</span>
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href="/dashboard"
            className="p-2 hover:bg-primary-container/10 rounded-full transition-all active:scale-95 text-on-surface-variant hover:text-primary flex items-center"
            title="Favorites"
          >
            <span className="material-symbols-outlined">favorite</span>
          </Link>
          <Link
            href="/shop"
            className="p-2 hover:bg-primary-container/10 rounded-full transition-all active:scale-95 text-on-surface-variant hover:text-primary relative flex items-center"
            title="Cart"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-primary rounded-full ring-2 ring-surface"></span>
          </Link>
          <Link
            href="/dashboard"
            className="p-2 hover:bg-primary-container/10 rounded-full transition-all active:scale-95 text-on-surface-variant hover:text-primary flex items-center"
            title="Customer Account"
          >
            <span className="material-symbols-outlined">account_circle</span>
          </Link>
          <Link
            href="/admin"
            className="px-3 py-1.5 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-full transition-all active:scale-95 text-xs font-bold flex items-center gap-1.5 border border-primary/20"
            title="Admin Command Center"
          >
            <span className="material-symbols-outlined text-base">admin_panel_settings</span>
            <span className="hidden sm:inline">Admin</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
