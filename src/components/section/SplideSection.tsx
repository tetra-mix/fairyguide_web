"use client";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import '@splidejs/splide/css';

export const SplideSection = () => {
  //うまく実装できていない
  // スマホ・タブレット表示とPC表示で画像のサイズを変える
  
  const height = () => {
    if(window.innerWidth > 768) {
      return window.innerHeight * 0.7;
    } else {
      return window.innerHeight * 0.5;
    }
  }

  return (
    <Splide
      options={{
        rewind: true,
        width: window.innerWidth,
        height: height(),
        perPage: 1,
        type: "loop",
        autoplay: true,
        perMove: 1,
      }}
    >
      <SplideSlide centeredSlides={true}>
        <img src="./IMG_1071.png" alt="Image 1" className="bnr" />
      </SplideSlide>
      <SplideSlide centeredSlides={true}>
        <img src="./IMG_1844.png" alt="Image 2" className="bnr" />
      </SplideSlide>
      <SplideSlide centeredSlides={true}>
        <img src="./IMG_2562.jpeg" alt="Image 3" className="bnr" />
      </SplideSlide>
    </Splide>
  );
};