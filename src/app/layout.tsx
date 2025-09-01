import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Heavy Mug Challenge",
  description:
    "Challenge gyms to lift a 10kg mug without spilling. Join the Wall of Fame!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-gray-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
