import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Backdrop } from "@/components/Backdrop";
import { profile, siteUrl } from "@/content";
import "./globals.css";

// Exposed as CSS variables and consumed by globals.css.
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const title = `${profile.name} · ${profile.role}`;

export const metadata: Metadata = {
  title,
  description: profile.tagline,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title,
    description: profile.tagline,
    type: "website",
  },
};

// Matches --bg in globals.css, so mobile browser chrome blends into the page.
export const viewport: Viewport = {
  themeColor: "#0a0d12",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <Backdrop />
        {children}
      </body>
    </html>
  );
}
