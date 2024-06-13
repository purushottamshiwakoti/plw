import { Locate, Mail, Phone } from "lucide-react";

export const ContactList = ({
  title,
  email,
  phone,
  location,
  iconColor,
}: {
  title: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  location: string | undefined;
  iconColor: string;
}) => {
  return (
    <>
      <div className="space-y-4">
        <h2 className="font-semibold text-xl capitalize">{title}</h2>
        <div className="text-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Phone
                style={{
                  color: iconColor,
                }}
              />
              <a href={`tel:${phone}`} className="font-semibold ">
                {phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail
                style={{
                  color: iconColor,
                }}
              />
              <a href={`mailto:${email}`} className="font-semibold ">
                {email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Locate
                className=" w-auto h-auto"
                style={{
                  color: iconColor,
                }}
              />
              {/* <a
                // href="https://maps.google.com?q=143+Ringer+House,+NY+58920+United+States"
                className="font-normal "
                target="_blank"
                rel="noopener noreferrer"
              > */}
              {location}
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
