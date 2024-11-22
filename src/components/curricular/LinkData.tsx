import { Box, Divider, LinkBox, LinkOverlay,Text } from "@yamada-ui/react";

export type LinkDataProps = {
    name: string,
    url: string,
}

export const LinkData = (props: LinkDataProps) => {

    return (
        <LinkBox w="full">
            <LinkOverlay href={props.url}></LinkOverlay>
            <Box p={4} w="full">
                <Text size="xl">{props.name}</Text>
            </Box>
            <Divider />
        </LinkBox>
    );
}