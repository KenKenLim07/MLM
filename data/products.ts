import { storeInfo } from "./store";

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageLabel: string;
  imageSrc?: string;
  messengerUrl: string;
};

const messengerUrl = storeInfo.orderUrl;

export const products: Product[] = [
  {
    id: "gel-cream",
    name: "Sunscreen",
    price: 120,
    description: "Gentle daily brightening cream for clearer and smoother skin.",
    imageLabel: "Sunscreen",
    imageSrc: "/Gel_cream.jpg",
    messengerUrl,
  },
  {
    id: "whitening-serum",
    name: "Whitening Serum",
    price: 350,
    description: "Lightweight serum that helps boost glow and even skin tone.",
    imageLabel: "Whitening Serum",
    imageSrc: "/whitening_serum.JPG",
    messengerUrl,
  },
  {
    id: "glow-set",
    name: "Glow Set",
    price: 599,
    description: "Complete glow routine bundle curated for everyday radiance.",
    imageLabel: "Glow Set",
    imageSrc: "/glow_set.JPG",
    messengerUrl,
  },
  {
    id: "sunscreen-spf50",
    name: "Sunscreen SPF50",
    price: 280,
    description: "Non-sticky broad spectrum UV protection with soft finish.",
    imageLabel: "Sunscreen SPF50",
    imageSrc: "/sunscreen.JPG",
    messengerUrl,
  },
  {
    id: "vaseline-cream",
    name: "Vaseline Glutathione Cream",
    price: 450,
    description: "Beauty supplement drink formulated to support skin elasticity.",
    imageLabel: "Collagen Drink",
    imageSrc: "/whitening_serum.JPG",
    messengerUrl,
  },
];
