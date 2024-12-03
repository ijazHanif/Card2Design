import React from "react";
import Image from "next/image";
import card1 from "@/images/card1.svg";
import card2 from "@/images/card2.svg";
import { YesevaOne, cherish, actor, inter, caramel } from "@/components/Fonts";

const arr = [
  {
    img: card1,
    text1: "WELCOME",
    text2: "TO OUR",
    text3: "LOVE STORY",
    fontStyles: {
      text1: YesevaOne.className,
      text2: caramel.className,
      text3: YesevaOne.className,
    },
    fontsize: {
      text1: "24px",
      text2: "20px",
      text3: "24px",
    },
    style: "italic",
  },
  {
    img: card2,
    text1: "Save the Date",
    text2: "",
    text3: "we are getting married",
    fontStyles: {
      text1: cherish.className,
      text2: inter.className,
      text3: actor.className,
    },
    fontsize: {
      text1: "64px",
      text2: "",
      text3: "18px",
    },
    style: "italic",
  },
];

const Card1 = () => {
  return (
    <div className="grid grid-cols-1 w-full">
      {arr.map((item, index) => (
        <div
          key={index}
          className="relative group w-full sm:w-[90%] md:w-full lg:w-[50%] xl:w-[40%] mx-auto"
        >
          <Image
            src={item.img}
            alt="image"
            className="w-full h-auto object-cover"
          />
          <div
            className="absolute inset-0 bg-[#934B4B87] flex items-center justify-center
            group-opacity-100 transition-opacity duration-300"
          >
            <div className="text-center text-white">
              <h1
                className={`font-bold ${item.fontStyles.text1}`}
                style={{ fontSize: item.fontsize.text1 }}
              >
                {item.text1}
              </h1>
              {item.text2 && (
                <p
                  className={` ${item.fontStyles.text2} `}
                  style={{ fontSize: item.fontsize.text2 }}
                >
                  {item.text2}
                </p>
              )}

              {item.text3 && (
                <h1
                  className={`font-semibold ${item.fontStyles.text3}`}
                  style={{ fontSize: item.fontsize.text3 }}
                >
                  {item.text3}
                </h1>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card1;
