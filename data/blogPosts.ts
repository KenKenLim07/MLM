export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  keywords: string[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "best-skincare-routine-iloilo-humid-weather",
    title: "Best Skincare Routine for Iloilo Humid Weather",
    description:
      "A practical, lightweight skincare routine for Iloilo weather conditions.",
    publishedAt: "2026-05-04",
    keywords: ["best skincare products in iloilo", "skincare products iloilo"],
    content: [
      "Hot and humid days in Iloilo can make heavy products feel sticky. Start with a gentle cleanser, add a lightweight serum, and finish with sunscreen SPF50.",
      "For daytime, focus on breathable layers. At night, keep your routine simple and consistent so your skin barrier stays calm.",
      "If you are unsure where to begin, ask for a starter lineup based on your skin type and budget.",
    ],
  },
  {
    slug: "how-to-start-beauty-reseller-iloilo",
    title: "How to Start a Beauty Reseller Business in Iloilo",
    description:
      "Simple steps for new Iloilo resellers to choose products and manage first orders.",
    publishedAt: "2026-05-04",
    keywords: ["reseller beauty products iloilo", "beauty distributor iloilo"],
    content: [
      "Begin with a focused lineup of fast-moving items instead of too many variants. Track repeat buyers and restock winners first.",
      "Use Messenger for quick inquiries and clear order confirmation. Save template replies for prices, payment details, and delivery schedules.",
      "As your reseller base grows, expand to bundles and seasonal offers backed by customer feedback.",
    ],
  },
  {
    slug: "guimaras-beauty-products-delivery-guide",
    title: "Guimaras Beauty Products Delivery Guide",
    description:
      "What Guimaras buyers should prepare before ordering beauty products online.",
    publishedAt: "2026-05-04",
    keywords: ["beauty products guimaras delivery", "order skincare iloilo messenger"],
    content: [
      "Before ordering, list exact product names and quantities. Include your barangay and preferred contact window for easier coordination.",
      "Ask for alternatives in case one variant is unavailable so your order can proceed quickly.",
      "Keep your preferred items in a recurring note so reordering is faster each month.",
    ],
  },
];
