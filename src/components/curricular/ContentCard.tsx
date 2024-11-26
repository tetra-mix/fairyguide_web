import { contentCard } from "../../types/content";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Image,
} from "@yamada-ui/react";
import Link from "next/link";

export const ContentCard = (props: contentCard) => {
  return (
    <Link href={`/contents/${props.url}`}>
      <Card w="320">
        <CardHeader>
          <Image
            objectFit={"cover"}
            w={"full"}
            h={200}
            src={props.image}
            alt={props.title}
          />
        </CardHeader>
        <CardBody>
          <Heading size="md">{props.title}</Heading>
          <Text>{props.summary}</Text>
        </CardBody>
      </Card>
    </Link>
  );
};
