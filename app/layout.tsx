import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import { HomeBar } from "@/app/_components/home-bar";
import "./globals.css";

// Nunito for reading — rounded, but with the open shapes that keep small
// print legible. Baloo 2 for headings, which is where the bakery-sign chunk
// belongs.
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
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
      className={`${nunito.variable} ${baloo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <HomeBar />
        <main className="flex flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}
