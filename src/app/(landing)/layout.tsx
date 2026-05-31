import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Nova Analytics — Privacy-First Data Intelligence",
  description: "Privacy-First Data Intelligence",
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        defer
        src="https://novaanalyrics.com/script.js"
        data-website-id="3bcf5fec-19a0-4c93-b45f-d4d430c56943"
        strategy="afterInteractive"
      />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </>
  );
}
