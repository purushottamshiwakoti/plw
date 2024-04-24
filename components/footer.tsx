"use client";
import { ChevronRight, Locate, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { SmallSocialIcon } from "./small-social-icon";
import { ContactList } from "./contact-list";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import { AppUrl } from "@/lib/url";

interface FooterProps {
  logo: string;
  logoAlt: string;
  counter: {
    Title: string;
    Description: string;
  }[];
  phone: string | undefined;
  email: string | undefined;
  location: string | undefined;
  socialMedia: {
    id: string;
    Link: string;
    Name: string;
  }[];
  aboutTitle: string | undefined;
  aboutDescription: string | undefined;
  getInTouchTitle: string | undefined;
  footerText: string | undefined;
  menuTitle: string | undefined;
  menu: any[];
}

function AnimationNumber({ n }: { n: string }) {
  console.log(n);
  const numericValue = parseFloat(n.replace(/[^\d.-]/g, "")); // Extract numeric value
  const suffix = n.replace(/[\d.-]/g, ""); // Extract suffix (non-numeric part)
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: numericValue },
    delay: 200,
    config: {
      mass: 1,
      tension: 20,
      friction: 10,
    },
  });

  const formattedNumber =
    numericValue % 1 === 0 ? Math.round(numericValue) : numericValue.toFixed(1);

  return (
    <animated.div>
      {number.to((n: number) => `${formattedNumber}${suffix}`)}
    </animated.div>
  );
}

export const Footer = ({
  counter,
  logo,
  logoAlt,
  aboutDescription,
  aboutTitle,
  email,
  getInTouchTitle,
  location,
  phone,
  socialMedia,
  footerText,
  menu,
  menuTitle,
}: FooterProps) => {
  return (
    <>
      <div className="bg-[#061A33]/10 text-muted-foreground pt-[5rem] pb-10  ">
        <div className="px-[10rem]">
          <div className=" flex items-center justify-between">
            <Link href={"/"}>
              <Image
                // src={"/images/logo.svg"}
                src={
                  process.env.NODE_ENV === "development"
                    ? `${AppUrl}${logo}`
                    : logo
                }
                alt={logoAlt}
                width={180}
                height={50}
                priority
              />
            </Link>
            <div className="flex items-center gap-20">
              {counter.map((item, index) => {
                return (
                  <div key={index}>
                    <h2 className="font-semibold  text-2xl">
                      {" "}
                      {item.Description}
                    </h2>
                    {/* <AnimationNumber n={item.Description} /> */}
                    <p className="text-sm mt-1">{item.Title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr className="mt-16 border-[#2B3C51]" />
        <div className="px-[10rem] mt-[3rem] grid grid-cols-3 gap-10">
          {/* about us start  */}
          <div className="space-y-4">
            <h2 className="font-semibold text-xl capitalize">{aboutTitle}</h2>
            <p className="text-sm">{aboutDescription}</p>
            <div>
              <SmallSocialIcon size="30px" url={socialMedia} />
            </div>
          </div>
          {/* about us end */}
          {/* party start  */}
          <div className="space-y-4">
            <h2 className="font-semibold text-xl capitalize">{menuTitle}</h2>
            {menu.map((item, index) => (
              <div key={index}>
                <div className="cursor-pointer group flex items-center ">
                  <div className="flex gap-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                    <ChevronRight className="w-3 h-3" />
                    <ChevronRight className="w-3 h-3 -ml-4" />
                  </div>
                  <Link
                    href={item.Link}
                    className="group-hover:ml-4 group-hover:text-buttonHoverBg text-sm transition-all duration-500"
                  >
                    {item.Name}
                  </Link>
                </div>
                <hr className="border-[#2B3C51] mt-2 w-[80%]" />
              </div>
            ))}
          </div>
          {/* party end */}

          {/* useful links start  */}
          {/* <div className="space-y-4">
            <h2 className="font-semibold text-xl capitalize">Useful Links</h2>
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index}>
                <div className="cursor-pointer group flex items-center ">
                  <div className="flex gap-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                    <ChevronRight className="w-3 h-3" />
                    <ChevronRight className="w-3 h-3 -ml-4" />
                  </div>
                  <h2 className="group-hover:ml-4 group-hover:text-buttonHoverBg text-sm transition-all duration-500">
                    Our Partners
                  </h2>
                </div>
                <hr className="border-[#2B3C51] mt-2 w-[80%]" />
              </div>
            ))}
          </div> */}
          {/* useful links end */}

          <ContactList
            title={getInTouchTitle}
            email={email}
            location={location}
            phone={phone}
          />
        </div>
        <hr className="mt-16 border-[#2B3C51] " />
        <div className="mt-10 ">
          <p className="text-center">
            © {new Date().getFullYear()}{" "}
            {/* <span className="text-buttonHoverBg">Politaro</span> - Political */}
            {footerText}
          </p>
        </div>
      </div>
    </>
  );
};
