import { allContents } from "content-collections";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import { Flex, Button } from "@yamada-ui/react";
import Link  from "next/link";

type ContentArticleProps = {
    name: string;
}

export const ContentArticle = (props: ContentArticleProps) => {

    return (
        <>
            {allContents.map((post:any) => (
                props.name === post._meta.path ? <ReactMarkdown className="parse" remarkPlugins={[remarkGfm]} key={post._meta.path}>{post.content}</ReactMarkdown> : null
            ))}
            <Flex justifyContent="center" gap="8">
                <Button bg="primary" color="white">
                    <Link href="../">元のページに戻る</Link>
                </Button>
            </Flex>
        </>
    )
}