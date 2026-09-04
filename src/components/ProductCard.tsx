"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [added, setAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="product-card group relative bg-white border border-outline-variant/30 rounded-[24px] overflow-hidden premium-shadow transition-soft hover:-translate-y-1 flex flex-col justify-between h-full">
      <Link href={`/product/${product.slug}`} className="block relative">
        <div className="aspect-square relative overflow-hidden bg-surface-container-low">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="product-image object-cover transition-soft duration-700 group-hover:scale-105"
          />

          {product.tag && (
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-md border border-outline-variant/30 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest">
                {product.tag}
              </span>
            </div>
          )}

          <button
            onClick={handleToggleFavorite}
            className={`absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-md rounded-full shadow-sm transition-soft opacity-90 hover:opacity-100 ${
              isFavorite ? "text-error" : "text-on-surface-variant hover:text-error"
            }`}
          >
            <span
              className="material-symbols-outlined text-[20px]"
              style={{
                fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              favorite
            </span>
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="font-headline-md text-on-surface text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {product.name}
              </h4>
              <p className="text-label-sm text-on-surface-variant">
                {product.farm} • {product.unit}
              </p>
            </div>
            <div className="flex items-center gap-1 text-tertiary">
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="font-label-sm font-bold">{product.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </Link>

      <div className="px-6 pb-6 pt-0 flex justify-between items-center mt-auto">
        <p className="font-display-lg text-[24px] font-bold text-on-surface">
          ${product.price.toFixed(2)}
        </p>
        <button
          onClick={handleAddToCart}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-soft active:scale-90 shadow-lg ${
            added
              ? "bg-secondary text-white shadow-secondary/20"
              : "bg-primary text-white hover:bg-primary-container shadow-primary/20"
          }`}
          title={added ? "Added!" : "Add to cart"}
        >
          <span className="material-symbols-outlined">
            {added ? "check" : "add"}
          </span>
        </button>
      </div>
    </div>
  );
}
