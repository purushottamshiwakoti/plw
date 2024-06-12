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
            style={{
              width: size,
              height: size,
              borderRadius: "100%",
            }}
            target="_blank"
            key={item.id}
            bgColor="#212121"
          />
        ))}
    </div>
  );
};
