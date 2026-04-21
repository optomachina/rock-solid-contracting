import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-50 text-stone-900`}
      >
        {children}
      </body>
    </html>
  );
}
