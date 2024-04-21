import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { TopSctoll } from "@/components/top-scroll";
import { Footer } from "@/components/footer";
import NextTopLoader from "nextjs-toploader";
import { HeaderNav } from "@/components/header-nav";
// import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { apiCall } from "@/lib/api";
import Script from "next/script";

export const runtime = "edge";
export const dynamic = "force-dynamic";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

async function getData() {
  try {
    const res = await apiCall("seo", "populate=*");
    const { data } = res;

    const googleAnalytics = data.attributes.GoogleAnalytics;
    const googleTagsManager = data.attributes.GoogleTagsManager;
    const facebookPexels = data.attributes.FacebookPexels;
    return {
      googleAnalytics,
      googleTagsManager,
      facebookPexels,
    };
  } catch (error) {
    console.log(error);
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getData();
  return (
    <html>
      <head>
        <Script async src={data?.googleAnalytics} />
        <Script async src={data?.facebookPexels} />
      </head>
      <GoogleTagManager gtmId={data?.googleTagsManager ?? ""} />
      <body className={inter.className}>
        <Header />
        <HeaderNav />
        {children}
        {/* <Footer /> */}
        <TopSctoll />
        <NextTopLoader color="#299726" />
      </body>
    </html>
  );
}
