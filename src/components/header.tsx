import { Container, Center, Box, IconButton} from "@yamada-ui/react"
import { FairyGuideIconLogo } from './atom/FairyGuideIconLogo'
import { CiMenuBurger } from "react-icons/ci";
export const Header = () => {
    return (
        <Container>
            <Box position={{base: "absolute", md: "static"}}>
                <IconButton colorScheme="secondary" variant="outline" size={"2xl"} icon={<CiMenuBurger />}>
                    Button
                </IconButton>
            </Box>
            <Box w={"100vw"}>
                <Center>
                    <FairyGuideIconLogo />
                </Center>
            </Box>
        </Container>
    )
}