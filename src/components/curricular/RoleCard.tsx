import { Card, CardHeader, CardBody, CardFooter, Text, Button, Heading, Image } from "@yamada-ui/react";

type RoleCardProps = {
    name: string,
    description: string,
    image: string, //path
};

export const RoleCard = (props: RoleCardProps) => {
    return (
        <Card maxW="sm" h="450px">
            <CardHeader justifyContent="center">
                <Image
                    src={props.image}
                    w="full"
                    rounded="md"
                />
            </CardHeader>

            <CardBody>
                <Heading size="md">{props.name}</Heading>
                <Text>
                    {props.description}
                </Text>
            </CardBody>

            <CardFooter>
                <Button bg="primary" color="white">詳しく見る</Button>
            </CardFooter>
        </Card>

    );
};