import { blog } from "../../types/blog";
import { Card, CardHeader, CardBody, Heading,Text } from "@yamada-ui/react"


export const BlogCard = (props: blog) => {
    return (
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
    )
}