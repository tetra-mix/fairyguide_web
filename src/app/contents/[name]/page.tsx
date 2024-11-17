"use client";
import { useParams, useSearchParams } from "next/navigation";
import { ContentArticle } from "../../..//components/atom/ContentArticle";

export default function Content() {
    const params = useParams();
    console.log(params.name);

    const searchParams = useSearchParams()
    const html = searchParams.get('html')!;

    return (
        <>
            <ContentArticle html={html} />
        </>
    );
}
