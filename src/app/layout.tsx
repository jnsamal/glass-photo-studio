import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Self-hosted, variable-weight faces (no external font requests at runtime).
const fraunces = localFont({
  src: "../fonts/Fraunces-Variable.ttf",
  variable: "--font-fraunces",
  display: "swap",
});

const inter = localFont({
  src: "../fonts/Inter-Variable.ttf",
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = localFont({
  src: [
    { path: "../fonts/IBMPlexMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/IBMPlexMono-Medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skyglass Studio — Photography in natural light",
  description:
    "Skyglass Studio is a photography studio shooting portraits, weddings, and editorial work in natural light. Browse the gallery and book a session.",
  keywords: [
    "photography studio",
    "portrait photography",
    "wedding photography",
    "editorial photography",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
