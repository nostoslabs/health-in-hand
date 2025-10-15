import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "../styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Health in Hand",
    default: "Health in Hand - Naturopathic Health Clinic in Eva, Alabama",
  },
  description:
    "Natural healthcare using Nutrition Response Testing, Homeopathy, Neurofeedback, and holistic therapies in Eva, Alabama. Serving the Huntsville and Cullman areas.",
  keywords: [
    "naturopathy",
    "natural health",
    "Eva Alabama",
    "holistic health",
    "nutrition response testing",
    "homeopathy",
    "neurofeedback",
    "naturopathic doctor",
    "Huntsville",
    "Cullman",
  ],
  authors: [{ name: "Health in Hand" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://healthinhand.info",
    siteName: "Health in Hand",
    title: "Health in Hand - Naturopathic Health Clinic",
    description:
      "Natural healthcare clinic in Eva, Alabama offering holistic therapies and natural remedies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
