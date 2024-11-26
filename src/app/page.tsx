
import { ContentSection } from "../components/section/ContentsSection";
import { SplideSection } from "../components/section/SplideSection";
import { WhatSection } from "../components/section/WhatSection";
import { RoleSection } from "../components/section/RoleSection";
import { VideoSection } from "../components/section/VideoSection";

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
