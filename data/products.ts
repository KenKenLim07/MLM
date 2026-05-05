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
    id: "Rescue-Kit",
    name: "Revita Glow",
    price: 320,
    description: "Gentle daily Rescue Kit for clearer and smoother skin.",
    imageLabel: "Skin Rescue Kit",
    imageSrc: "/Revita_GLow.PNG",
    messengerUrl,
  },
  {
    id: "Brightening-Kit",
    name: "Fairy Skin",
    price: 350,
    description: "Lightweight Kit that helps boost glow and even skin tone.",
    imageLabel: "Brightening Kit",
    imageSrc: "/Brightening_Kit.PNG",
    messengerUrl,
  },
  {
    id: "glow-set",
    name: "Sunscreen SPF45",
    price: 199,
    description: "Complete glow protection routine bundle curated for everyday radiance.",
    imageLabel: "Tinted BB",
    imageSrc: "/glow_set.JPG",
    messengerUrl,
  },
  {
    id: "sunscreen-spf50",
    name: "ADLAW",
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
    description: "Beauty formulated to support skin elasticity.",
    imageLabel: "Serum Burst Lotion",
    imageSrc: "/Whitening_serum.jpg",
    messengerUrl,
  },
];
