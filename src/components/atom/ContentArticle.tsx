import { allContents } from "content-collections";

type ContentArticleProps = {
    name: string;
}

export const ContentArticle = (props: ContentArticleProps) => {

    return (
        <>
            {allContents.map((post) => (
                props.name === post._meta.path ? <div key={post._meta.path} dangerouslySetInnerHTML={{ __html: post.html }} /> : null
            ))}
        </>
    )
}