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
        <img src="./fairy_guide.webp" alt="Image 1" className="bnr" />
      </SplideSlide>
      <SplideSlide centeredSlides={true}>
        <img src="./slide/IMG_2534.jpeg" alt="Image 2" className="bnr" />
      </SplideSlide>
      <SplideSlide centeredSlides={true}>
        <img src="./slide/IMG_2547.jpeg" alt="Image 3" className="bnr" />
      </SplideSlide>
      <SplideSlide centeredSlides={true}>
        <img src="./slide/IMG_2562.jpeg" alt="Image 4" className="bnr" />
      </SplideSlide>
      <SplideSlide centeredSlides={true}>
        <img src="./slide/IMG_0029.png" alt="Image 5" className="bnr" />
      </SplideSlide>
    </Splide>
  );
};