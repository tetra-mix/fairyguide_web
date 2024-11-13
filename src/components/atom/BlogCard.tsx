import { blogCard } from "../../types/blog";
import { Card, CardHeader, CardBody, Heading, Text } from "@yamada-ui/react"
import Link from "next/link";

export const BlogCard = (props: blogCard) => {
    return (
        <Link href={`/blog/${props.url}`}>
            <Card>
                <CardHeader>
                    <Heading size="md">{props.title}</Heading>
                </CardHeader>

                <CardBody>
                    <Text>
                        {props.summary}
                    </Text>
                </CardBody>
            </Card>
        </Link>
    )
}