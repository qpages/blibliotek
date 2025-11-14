import { useState, useRef, useEffect } from "react";

import Title from "./components/Title";
import Subtitle from "./components/Subtitle";

const VideoPlayerDefault = () => {
  return (
    <div className="relative h-full min-h-[80vh] w-full">
      <video
        src="/chamonix.mp4"
        className="absolute inset-0 z-0 h-full w-full rounded-full object-cover"
        autoPlay
        muted
        loop
      />
      <div className="absolute bottom-4 right-4 h-48 w-48">
        <img
          src="https://cdn.prod.website-files.com/64955fc7b431e096dc683699/649a90270316f9b6234e94f1_Video%20Button.svg"
          loading="lazy"
          alt="Video Play Button Background"
          className="h-48 w-48 animate-spin object-contain"
          style={{
            animationDuration: "12s",
          }}
        />
        <img
          src="https://cdn.prod.website-files.com/64955fc7b431e096dc683699/649a902753733f5dbdbaa24f_Play%20Icon.png"
          loading="lazy"
          alt="Play Icon"
          className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

const VideoPlayerMobile = () => {
  return (
    <div className="relative h-full min-h-[50vh] w-full lg:min-h-[80vh]">
      <video
        src="/chamonix.mp4"
        className="absolute inset-0 z-0 h-full w-full rounded-full object-cover"
        autoPlay
        muted
        loop
      />
      <div className="absolute bottom-3 right-3 h-24 w-24 sm:h-32 sm:w-32 lg:bottom-4 lg:right-4 lg:h-48 lg:w-48">
        <img
          src="https://cdn.prod.website-files.com/64955fc7b431e096dc683699/649a90270316f9b6234e94f1_Video%20Button.svg"
          loading="lazy"
          alt="Video Play Button Background"
          className="h-24 w-24 animate-spin object-contain sm:h-32 sm:w-32 lg:h-48 lg:w-48"
          style={{
            animationDuration: "12s",
          }}
        />
        <img
          src="https://cdn.prod.website-files.com/64955fc7b431e096dc683699/649a902753733f5dbdbaa24f_Play%20Icon.png"
          loading="lazy"
          alt="Play Icon"
          className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer object-contain transition-transform duration-300 hover:scale-110 sm:h-8 sm:w-8 lg:h-12 lg:w-12"
        />
      </div>
    </div>
  );
};

/*
 "Text Masking" / "Video Text Mask" (also called Clipping Mask, Knockout Text, or Text Reveal)
*/
const VideoPlayerMobileWithText = ({ text = "CHAMONIX" }, animate = true) => {
  return (
    <div className="relative h-full min-h-[50vh] w-full overflow-hidden lg:min-h-[80vh]">
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <h1
          className="select-none text-center font-bold uppercase leading-none text-white"
          style={{
            fontSize: "clamp(1rem, 18vw, 16rem)",
            letterSpacing: "-0.01em",
          }}
        >
          {text}
        </h1>
      </div>

      {/* Video with blend mode to create the mask effect */}
      <video
        src="/chamonix.mp4"
        className="absolute inset-0 z-20 h-full w-full rounded-full object-cover"
        style={{
          mixBlendMode: "screen",
        }}
        autoPlay
        muted
        loop
      />

      <div className="absolute bottom-3 right-3 z-30 h-24 w-24 sm:h-32 sm:w-32 lg:bottom-4 lg:right-4 lg:h-48 lg:w-48">
        <img
          src="https://cdn.prod.website-files.com/64955fc7b431e096dc683699/649a90270316f9b6234e94f1_Video%20Button.svg"
          loading="lazy"
          alt="Video Play Button Background"
          className="h-24 w-24 animate-spin object-contain sm:h-32 sm:w-32 lg:h-48 lg:w-48"
          style={{
            animationDuration: "12s",
          }}
        />
        <img
          src="https://cdn.prod.website-files.com/64955fc7b431e096dc683699/649a902753733f5dbdbaa24f_Play%20Icon.png"
          loading="lazy"
          alt="Play Icon"
          className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer object-contain transition-transform duration-300 hover:scale-110 sm:h-8 sm:w-8 lg:h-12 lg:w-12"
        />
      </div>
    </div>
  );
};

const VideoPlayerMobileWithTextAndAnimation = ({
  text = "CHAMONIX",
  animate = true,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!animate) {
      setScrollProgress(1);
      return;
    }

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Use requestAnimationFrame for smooth 60fps updates
      rafRef.current = requestAnimationFrame(() => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;
        const elementTop = rect.top;
        const elementBottom = rect.bottom;

        // Only calculate when element is near or in viewport
        if (
          elementBottom > -elementHeight &&
          elementTop < windowHeight + elementHeight
        ) {
          // More refined progress calculation
          // Start animation earlier and end later for smoother effect
          const scrollStart = windowHeight * 0.7; // Start when element is 70% down viewport
          const scrollEnd = -elementHeight * 0.1; // End when element is 20% past top

          const totalDistance = scrollStart - scrollEnd;
          const currentDistance = elementTop - scrollEnd;

          let progress = 1 - currentDistance / totalDistance;
          progress = Math.max(0, Math.min(1, progress));

          setScrollProgress(progress);
        }
      });
    };

    handleScroll(); // Initial calculation
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [animate]);

  // Easing function for smoother animation (ease-out cubic)
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  // Apply easing to different properties
  const easedProgress = easeOutCubic(scrollProgress);
  const easedProgressScale = easeInOutCubic(scrollProgress);

  // Animation values with improved ranges
  const scale = 0.75 + easedProgressScale * 0.2; // Scale from 0.75 to 0.95 (less big at the end)
  const letterSpacing = -0.2 + easedProgress * 0.21; // From -0.2em to 0.01em (more compressed start)
  const translateY = (1 - easedProgress) * 30; // Move up 30px as it animates in

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Video with blend mode to create the mask effect - defines container height */}
      <video
        src="/chamonix.mp4"
        className="relative z-20 h-auto w-full rounded-full object-cover"
        style={{
          mixBlendMode: "screen",
        }}
        autoPlay
        muted
        loop
      />

      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <h1
          className="select-none text-center font-bold uppercase leading-none text-white will-change-transform"
          style={{
            fontSize: "clamp(1rem, 18vw, 16rem)",
            letterSpacing: `${letterSpacing}em`,
            transform: `translateY(${translateY}px) scale(${scale})`,
            transformOrigin: "center center",
          }}
        >
          {text}
        </h1>
      </div>

      <div className="absolute bottom-0 right-0 z-30 h-24 w-24 sm:bottom-3 sm:right-3 sm:h-32 sm:w-32 lg:bottom-4 lg:right-4 lg:h-48 lg:w-48">
        <img
          src="https://cdn.prod.website-files.com/64955fc7b431e096dc683699/649a90270316f9b6234e94f1_Video%20Button.svg"
          loading="lazy"
          alt="Video Play Button Background"
          className="h-24 w-24 animate-spin object-contain sm:h-32 sm:w-32 lg:h-48 lg:w-48"
          style={{
            animationDuration: "12s",
          }}
        />
        <img
          src="https://cdn.prod.website-files.com/64955fc7b431e096dc683699/649a902753733f5dbdbaa24f_Play%20Icon.png"
          loading="lazy"
          alt="Play Icon"
          className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer object-contain transition-transform duration-300 hover:scale-110 sm:h-8 sm:w-8 lg:h-12 lg:w-12"
        />
      </div>
    </div>
  );
};

const VideoPlayer = ({ id }) => {
  return (
    <section
      id={id}
      className="flex h-full w-full flex-col items-center justify-center gap-4"
    >
      <div className="flex h-full w-full flex-col items-center justify-center space-y-12">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
          <Title title="Video Player" />
          <Subtitle
            subtitle="Video Player"
            url="https://nailsy-128.webflow.io/"
          />
          <VideoPlayerDefault />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
          <Subtitle subtitle="Video Player Mobile" />
          <VideoPlayerMobile />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
          <Subtitle subtitle="Video Player Mobile With Text" />
          <VideoPlayerMobileWithText />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
          <Subtitle subtitle="Video Player Mobile With Text And Animation" />
          <VideoPlayerMobileWithTextAndAnimation />
        </div>
      </div>
    </section>
  );
};

export {
  VideoPlayer,
  VideoPlayerDefault,
  VideoPlayerMobile,
  VideoPlayerMobileWithText,
  VideoPlayerMobileWithTextAndAnimation,
};
