"use client";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";


export const SplideSection = () => {
  //うまく実装できていない
  return (
    <Splide
      options={{
        rewind: true,
        width: window.innerWidth / 2,
        perPage: 2,
        type: "loop",
        autoplay: true,
        perMove: 1,
      }}
    >
      <SplideSlide>
        <img src="./IMG_1071.png" alt="Image 1" className="bnr" />
      </SplideSlide>
      <SplideSlide>
        <img src="./IMG_1844.png" alt="Image 2" className="bnr" />
      </SplideSlide>
      <SplideSlide>
        <img src="./IMG_2562.jpeg" alt="Image 3" className="bnr" />
      </SplideSlide>
    </Splide>
  );
};