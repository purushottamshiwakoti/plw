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
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { cookies } from "next/headers";
import { Toaster } from "sonner";
import { AppUrl } from "@/lib/url";

// export const runtime = "edge";
export const dynamic = "force-dynamic";
const inter = Inter({ subsets: ["latin"] });

async function getData() {
  try {
    const [seoResponse, footerResponse] = await Promise.all([
      apiCall("seo", "populate=logo"),
      apiCall(
        "footer",
        "populate=FooterMenu.page&populate=FooterMenu.subMenu&populate=SocialMedia&populate=Counter&populate=Logo.media"
      ),
    ]);

    const seoData = seoResponse.data;
    const footerData = footerResponse.data;

    const logo =
      // footerData.attributes.Logo.media.data.attributes.formats.large.url;
      footerData.attributes.Logo.media.data.attributes.formats.large.url;
    const logoAlt = footerData.attributes.Logo.alt;
    const counter = footerData.attributes.Counter;
    const phone = footerData.attributes.Phone;
    const email = footerData.attributes.Email;
    const location = footerData.attributes.Location;
    const socialMedia = footerData.attributes.SocialMedia;
    const aboutTitle = footerData.attributes.AboutTitle;
    const aboutDescription = footerData.attributes.AboutDescription;
    const getInTouchTitle = footerData.attributes.GetInTouchTitle;
    const footerText = footerData.attributes.FooterText;
    const menuTitle = footerData.attributes.MenuTitle;
    const menu = footerData.attributes.FooterMenu;
    const backgroundColor = footerData.attributes.BackgroundColor;

    const googleAnalytics = seoData.attributes.GoogleAnalytics;
    const googleTagsManager = seoData.attributes.GoogleTagsManager;
    const facebookPexels = seoData.attributes.FacebookPexels;
    const appLogo =
      seoData.attributes.logo.data.attributes.formats.thumbnail.url;

    return {
      googleAnalytics,
      googleTagsManager,
      facebookPexels,
      footerData,
      logo,
      logoAlt,
      counter,
      phone,
      email,
      location,
      socialMedia,
      aboutTitle,
      aboutDescription,
      getInTouchTitle,
      footerText,
      menuTitle,
      menu,
      backgroundColor,
      appLogo,
    };
  } catch (error) {
    console.log(error);
  }
}

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
//   icons: {
//     icon: "/icon.png", // /public path
//   },
// };
export async function generateMetadata() {
  // read route params

  // fetch data

  // optionally access and extend (rather than replace) parent metadata
  const data = await getData();
  console.log(AppUrl + data?.appLogo);

  return {
    title: "Sfturem",
    description: "The React Framework for the Web",

    icons: {
      icon: {
        url: AppUrl + data?.appLogo,
        href: AppUrl + data?.appLogo,
      },
    },
  };
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getData();
  const theme = createTheme({
    /** Put your mantine theme override here */
  });
  const cookieStore = cookies();
  const locale = cookieStore.get("language")?.value ?? "en";

  return (
    <html dir={locale == "ar" ? "rtl" : ""}>
      <head>
        <Script async src={data?.googleAnalytics} />
        <Script async src={data?.facebookPexels} />
      </head>
      <GoogleTagManager gtmId={data?.googleTagsManager ?? ""} />
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <Header />
          <HeaderNav />
          {children}
          {/* <Footer
            counter={data?.counter}
            logo={data?.logo}
            logoAlt={data?.logoAlt}
            aboutDescription={data?.aboutDescription}
            aboutTitle={data?.aboutTitle}
            email={data?.email}
            getInTouchTitle={data?.getInTouchTitle}
            location={data?.location}
            phone={data?.phone}
            socialMedia={data?.socialMedia}
            footerText={data?.footerText}
            menu={data?.menu}
            menuTitle={data?.menuTitle}
            backgroundColor={data?.backgroundColor}
          /> */}
          <TopSctoll />
          <NextTopLoader color="#299726" />
        </MantineProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
