import { storeInfo } from "@/data/store";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://mlm-skincare.vercel.app";

export const defaultTitle = "MLM Skincare Iloilo | Beauty Products and Reseller Supply";

export const defaultDescription =
  "MLM Skincare is a trusted beauty products distributor in Iloilo. Shop skincare essentials, whitening serum, kojic soap, sunscreen, and reseller-friendly bundles with fast Messenger support.";

export const defaultKeywords = [
  "beauty products iloilo",
  "skincare products iloilo",
  "whitening serum iloilo",
  "kojic soap iloilo",
  "sunscreen spf50 iloilo",
  "beauty distributor iloilo",
  "reseller beauty products iloilo",
  "guimaras beauty products delivery",
  "MLM Skincare Iloilo",
];

const phoneDigits = storeInfo.phone.replace(/\D/g, "");

export const normalizedPhone =
  phoneDigits.startsWith("63") || phoneDigits.startsWith("+63")
    ? `+${phoneDigits.replace(/^\+/, "")}`
    : phoneDigits.startsWith("0")
      ? `+63${phoneDigits.slice(1)}`
      : `+${phoneDigits}`;
