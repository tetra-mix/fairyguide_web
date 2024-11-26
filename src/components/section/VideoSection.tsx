import { SectionTitle } from "../atom/SectionTitle";
import { FairyGuide } from "../atom/FairyGuide";
import { Center } from "@yamada-ui/react";
import { Container, Box, Text } from "@yamada-ui/react";

export const VideoSection = () => {
  return (
    <Container p={{ base: 8, sm: 2 }} id="what">
      <SectionTitle>デモ動画</SectionTitle>
      <Center>
        <Box mb={8} pb={4} w={{ base: "50vw", sm: "full" }}>
          <video controls>
            <source src="./demovideo_11_10.mp4" type="video/mp4" />
          </video>
        </Box>
      </Center>
    </Container>
  );
};
