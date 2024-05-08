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

// export const runtime = "edge";
export const dynamic = "force-dynamic";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

async function getData() {
  try {
    const [seoResponse, footerResponse] = await Promise.all([
      apiCall("seo", "populate=*"),
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
    console.log(logo);
    const logoAlt = footerData.attributes.Logo.alt;
    console.log(logoAlt);
    const counter = footerData.attributes.Counter;
    console.log(counter);
    const phone = footerData.attributes.Phone;
    console.log(phone);
    const email = footerData.attributes.Email;
    console.log(email);
    const location = footerData.attributes.Location;
    console.log(location);
    const socialMedia = footerData.attributes.SocialMedia;
    console.log(socialMedia);
    const aboutTitle = footerData.attributes.AboutTitle;
    console.log(aboutTitle);
    const aboutDescription = footerData.attributes.AboutDescription;
    console.log(aboutDescription);
    const getInTouchTitle = footerData.attributes.GetInTouchTitle;
    console.log(getInTouchTitle);
    const footerText = footerData.attributes.FooterText;
    console.log(footerText);
    const menuTitle = footerData.attributes.MenuTitle;
    console.log(menuTitle);
    const menu = footerData.attributes.FooterMenu;
    console.log(menu);
    const backgroundColor = footerData.attributes.BackgroundColor;
    console.log(backgroundColor);

    const googleAnalytics = seoData.attributes.GoogleAnalytics;
    const googleTagsManager = seoData.attributes.GoogleTagsManager;
    const facebookPexels = seoData.attributes.FacebookPexels;

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
  const theme = createTheme({
    /** Put your mantine theme override here */
  });
  const cookieStore = cookies();
  const locale = cookieStore.get("language")?.value ?? "en";

  return (
    <html dir={locale == "ar" ? "rtl" : ""}>
      <head>
        {/* <Script async src={data?.googleAnalytics} />
        <Script async src={data?.facebookPexels} /> */}
      </head>
      <GoogleTagManager gtmId={data?.googleTagsManager ?? ""} />
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <Header />
          <HeaderNav />
          {children}
          <Footer
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
          />
          <TopSctoll />
          <NextTopLoader color="#299726" />
        </MantineProvider>
      </body>
    </html>
  );
}
