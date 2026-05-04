# SEO implementation (MLM Skincare site)

This document describes how search-focused SEO is wired in this Next.js App Router project: shared constants, metadata, crawlers (`robots.txt`, `sitemap.xml`), structured data (JSON-LD), local landing pages, the blog, and measurement hooks.

For **KPIs, GSC/GA4 setup, and weekly review**, see [seo-measurement-playbook.md](./seo-measurement-playbook.md).

---

## 1. Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site origin (no trailing slash issues: code strips trailing `/`). Drives `metadataBase`, JSON-LD URLs, `robots.txt` / `sitemap.xml` host and URLs. **Set in Vercel (Production)** to the live domain, e.g. `https://mlm-skincare-iloilo.vercel.app`. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional. Populates `metadata.verification.google` in the root layout for the meta-tag verification method in Search Console. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional. GA4 measurement ID (`G-…`). Loads gtag in `app/layout.tsx` and enables the global click tracker. |

Local development: copy values into `.env.local` and restart `npm run dev`.

---

## 2. Shared SEO module (`lib/seo.ts`)

Centralizes values used across metadata and schema:

- **`siteUrl`** — from `NEXT_PUBLIC_SITE_URL`, with trailing slash removed; falls back to a default hostname if unset.
- **`defaultTitle`**, **`defaultDescription`**, **`defaultKeywords`** — homepage-aligned defaults and Iloilo-focused keyword list.
- **`normalizedPhone`** — E.164-style phone derived from `data/store.ts` for consistent `telephone` fields in schema.

Pages import `siteUrl` (and often `defaultDescription` / `defaultKeywords`) so canonical bases and JSON-LD stay aligned.

---

## 3. Root layout metadata (`app/layout.tsx`)

The root `metadata` export sets:

- **`metadataBase`** — `new URL(siteUrl)` so relative paths (`/`, `/MLM.PNG`) resolve to absolute URLs in tags.
- **Title** — `defaultTitle` with template `%s | MLM Skincare Iloilo` for child pages that set `title`.
- **Description**, **keywords**, **canonical** — defaults; the homepage overrides title/canonical where needed.
- **Open Graph** — `type: website`, `locale: en_PH`, default title/description, **`/MLM.PNG`** as the share image.
- **Twitter** — `summary_large_image` with the same image.
- **Google verification** — `verification.google` when `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` is set.

**GA4:** If `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set, the layout injects:

1. `AnalyticsClickTracker` (client) — delegates clicks on `[data-analytics-event]` to `gtag('event', …)`.
2. `next/script` — loads `gtag/js` and runs `gtag('config', …)` with `anonymize_ip: true`.

---

## 4. Crawlers: `robots.txt` and `sitemap.xml`

| File | Behavior |
|------|----------|
| `app/robots.ts` | Next.js **Metadata Route** → `/robots.txt`. Allows all user agents on `/`, sets **`host`** and **`sitemap`** to `${siteUrl}/sitemap.xml`. |
| `app/sitemap.ts` | Metadata Route → `/sitemap.xml`. Emits URLs for: `/`, four local landing routes, `/blog`, and **every** `/blog/[slug]` from `data/blogPosts.ts`. **Static marketing URLs** use `STATIC_PAGES_LAST_MODIFIED` at the top of the file (bump when you materially change those pages). **`/blog`** uses the latest `publishedAt` among posts. **Each post** uses its own `publishedAt` (UTC midnight) for `lastModified`. Posts are sorted by slug so the XML order is stable across builds. |

**Adding a post:** append to `blogPosts` in `data/blogPosts.ts`; the sitemap picks it up automatically. Set `publishedAt` to the real go-live date when you publish.

---

## 5. Page-level metadata and JSON-LD

### Homepage (`app/page.tsx`)

- **`metadata`** — title `Beauty Products Iloilo and Guimaras`, shared description/keywords, `canonical: "/"`.
- **JSON-LD** (array in one script tag):
  - **`Organization`** — name, URL, logo, `ContactPoint`, `sameAs` (Messenger/TikTok).
  - **`HealthAndBeautyBusiness`** — local business fields: address (Delgado St, Iloilo City), phone, `areaServed` (Iloilo, Guimaras), `sameAs` includes map URL.

Includes an **internal links** section pointing to local landing pages and `/blog`.

### Local landing pages

| Route | Metadata focus | Schema.org type |
|-------|----------------|-----------------|
| `/beauty-products-iloilo` | Beauty products in Iloilo | `CollectionPage` |
| `/skincare-products-iloilo` | Skincare in Iloilo | `CollectionPage` |
| `/reseller-beauty-products-iloilo` | Resellers | `WebPage` |
| `/delivery-guimaras-beauty-products` | Guimaras delivery | `Service` |

Each page exports `metadata` with a **specific title and description**, **`alternates.canonical`** matching its path, and a single JSON-LD `<script type="application/ld+json">`.

### Blog

| File | Role |
|------|------|
| `data/blogPosts.ts` | Source of truth: `slug`, title, description, dates, keywords, body paragraphs. |
| `app/blog/page.tsx` | Index: static `metadata`, list of posts linking to `/blog/[slug]`. |
| `app/blog/[slug]/page.tsx` | **`generateStaticParams`** for static generation; **`generateMetadata`** per post (title, description, keywords, canonical); **`Article`** JSON-LD (`headline`, `datePublished`, `author` Organization, `mainEntityOfPage`). |

---

## 6. Conversion-oriented analytics (not “SEO” but same stack)

Tracked via **`data-analytics-event`** (and optional `data-analytics-category`, `data-analytics-label`) on links/buttons. **`components/AnalyticsClickTracker.tsx`** walks up from the click target with `closest('[data-analytics-event]')` and calls:

`gtag('event', <eventName>, { event_category, event_label, link_url })`.

**Event names in use:** `click_messenger_cta`, `click_phone_cta`, `click_tiktok_cta` on the homepage, product cards, and Messenger CTAs on local pages.

---

## 7. Operational checklist after deploy

1. Confirm **`NEXT_PUBLIC_SITE_URL`** matches the property URL in **Google Search Console**.
2. Submit **`https://<your-domain>/sitemap.xml`** in GSC.
3. Verify **`/robots.txt`** references the same `sitemap` URL as production.
4. Optional: set **`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`** or keep the HTML file in `public/` if using file verification.
5. Optional: set **`NEXT_PUBLIC_GA_MEASUREMENT_ID`** and confirm events in **Reports → Realtime**.

---

## 8. File map (quick reference)

| Area | Primary files |
|------|----------------|
| Constants | `lib/seo.ts`, `data/store.ts`, `data/products.ts`, `data/blogPosts.ts` |
| Global head / GA | `app/layout.tsx`, `components/AnalyticsClickTracker.tsx` |
| Crawlers | `app/robots.ts`, `app/sitemap.ts` |
| Home + schema | `app/page.tsx` |
| Local SEO pages | `app/beauty-products-iloilo/page.tsx`, `app/skincare-products-iloilo/page.tsx`, `app/reseller-beauty-products-iloilo/page.tsx`, `app/delivery-guimaras-beauty-products/page.tsx` |
| Blog | `app/blog/page.tsx`, `app/blog/[slug]/page.tsx` |
| Measurement process | `docs/seo-measurement-playbook.md` |
