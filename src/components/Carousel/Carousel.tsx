/*
 * Created on Sun Jan 15 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import cn from "classnames";
import { useState } from "react";

import Image, { StaticImageData } from "next/image";

interface CarouselProps {
  images: StaticImageData[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const totalImages = images?.length || 0;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <Image src={images[currentImageIndex]} alt="CarouselImage" />
      <div className="flex justify-center gap-x-2">
        {totalImages > 0 &&
          Array.from({ length: totalImages }).map((_, index) => (
            <PageControl
              key={index}
              selected={index === currentImageIndex}
              onClick={() => setCurrentImageIndex(index)}
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
