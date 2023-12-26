import React from "react";
import { HomeCarouselData } from "./HomeCarouselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const HomeCarousel = () => {
  const imageData = HomeCarouselData.map((item) => (
    <img
      className="cursor-pointer object-contain w-full h-full"
      src={item.image}
      alt=""
      role="presentation"
      style={{ width: "100rem", height: "500px" }}
    />
  ));
  return (
    <div>
      <AliceCarousel
        items={imageData}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1500}
        infinite
      />
    </div>
  );
};

export default HomeCarousel;
