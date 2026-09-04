import Image from "next/image";
import { Farmer } from "@/data/products";

interface FarmerCardProps {
  farmer: Farmer;
}

export default function FarmerCard({ farmer }: FarmerCardProps) {
  return (
    <div className="min-w-[300px] md:min-w-[450px] snap-center">
      <div className="relative rounded-3xl overflow-hidden aspect-[4/5] group shadow-md border border-outline-variant/30">
        <Image
          src={farmer.image}
          alt={farmer.name}
          fill
          sizes="(max-width: 768px) 300px, 450px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <span className="bg-primary/90 backdrop-blur px-3 py-1 rounded-full text-label-sm mb-4 inline-block font-semibold">
            {farmer.farmName}
          </span>
          <h4 className="font-headline-md text-2xl font-bold mb-2">{farmer.name}</h4>
          <p className="font-body-md opacity-90 italic leading-relaxed">
            "{farmer.quote}"
          </p>
        </div>
      </div>
    </div>
  );
}
