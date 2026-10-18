import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Backdrop } from "@/components/Backdrop";
import { profile } from "@/content/site";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.role}`,
  description: profile.tagline,
  metadataBase: new URL("https://evansem.github.io"),
  openGraph: { title: `${profile.name} · ${profile.role}`, description: profile.tagline, type: "website" },
};

export const viewport: Viewport = { themeColor: "#0a0d12", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <Backdrop />
        {children}
      </body>
    </html>
  );
}
