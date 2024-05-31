import { apiCall } from "@/lib/api";
import Image from "next/image";
import React from "react";

import parse from "html-react-parser";
import { AppUrl } from "@/lib/url";

async function getData() {
  const [res] = await Promise.all([
    apiCall(
      "about-us",
      "populate=FeaturedImage.media&populate=Gallery.media&populate=SEO.OgImage&populate=AboutIcons.Image.media"
    ),
  ]);

  return res.data;
}

export async function generateMetadata() {
  // read route params

  // fetch data

  // optionally access and extend (rather than replace) parent metadata
  const data = await getData();

  return {
    title: data.attributes.SEO.MetaTitle ?? "",
    description: data.attributes.SEO.MetaDescription ?? "",
    // canonical: data?.canonicalUrl,
    alternates: {
      canonical: data.attributes.SEO?.CanonicalUrl ?? "",
    },
    openGraph: {
      title: data.attributes.SEO?.OgTitle ?? "",
      description: data.attributes.SEO?.OgDescription ?? "",
      images:
        data.attributes.SEO?.OgImage?.data?.attributes.formats.thumbnail.url ??
        "",
    },
  };
}

const About1 = async () => {
  const data = await getData();
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-[5%] md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            {data.attributes.AboutTitle}
          </h1>
          <div className="font-normal text-base leading-6 text-gray-600 ">
            {parse(data.attributes.AboutDescription)}
          </div>
        </div>
        <div className="w-full lg:w-8/12 ">
          <Image
            width={1920}
            height={1080}
            className="w-full h-full"
            // src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            src={
              AppUrl + data.attributes.FeaturedImage.media.data.attributes.url
            }
            // alt="A group of People"
            alt={data.attributes.FeaturedImage.alt}
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            {data.attributes.StoryTitle}
          </h1>
          <div className="font-normal text-base leading-6 text-gray-600 ">
            {parse(data.attributes.StoryDescription)}
          </div>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            {data.attributes.Gallery.map((item: any, index: number) => (
              <div
                className="p-4 pb-6 flex justify-center flex-col items-center"
                key={index}
              >
                <Image
                  width={450}
                  height={600}
                  className="md:block hidden"
                  // src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                  src={
                    AppUrl + item.media.data.attributes.formats.thumbnail.url
                  }
                  alt={item.alt}
                />

                {/* <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Alexa
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:mx-[10rem] mt-10">
        <div className="grid md:grid-cols-2 gap-10">
          {data.attributes.AboutIcons.map((item: any, index: number) => (
            <div className="" key={index}>
              <div className="flex items-center gap-5">
                <Image
                  width={80}
                  height={80}
                  // src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                  src={
                    AppUrl + item.Image.media.data.attributes.formats.large.url
                  }
                  // alt="A group of People"
                  alt={item.Image.alt}
                />
                <h3 className="text-xl lg:text-4xl font-bold leading-9 text-gray-800">
                  {item.Title}
                </h3>
              </div>
              <div
                className="max-w-lg mt-2
            font-normal text-base leading-6 text-gray-600
            "
              >
                {parse(item.Description)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About1;
