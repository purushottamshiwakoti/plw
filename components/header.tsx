import { Wifi } from "lucide-react";
import { Button } from "./ui/button";
import { SmallSocialIcon } from "./small-social-icon";
import { SocialIcon } from "react-social-icons";
import { apiCall } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import Slider from "./slider";
import { TopHeader } from "./top-header";

async function getData() {
  try {
    const res = await apiCall("header", "populate=*");
    const { data } = res;

    const title = data.attributes.Title;
    const backgroundColor = data.attributes.BackgroundColor;
    const icon = data.attributes.Icon.data.attributes.url;
    const iconAlt = data.attributes.Icon.data.attributes.name;
    const menu = data.attributes.Menu;
    const newsCampaign = data.attributes.NewsCampaign;
    const socialMedia = data.attributes.SocialMedia;
    const fontColor = data.attributes.FontColor;

    return {
      title,
      backgroundColor,
      icon,
      iconAlt,
      menu,
      newsCampaign,
      socialMedia,
      fontColor,
    };
  } catch (error) {
    console.log("Error retrieving data:", error);
    return null;
  }
}

export const Header = async () => {
  const data = await getData();
  return <TopHeader data={data} />;
};
