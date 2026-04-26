import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  axes: ["opsz"],
  style: ["normal", "italic"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Rock Solid Contractors — Tucson & Phoenix Remodeling",
  description:
    "Full-service home remodeling in Tucson and Phoenix: kitchens, bathrooms, flooring, and outdoor living. Request a free estimate.",
  metadataBase: new URL("https://azrocksolid.com"),
  openGraph: {
    title: "Rock Solid Contractors",
    description:
      "Kitchens, bathrooms, flooring, and outdoor living across southern Arizona.",
    url: "https://azrocksolid.com",
    siteName: "Rock Solid Contractors",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${newsreader.variable} ${jetBrainsMono.variable} bg-basalt text-sand antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
