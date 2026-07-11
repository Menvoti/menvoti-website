import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MENVOTI | Möbelmontage, Umzugshilfe & mehr in Köln",
  description: "Professionelle Möbelmontage, Transporte, Umzugshilfe und Gartenarbeit in Köln und Umgebung (bis 60 km). Schnell, zuverlässig und fair.",
  openGraph: {
    title: "MENVOTI | Professionelle Dienstleistungen in Köln",
    description: "Möbelmontage, Transporte, Umzugshilfe und Gartenarbeit in Köln und Umgebung.",
    type: "website",
    locale: "de_DE",
    siteName: "MENVOTI",
  },
  twitter: {
    card: "summary",
    title: "MENVOTI | Professionelle Dienstleistungen in Köln",
    description: "Möbelmontage, Transporte, Umzugshilfe und Gartenarbeit in Köln und Umgebung.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
