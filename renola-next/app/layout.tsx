import React from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/renola.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renola Investment Group",
  description: "Investing in digital infrastructure, trust and long-term value.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

