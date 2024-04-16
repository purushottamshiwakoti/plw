import { SocialIcon } from "react-social-icons";

export const SmallSocialIcon = ({ size }: { size: string }) => {
  return (
    <div className="flex items-center gap-2 ">
      <SocialIcon
        url="https://twitter.com/"
        bgColor="#515F71"
        style={{
          width: size,
          height: size,
          borderRadius: "100%",
        }}
      />
      <SocialIcon
        url="https://facebook.com"
        bgColor="#515F71"
        style={{
          width: size,
          height: size,
          borderRadius: "100%",
        }}
      />
      <SocialIcon
        url="https://instagram.com"
        bgColor="#515F71"
        style={{
          width: size,
          height: size,
          borderRadius: "100%",
        }}
      />
      <SocialIcon
        url="https://www.linkedin.com/"
        bgColor="#515F71"
        style={{
          width: size,
          height: size,
          borderRadius: "100%",
        }}
      />
      <SocialIcon
        url="https://www.pinterest.com/"
        bgColor="#515F71"
        style={{
          width: size,
          height: size,
          borderRadius: "100%",
        }}
      />
    </div>
  );
};
