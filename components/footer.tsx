import { Locate, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { SmallSocialIcon } from "./small-social-icon";
import { ContactList } from "./contact-list";

export const Footer = () => {
  return (
    <>
      <div className="bg-[#061A33] text-white pt-[5rem] pb-10  ">
        <div className="px-[10rem]">
          <div className=" flex items-center justify-between">
            <div>
              <Image
                src={"/images/logo.svg"}
                alt="logo"
                width={180}
                height={50}
                priority
              />
            </div>
            <div className="flex items-center gap-20">
              {Array.from({ length: 4 }, (_, index) => (
                <div key={index}>
                  <h2 className="font-semibold text-3xl"> $9.1K</h2>
                  <p className="text-sm mt-1">Donated Money</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="mt-16 border-[#2B3C51]" />
        <div className="px-[10rem] mt-[3rem] grid grid-cols-4 gap-10">
          {/* about us start  */}
          <div className="space-y-4">
            <h2 className="font-semibold text-xl capitalize">About us</h2>
            <p>
              Lorem ipsum dolor sit amet consecteur adipisicing elitm sed
              eiusmod tempor incididunt ut labore etsu dolore magna aliquatenim
              veniam quis.
            </p>
            <div>
              <SmallSocialIcon size="30px" />
            </div>
          </div>
          {/* about us end */}
          {/* party start  */}
          <div className="space-y-4">
            <h2 className="font-semibold text-xl capitalize">The Party</h2>
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index}>
                <h4>About Politaro</h4>
                <hr className="border-[#2B3C51] mt-2 w-[80%]" />
              </div>
            ))}
          </div>
          {/* party end */}

          {/* useful links start  */}
          <div className="space-y-4">
            <h2 className="font-semibold text-xl capitalize">Useful Links</h2>
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index}>
                <h4>Our Partners</h4>
                <hr className="border-[#2B3C51] mt-2 w-[80%]" />
              </div>
            ))}
          </div>
          {/* useful links end */}

          <ContactList title="Get in touch" />
        </div>
        <hr className="mt-16 border-[#2B3C51] " />
        <div className="mt-10 ">
          <p className="text-center">
            © {new Date().getFullYear()}{" "}
            <span className="text-buttonBg">Politaro</span> - Political Party.
            All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};
