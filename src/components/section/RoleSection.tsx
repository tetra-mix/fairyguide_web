import { SectionTitle } from "../atom/SectionTitle";
import { FairyGuide } from "../atom/FairyGuide";
import { Center } from "@yamada-ui/react";
import { RoleCard } from "../curricular/RoleCard";
import { Container, Flex } from "@yamada-ui/react";

export const RoleSection = () => {
  return (
    <Container p={{ base: 8, sm: 2 }} id="role">
      <SectionTitle>FairyGuideの役割</SectionTitle>
      <Center>
        <Flex gap="lg" flexFlow={{ base: "row wrap", sm: "column-reverse" }}>
          <RoleCard
            name="質問する"
            description="観光地について質問すると答えてくれます。"
            image="./slide/IMG_2562.jpeg"
          />
          <RoleCard
            name="案内する"
            description="特定の場所につくとその場所について案内してくれます。"
            image="./slide/IMG_2534.jpeg"
          />
        </Flex>
      </Center>
    </Container>
  );
};
