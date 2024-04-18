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
    const res = await apiCall(
      "home-page",
      "populate=Banner.BannerImage&populate=Election&populate=Services.IconImage.media"
    );
    const { data } = res;

    console.log(data);

    // Extract banner attributes with proper null/undefined checks
    const bannerTitle = data.attributes.Banner.Title;
    const bannerDescription = data.attributes.Banner.Description;
    const showInput = data.attributes.Banner.ShowInput;
    const bannerButtonName = data.attributes.Banner.ButtonName;
    const electionTitle = data.attributes.Election.Title;
    const electionDescription = data.attributes.Election.Description;
    const showElection = data.attributes.Election.ShowElection;
    const electionDate = data.attributes.Election.ElectionDate;

    const bannerImage =
      data.attributes.Banner.BannerImage.data.attributes.formats.thumbnail.url;

    return {
      bannerTitle,
      bannerDescription,
      bannerButtonName,
      bannerImage,
      showInput,
      electionDate,
      electionTitle,
      electionDescription,
      showElection,
    };
  } catch (error) {
    console.log("Error retrieving data:", error);
    return null;
  }
}
export default async function Home() {
  const data = await getData();
  return (
    <main className="relative">
      <div>
        <Banner
          description={data?.bannerDescription}
          title={data?.bannerTitle}
          image={data?.bannerImage}
          button={data?.bannerButtonName}
          showInput={data?.showInput}
        />
        <div className="-mt-28 z-40 relative">
          <ElectionTime
            date={data?.electionDate}
            description={data?.electionDescription}
            title={data?.electionTitle}
          />
        </div>
        <Services />
        <div className="pb-10"></div>
      </div>
      {/* <div>
      </div>
      </div>
      <div>
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

      <div className="-mt-28 z-40 relative">
        {/* <ElectionTime date={electionDate} /> */}
      </div>
      {/* <Services /> */}
    </main>
  );
}
