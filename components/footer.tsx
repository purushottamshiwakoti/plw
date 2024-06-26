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
  backgroundColor: string | undefined;
  textColor: string;
  seperatorColor: string;
  iconColor: string;
  counterText: string;
  counterBackgroundColor: string;
}

function AnimationNumber({ n }: { n: string }) {
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
  backgroundColor,
  textColor,
  seperatorColor,
  counterBackgroundColor,
  counterText,
  iconColor,
}: FooterProps) => {
  return (
    <>
      <div className=" text-muted-foreground pt-[5rem] pb-10   ">
        <div
          style={{
            backgroundColor: counterBackgroundColor,
            color: counterText,
          }}
        >
          <div className="lg:px-[14%] ">
            <div className=" lg:flex items-center justify-between">
              <Link href={"/"} className="lg:min-w-[40%] bg-red-500]">
                <Image
                  // src={"/images/logo.svg"}
                  src={`${AppUrl}${logo}`}
                  alt={logoAlt}
                  width={180}
                  height={50}
                  priority
                />
              </Link>
              <div
                className="lg:flex items-center lg:gap-20 gap-5 grid md:grid-cols-4 grid-cols-2 lg:mt-0 mt-4
            "
              >
                {counter &&
                  counter.map((item, index) => {
                    return (
                      <div key={index}>
                        <h2
                          className="font-semibold  text-2xl"
                          style={{
                            color: counterText,
                          }}
                        >
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
          <hr
            className="mt-16 "
            style={{
              borderColor: seperatorColor,
            }}
          />
        </div>
        <div
          style={{
            color: textColor,
            backgroundColor: backgroundColor,
          }}
        >
          <div className="lg:px-[14%] px-4 lg:pt-[3rem] pt-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {/* about us start  */}
            <div className="space-y-4">
              <h2 className="font-semibold text-xl capitalize">{aboutTitle}</h2>
              <p className="text-sm">{aboutDescription}</p>
              <div className="gid ">
                <SmallSocialIcon size="30px" url={socialMedia} />
              </div>
            </div>
            {/* about us end */}
            {/* party start  */}
            <div className="space-y-4">
              <h2 className="font-semibold text-xl capitalize">{menuTitle}</h2>
              {menu &&
                menu.map((item, index) => (
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
                    <hr
                      className="mt-2 w-[80%]"
                      style={{
                        borderColor: seperatorColor,
                      }}
                    />
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
              iconColor={iconColor}
            />
          </div>
          <hr
            className="mt-16  "
            style={{
              borderColor: seperatorColor,
            }}
          />
        </div>
        <div className="mt-10 ">
          <p
            className="text-center "
            style={{
              color: textColor,
            }}
          >
            © {new Date().getFullYear()}{" "}
            {/* <span className="text-buttonHoverBg">Politaro</span> - Political */}
            {footerText}
          </p>
        </div>
      </div>
    </>
  );
};
