export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  farm: string;
  unit: string;
  price: number;
  rating: number;
  reviewsCount?: number;
  inStock: boolean;
  tag?: string;
  image: string;
  description: string;
  nutrition?: {
    calories: string;
    carbs: string;
    fiber: string;
    protein: string;
  };
}

export interface Farmer {
  id: string;
  name: string;
  farmName: string;
  quote: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  colSpan?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    slug: "heirloom-tomato-box",
    name: "Heirloom Tomato Box",
    category: "Fresh Produce",
    farm: "Oak Creek Farm",
    unit: "2lb",
    price: 12.5,
    rating: 4.9,
    reviewsCount: 128,
    inStock: true,
    tag: "In Stock",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=1200&q=85",
    description:
      "Grown with organic compost and pure well water in Oak Creek Valley. Rich in lycopene and bursting with vibrant, earthy sweetness.",
    nutrition: {
      calories: "22 kcal per 100g",
      carbs: "4.8g",
      fiber: "1.2g",
      protein: "0.9g",
    },
  },
  {
    id: "prod-2",
    slug: "pasture-raised-eggs",
    name: "Pasture-Raised Eggs",
    category: "Dairy & Eggs",
    farm: "Sunrise Valley",
    unit: "Dozen",
    price: 8.0,
    rating: 5.0,
    reviewsCount: 210,
    inStock: true,
    tag: "Farm Fresh",
    image:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=1200&q=85",
    description:
      "Hand-collected daily from free-roaming hens raised on organic pastures. Deep golden yolks and un-compromised natural flavor.",
    nutrition: {
      calories: "72 kcal per egg",
      carbs: "0.4g",
      fiber: "0g",
      protein: "6.3g",
    },
  },
  {
    id: "prod-3",
    slug: "organic-lacinato-kale",
    name: "Organic Lacinato Kale",
    category: "Fresh Produce",
    farm: "Green Meadow Co.",
    unit: "Bunch",
    price: 4.5,
    rating: 4.7,
    reviewsCount: 84,
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?auto=format&fit=crop&w=1200&q=85",
    description:
      "Crisp, tender dinosaur kale packed with antioxidants, Vitamin A, and Vitamin K. Harvested daily at dawn.",
    nutrition: {
      calories: "35 kcal per 100g",
      carbs: "4.4g",
      fiber: "4.1g",
      protein: "2.9g",
    },
  },
  {
    id: "prod-4",
    slug: "classic-sourdough",
    name: "Classic Sourdough",
    category: "Bakery",
    farm: "Artisan Hearth",
    unit: "1.5lb",
    price: 9.0,
    rating: 4.9,
    reviewsCount: 162,
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
    description:
      "Slow-fermented for 36 hours using ancient stone-ground wheat flour and pure wild yeast starter.",
    nutrition: {
      calories: "160 kcal per slice",
      carbs: "31g",
      fiber: "2g",
      protein: "6g",
    },
  },
  {
    id: "prod-5",
    slug: "rainbow-carrot-bunch",
    name: "Rainbow Carrot Bunch",
    category: "Fresh Produce",
    farm: "Sunrise Valley",
    unit: "Bunch",
    price: 5.5,
    rating: 4.8,
    reviewsCount: 95,
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=1200&q=85",
    description:
      "A colorful mixture of heirloom carrot varieties naturally rich in phytonutrients and minerals.",
    nutrition: {
      calories: "41 kcal per 100g",
      carbs: "9.6g",
      fiber: "2.8g",
      protein: "0.9g",
    },
  },
  {
    id: "prod-6",
    slug: "extra-virgin-olive-oil",
    name: "Extra Virgin Olive Oil",
    category: "Pantry",
    farm: "Estate Gold",
    unit: "500ml",
    price: 24.0,
    rating: 5.0,
    reviewsCount: 310,
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=85",
    description:
      "Cold-pressed within 4 hours of harvest from single-estate olives. Notes of fresh grass and green pepper.",
    nutrition: {
      calories: "120 kcal per tbsp",
      carbs: "0g",
      fiber: "0g",
      protein: "0g",
    },
  },
];

export const FARMERS: Farmer[] = [
  {
    id: "farmer-1",
    name: "Arthur & Mary Jenkins",
    farmName: "River Oak Farms",
    quote:
      "Our family has been tending these fields for three generations. We believe the soil is a living legacy.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "farmer-2",
    name: "Dr. Sarah Chen",
    farmName: "Urban Roots",
    quote:
      "Technology allows us to grow the purest produce using 90% less water. It's the future of urban eating.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "farmer-3",
    name: "The Rossi Family",
    farmName: "Golden Orchard",
    quote:
      "We don't use pesticides. We use ladybugs and patience. The flavor speaks for itself.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85",
  },
];

export const CATEGORIES: Category[] = [
  {
    id: "cat-1",
    name: "Fresh Produce",
    description: "Farm to table in less than 24 hours.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=85",
    colSpan: "md:col-span-2 md:row-span-2",
  },
  {
    id: "cat-2",
    name: "Dairy & Eggs",
    description: "Pasture raised, cold-chain delivered.",
    image:
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "cat-3",
    name: "The Pantry",
    description: "Artisanal oils, grains & natural preserves.",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "cat-4",
    name: "Daily Bakery",
    description: "Baked at 4 AM, delivered by 8 AM.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=85",
    colSpan: "md:col-span-2",
  },
];

export interface AdminOrder {
  id: string;
  customerName: string;
  customerEmail: string;
  date: string;
  status: "Pending" | "Processing" | "In Transit" | "Delivered" | "Cancelled";
  itemsCount: number;
  total: number;
  shippingAddress: string;
  items: { productName: string; quantity: number; unitPrice: number }[];
}

export interface AdminCustomer {
  id: string;
  name: string;
  email: string;
  tier: "Gold" | "Silver" | "Platinum";
  ordersCount: number;
  totalSpent: number;
  greenPoints: number;
  joinDate: string;
  status: "Active" | "Inactive";
}

export interface AdminFarm {
  id: string;
  farmName: string;
  farmerName: string;
  location: string;
  certification: string;
  rating: number;
  productsCount: number;
  status: "Verified" | "Under Review" | "Pending";
}

export const INITIAL_ADMIN_ORDERS: AdminOrder[] = [
  {
    id: "GB-8924",
    customerName: "Eleanor Vance",
    customerEmail: "eleanor.vance@example.com",
    date: "2026-08-04 10:15 AM",
    status: "In Transit",
    itemsCount: 5,
    total: 48.5,
    shippingAddress: "742 Evergreen Terrace, Springfield",
    items: [
      { productName: "Heirloom Tomato Box", quantity: 2, unitPrice: 12.5 },
      { productName: "Pasture-Raised Eggs", quantity: 1, unitPrice: 8.0 },
      { productName: "Organic Lacinato Kale", quantity: 3, unitPrice: 4.5 },
    ],
  },
  {
    id: "GB-8925",
    customerName: "Marcus Sterling",
    customerEmail: "marcus.s@example.com",
    date: "2026-08-04 09:40 AM",
    status: "Processing",
    itemsCount: 3,
    total: 38.5,
    shippingAddress: "128 Beacon St, Boston MA",
    items: [
      { productName: "Extra Virgin Olive Oil", quantity: 1, unitPrice: 24.0 },
      { productName: "Classic Sourdough", quantity: 1, unitPrice: 9.0 },
      { productName: "Rainbow Carrot Bunch", quantity: 1, unitPrice: 5.5 },
    ],
  },
  {
    id: "GB-8926",
    customerName: "Sophia Thorne",
    customerEmail: "sophia.t@example.com",
    date: "2026-08-04 08:20 AM",
    status: "Pending",
    itemsCount: 6,
    total: 62.0,
    shippingAddress: "450 Ocean Ave, San Francisco CA",
    items: [
      { productName: "Heirloom Tomato Box", quantity: 3, unitPrice: 12.5 },
      { productName: "Pasture-Raised Eggs", quantity: 2, unitPrice: 8.0 },
      { productName: "Organic Lacinato Kale", quantity: 2, unitPrice: 4.5 },
    ],
  },
  {
    id: "GB-8412",
    customerName: "Eleanor Vance",
    customerEmail: "eleanor.vance@example.com",
    date: "2026-07-30 02:10 PM",
    status: "Delivered",
    itemsCount: 8,
    total: 72.1,
    shippingAddress: "742 Evergreen Terrace, Springfield",
    items: [
      { productName: "Extra Virgin Olive Oil", quantity: 2, unitPrice: 24.0 },
      { productName: "Classic Sourdough", quantity: 2, unitPrice: 9.0 },
    ],
  },
  {
    id: "GB-7901",
    customerName: "David Kim",
    customerEmail: "dkim@example.com",
    date: "2026-07-28 11:05 AM",
    status: "Delivered",
    itemsCount: 4,
    total: 35.0,
    shippingAddress: "88 Market St, Chicago IL",
    items: [
      { productName: "Pasture-Raised Eggs", quantity: 2, unitPrice: 8.0 },
      { productName: "Rainbow Carrot Bunch", quantity: 2, unitPrice: 5.5 },
    ],
  },
];

export const INITIAL_ADMIN_FARMS: AdminFarm[] = [
  {
    id: "farm-1",
    farmName: "Oak Creek Farm",
    farmerName: "Arthur & Mary Jenkins",
    location: "Sonoma Valley, CA",
    certification: "USDA Organic",
    rating: 4.9,
    productsCount: 14,
    status: "Verified",
  },
  {
    id: "farm-2",
    farmName: "Sunrise Valley",
    farmerName: "Dr. Sarah Chen",
    location: "Napa County, CA",
    certification: "Non-GMO Certified",
    rating: 5.0,
    productsCount: 9,
    status: "Verified",
  },
  {
    id: "farm-3",
    farmName: "Green Meadow Co.",
    farmerName: "The Rossi Family",
    location: "Willamette Valley, OR",
    certification: "Regenerative Organic",
    rating: 4.8,
    productsCount: 18,
    status: "Verified",
  },
  {
    id: "farm-4",
    farmName: "Artisan Hearth",
    farmerName: "Liam O'Connor",
    location: "Portland, OR",
    certification: "Artisanal Baker Guild",
    rating: 4.9,
    productsCount: 6,
    status: "Verified",
  },
  {
    id: "farm-5",
    farmName: "Valley Ridge Honey",
    farmerName: "Elena Rostova",
    location: "Boulder, CO",
    certification: "Raw & Wild Organic",
    rating: 4.7,
    productsCount: 4,
    status: "Under Review",
  },
];

export const INITIAL_CUSTOMERS: AdminCustomer[] = [
  {
    id: "cust-1",
    name: "Eleanor Vance",
    email: "eleanor.vance@example.com",
    tier: "Gold",
    ordersCount: 24,
    totalSpent: 1420.5,
    greenPoints: 1240,
    joinDate: "2024-09-12",
    status: "Active",
  },
  {
    id: "cust-2",
    name: "Marcus Sterling",
    email: "marcus.s@example.com",
    tier: "Platinum",
    ordersCount: 42,
    totalSpent: 2890.0,
    greenPoints: 3100,
    joinDate: "2024-03-05",
    status: "Active",
  },
  {
    id: "cust-3",
    name: "Sophia Thorne",
    email: "sophia.t@example.com",
    tier: "Silver",
    ordersCount: 8,
    totalSpent: 430.0,
    greenPoints: 410,
    joinDate: "2025-01-18",
    status: "Active",
  },
  {
    id: "cust-4",
    name: "David Kim",
    email: "dkim@example.com",
    tier: "Gold",
    ordersCount: 19,
    totalSpent: 1150.0,
    greenPoints: 980,
    joinDate: "2024-11-01",
    status: "Active",
  },
];
