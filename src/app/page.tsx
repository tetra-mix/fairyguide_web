import { SP } from "next/dist/shared/lib/utils";
import { ContentSection } from "../components/section/ContentsSection";
import { SplideSection } from "../components/section/SplideSection";
import { WhatSection } from "../components/section/WhatSection";

export default function Home() {
  return (
    <div>
      <SplideSection />
      <WhatSection />
      <ContentSection />
    </div>
  );
}
