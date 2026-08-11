import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";
import { Toaster } from "@/components/ui/sonner";

export const viewport: Viewport = {
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ApeCover",
  description:
    "On-chain protection for the riskiest minutes of a token launch.",
  icons: {
    icon: "/img/apecover-icon.png",
  },
  openGraph: {
    title: "ApeCover",
    description:
      "On-chain protection for the riskiest minutes of a token launch.",
    images: ["/img/apesafe-icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ApeCover",
    description:
      "On-chain protection for the riskiest minutes of a token launch.",
    images: ["/img/apesafe-icon.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
