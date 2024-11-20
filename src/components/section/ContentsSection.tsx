import { SectionTitle } from "../atom/SectionTitle";
import { Contents } from "../Contents";
import { Container, Box } from "@yamada-ui/react";

export const ContentSection = () => {
    return (
        <Container p={16}>
            <SectionTitle>
                記事一覧
            </SectionTitle>
            <Box pt={8}>
                <Contents />
            </Box>
        </Container>
    );
}