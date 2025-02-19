import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/Components/main/starBackground";
import Navbar from "@/Components/main/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eddies Portfolio",
  description: "We working this thing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'$(inter.className) bg-[#030014] overflow-y-scroll overflow-x-hidden'}>
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
