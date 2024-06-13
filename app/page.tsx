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
import { Suspense } from "react";
import { Spinner } from "./[...subcategory]/page";
import { cookies } from "next/headers";

async function getData() {
  const cookieStore = cookies();

  const locale = cookieStore.get("language")?.value ?? "en";
  const endpoint = locale === "en" ? "menus/1" : "menus/3";

  try {
    const [res, featuresRes, menuData, nav] = await Promise.all([
      apiCall(
        "home-page",
        "populate=Banner.BannerImage&populate=Election&populate=Services.Icon.Icon.media&populate=AboutSFM.Image.media&populate=DonationIcons.Icon.media&populate=MovementIcon.Icon.media&populate=Reviews.Image.media&populate=AboutSFM.SocialMedia&populate=DonationBanner&populate=SocialMedia&populate=ConfirmVotes.BackgroundImage&populate=FAQ.Image.media&populate=FAQ.QuestionAnswer&populate=SEO.OgImage"
      ),
      apiCall("articles", "filters[IsFeatured][$eq]=true&populate=*"),
      apiCall(`${endpoint}`, "nested&populate=*"),
      apiCall("navbar", "populate=Logo.media"),
    ]);

    const { data } = res;

    // Extract banner attributes with proper null/undefined checks
    const bannerTitle = data.attributes.Banner.Title;
    const bannerDescription = data.attributes.Banner.Description;
    const showInput = data.attributes.Banner.ShowInput;
    const bannerButtonName = data.attributes.Banner.ButtonName;
    const electionTitle = data.attributes.Election.Title;
    const electionBackground = data.attributes.Election.BackgroundColor;
    const electionDescription = data.attributes.Election.Description;
    const showElection = data.attributes.Election.ShowElection;
    const electionDate = data.attributes.Election.ElectionDate;
    const serviceTitle = data.attributes.Services.Title;
    const servicesStarColor = data.attributes.ServicesStarColor;
    const servicesBackgroundColor = data.attributes.ServicesBackgroundColor;
    const showServicesStar = data.attributes.ShowServicesStar;
    const serviceSubTitle = data.attributes.Services.SubTitle;
    const serviceDescription = data.attributes.Services.Description;
    const serviceIcons = data.attributes.Services.Icon;

    const socialIcons = data.attributes.SocialMedia;
    const aboutSFMTitle = data.attributes.AboutSFM.Title;
    const aboutSFMBackgroungColor = data.attributes.AboutSFMBackgroungColor;
    const aboutSFMSocial = data.attributes.AboutSFM.SocialMedia;
    const aboutSFMPosition = data.attributes.AboutSFM.Position;
    const aboutSFMDescription = data.attributes.AboutSFM.Description;
    const aboutSFMImage =
      data.attributes.AboutSFM.Image.media.data.attributes.formats.large.url;
    const aboutSFMImageAlt = data.attributes.AboutSFM.Image.alt;
    const donationTitle = data.attributes.DonationText;
    const donationDescription = data.attributes.DonationDescription;
    const donationBanner = "";
    const donationIcons = data.attributes.DonationIcons;
    const donationBackgroundColor = data.attributes.DonationBackgroundColor;
    const movementTitle = data.attributes.MovementTitle;
    const movementDescription = data.attributes.MovementDescription;
    const movementIcon = data.attributes.MovementIcon;
    const reviewTitle = data.attributes.ReviewTitle;
    const reviewDescription = data.attributes.ReviewDescription;
    const reviewStarColor = data.attributes.ReviewStarColor;
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
    const confirmVoteBackgroundColor =
      data.attributes.ConfirmVotes.BackgroundColor;
    const confirmVoteStarColor = data.attributes.ConfirmVotes.StarColor;
    const confirmVoteButtonColor = data.attributes.ConfirmVotes.ButtonColor;
    const faqTitle = data.attributes.FAQTitle;
    const faqSubTitle = data.attributes.FAQSubTitle;
    const faqStarColor = data.attributes.FaqStarColor;
    const faqActiveColor = data.attributes.FaqActiveColor;
    const faqs = data.attributes.FAQ;
    const showDonationTitle = data.attributes.ShowDonationTitle;

    const bannerImage = data.attributes.Banner.BannerImage.data.attributes.url;
    const metaTitle = data.attributes.SEO.MetaTitle ?? "";
    const metaDescription = data.attributes.SEO.MetaDescription ?? "";
    const ogTitle = data.attributes.SEO?.OgTitle ?? "";
    const ogDescription = data.attributes.SEO?.OgDescription ?? "";
    const canonicalUrl = data.attributes.SEO?.CanonicalUrl ?? "";
    const OgImage =
      data.attributes.SEO?.OgImage.data.attributes.formats.thumbnail.url ?? "";

    const featuredData = featuresRes.data;
    const showServiceAs = data.attributes.showServiceAs;
    const showDonationAs = data.attributes.showDonationAs;
    const movementStarColor = data.attributes.MovementStarColor;

    const featuredTitle = data.attributes.FeaturedTitle;
    const featuredDescription = data.attributes.FeaturedDescription;
    const showFeaturedStar = data.attributes.ShowFeaturedStar;
    const featuredStarColor = data.attributes.FeaturedStarColor;

    const featuredBackgroundColor = data.attributes.FeaturedBackgroundColor;
    // nav
    const buttonName = nav.data.attributes.ButtonName;

    const backgroundColor = nav.data.attributes.BackgroundColor;
    const fontColor = nav.data.attributes.FontColor;

    const showButton = nav.data.attributes.ShowButton;

    const buttonLink = nav.data.attributes.ButtonLink;

    const menu = menuData.data.attributes.items.data;

    const logo =
      nav.data.attributes.Logo.media.data.attributes.formats.large.url;
    const showFlag = nav.data.attributes.showFlag;

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
      featuredData,
      metaTitle,
      metaDescription,
      ogTitle,
      ogDescription,
      OgImage,
      canonicalUrl,
      showServiceAs,
      showDonationAs,
      movementStarColor,
      buttonName,
      backgroundColor,
      fontColor,
      showButton,
      buttonLink,
      menu,
      logo,
      electionBackground,
      servicesStarColor,
      showServicesStar,
      showFlag,
      servicesBackgroundColor,
      aboutSFMBackgroungColor,
      donationBackgroundColor,
      featuredTitle,
      featuredDescription,
      showFeaturedStar,
      featuredBackgroundColor,
      featuredStarColor,
      reviewStarColor,
      confirmVoteBackgroundColor,
      confirmVoteStarColor,
      confirmVoteButtonColor,
      faqStarColor,
      faqActiveColor,
    };
  } catch (error) {
    console.log("Error retrieving data:", error);
    return null;
  }
}

export async function generateMetadata() {
  // read route params

  // fetch data

  // optionally access and extend (rather than replace) parent metadata
  const data = await getData();

  return {
    title: data?.metaTitle,
    description: data?.metaDescription,
    // canonical: data?.canonicalUrl,
    alternates: {
      canonical: data?.canonicalUrl,
    },
    openGraph: {
      title: data?.ogTitle,
      description: data?.ogDescription,
      images: data?.OgImage,
    },
  };
}

async function Home() {
  const data = await getData();
  console.log(data?.electionBackground);
  return (
    <>
      <main className="relative">
        <div>
          <Banner
            description={data?.bannerDescription}
            title={data?.bannerTitle}
            image={data?.bannerImage}
            button={data?.bannerButtonName}
            showInput={data?.showInput}
            logo={data?.logo}
            buttonLink={data?.buttonLink}
            buttonName={data?.buttonName}
            menu={data?.menu}
            showButton={data?.showButton}
            backgroundColor={data?.backgroundColor}
            showFlag={false}
          />
          <div className="-mt-28 z-20 relative">
            <ElectionTime
              date={data?.electionDate}
              description={data?.electionDescription}
              title={data?.electionTitle}
              backgroundColor={data?.electionBackground}
            />
          </div>
          <Services
            serviceDescription={data?.serviceDescription}
            serviceIcons={data?.serviceIcons}
            serviceSubTitle={data?.serviceSubTitle}
            serviceTitle={data?.serviceTitle}
            showServiceAs={data?.showServiceAs}
            servicesStarColor={data?.servicesStarColor}
            showServicesStar={data?.showServicesStar}
            servicesBackgroundColor={data?.servicesBackgroundColor}
          />
          <Momvement
            description={data?.aboutSFMDescription}
            position={data?.aboutSFMPosition}
            title={data?.aboutSFMTitle}
            url={data?.aboutSFMSocial}
            image={data?.aboutSFMImage}
            imageAlt={data?.aboutSFMImageAlt}
            movementStarColor={data?.movementStarColor}
            aboutSFMBackgroungColor={data?.aboutSFMBackgroungColor}
          />
          <div className="mt-10">
            <Donation
              description={data?.donationDescription}
              title={data?.donationTitle}
              donations={data?.donationIcons}
              banner={data?.donationBanner as string}
              showDonationTitle={data?.showDonationTitle}
              showDonationAs={data?.showDonationAs}
              donationBackgroundColor={data?.donationBackgroundColor}
            />
          </div>
          <LatestEvents
            data={data?.featuredData}
            featuredBackgroundColor={data?.featuredBackgroundColor}
            featuredDescription={data?.featuredDescription}
            featuredStarColor={data?.featuredStarColor}
            featuredTitle={data?.featuredTitle}
            showFeaturedStar={data?.showFeaturedStar}
          />
          <FutureMovement
            description={data?.movementTitle}
            title={data?.movementDescription}
            icon={data?.movementIcon}
            movementStarColor={data?.movementStarColor}
          />
          <Saying
            description={data?.reviewDescription}
            title={data?.reviewTitle}
            review={data?.reviews}
            reviewStarColor={data?.reviewStarColor}
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
            confirmVoteBackgroundColor={data?.confirmVoteBackgroundColor}
            confirmVoteButtonColor={data?.confirmVoteButtonColor}
            confirmVoteStarColor={data?.confirmVoteStarColor}
            reviewStarColor={data?.reviewStarColor}
          />
          <PoliciesAndProgress
            subTitle={data?.faqSubTitle}
            title={data?.faqTitle}
            faq={data?.faqs}
            faqStarColor={data?.faqStarColor}
            faqActiveColor={data?.faqActiveColor}
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
    </>
  );
}

const page = () => {
  return (
    <Suspense fallback={Spinner}>
      <Home />
    </Suspense>
  );
};
export default page;
