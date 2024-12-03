'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "@/images/img1.svg";
import img2 from "@/images/img2.svg";
import img3 from "@/images/img3.svg";
import location from "@/images/location.svg";
import { italianno, caramel } from '@/components/Fonts';

type TimerValues = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null;

const Timer = ({ eventDate }: { eventDate: Date | null }) => {
  const [timer, setTimer] = useState<TimerValues>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (eventDate) {
        const now = new Date();
        const difference = eventDate.getTime() - now.getTime();
        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((difference / (1000 * 60)) % 60);
          const seconds = Math.floor((difference / 1000) % 60);
          setTimer({ days, hours, minutes, seconds });
        } else {
          setTimer(null);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  if (!timer) return null;

  return (
    <div className="mt-4 flex gap-2 text-center bg-white text-[#934B4BC4] p-1">
      <div>
        <span className="text-lg font-bold">{timer.days}</span>
        <p className="text-sm">Days</p>
      </div>
      <div>
        <span className="text-lg font-bold">{timer.hours}</span>
        <p className="text-sm">Hours</p>
      </div>
      <div>
        <span className="text-lg font-bold">{timer.minutes}</span>
        <p className="text-sm">Minutes</p>
      </div>
      <div>
        <span className="text-lg font-bold">{timer.seconds}</span>
        <p className="text-sm">Seconds</p>
      </div>
    </div>
  );
};

export const MendhiCard = () => (
  <div className="relative rounded-lg shadow-lg w-full sm:w-[90%] md:w-full lg:w-[50%] xl:w-[40%] mx-auto">
    <Image src={img1} alt="Mendhi" className="w-full h-screen object-cover" />
    <div className="absolute bottom-0 right-0 w-[74%] bg-[#934B4BC4] h-4/5 rounded-t-full flex flex-col pt-16 items-center text-white p-6">
      <h1 className={`${italianno.className} text-[5rem]`}>Mendhi</h1>
      <h2 className={`${caramel.className} text-[3rem] leading-[10px] mt-2`}>Friday</h2>
      <div className="flex flex-cols items-center gap-2 mt-4">
        <div className="leading-[70px]">
          <h3 className={`${caramel.className} text-[64px]`}>Dec</h3>
          <h3 className={`${caramel.className} text-[64px] font-bold`}>20</h3>
        </div>
        <div className="border border-white h-28"></div>
        <div className="leading-[50px]">
          <h3 className={`${caramel.className} text-[24px]`}>01:00 to 10:00</h3>
          <h3 className={`${caramel.className} text-[36px] text-center`}>PM</h3>
        </div>
      </div>
      <Timer eventDate={new Date("2024-12-20T13:00:00")} />
    </div>
  </div>
);

export const BaratCard = () => (
  <div className="relative rounded-lg shadow-lg w-full sm:w-[90%] md:w-full lg:w-[50%] xl:w-[40%] mx-auto">
    <Image src={img2} alt="Barat" className="w-full h-screen object-cover" />
    <div className="absolute bottom-0 right-0 w-[74%] bg-[#934B4BC4] h-4/5 rounded-t-full flex flex-col pt-16 items-center text-white p-6">
      <h1 className={`${italianno.className} text-[5rem]`}>Barat</h1>
      <h2 className={`${caramel.className} text-[3rem] leading-[10px] mt-2`}>Saturday</h2>
      <div className="flex flex-cols items-center gap-2 mt-4">
        <div className="leading-[70px]">
          <h3 className={`${caramel.className} text-[64px]`}>Dec</h3>
          <h3 className={`${caramel.className} text-[64px] font-bold`}>21</h3>
        </div>
        <div className="border border-white h-28"></div>
        <div className="leading-[50px]">
          <h3 className={`${caramel.className} text-[64px]`}>01:00</h3>
          <h3 className={`${caramel.className} text-[36px] text-center`}>PM</h3>
        </div>
      </div>
      <h4 className="text-sm mt-4 italic">Sehra Bandi 12:00 PM</h4>
      <Timer eventDate={new Date("2024-12-21T13:00:00")} />
    </div>
  </div>
);

export const WalimaCard = () => (
  <div className="relative rounded-lg shadow-lg w-full sm:w-[90%] md:w-full lg:w-[50%] xl:w-[40%] mx-auto">
    <Image src={img3} alt="Walima" className="w-full h-screen object-cover" />
    <div className="absolute bottom-0 right-0 w-[74%] bg-[#934B4BC4] h-4/5 rounded-t-full flex flex-col pt-16 items-center text-white p-6">
      <h1 className={`${italianno.className} text-[5rem]`}>Walima</h1>
      <h2 className={`${caramel.className} text-[3rem] leading-[10px] mt-2`}>Sunday</h2>
      <div className="flex flex-cols items-center gap-2 mt-4">
        <div className="leading-[70px]">
          <h3 className={`${caramel.className} text-[64px]`}>Dec</h3>
          <h3 className={`${caramel.className} text-[64px] font-bold`}>22</h3>
        </div>
        <div className="border border-white h-28"></div>
        <div className="leading-[50px]">
          <h3 className={`${caramel.className} text-[64px]`}>01:00</h3>
          <h3 className={`${caramel.className} text-[36px] text-center`}>PM</h3>
        </div>
      </div>
      <h4 className="text-sm mt-4 italic">Lunch Time: 02:00 PM</h4>
      <div className="flex justify-center items-center space-y-1">
        <Image src={location} alt="location" className="pt-2" />
        <h5 className="text-xs mt-2">White Castle Marquee Miani</h5>
      </div>
    </div>
  </div>
);

