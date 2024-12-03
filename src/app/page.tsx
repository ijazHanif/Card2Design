'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StaticCard1, StaticCard2 } from '@/components/Card1';
import Card2 from '@/components/Card2';
import { MendhiCard, BaratCard, WalimaCard } from '@/components/Card3';

const Page = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const panels = gsap.utils.toArray('.panel') as HTMLElement[];
    const tops = panels.map((panel) =>
      ScrollTrigger.create({
        trigger: panel as HTMLElement,
        start: 'top top',
      })
    );

    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel as HTMLElement,
        start: () =>
          panel.offsetHeight < window.innerHeight
            ? 'top top'
            : 'bottom bottom',
        pin: true,
        pinSpacing: false,
      });
    });

    // Snap effect to scroll to the closest panel position
    ScrollTrigger.create({
      snap: {
        snapTo: (progress, self) => {
          if (!self) return 0; // Guard clause
          const panelStarts = tops.map((st) => st.start);
          const snapScroll = gsap.utils.snap(panelStarts, self.scroll());
          return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
        },
        duration: 0.5,
      },
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className='bg-white'>
      <div className="panel h-screen">
        <StaticCard1 />
      </div>
      <div className="panel h-screen">
        <StaticCard2 />
      </div>
      <div className="panel h-screen">
        <Card2 />
      </div>
      <div className="panel h-screen">
        <MendhiCard />
      </div>
      <div className="panel h-screen">
        <BaratCard />
      </div>
      <div className="panel h-screen">
        <WalimaCard />
      </div>
    </div>
  );
};

export default Page;
