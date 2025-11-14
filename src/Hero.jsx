import { useRef, useEffect } from "react";
import TutorialSection from "./TutorialHero";

import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import CardsCarousel from "./CardsCarousel";

const cards = [
  {
    color: "#59330E",
    title: "Based in New York",
    image:
      "https://cdn.prod.website-files.com/68b8885b8f6b98b35f5cc503/68b8ab665cf9317374219240_image.avif",
  },
  {
    color: "#080705",
    title: `I'm John <br /> Doe`,
    image:
      "https://cdn.prod.website-files.com/68b8885b8f6b98b35f5cc503/68b8ab665cf9317374219243_Rectangle%2047.avif",
  },
  {
    color: "#B5B186",
    title: "Digital Designer",
    image:
      "https://cdn.prod.website-files.com/68b8885b8f6b98b35f5cc503/68b8ab665cf9317374219246_image%20(1).avif",
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
      up: "rotate(-1.8deg) scale(1) translateY(-3px)",
      down: "rotate(-5.4deg) scale(0.95) translateY(3px)",
      transition: "transform 0.3s ease-in-out",
    },
    {
      up: "rotate(3.6deg) scale(1) translateY(-8px)",
      down: "scale(0.95) translateY(8px)",
      transition: "transform 0.3s ease-in-out",
    },
    {
      up: "scale(1) translateY(-3px)",
      down: "scale(0.95) translateY(3px)",
      transition: "transform 0.3s ease-in-out",
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
    <div className="hidden items-center justify-center font-inter md:flex">
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

const HeroWithCardsAnimationMobile = () => {
  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (window.innerWidth >= 768) return undefined;

    const container = containerRef.current;
    const cardElements = cardRefs.current.filter(Boolean);
    const cardCount = cardElements.length;

    if (!cardCount || !container) return undefined;

    const activeIndexRef = { current: 1 };
    let startX = 0;
    let lastX = 0;
    let isTouching = false;

    const applyTransforms = () => {
      const activeIndex = activeIndexRef.current;

      cardElements.forEach((element, index) => {
        const relativeIndex = (index - activeIndex + cardCount) % cardCount;

        let scale = 0.85;
        let translateX = 0;
        let translateY = 12;
        let zIndex = 5;
        let rotate = 0;

        if (relativeIndex === 0) {
          // Active/front card
          scale = 1;
          translateX = 0;
          translateY = 0;
          zIndex = 30;
        } else if (relativeIndex === 1) {
          // Next card (to the right)
          scale = 0.9;
          translateX = 40;
          translateY = 10;
          zIndex = 20;
          rotate = 8;
        } else if (relativeIndex === 2) {
          // Previous card (to the left)
          scale = 0.9;
          translateX = -40;
          translateY = 10;
          zIndex = 20;
          rotate = -8;
        }

        element.style.transition = "transform 0.4s ease, z-index 0.4s ease";
        element.style.zIndex = zIndex.toString();
        element.style.transform = `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`;
      });
    };

    applyTransforms();

    const goToNext = () => {
      activeIndexRef.current =
        (activeIndexRef.current + 1 + cardCount) % cardCount;
      applyTransforms();
    };

    const goToPrev = () => {
      activeIndexRef.current =
        (activeIndexRef.current - 1 + cardCount) % cardCount;
      applyTransforms();
    };

    const handleTouchStart = (event) => {
      if (!event.touches || event.touches.length === 0) return;
      isTouching = true;
      startX = event.touches[0].clientX;
      lastX = startX;
    };

    const handleTouchMove = (event) => {
      if (!isTouching || !event.touches || event.touches.length === 0) return;
      lastX = event.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (!isTouching) return;
      const deltaX = lastX - startX;
      const threshold = 40;

      if (Math.abs(deltaX) > threshold) {
        if (deltaX < 0) {
          goToNext();
        } else {
          goToPrev();
        }
      }

      isTouching = false;
    };

    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    });
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[420px] w-full max-w-sm items-center justify-center font-inter md:hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={(el) => (cardRefs.current[0] = el)}
          className="flex h-full w-full flex-col items-center justify-center rounded-3xl bg-[#59330E] px-3 pb-3 pt-8"
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
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={(el) => (cardRefs.current[1] = el)}
          className="z-10 flex h-full w-full flex-col items-center justify-center rounded-3xl bg-[#080705] px-3 pb-3 pt-8"
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
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={(el) => (cardRefs.current[2] = el)}
          className="z-0 flex h-full w-full flex-col items-center justify-center rounded-3xl bg-[#B5B186] px-3 pb-3 pt-8"
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
          <div className="flex h-full w-full flex-col items-center justify-center gap-2">
            <Subtitle subtitle="Hero With Cards Animation Mobile" />
            <CardsCarousel cards={cards} />
            <div className="relative mx-auto max-w-xl rounded-2xl bg-white/80 p-6 shadow-xl ring-1 ring-black/10 backdrop-blur-lg">
              <blockquote className="text-base font-medium italic leading-relaxed text-gray-900">
                “A mobile, swipeable card stack where one card is fully in
                focus, and the cards before and after it are partially visible,
                rotated slightly, and scaled down. The front card is full size
                and centered. The previous and next cards sit behind it at 2
                different depths. They are offset vertically, rotated slightly
                left or right, and scaled down so you can see that there are
                more cards in the sequence. When the user swipes left or right,
                the cards animate like a deck flipping: the next card moves
                forward and straightens up, while the current card tilts away
                and shrinks back into the deck. It should feel like flicking
                through physical Polaroid photos, with each card having a
                slightly different angle.”
              </blockquote>
              <div className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full select-none">
                <div className="absolute bottom-3 left-4 h-16 w-16 rounded-full bg-gradient-to-tr from-yellow-200 via-pink-100 to-indigo-100 opacity-60 blur-2xl"></div>
                <div className="absolute right-4 top-3 h-10 w-24 rounded-full bg-gradient-to-r from-purple-100 to-teal-200 opacity-40 blur-lg"></div>
              </div>
            </div>
          </div>
          <TutorialSection />
        </div>
      </div>
    </section>
  );
};

export { HeroWithCards, Hero };
