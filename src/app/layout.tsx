import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const manrope = Manrope({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <main className="p-5 sm:px-10 sm:py-6">
          <Navbar />
          {children}
          <Footer />
        </main>

      </body>
    </html>
  );
}
