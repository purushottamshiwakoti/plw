import { ContactList } from "@/components/contact-list";
import { SmallSocialIcon } from "@/components/small-social-icon";
import { SocialIcons } from "@/components/social-icons";
import { StarList } from "@/components/star-list";
import { Phone, PhoneCall } from "lucide-react";
import React from "react";

const ContactUsPage = () => {
  return (
    <div className="px-[10rem] py-[3rem]">
      <StarList
        title="Get in touch with us"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio doloremque animi incidunt ipsa tenetur nemo sequi omnis corrupti pariatur!"
      />
      <div className="mt-10 flex items-center justify-center flex-col">
        <h2 className="text-lg font-semibold text-primary/70">
          Contact us on Social Media
        </h2>
        <div className="mt-5">
          <SmallSocialIcon size="40px" url={[]} />
        </div>
      </div>
      <div className="mt-14 ">
        {/* <ContactList title="Contact us on others" /> */}
      </div>
    </div>
  );
};

export default ContactUsPage;
