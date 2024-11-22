import { SectionTitle } from "../atom/SectionTitle";
import { Contents } from "../Contents";
import { Container, Center,Box} from "@yamada-ui/react";

export const ContentSection = () => {
    return (
        <Container p={{base:8, sm:4}} id="contents">
            <SectionTitle>
                記事一覧
            </SectionTitle>
            <Center>
                <Box ml={{base: 8, sm:0}} mr={{base: 8, sm:0}}>
                    <Contents />
                </Box>
            </Center>
        </Container>
    );
}