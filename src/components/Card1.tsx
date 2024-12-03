import React from "react";
import Image from "next/image";
import card1 from "@/images/card1.svg";
import card2 from "@/images/card2.svg";
import { YesevaOne, cherish, actor, caramel } from "@/components/Fonts";

// Static Card Components
export const StaticCard1 = () => (
  <div className="relative group w-full sm:w-[90%] md:w-full lg:w-[50%] xl:w-[40%] mx-auto">
    <Image src={card1} alt="Card 1 Image" className="w-full object-cover h-screen" />
    <div
      className="absolute inset-0 bg-[#934B4B87] flex items-center justify-center
        group-opacity-100 transition-opacity duration-300"
    >
      <div className="text-center text-white">
        <h1
          className={`font-bold ${YesevaOne.className}`}
          style={{ fontSize: "24px" }}
        >
          WELCOME
        </h1>
        <p
          className={`${caramel.className}`}
          style={{ fontSize: "20px" }}
        >
          TO OUR
        </p>
        <h1
          className={`font-bold ${YesevaOne.className}`}
          style={{ fontSize: "24px" }}
        >
          LOVE STORY
        </h1>
      </div>
    </div>
  </div>
);

export const StaticCard2 = () => (
  <div className="relative group w-full sm:w-[90%] md:w-full lg:w-[50%] xl:w-[40%] mx-auto">
    <Image src={card2} alt="Card 2 Image" className="w-full h-screen object-cover" />
    <div
      className="absolute inset-0 bg-[#934B4B87] flex items-center justify-center
        group-opacity-100 transition-opacity duration-300"
    >
      <div className="text-center text-white">
        <h1
          className={`font-bold ${cherish.className}`}
          style={{ fontSize: "64px" }}
        >
          Save the Date
        </h1>
        <h1
          className={`font-semibold ${actor.className}`}
          style={{ fontSize: "18px" }}
        >
          we are getting married
        </h1>
      </div>
    </div>
  </div>
);

