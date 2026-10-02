import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { HomeBar } from "@/app/_components/home-bar";
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
  title: "LeftNoCrumbs",
  description: "Inventory management for kitchens that waste nothing.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <HomeBar />
        <main className="flex flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}
