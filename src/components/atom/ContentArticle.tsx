type ContentArticleProps = {
    html: string;
}

export const ContentArticle = (props: ContentArticleProps) => {

    return (
        <div dangerouslySetInnerHTML={{ __html: props.html }} />
    )
}