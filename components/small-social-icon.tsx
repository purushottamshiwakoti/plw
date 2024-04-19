import { SocialIcon } from "react-social-icons";

export const SmallSocialIcon = ({
  size,
  url,
}: {
  size: string;
  url: {
    id: string;
    Link: string;
    Name: string;
  }[];
}) => {
  return (
    <div className="flex items-center gap-2 ">
      {url &&
        url.map((item: any) => (
          <SocialIcon
            url={item.Link}
            bgColor="#515F71"
            style={{
              width: size,
              height: size,
              borderRadius: "100%",
            }}
            key={item.id}
          />
        ))}
    </div>
  );
};
