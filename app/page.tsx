import { Banner } from "@/components/banner";
import { ConfirmVotes } from "@/components/confirm-votes";
import { Donation } from "@/components/donation";
import { ElectionTime } from "@/components/election-time";
import { FutureMovement } from "@/components/future-movement";
import { LatestEvents } from "@/components/latest-events";
import { Momvement } from "@/components/movement";
import { Navbar } from "@/components/navbar";
import { PoliciesAndProgress } from "@/components/policies-progress";
import { Saying } from "@/components/saying";
import { Services } from "@/components/services";
import { SocialIcons } from "@/components/social-icons";
import { TopSctoll } from "@/components/top-scroll";
import { apiCall } from "@/lib/api";
import Image from "next/image";

async function getData() {
  try {
    const res = await apiCall("home-page", "populate=BannerImage.media");
    const { data } = res;

    // Extract banner attributes with proper null/undefined checks
    const bannerTitle = data.attributes.BannerTitle;
    const bannerDescription =
      data.attributes.BannerDescription?.[0]?.children?.[0]?.text ?? "";
    const bannerButtonName = data.attributes.BannerButtonName;
    const electionDate = data.attributes.ElectionDate;
    const bannerImage =
      data.attributes.BannerImage.media.data.attributes.formats.large.url ?? "";
    const bannerImageAlt = data.attributes.BannerImage?.alt ?? "";

    return {
      bannerTitle,
      bannerDescription,
      bannerButtonName,
      electionDate,
      bannerImage,
      bannerImageAlt,
    };
  } catch (error) {
    console.error("Error retrieving data:", error);
    return null;
  }
}
export default async function Home() {
  const data = await getData();
  if (!data) {
    return null;
  }
  const {
    bannerButtonName,
    bannerDescription,
    bannerImage,
    bannerTitle,
    electionDate,
  } = data;
  return (
    <main className="relative">
      {/* <div>
        <Banner
          description={bannerDescription}
          title={bannerTitle}
          image={bannerImage}
          button={bannerButtonName}
        />
      </div>
      <div className="-mt-28 z-40 relative">
        <ElectionTime date={electionDate} />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Momvement />
      </div>
      <div>
        <LatestEvents />
      </div>
      <div>
        <Donation />
      </div>
      <div>
        <FutureMovement />
      </div>
      <div>
        <Saying />
      </div>
      <div>
        <SocialIcons />
      </div>
      <div>
        <ConfirmVotes />
      </div>
      <div>
        <PoliciesAndProgress />
      </div> */}

      <div className="mt-10 text-center text-2xl">
        Other features coming soon.....
      </div>
    </main>
  );
}
