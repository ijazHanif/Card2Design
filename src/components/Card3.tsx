'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "@/images/img1.svg";
import img2 from "@/images/img2.svg";
import img3 from "@/images/img3.svg";
import location from "@/images/location.svg";
import {italianno, caramel} from '@/components/Fonts'

const arr = [
  {
    id: 1,
    img: img1,
    text1: "Mendhi",
    text2: "Friday",
    text3: "Dec",
    text4: "20",
    text5: "01:00 to 10:00",
    text6: "PM",
    footer: "",
    locationicon: location,
    eventDate: new Date("2024-12-20T13:00:00"), 
  },
  {
    id: 2,
    img: img2,
    text1: "Barat",
    text2: "Saturday",
    text3: "Dec",
    text4: "21",
    text5: "01:00",
    text6: "PM",
    footer: "Sehra Bandi 12:00 PM",
    locationicon: location,
    eventDate: new Date("2024-12-21T13:00:00"), 
  },
  {
    id: 3,
    img: img3,
    text1: "Walima",
    text2: "Sunday",
    text3: "Dec",
    text4: "22",
    text5: "01:00",
    text6: "Pm",
    footer: "Lunch Time: 02:00 PM",
    location: "White Castle Marquee Miani",
    locationicon: location,
  },
];

type TimerValues = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null;

type TimersState = {
  [key: number]: TimerValues;
};

const Card3 = () => {
  const [timers, setTimers] = useState<TimersState>({});

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimers: TimersState = {};
      arr.forEach((item) => {
        if (item.eventDate) {
          const now = new Date();
          const difference = item.eventDate.getTime() - now.getTime();
          if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);
            newTimers[item.id] = { days, hours, minutes, seconds };
          } else {
            newTimers[item.id] = null; 
          }
        }
      });
      setTimers(newTimers);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {arr.map((item) => (
        <div key={item.id} className="relative rounded-lg shadow-lg  w-full sm:w-[90%] md:w-full lg:w-[50%] xl:w-[40%] mx-auto">
          <Image
            src={item.img}
            alt={item.text1}
            className="w-full h-auto object-cover"
          />

          <div
            className="absolute bottom-0 right-0 w-[74%] bg-[#934B4BC4] h-4/5 rounded-t-full flex flex-col pt-16 items-center text-white p-6"
          >
            <h1 className={`${italianno.className} text-[5rem]`}>{item.text1}</h1>
            <h2 className={`${caramel.className} text-[3rem] leading-[10px] mt-2`}>
              {item.text2}
            </h2>
            <div className="flex flex-cols items-center gap-2 mt-4">
              <div className="leading-[70px]">
                <h3 className={`${caramel.className} text-[64px]`}>
                  {item.text3}
                </h3>
                <h3 className={`${caramel.className} text-[64px] font-bold`}>
                  {item.text4}
                </h3>
              </div>
              <div className="border border-white h-28"></div>
              <div className="leading-[50px]">
                <h3
                  className={`${caramel.className} ${
                    item.id === 1 ? "text-[24px]" : "text-[64px]"
                  }`}
                >
                  {item.text5}
                </h3>
                <h3 className={`${caramel.className} text-[36px] text-center`}>
                  {item.text6}
                </h3>
              </div>
            </div>
            {item.footer && (
              <h4 className="text-sm mt-4 italic">{item.footer}</h4>
            )}
            {item.location && (
              <div className="flex justify-center items-center space-y-1">
                <Image src={item.locationicon} alt="location" className="pt-2" />
                <h5 className="text-xs mt-2">{item.location}</h5>
              </div>
            )}
            {/* Timer */}
            {timers[item.id] && (
              <div className="mt-4 flex gap-2 text-center bg-white text-[#934B4BC4] p-1">
                <div>
                  <span className="text-lg font-bold">{timers[item.id]?.days}</span>
                  <p className="text-sm">Days</p>
                </div>
                <div>
                  <span className="text-lg font-bold">{timers[item.id]?.hours}</span>
                  <p className="text-sm">Hours</p>
                </div>
                <div>
                  <span className="text-lg font-bold">{timers[item.id]?.minutes}</span>
                  <p className="text-sm">Minutes</p>
                </div>
                <div>
                  <span className="text-lg font-bold">{timers[item.id]?.seconds}</span>
                  <p className="text-sm">Seconds</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card3;
