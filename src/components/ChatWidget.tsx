"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

const EXCLUDED_ROUTES = ["/estimate", "/privacy", "/terms"];

export default function ChatWidget() {
  const pathname = usePathname();
  if (EXCLUDED_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`))) {
    return null;
  }

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="69fc2f11ba1fce2b1b1b52c9"
      data-source="WEB_USER"
      strategy="afterInteractive"
    />
  );
}
