import { Center, Heading } from '@yamada-ui/react';

type SectionTitleProps = {
    children: React.ReactNode
}

export const SectionTitle = (props: SectionTitleProps) => {
    return (
        <Center p={8} >
            <Heading as={"h1"} text={"5xl"} p={4} textAlign={"center"} >{props.children}</Heading>
        </Center>
    )
}