import { SectionTitle } from "../atom/SectionTitle";
import { FairyGuide } from "../atom/FairyGuide";
import { Center } from "@yamada-ui/react";
import { RoleCard } from "../curricular/RoleCard";
import { Container, Box } from "@yamada-ui/react";

export const RoleSection = () => {
    return (
        <Container p={16}>
            <SectionTitle>
                FairyGuideの役割
            </SectionTitle>
            <Center>
                <RoleCard name="質問する" description="FiaryGuideに観光地について質問すると答えてくれます。" image="./slide/IMG_2562.jpeg" />
            </Center>
        </Container>
    );
}