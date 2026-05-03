"use client";

import { useEffect } from "react";

type GtagFn = (command: "event", eventName: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export default function AnalyticsClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const el = target.closest<HTMLElement>("[data-analytics-event]");
      if (!el) return;

      const eventName = el.dataset.analyticsEvent;
      if (!eventName || typeof window.gtag !== "function") return;

      window.gtag("event", eventName, {
        event_category: el.dataset.analyticsCategory ?? "engagement",
        event_label: el.dataset.analyticsLabel ?? undefined,
        link_url: (el as HTMLAnchorElement).href ?? undefined,
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
