"use client";
import { useParams, useSearchParams } from "next/navigation";
import { ContentArticle } from "../../../components/curricular/ContentArticle";


export default function Content() {
    const params = useParams();
    console.log(params.name);
    let filename = "";
    if(typeof params.name === "string") {
        filename = params.name;
    }

    return (
        <>
            <ContentArticle name={filename} />
        </>
    );
}
