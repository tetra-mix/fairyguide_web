import { SectionTitle } from "../atom/SectionTitle";
import { Blogs } from "../Blogs";

export const BlogSection = () => {
    return (
        <div className="p-16">
            <SectionTitle>
                記事一覧
            </SectionTitle>
            <div className="pt-8 ">
                <Blogs />
            </div>
        </div>
    );
}