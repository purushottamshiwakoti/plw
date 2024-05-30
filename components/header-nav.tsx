import { apiCall } from "@/lib/api";
import { Navbar } from "./navbar";
import { cookies } from "next/headers";

async function getData() {
  const cookieStore = cookies();

  const locale = cookieStore.get("language")?.value ?? "en";
  const endpoint = locale === "en" ? "menus/1" : "menus/3";

  try {
    const [res, menuData] = await Promise.all([
      apiCall("navbar", "populate=Logo.media"),
      apiCall(`${endpoint}`, "nested&populate=*"),
    ]);
    const { data } = res;

    const buttonName = data.attributes.ButtonName;

    const backgroundColor = data.attributes.BackgroundColor;

    const showButton = data.attributes.ShowButton;

    const buttonLink = data.attributes.ButtonLink;

    const menu = menuData.data.attributes.items.data;

    const logo = data.attributes.Logo.media.data.attributes.formats.large.url;
    const showFlag = data.attributes.showFlag;

    return {
      buttonName,
      showButton,
      buttonLink,
      menu,
      logo,
      backgroundColor,
      showFlag,
    };

    // Extract banner attributes with proper null/undefined checks
  } catch (error) {
    return null;
  }
}

export const HeaderNav = async () => {
  const data = await getData();
  return (
    <Navbar
      logo={data?.logo}
      buttonLink={data?.buttonLink}
      buttonName={data?.buttonName}
      menu={data?.menu}
      showButton={data?.showButton}
      backgroundColor={data?.backgroundColor}
      showFlag={data?.showFlag}
    />
  );
};
