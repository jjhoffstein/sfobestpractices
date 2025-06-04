"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/utils/analytics";
import { verifyAnalytics } from "@/utils/verifyAnalytics";

export default function AnalyticsClient() {
  const pathname = usePathname();

  useEffect(() => {
    // Verify analytics implementation
    verifyAnalytics();

    // Track page views
    trackPageView(pathname, {
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  }, [pathname]);

  return null;
} 