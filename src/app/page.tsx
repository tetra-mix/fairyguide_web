import { SP } from "next/dist/shared/lib/utils";
import { ContentSection } from "../components/section/ContentsSection";
import { SplideSection } from "../components/section/SplideSection";

export default function Home() {
  return (
    <div>
      <SplideSection />
      <ContentSection />
    </div>
  );
}
