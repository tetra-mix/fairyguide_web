import { Center } from '@yamada-ui/react';

type SectionTitleProps = {
    children: React.ReactNode
}

export const SectionTitle = (props: SectionTitleProps) => {
    return (
        <Center p={8} >
            <h1 className="text-5xl p-4 ml-4 text-center">{props.children}</h1>
        </Center>
    )
}