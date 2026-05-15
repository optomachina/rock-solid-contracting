"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

const EXCLUDED_ROUTES = ["/estimate", "/privacy", "/terms"];
const WIDGET_ID = "69fc2f11ba1fce2b1b1b52c9";
const LEADCONNECTOR_LOADER_URL = "https://widgets.leadconnectorhq.com/loader.js";
const LEADCONNECTOR_RESOURCES_URL =
  "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
const LEADCONNECTOR_LOADER_INTEGRITY =
  "sha384-EJwDiKiHWrTGAUWtLl8vn9uAU8GlWUKBWGYqpp++ZRjRBwR1m2nF88Q9zhC9EvnU";

function removeLeadConnectorWidget() {
  document
    .querySelectorAll(
      [
        "chat-widget",
        'script[src*="leadconnectorhq.com"]',
        'script[src*="stcdn.leadconnectorhq.com"]',
        'iframe[src*="leadconnectorhq.com"]',
        'iframe[src*="msgsndr.com"]',
      ].join(","),
    )
    .forEach((el) => el.remove());
}

function appendLeadConnectorScript() {
  if (
    document.querySelector(`script[data-widget-id="${WIDGET_ID}"]`) ||
    document.querySelector("chat-widget")
  ) {
    return;
  }

  const script = document.createElement("script");
  script.src = LEADCONNECTOR_LOADER_URL;
  script.integrity = LEADCONNECTOR_LOADER_INTEGRITY;
  script.crossOrigin = "anonymous";
  script.dataset.resourcesUrl = LEADCONNECTOR_RESOURCES_URL;
  script.dataset.widgetId = WIDGET_ID;
  script.dataset.source = "WEB_USER";
  script.async = true;
  document.body.appendChild(script);
}

export default function ChatWidget() {
  const pathname = usePathname();
  const isExcluded = EXCLUDED_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  useEffect(() => {
    if (isExcluded) {
      removeLeadConnectorWidget();
      return;
    }

    const timeout = globalThis.setTimeout(() => {
      appendLeadConnectorScript();
    }, 250);

    return () => globalThis.clearTimeout(timeout);
  }, [isExcluded, pathname]);

  if (isExcluded) {
    return null;
  }

  return (
    <Script
      src={LEADCONNECTOR_LOADER_URL}
      integrity={LEADCONNECTOR_LOADER_INTEGRITY}
      crossOrigin="anonymous"
      data-resources-url={LEADCONNECTOR_RESOURCES_URL}
      data-widget-id={WIDGET_ID}
      data-source="WEB_USER"
      strategy="afterInteractive"
    />
  );
}
