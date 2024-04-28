import { apiCall } from "@/lib/api";
import { Navbar } from "./navbar";

async function getData() {
  try {
    const [res, menuData] = await Promise.all([
      apiCall(
        "header-menu",
        "populate=Menu.SubMenu&populate=logo&populate=Menu.page.sub_pages.children"
      ),
      apiCall("menus/4", "nested&populate=*"),
    ]);
    const { data } = res;

    const buttonName = data.attributes.ButtonName;
    const backgroundColor = data.attributes.BackgroundColor;
    const showButton = data.attributes.ShowButton;
    const buttonLink = data.attributes.ButtonLink;
    const menu = menuData.data.attributes.items.data;
    const logo = data.attributes.logo.data.attributes.formats.large.url;

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
    console.error("Error retrieving data:", error);
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
