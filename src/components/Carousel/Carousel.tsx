/*
 * Created on Sun Jan 15 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import cn from "classnames";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselProps {
  images: StaticImageData[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const totalImages = images?.length || 0;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [requestedImageIndex, setRequestedImageIndex] = useState(0);
  const [animationMultiplier, setAnimationMultiplier] = useState(1);

  const onPageControlClick = (index: number) => {
    setRequestedImageIndex(index);

    if (
      (index > currentImageIndex && !(currentImageIndex == 0 && index == totalImages - 1)) ||
      (index === 0 && currentImageIndex === totalImages - 1)
    ) {
      setAnimationMultiplier(1);
    } else {
      setAnimationMultiplier(-1);
    }
  };

  useEffect(() => {
    if (requestedImageIndex !== currentImageIndex) {
      setCurrentImageIndex(requestedImageIndex);
    }
  }, [requestedImageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImageIndex = currentImageIndex + 1;
      const nextImageIndexWithLoop = nextImageIndex % totalImages;

      setRequestedImageIndex(nextImageIndexWithLoop);
      setAnimationMultiplier(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="flex flex-col items-center">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={currentImageIndex}
          initial={{
            opacity: 0,
            scale: 0.5,
            x: 100 * animationMultiplier,
            rotate: 5 * animationMultiplier,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            x: -100 * animationMultiplier,
            rotate: -5 * animationMultiplier,
          }}
          transition={{ duration: 0.25 }}
        >
          <Image src={images[currentImageIndex]} alt="CarouselImage" />
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-x-2">
        {totalImages > 0 &&
          Array.from({ length: totalImages }).map((_, index) => (
            <PageControl
              key={index}
              selected={index === currentImageIndex}
              onClick={() => onPageControlClick(index)}
            />
          ))}
      </div>
    </div>
  );
};

interface PageControlProps {
  selected?: boolean;
  onClick?: () => void;
}

const PageControl: React.FC<PageControlProps> = ({ onClick, selected = false }) => {
  const classNames = cn(
    selected && "bg-black",
    "w-4 h-4 rounded-full border-2 border-black",
    "hover:cursor-pointer hover:opacity-70"
  );

  return <div onClick={onClick} className={classNames} />;
};

export default Carousel;
