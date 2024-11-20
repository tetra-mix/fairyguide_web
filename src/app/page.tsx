
import { ContentSection } from "../components/section/ContentsSection";
import { SplideSection } from "../components/section/SplideSection";
import { WhatSection } from "../components/section/WhatSection";
import { RoleSection } from "../components/section/RoleSection";
import { ReactElement } from "react";

export default function Home() {
  return (
    <>
      <SplideSection />
      <WhatSection />
      <RoleSection />
      <ContentSection />
    </>
  );
}
