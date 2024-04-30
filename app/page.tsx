import { Banner } from "@/components/banner";
import { ConfirmVotes } from "@/components/confirm-votes";
import { Donation } from "@/components/donation";
import { ElectionTime } from "@/components/election-time";
import { FutureMovement } from "@/components/future-movement";
import { LatestEvents } from "@/components/latest-events";
import { Momvement } from "@/components/movement";
import { PoliciesAndProgress } from "@/components/policies-progress";
import { Saying } from "@/components/saying";
import { Services } from "@/components/services";
import { SocialIcons } from "@/components/social-icons";
import { apiCall } from "@/lib/api";

async function getData() {
  try {
    const res = await apiCall(
      "home-page",
      "populate=Banner.BannerImage&populate=Election&populate=Services.Icon.Icon.media&populate=AboutSFM.Image.media&populate=DonationIcons.Icon.media&populate=MovementIcon.Icon.media&populate=Reviews.Image.media&populate=AboutSFM.SocialMedia&populate=DonationBanner&populate=SocialMedia&populate=ConfirmVotes.BackgroundImage&populate=FAQ.Image.media&populate=FAQ.QuestionAnswer"
    );
    const { data } = res;

    // Extract banner attributes with proper null/undefined checks
    const bannerTitle = data.attributes.Banner.Title;
    const bannerDescription = data.attributes.Banner.Description;
    const showInput = data.attributes.Banner.ShowInput;
    const bannerButtonName = data.attributes.Banner.ButtonName;
    const electionTitle = data.attributes.Election.Title;
    const electionDescription = data.attributes.Election.Description;
    const showElection = data.attributes.Election.ShowElection;
    const electionDate = data.attributes.Election.ElectionDate;
    const serviceTitle = data.attributes.Services.Title;
    const serviceSubTitle = data.attributes.Services.SubTitle;
    const serviceDescription = data.attributes.Services.Description;
    const serviceIcons = data.attributes.Services.Icon;
    const socialIcons = data.attributes.SocialMedia;
    const aboutSFMTitle = data.attributes.AboutSFM.Title;
    const aboutSFMSocial = data.attributes.AboutSFM.SocialMedia;
    const aboutSFMPosition = data.attributes.AboutSFM.Position;
    const aboutSFMDescription = data.attributes.AboutSFM.Description;
    const aboutSFMImage =
      data.attributes.AboutSFM.Image.media.data.attributes.formats.large.url;
    const aboutSFMImageAlt = data.attributes.AboutSFM.Image.alt;
    const donationTitle = data.attributes.DonationText;
    const donationDescription = data.attributes.DonationDescription;
    const donationBanner =
      data.attributes.DonationBanner.data.attributes.formats.thumbnail.url;
    const donationIcons = data.attributes.DonationIcons;
    const movementTitle = data.attributes.MovementTitle;
    const movementDescription = data.attributes.MovementDescription;
    const movementIcon = data.attributes.MovementIcon;
    const reviewTitle = data.attributes.ReviewTitle;
    const reviewDescription = data.attributes.ReviewDescription;
    const reviews = data.attributes.Reviews;
    const confirmVoteTitle = data.attributes.ConfirmVotes.Title;
    const confirmVoteSubtitle = data.attributes.ConfirmVotes.Subtitle;
    const confirmVoteDescription = data.attributes.ConfirmVotes.Description;
    const confirmVoteShowButton = data.attributes.ConfirmVotes.ShowButton;
    const confirmVoteButtonName = data.attributes.ConfirmVotes.ButtonName;
    const confirmVoteButtonLink = data.attributes.ConfirmVotes.ButtonLink;
    const confirmVoteBackgroundImage =
      data.attributes.ConfirmVotes.BackgroundImage.data.attributes.formats
        .thumbnail.url;
    const faqTitle = data.attributes.FAQTitle;
    const faqSubTitle = data.attributes.FAQSubTitle;
    const faqs = data.attributes.FAQ;
    const showDonationTitle = data.attributes.ShowDonationTitle;

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
      serviceTitle,
      serviceSubTitle,
      serviceDescription,
      serviceIcons,
      aboutSFMTitle,
      aboutSFMPosition,
      aboutSFMDescription,
      aboutSFMImage,
      aboutSFMImageAlt,
      donationTitle,
      donationDescription,
      donationIcons,
      donationBanner,
      movementTitle,
      movementDescription,
      movementIcon,
      reviewTitle,
      reviewDescription,
      reviews,
      aboutSFMSocial,
      socialIcons,
      confirmVoteTitle,
      confirmVoteSubtitle,
      confirmVoteDescription,
      confirmVoteShowButton,
      confirmVoteButtonName,
      confirmVoteButtonLink,
      confirmVoteBackgroundImage,
      faqTitle,
      faqSubTitle,
      faqs,
      showDonationTitle,
    };
  } catch (error) {
    // console.log("Error retrieving data:", error);
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
        <Services
          serviceDescription={data?.serviceDescription}
          serviceIcons={data?.serviceIcons}
          serviceSubTitle={data?.serviceSubTitle}
          serviceTitle={data?.serviceTitle}
        />
        <Momvement
          description={data?.aboutSFMDescription}
          position={data?.aboutSFMPosition}
          title={data?.aboutSFMTitle}
          url={data?.aboutSFMSocial}
          image={data?.aboutSFMImage}
          imageAlt={data?.aboutSFMImageAlt}
        />
        <div className="mt-10">
          <Donation
            description={data?.donationDescription}
            title={data?.donationTitle}
            donations={data?.donationIcons}
            banner={data?.donationBanner}
            showDonationTitle={data?.showDonationTitle}
          />
        </div>
        <LatestEvents />
        <FutureMovement
          description={data?.movementTitle}
          title={data?.movementDescription}
          icon={data?.movementIcon}
        />
        <Saying
          description={data?.reviewDescription}
          title={data?.reviewTitle}
          review={data?.reviews}
        />
        <SocialIcons url={data?.socialIcons} />
        <ConfirmVotes
          buttonLink={data?.confirmVoteButtonLink}
          buttonName={data?.confirmVoteButtonName}
          description={data?.confirmVoteDescription}
          showButton={data?.confirmVoteShowButton}
          subtitle={data?.confirmVoteSubtitle}
          title={data?.confirmVoteTitle}
          bgImage={data?.confirmVoteBackgroundImage}
        />
        <PoliciesAndProgress
          subTitle={data?.faqSubTitle}
          title={data?.faqTitle}
          faq={data?.faqs}
        />
        <div className="pb-10"></div>
      </div>
      {/* <div>
      </div>
      </div>
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
      <div>
      </div> */}

      <div className="-mt-28 z-40 relative">
        {/* <ElectionTime date={electionDate} /> */}
      </div>
      {/* <Services /> */}
    </main>
  );
}
