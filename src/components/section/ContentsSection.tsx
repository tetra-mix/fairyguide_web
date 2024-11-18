import { SectionTitle } from "../atom/SectionTitle";
import { Contents } from "../Contents";

export const ContentSection = () => {
    return (
        <div className="p-16">
            <SectionTitle>
                記事一覧
            </SectionTitle>
            <div className="pt-8 ">
                <Contents />
            </div>
        </div>
    );
}