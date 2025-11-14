import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

const CardsCarousel = ({ cards = [] }) => {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartRef = useRef({ x: null, y: null });
  const length = cards.length;

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActive((prev) => (prev + 1) % length);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActive((prev) => (prev - 1 + length) % length);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const handleSwipe = (direction) => {
    if (direction === "left") {
      next();
    } else if (direction === "right") {
      prev();
    }
  };

  // Simple swipe detection
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e) => {
    if (!touchStartRef.current.x || !touchStartRef.current.y) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    // Only trigger if horizontal swipe is greater than vertical
    if (absDeltaX > absDeltaY && absDeltaX > 50) {
      handleSwipe(deltaX > 0 ? "right" : "left");
    }

    touchStartRef.current = { x: null, y: null };
  };

  // Layout configuration - keep the initial layout
  const getCardStyles = (index) => {
    const relative = (index - active + length) % length;

    if (relative === 0) {
      // Active card - full size, centered
      return {
        scale: 1,
        x: 0,
        y: 0,
        rotate: 0,
        zIndex: 30,
        opacity: 1,
      };
    }

    if (relative === 1) {
      // Next card (right side) - visible, rotated right, scaled down
      return {
        scale: 0.88,
        x: 50,
        y: 16,
        rotate: 12,
        zIndex: 20,
        opacity: 0.95,
      };
    }

    if (relative === length - 1) {
      // Previous card (left side) - visible, rotated left, scaled down
      return {
        scale: 0.88,
        x: -50,
        y: 16,
        rotate: -12,
        zIndex: 20,
        opacity: 0.95,
      };
    }

    // All other cards (hidden in back) - more scaled down, deeper
    return {
      scale: 0.8,
      x: 0,
      y: 24,
      rotate: 0,
      zIndex: 5,
      opacity: 0.7,
    };
  };

  return (
    <div
      className="relative flex h-[420px] w-full max-w-sm items-center justify-center overflow-visible"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false}>
        {cards.map((card, index) => {
          const { scale, x, y, rotate, zIndex, opacity } = getCardStyles(index);
          const isActive = index === active;

          return (
            <motion.div
              key={`${card.title}-${index}`}
              style={{ zIndex }}
              className="absolute inset-0 flex items-center justify-center"
              initial={false}
              animate={{
                scale,
                x,
                y,
                rotate,
                opacity,
              }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <motion.div
                className="flex h-full w-full cursor-pointer flex-col rounded-3xl px-3 pb-3 pt-8 shadow-2xl"
                style={{ background: card.color }}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const centerX = rect.width / 2;

                  if (clickX < centerX) {
                    prev();
                  } else {
                    next();
                  }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <p
                  className="mb-4 px-3 text-4xl font-bold leading-[48px] text-white"
                  dangerouslySetInnerHTML={{ __html: card.title }}
                />

                <div className="w-full flex-1 overflow-hidden rounded-3xl">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default CardsCarousel;
