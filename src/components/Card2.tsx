import React from "react";
import Image from "next/image";
import compo2card from "@/images/compo2card.svg";
import arrow from "@/images/arrow.svg";
import {caladea, caramel, cantoraOne} from '@/components/Fonts'

const arr = [
  {
    text: "Mendhi",
    img: arrow,
  },
  {
    text: "Barat",
    img: arrow,
  },
  {
    text: "Walima",
    img: arrow,
  },
];

const Card2 = () => {
  return (
    <div className="flex justify-center relative">
      <div className="relative w-full sm:w-[90%] md:w-full lg:w-[50%] xl:w-[40%] mx-auto">
        <Image src={compo2card} alt="" className="w-full h-screen object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-end bg-[#7C292957] py-10">
          <div className="text-center py-5 w-full pb-10">
            <h1 className={`${caladea.className} text-[24px] text-white`}>
              THE WEDDING
            </h1>
            <h1 className={`${caramel.className} text-[36px] text-white tracking-[10px] leading-[10px]`}>
              Zaryab & Esha
            </h1>
          </div>
          <div className="space-y-5 px-5">
            {arr.map((item, index) => (
              <div
                key={index}
                className={`space-x-8 flex justify-between items-center bg-[#934B4B] rounded-full ${cantoraOne.className} py-2 px-4`}
              >
                <h1 className="text-white tracking-[6px]">{item.text}</h1>
                <Image src={item.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
