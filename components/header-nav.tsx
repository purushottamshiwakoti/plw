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
    console.log(menuData);
    const { data } = res;
    console.log(data);

    const buttonName = data.attributes.ButtonName;
    console.log(buttonName);

    const backgroundColor = data.attributes.BackgroundColor;

    const showButton = data.attributes.ShowButton;

    const buttonLink = data.attributes.ButtonLink;

    const menu = menuData.data.attributes.items.data;
    console.log(menu);

    const logo = data.attributes.Logo.media.data.attributes.formats.large.url;
    console.log(logo);

    return {
      buttonName,
      showButton,
      buttonLink,
      menu,
      logo,
      backgroundColor,
    };

    // Extract banner attributes with proper null/undefined checks
  } catch (error) {
    console.log("retrieving data:", error);
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
    />
  );
};
