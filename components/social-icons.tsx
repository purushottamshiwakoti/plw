import { SocialIcon } from "react-social-icons";

export const SocialIcons = ({
  url,
}: {
  url: {
    id: string;
    Link: string;
    Name: string;
  }[];
}) => {
  console.log(url);
  return (
    <>
      <div className="flex items-center justify-center gap-10 mb-10">
        {url && url.map((item: any) => <SocialIcon url={item.Link} />)}
      </div>
    </>
  );
};
