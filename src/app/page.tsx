
import { ContentSection } from "../components/section/ContentsSection";
import { SplideSection } from "../components/section/SplideSection";
import { WhatSection } from "../components/section/WhatSection";
import { RoleSection } from "../components/section/RoleSection";

export default function Home() {
  return (
    <div>
      <SplideSection />
      <WhatSection />
      <RoleSection />
      <ContentSection />
    </div>
  );
}
