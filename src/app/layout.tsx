import type { Metadata } from "next";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import "./CSS/globals.css";

import { cn } from "@/app/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CareQueue",
  description: "A Care and Doc Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen bg-dark-300 font-sans antialiased", //cn className
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
