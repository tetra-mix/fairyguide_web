"use client";
import { Carousel, CarouselSlide } from "@yamada-ui/carousel";
import { Image } from "@yamada-ui/react";
export const SplideSection = () => {
  //うまく実装できていない
  // スマホ・タブレット表示とPC表示で画像のサイズを変える
  return (
    <>
      <Carousel h={"80vh"} w={"full"}>
        <CarouselSlide>
          <Image src="./slide/IMG_2374.JPG" alt="Image 1" objectFit={"cover"} objectPosition={"80% 70%"} h={"80vh"} w="full" />
        </CarouselSlide>
        <CarouselSlide>
          <Image src="./slide/IMG_2534.jpeg" alt="Image 1" objectFit={"cover"} objectPosition={"30% 70%"} h={"80vh"} w="full" />
        </CarouselSlide>
        <CarouselSlide>
          <Image src="./slide/IMG_2547.jpeg" alt="Image 1" objectFit={"cover"} objectPosition={"80% 70%"} h={"80vh"} w="full" />
        </CarouselSlide>
        <CarouselSlide>
          <Image src="./slide/IMG_2562.jpeg" alt="Image 1" objectFit={"cover"} objectPosition={"50% 75%"} h={"80vh"} w="full" />
        </CarouselSlide>
        <CarouselSlide>
          <Image src="./slide/IMG_0029.png" alt="Image 1" objectFit={"cover"} objectPosition={"30% 30%"} h={"80vh"} w="full" />
        </CarouselSlide>
      </Carousel>
    </>
  );
};

/*
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
      */