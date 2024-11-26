import { ContentSection } from "../components/section/ContentsSection";
import { RoleSection } from "../components/section/RoleSection";
import { SplideSection } from "../components/section/SplideSection";
import { VideoSection } from "../components/section/VideoSection";
import { WhatSection } from "../components/section/WhatSection";

export default function Home() {
  return (
    <>
      <SplideSection />
      <WhatSection />
      <VideoSection />
      <RoleSection />
      <ContentSection />
    </>
  );
}
