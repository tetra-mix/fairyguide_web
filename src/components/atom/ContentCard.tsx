import { contentCard } from "../../types/content";
import { Card, CardHeader, CardBody, Heading, Text } from "@yamada-ui/react"
import Link from "next/link";

export const ContentCard = (props: contentCard) => {

    return (
        <Link href={{
            pathname: `/contents/${props.url}`,
            query: { html: props.html }
        }}>
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