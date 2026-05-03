# Mobile (iPhone) “invisible content but selectable text” + animation sites not animating

**Status:** parked for later investigation  
**Last observed:** 2026-05-03  
**Project:** MLM Skincare storefront (Next.js App Router)

## Symptom

On iPhone Safari (exact iOS version TBD):

- Hero/marketing text can be **selected/copied**, but appears **invisible** on screen.
- Other sections render normally.
- Some third-party sites with animations also appear to **not animate** (unclear if related).

This pattern strongly suggests the DOM is present but something prevents normal painting/compositing for animated layers (classically: stuck `opacity`, transform layer issues, or broader iOS/Safari settings affecting motion).

## What we already changed in this repo (mitigation)

- Removed “hero content starts at `opacity: 0`” patterns.
- Reintroduced Framer Motion using a safer approach:
  - **No fade-from-transparent on critical text** (keep `opacity: 1` while animating `y` / light scale).
  - Respect **`prefers-reduced-motion`** by disabling hero motion when enabled.
- Simplified global reduced-motion CSS to avoid blanket `*` overrides that can interfere with animation libraries.

Files involved historically:

- `components/HeroSection.tsx`
- `app/globals.css`

## Hypotheses to validate (ranked)

1. **iOS Safari motion/accessibility settings** (even if user believes “Reduce Motion” is off):
   - Reduce Motion
   - Per-site settings / experimental features
   - Low Power Mode / thermal throttling affecting animations
2. **Content blockers / Private Relay / VPN / network filters** interfering with JS bundles (less common, but can yield partial hydration behaviors).
3. **WebKit compositing bugs** on specific iOS versions (requires capturing iOS + Safari versions).
4. **Framer Motion + specific iOS version** edge case (validate by reproducing on a minimal page).

## Repro checklist (when we pick this up)

Capture on the device:

- iPhone model:
- iOS version:
- Safari version (if visible) / WebKit build:
- Screen recording showing:
  - page load
  - attempt to select “invisible” text
  - whether hard refresh changes behavior
- Settings screenshots:
  - Settings → Accessibility → Motion → **Reduce Motion**
  - Settings → Accessibility → **Display & Text Size** (Smart Invert / Classic Invert / Increase Contrast if enabled)
  - Settings → Battery → **Low Power Mode**
  - Safari → Advanced → Experimental Features (if any toggled)

## Quick on-device experiments

1. Open the site in **Safari Private tab** (rules out extensions/cache weirdness).
2. Try **Chrome on iOS** (still WebKit, but helps isolate Safari-only settings).
3. Toggle **Reduce Motion** off/on once, reboot Safari, retest.
4. Temporarily disable **content blockers** for the domain.

## Engineering follow-ups (if reproduced after mitigation)

- Add a tiny “diagnostics” dev-only overlay (not for production) logging:
  - `window.matchMedia('(prefers-reduced-motion: reduce)').matches`
  - `navigator.userAgent`
- Create a **minimal repro** route (no Tailwind, single `motion.div`) to bisect Framer Motion vs CSS vs Next bundling.
- Consider a feature flag: `DISABLE_HERO_MOTION` for emergency rollout.

## Definition of done

- Reliable hero visibility on target iPhones (including with motion enabled).
- Documented root cause (settings vs WebKit vs Motion) with iOS version matrix.
