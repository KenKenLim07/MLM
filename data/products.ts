import { storeInfo } from "./store";

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageLabel: string;
  messengerUrl: string;
};

const messengerUrl = storeInfo.orderUrl;

export const products: Product[] = [
  {
    id: "kojic-soap",
    name: "Kojic Soap",
    price: 120,
    description: "Gentle daily brightening bar for clearer and smoother skin.",
    imageLabel: "Kojic Soap",
    messengerUrl,
  },
  {
    id: "whitening-serum",
    name: "Whitening Serum",
    price: 350,
    description: "Lightweight serum that helps boost glow and even skin tone.",
    imageLabel: "Whitening Serum",
    messengerUrl,
  },
  {
    id: "glow-set",
    name: "Glow Set",
    price: 599,
    description: "Complete glow routine bundle curated for everyday radiance.",
    imageLabel: "Glow Set",
    messengerUrl,
  },
  {
    id: "sunscreen-spf50",
    name: "Sunscreen SPF50",
    price: 280,
    description: "Non-sticky broad spectrum UV protection with soft finish.",
    imageLabel: "Sunscreen SPF50",
    messengerUrl,
  },
  {
    id: "collagen-drink",
    name: "Collagen Drink",
    price: 450,
    description: "Beauty supplement drink formulated to support skin elasticity.",
    imageLabel: "Collagen Drink",
    messengerUrl,
  },
];
