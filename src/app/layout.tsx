import type { Metadata } from "next";
import { Inter, Atkinson_Hyperlegible } from "next/font/google";

import "./globals.css";
import Sidebar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });
const atkinsonHyperlegible = Atkinson_Hyperlegible({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hackrmn",
  description: "HIG influenced Hacker News client",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={atkinsonHyperlegible.className}>
        <main className="grid grid-cols-12 gap-2 min-h-screen">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
