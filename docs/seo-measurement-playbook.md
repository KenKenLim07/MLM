# SEO Measurement Playbook (Iloilo Focus)

## 1) Setup checklist

### Google Search Console
- Add property for your production domain (URL-prefix or Domain property).
- Submit sitemap: `/sitemap.xml`.
- Add verification token via env:
  - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<token>`

### Google Analytics 4
- Create GA4 property and web data stream.
- Add env in deployment:
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
- Confirm events are received in Realtime after deploy.

## 2) KPI dashboard (weekly)

Track these in one sheet/dashboard every week:

- **Impressions (Iloilo transactional terms)**
  - beauty products iloilo
  - skincare products iloilo
  - whitening serum iloilo
  - reseller beauty products iloilo
- **Average position** for each priority keyword cluster.
- **CTR** for homepage and local landing pages.
- **Landing page clicks**:
  - `/beauty-products-iloilo`
  - `/skincare-products-iloilo`
  - `/reseller-beauty-products-iloilo`
  - `/delivery-guimaras-beauty-products`
- **Conversion proxy (GA4)**:
  - outbound clicks to Messenger/Facebook order URL.

## 3) Monthly optimization cycle

1. Export top queries from Search Console.
2. Update titles/descriptions for pages with high impressions but low CTR.
3. Expand content for pages ranking on positions 8-20.
4. Add internal links from homepage/blog to pages with ranking momentum.
5. Publish 3-5 new long-tail pieces in `/blog`.

## 4) Event tracking recommendation (next step)

For conversion visibility, track click events on:
- Messenger CTA buttons
- Phone `tel:` links
- TikTok profile links

Suggested event names:
- `click_messenger_cta`
- `click_phone_cta`
- `click_tiktok_cta`

