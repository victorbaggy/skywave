import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skywave Logistics",
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
      <body>
         <Script
          strategy="afterInteractive"
          src={`https://cdn.livechatinc.com/tracking.js`}
        />
        <Script
          id="livechat-init"
          strategy="afterInteractive"
        >
          {`
            window.__lc = window.__lc || {};
            window.__lc.license = 19176207;
          `}
        </Script>
        {children}</body>
    </html>
  );
}
