import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LogisticsPro",
  description:
    "Comprehensive Logistics Services Tailored solutions to optimize your supply chain and drive business growth",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
