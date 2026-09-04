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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCf3Daixts0a8XmWXLYszIk5EJojhx5HnbNAcI-fo4Z-UcTPenrUHl5a8ca9Ml57X8Hd-dlQ1TFu9tmz_6U5C1jUsZKV_veIilQFUYI7BRLY6rKICFA3E_p5ynPe-nqHQU4UxTnsr4sfky5tfMC-2cMKBKXdVEUYWNuOVlYaVAPeBzJit3CFNSgaF79NaBWS3BkrEYN2ztjQStO7H0OfoiAvaC7HZsVz9OZQtCR-ftSxws161QsP6Bx",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBd_Ldi8b2fHMPabmCitpYIPSmgc9FMX_lGr_FGUnSKht9Ld9tRgkz9fZpGl-mNyHO5CPuX7bmZwvZQ-RSZDiOroDtLPinGphQfi-tURdPoDwlKSgKNMpIRZgR0hrDcUuPi0RGSO0-75fQSurgd-KmGN662VFRrCG-GBo9qCSI1Otqklth41LEgJr7zmR7P-1_AZRZv_MAqydQUTvKz3udbm3p2qci2na79BzaVazFjXUmfLXgHLnej",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZRFlOVsm4sa1MTOEWRndGorNif61PizZ0jKprWKPlw06LjcOK8m5mrz6lRu81FY03E-yyVbm1NueUv4y5gjv54b-kKeweaksmFaj9WPvqJWZwjVtz1tuwKhfmyRXtWLM0amCsOIM34LgEFcXZWcx5nHG4TFvGRQgeDWjSoue5zTB2J1eZLXQL2U166m5g4qPhq6GPPIKjqWh6XmveJrCfJKb4iL_62NBWkb1KhnVLmxzyhqxfFSfn",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBD7pmGKwUb91VXjOl47UfbDrnutT0_VTGDrczeixR9ku5d8WbMVWSo_PtePwxgK5Nusk7-Icg3IKFRdN6pybKTXVa8HuqZQBOuek4FJHDJ39tHEWNQeo7pdxstaSqC1qvqbB9gI_g1QfZwWHcK2v2GAWaNQFXqJyfQU2bMb3JBj-GLjoC3cFTcwzNIYFjE7ECxjTCK9HazROWmRAI1f8BlEYfufxKb-zFJzsZn-VK3BBZCwNDtCWi9",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQcdYYD-YAY46yDSwI1oQ6gngzo26E3PDYswYRjCvSiIBjzNBzownvEpK8xMA4BQfilm9IKNLypQF2r0nG6lnCttNPg7TOCeiZXDtscHCP2bImaZkCFyhTqnLVcShqkHjP1n_-eSEy6BeYFuRYjIECrpRuzHeF5F8SudEb8IcAZmbLUCCs-pDS64ZucP43D-Yx_9tyY8SQYrSGE4ZGLbGlrfHHJ3TuHBdJOErrsd72hFqisaebYGXC",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9kZbUzSGKfnD6OBMIqiWmAb0H0XQllp7z-pQtSY3d93PQT8gaaEBPk3cWWoEB8iYtswvbRJw_kbJOce1Nc9-ESfIJ36RLu0KM9dWgnLxAsPLfUAPE3evrdztPuKDxkXYkTVd6281oQ50w6Rodn6k_jpzaYzRwhrZDm9Ro-kdPtweYxpt2UovAOAahYq6whviy2oBZWbbRZ7LH0A3P6oaOffGs-2q_avSlALnlvcyhcuA2JJ58h5-8",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjgrrNEJyk-lJp1EGO8nVMaM0u3HL4TDp4cJrEAGWta4CBCjAqs0y6mWGZYVm4L7BKbN31tXs4pFBGbXRuRXElUzlfB9jSsV-5jAxIlWZID7ebxpI1O8m_VVG_tu7AdQ0fAY3uyKoV5TVdelEa1g1QU2opnINOjr_UDKSukPrDqU3bvEGSAtjrfzNhAAqstgKisabXUCGx7plPB27EglFmj1r5re6bejx8Lcw8JA2puupVdfMaHYyY",
  },
  {
    id: "farmer-2",
    name: "Dr. Sarah Chen",
    farmName: "Urban Roots",
    quote:
      "Technology allows us to grow the purest produce using 90% less water. It's the future of urban eating.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNhg38bm5Liq5kKPXFXz7FL7n-iUV-WmOUBgKMqR0twBFXeiGzz-8J9nKa8CITPn-mUgNnQa03IT_BA_wXL9kxMT2A3onOsNC0seXdTFdBnfqw2YRLJIkkdD4p683Wigsc1k1IhDCxhw-719dF6_i2oV534g7FlUwS0NbtVURBEtJBE6M8IuugW3Lu72nmusmfVZuZ3LtRVMSdnraXi1FrFlL69x37SyPPIoNcA3HRkqxW73aDrR2Z",
  },
  {
    id: "farmer-3",
    name: "The Rossi Family",
    farmName: "Golden Orchard",
    quote:
      "We don't use pesticides. We use ladybugs and patience. The flavor speaks for itself.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATyBfZhgve6NPG5H1DpYQEhoxsJ3bEOwIffYKL9qCNaDKZW6uD6f30rxD-MKb8lzt_JH1BPBAWgD9yimzQjHATnquRTdkB1EXHAIcq-heaDkkDZh6iG_Yrmb5hHtMba-iItv6Q1ad5TYe20iOVPGEzf9SgWI7rad1hs6fP17V5jgX1kg8RqGu5j2HpXVwEJu5M8yKBaxHFGY-YZPb5yDENOGKXAewau0bMBIHa7lTF7FVXyfr67lS0",
  },
];

export const CATEGORIES: Category[] = [
  {
    id: "cat-1",
    name: "Fresh Produce",
    description: "Farm to table in less than 24 hours.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNVttR10PMl0Occzh2kFdL27IQDuQ6t7qLPZ9ZEW24cBJ7B4O5WzAP21kjtpKUMuPSRzgy3miMVIFqbEXJnSQnZ3aN74OUtKG-zWAxlvFUoDUdKw6SfJIf7iRnQTC1767wSeKdyVPjY_RBoEdq2aQJMYBVbG3Sl0OZq5mKoUgfgqRjrxIaM0qbWQ-BgKfFNi6TJ22vgqMNdHPU_6k-Zwgu6j9eZwxZZedo2SE7ImUigqF2KBYPAS-2",
    colSpan: "md:col-span-2 md:row-span-2",
  },
  {
    id: "cat-2",
    name: "Dairy & Eggs",
    description: "Pasture raised, cold-chain delivered.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6jylMVEU4MOdt-dDIzvBWxvKLMUSHEZqq80lgpA-7R87JxJWoo9z9uUKZka0P-3520Hz32LnnIsUHg3EB76CmPXFHmePrl4IS9vqK46NYkoZ0Pyteg1MWpU-Jt-notK5zX8Q5ZDuLJHIDhnpTZJK4TL4425SNqugLnKezMwwDaENaah-gegunQXpzEtz2PRhg-gwgHkCyCdKwAc_g6fU0w1xXYrH9-7vMo1qduF-X4jzlgHsh4dwz",
  },
  {
    id: "cat-3",
    name: "The Pantry",
    description: "Artisanal oils, grains & natural preserves.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZmKn1EIQBAjeJbDTcG7OO0WBvG1geKdCC47blXXwVT7Y31Mo-Sp4vPn9Mjt9t-5Trn-vq4no3JOzfBqBYL6KxCopDFSwb24JcNQtCTCQfQuzAJ6OxCoCSd_9ootrqBJQMAuIFf_04S_bl8DI4damNWokflCV5u8PkWbXQUt3OEiGwB8vW7hsImyhXJsTVkiXaiPwMnkFfcXSHasAFLjaZlXZ75zRkqFQDf-6GDsy992jPMtjrCXV1",
  },
  {
    id: "cat-4",
    name: "Daily Bakery",
    description: "Baked at 4 AM, delivered by 8 AM.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsy7zdMdGaDmvtxeaYwO2-iY7w0UmefOKUBtPsbdRbS_qZfN2rD4rISxatHtCjfqG3qyXnpNy3kb8Xr7VRPrDCR0arXeMnQAQGqJbbuZVvpRlN1CyYPDGP1eQrlJujRSu3OuS3ORO2txsZ_fLDUm5UDAsZuBecbNU_rKbUklc5dt8OjlMIBJACIPY4LIBVN-XkQKbfgWZAkymN11VQIPMEOPBM4QTISlw27TLw6dyJMimXW5txL3QG",
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

