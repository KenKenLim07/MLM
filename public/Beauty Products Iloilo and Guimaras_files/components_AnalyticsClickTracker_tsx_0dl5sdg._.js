(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/AnalyticsClickTracker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnalyticsClickTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function AnalyticsClickTracker() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsClickTracker.useEffect": ()=>{
            const onClick = {
                "AnalyticsClickTracker.useEffect.onClick": (event)=>{
                    const target = event.target;
                    if (!target) return;
                    const el = target.closest("[data-analytics-event]");
                    if (!el) return;
                    const eventName = el.dataset.analyticsEvent;
                    if (!eventName || typeof window.gtag !== "function") return;
                    window.gtag("event", eventName, {
                        event_category: el.dataset.analyticsCategory ?? "engagement",
                        event_label: el.dataset.analyticsLabel ?? undefined,
                        link_url: el.href ?? undefined
                    });
                }
            }["AnalyticsClickTracker.useEffect.onClick"];
            document.addEventListener("click", onClick, true);
            return ({
                "AnalyticsClickTracker.useEffect": ()=>document.removeEventListener("click", onClick, true)
            })["AnalyticsClickTracker.useEffect"];
        }
    }["AnalyticsClickTracker.useEffect"], []);
    return null;
}
_s(AnalyticsClickTracker, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = AnalyticsClickTracker;
var _c;
__turbopack_context__.k.register(_c, "AnalyticsClickTracker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_AnalyticsClickTracker_tsx_0dl5sdg._.js.map