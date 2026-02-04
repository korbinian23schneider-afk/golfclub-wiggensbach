import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ContactProvider } from "./context/contact-context";
import ContactModal from "@/components/contact-modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Golfclub Waldegg-Wiggensbach – Golf auf höchstem Niveau",
  description:
    "Golfclub Waldegg-Wiggensbach: 27-Loch-Anlage in den Allgäuer Alpen. Panorama, Illertal und Zugspitz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <ContactProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ContactModal />
        </ContactProvider>
      </body>
    </html>
  );
}
