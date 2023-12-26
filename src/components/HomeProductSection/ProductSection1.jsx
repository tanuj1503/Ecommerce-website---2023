import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ProductSection = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const handlePrevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const responsive = {
    0: { items: 2 },
    720: { items: 4 },
    1024: { items: 6 },
  };

  const items = data.map((item) => (
    <div>
      <div
        key={item.id}
        className="flex flex-col items-center p-[1rem] shadow-lg rounded-md w-[11rem] h-[18rem]"
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
          margin: "1.5rem 0 4rem 1.5rem",
        }}
      >
        <img
          className="object-cover object-top h-[10rem] w-[8rem] rounded-md bg-grey"
          src={item.imageUrl}
          alt=""
        />
        <div
          style={{
            marginTop: "1rem",
            fontFamily: "sans-serif",
          }}
        >
          <p
            style={{
              fontWeight: "600",
              padding: "0.7rem 0",
              fontSize: "0.7rem",
            }}
          >
            {item.brand}
          </p>
          <p
            style={{
              fontSize: "0.6rem",
              lineHeight: "1.3rem",
              textOverflow: "ellipsis",
            }}
          >
            {item.title}
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h1
        className="mx-10 pt-[1.5rem] font-bold text-lg"
        style={{ fontFamily: "sans-serif" }}
      >
        {sectionName}
      </h1>
      <div
        style={{
          position: "relative",
          borderBottom: "0.6px solid rgba(0,0,0,0.1)",
        }}
      >
        <AliceCarousel
          items={items}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          ref={carouselRef}
        />
        {activeIndex !== items.length - 5 && (
          <button
            onClick={handleNextSlide}
            style={{
              zIndex: "5",
              position: "absolute",
              right: "0.5rem",
              top: "10rem",
              backgroundColor: "white",
              padding: "0.4rem 0",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "3px",
              boxShadow:
                "0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 2px 0 rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
          >
            <ChevronRightIcon />
          </button>
        )}

        {activeIndex !== 0 && (
          <button
            onClick={handlePrevSlide}
            style={{
              zIndex: "5",
              position: "absolute",
              left: "0.5rem",
              top: "10rem",
              backgroundColor: "white",
              padding: "0.4rem 0",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "3px",
              boxShadow:
                "0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 2px 0 rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
          >
            <ChevronLeftIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
