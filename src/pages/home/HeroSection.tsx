import React from "react";
import CustomSwiper from "@/Component/swiper/Swiper";
import { HERODATA } from "@/utils/constants/home/herosection";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
const HeroSection = () => {
  return (
    <div className="relative">
      <div className="relative w-full aspect-[16/8] overflow-hidden opacity-25">
        <CustomSwiper data={HERODATA} />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center md:gap-2">
        <div className="relative flex flex-col justify-center items-center gap-2">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter font-bold text-center text-foreground/90">
            Welcome to our store
          </h1>
          <p className="text-xs md:text-sm font-light text-center max-w-xs md:max-w-sm">
            {" "}
            Discover our wide range of products designed to meet all your needs.
            Explore now!{" "}
          </p>
          <button className="bg-foreground/80 hover:bg-foreground/90 text-background md:px-6 px-4 py-2 rounded-lg group transition-all duration-300 shadow-md">
            <Link
              href="/products"
              className="flex items-center gap-1 tracking-tighter"
            >
              <p>Explore Now</p>
              <HiOutlineArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
