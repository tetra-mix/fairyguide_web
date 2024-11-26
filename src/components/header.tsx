import { Box, Center, Container, IconButton } from "@yamada-ui/react";

import { FairyGuideIconLogo } from "./atom/FairyGuideIconLogo";
import { HamburgerMenu } from "./curricular/HamburgerMenu";

export const Header = () => {
  return (
    <Container>
      <HamburgerMenu />
      <Box w={"100%"}>
        <Center>
          <FairyGuideIconLogo />
        </Center>
      </Box>
    </Container>
  );
};
