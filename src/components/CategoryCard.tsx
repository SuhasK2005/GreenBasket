import Image from "next/image";
import Link from "next/link";
import { Category } from "@/data/products";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const isLarge = category.colSpan?.includes("row-span-2");

  return (
    <div
      className={`relative group overflow-hidden rounded-3xl border border-outline-variant/30 ${
        category.colSpan || ""
      } min-h-[220px]`}
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div
        className={`absolute inset-0 ${
          isLarge
            ? "bg-gradient-to-t from-black/70 via-black/30 to-transparent"
            : "bg-black/30 group-hover:bg-black/50 transition-colors"
        }`}
      ></div>

      <div
        className={`absolute text-white p-8 ${
          isLarge
            ? "bottom-0 left-0"
            : "inset-0 flex flex-col justify-center items-center text-center"
        }`}
      >
        <h3 className={`${isLarge ? "font-display-lg text-headline-lg" : "font-headline-md text-2xl"} font-bold mb-1`}>
          {category.name}
        </h3>
        <p className="font-body-md opacity-90 mb-4 max-w-xs">{category.description}</p>
        <Link
          href={`/shop?category=${encodeURIComponent(category.name)}`}
          className="inline-block bg-white text-on-surface px-6 py-2 rounded-full font-label-md hover:bg-primary hover:text-white transition-colors shadow-md"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}
