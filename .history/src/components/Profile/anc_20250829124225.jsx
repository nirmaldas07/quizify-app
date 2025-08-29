import React from "react";
import { appDeepLink } from "../../../utils/constants";
import TrialWithDownloadCTA from "../../common/TrialWithDownloadCTA";
import HeroStar from "../../Icons/LandingPage/HeroStar";
import HeroDownload from "../../Icons/LandingPage/HeroDownload";

const DesktopHero = () => {
  return (
    <div className="relative w-full h-[calc(100vh-100px)] overflow-hidden md:h-[calc(100vh-450px)] lg:!h-[calc(100vh-50px)]">
      <div className="absolute top-0 left-0 w-full h-[200%] animate-scroll z-0">
        <img
          src="/assets/landing/heroSection/hero-bg.webp"
          alt="hero-bg1"
          className="w-full h-1/2 object-cover"
        />
        <img
          src="/assets/landing/heroSection/hero-bg.webp"
          alt="hero-bg2"
          className="w-full h-1/2 object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/60 z-10"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 z-20 text-center h-fit mt-40 md:mt-20 lg:mt-32">
        <h6 className="px-4 py-2 bg-[#4a4347]/70 !border !border-[#767472] text-white rounded-full w-fit mx-auto font-lexend text-[12px] lg:text-[16px]">
          India&apos;s No.1 Edutainment App
        </h6>
        <div className="bg-gradient-to-b from-black/10 via-black/60 to-black/10 w-full lg:bg-none">
          <h1 className="text-white/90 font-semibold mx-auto w-[80%] mt-4 font-lexend leading-[40px] md:w-[50%] lg:leading-[70px] lg:w-[50%] lg:text-[56px]">
            Short Learning Videos <br /> For Everything
          </h1>
        </div>
        <h2 className="text-[14px] leading-[18px] font-lexend font-medium text-[#B8B8B8] w-[60%] mx-auto !mt-2 md:w-[25%] md:!mt-6 lg:!text-[20px] lg:w-[18%] lg:leading-[28px] lg:!mt-6">
          10,000+ Short Videos from Trusted Creators
        </h2>

        {/* For Desktop Only*/}
        <div className="hidden mx-auto !mt-10 md:block md:w-[45%] lg:w-[25%]">
          <TrialWithDownloadCTA
            deepLink={appDeepLink}
            onSection="Hero Desktop"
            desktopStatus="Hero_CTA"
            ctaClassName="lg:!text-[18px]"
          />

          <div className="flex justify-between mt-4 w-[75%] mx-auto xl:w-[60%]">
            <div>
              <div className="flex gap-x-2 items-center">
                <span className="text-[#d5d5d5] font-lexend font-medium">
                  4.5
                </span>
                <HeroStar />
              </div>
              <p className="text-[12px] m-0 p-0 text-subTextGray font-lexend">
                9L reviews
              </p>
            </div>

            <div className="w-[2px] bg-[#5e5e5e] mx-4" />

            <div>
              <div className="flex gap-x-2 items-center">
                <span className="text-[#d5d5d5] font-lexend font-medium">
                  10 Cr+
                </span>
                <HeroDownload />
              </div>
              <p className="text-[12px] m-0 p-0 text-subTextGray font-lexend">
                Downloads
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
    </div>
  );
};

export default DesktopHero;