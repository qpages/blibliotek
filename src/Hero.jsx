import { useRef, useEffect } from "react";
import TutorialSection from "./TutorialHero";

import Title from "./components/Title";
import Subtitle from "./components/Subtitle";

const cards = [
  {
    color: "#59330E",
    title: "Based in New York",
    url: "https://cdn.prod.website-files.com/68b8885b8f6b98b35f5cc503/68b8ab665cf9317374219240_image.avif",
  },
  {
    color: "#080705",
    title: `I'm John <br /> Doe`,
    url: "https://cdn.prod.website-files.com/68b8885b8f6b98b35f5cc503/68b8ab665cf9317374219243_Rectangle%2047.avif",
  },
  {
    color: "#B5B186",
    title: "Digital Designer",
    url: "https://cdn.prod.website-files.com/68b8885b8f6b98b35f5cc503/68b8ab665cf9317374219246_image%20(1).avif",
  },
];

const HeroWithCards = () => {
  return (
    <div className="flex items-center justify-center font-inter">
      <div
        className="mt-12 flex flex-col items-center justify-center rounded-3xl bg-[#59330E] px-3 pb-3 pt-8"
        style={{ rotate: "-0.015turn" }}
      >
        <p className="mb-4 self-start px-3 text-4xl font-bold leading-[48px] text-[#ede3d9]">
          Based in <br /> New York
        </p>
        <img
          src="https://cdn.prod.website-files.com/68b8885b8f6b98b35f5cc503/68b8ab665cf9317374219240_image.avif"
          alt="Based in New York"
          className="rounded-3xl"
        />
      </div>
      <div
        className="z-10 mt-12 flex flex-col items-center justify-center rounded-3xl bg-[#080705] px-3 pb-3 pt-8"
        style={{ rotate: "0.013turn", transform: "translateY(10px)" }}
      >
        <p className="mb-4 self-start px-3 text-4xl font-bold leading-[48px] text-white">
          I&apos;m John <br /> Doe
        </p>
        <img
          src="https://cdn.prod.website-files.com/68b8885b8f6b98b35f5cc503/68b8ab665cf9317374219243_Rectangle%2047.avif"
          alt="I'm John Doe"
          className="rounded-3xl"
        />
      </div>
      <div
        className="z-0 mt-12 flex flex-col items-center justify-center rounded-3xl bg-[#B5B186] px-3 pb-3 pt-8"
        style={{
          rotate: "-0.003turn",
        }}
      >
        <p className="mb-4 self-start px-3 text-4xl font-bold leading-[48px] text-[#ede3d9]">
          Digital Designer
        </p>
        <img
          src="https://cdn.prod.website-files.com/68b8885b8f6b98b35f5cc503/68b8ab665cf9317374219246_image%20(1).avif"
          alt="Digital Designer"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

const HeroWithCardsAnimation = () => {
  const cardRefs = useRef([]);
  const lastScroll = useRef(window.scrollY);
  const cardTransforms = [
    {
      up: "rotate(-1.8deg) scale(1)",
      down: "rotate(-5.4deg) scale(0.95)",
      transition: "transform 0.3s ease-in-out",
    },
    {
      up: "scale(1) translateY(-8px)",
      down: "scale(0.95) translateY(8px)",
      transition: "transform 0.2s ease-in-out",
    },
    {
      up: "scale(1) translateY(-10px)",
      down: "scale(0.95) translateY(10px)",
      transition: "transform 0.4s ease-in-out",
    },
  ];

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const isScrollingDown = currentScroll > lastScroll.current;

      cardRefs.current.forEach((element, index) => {
        if (element) {
          element.style.transition = cardTransforms[index].transition;
          element.style.transform = isScrollingDown
            ? cardTransforms[index].up
            : cardTransforms[index].down;
        }
      });
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="flex items-center justify-center font-inter">
      <div
        ref={(el) => (cardRefs.current[0] = el)}
        className="mt-12 flex flex-col items-center justify-center rounded-3xl bg-[#59330E] px-3 pb-3 pt-8"
        style={{ transform: "rotate(-3.6deg)" }}
      >
        <p className="mb-4 self-start px-3 text-4xl font-bold leading-[48px] text-[#ede3d9]">
          Based in <br /> New York
        </p>
        <img
          src="https://cdn.prod.website-files.com/68b8885b8f6b98b35f5cc503/68b8ab665cf9317374219240_image.avif"
          alt="Based in New York"
          className="rounded-3xl"
        />
      </div>
      <div
        ref={(el) => (cardRefs.current[1] = el)}
        className="z-10 mt-12 flex flex-col items-center justify-center rounded-3xl bg-[#080705] px-3 pb-3 pt-8"
        style={{
          rotate: "0.013turn",
          transform: "translateY(10px)",
        }}
      >
        <p className="mb-4 self-start px-3 text-4xl font-bold leading-[48px] text-white will-change-transform">
          I&apos;m John <br /> Doe
        </p>
        <img
          src="https://cdn.prod.website-files.com/68b8885b8f6b98b35f5cc503/68b8ab665cf9317374219243_Rectangle%2047.avif"
          alt="I'm John Doe"
          className="rounded-3xl"
        />
      </div>
      <div
        ref={(el) => (cardRefs.current[2] = el)}
        className="z-0 mt-12 flex flex-col items-center justify-center rounded-3xl bg-[#B5B186] px-3 pb-3 pt-8"
        style={{
          rotate: "-0.003turn",
        }}
      >
        <p className="mb-4 self-start px-3 text-4xl font-bold leading-[48px] text-[#ede3d9]">
          Digital Designer
        </p>
        <img
          src="https://cdn.prod.website-files.com/68b8885b8f6b98b35f5cc503/68b8ab665cf9317374219246_image%20(1).avif"
          alt="Digital Designer"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

const Hero = ({ id }) => {
  return (
    <section
      id={id}
      className="flex h-full w-full flex-col items-center justify-center"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-12">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
          <Title title="Hero" />
          <Subtitle
            subtitle="Hero With Cards"
            url="https://kate-m-portfolio.webflow.io/#home-services"
          />
          <HeroWithCards />
          <div className="flex h-full w-full flex-col items-center justify-center gap-2">
            <Subtitle subtitle="Hero With Cards Animation" />
            <HeroWithCardsAnimation />
          </div>
          <TutorialSection />
        </div>
      </div>
    </section>
  );
};

export { HeroWithCards, Hero };
