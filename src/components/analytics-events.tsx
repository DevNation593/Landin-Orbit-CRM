"use client";

import { useEffect } from "react";

export function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trackedElement = target?.closest<HTMLElement>("[data-track]");
      const eventName = trackedElement?.dataset.track;

      if (!eventName) return;

      window.dispatchEvent(
        new CustomEvent("vantex:track", {
          detail: {
            event: eventName,
            href: trackedElement.getAttribute("href") || undefined,
          },
        }),
      );

      window.gtag?.("event", eventName, {
        link_url: trackedElement.getAttribute("href") || undefined,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
