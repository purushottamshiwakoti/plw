import { Locate, Mail, Phone } from "lucide-react";

export const ContactList = ({ title }: { title: string }) => {
  return (
    <>
      <div className="space-y-4">
        <h2 className="font-semibold text-xl capitalize">{title}</h2>
        <div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Phone className="text-buttonBg" />
              <a href="tel:+13452067849" className="font-semibold ">
                +1 (345) 206 7849
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-buttonBg" />
              <a href="mailto:info@example.com" className="font-semibold ">
                info@example.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Locate className="text-buttonBg w-10 h-10" />
              <a
                href="https://maps.google.com?q=143+Ringer+House,+NY+58920+United+States"
                className="font-normal "
                target="_blank"
                rel="noopener noreferrer"
              >
                143 Ringer House, NY 58920 United States
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
