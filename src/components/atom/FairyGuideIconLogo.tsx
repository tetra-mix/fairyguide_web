import { Button, Flex, Spacer, Box, Grid, GridItem, Center, Container, Image, SimpleGrid } from "@yamada-ui/react"
import { Kaisei_Decol } from 'next/font/google'

const KaiseiDecolFont = Kaisei_Decol({
    weight: "400",
    subsets: ["latin"],
});

export const FairyGuideIconLogo = () => {

    return (
        <SimpleGrid columns={1} row={2} gap={"sm"} w={{base: 480, sm: 335}} >
            <GridItem>
                <Flex gap={"md"} >
                    <Box >
                        <Image src={"./icon.png"} alt="Icon" maxW={{base: 20, sm: 16}} />
                    </Box>
                    <Box verticalAlign="bottom" textAlign="center">
                        <Image src={"./logo.png"} alt="Logo" maxW={{base:92, sm:64}} />
                    </Box>
                </Flex>
            </GridItem>
            <GridItem>
                <Box text={{base: "xl", sm:"sm"}}>
                    <Center>
                        <span className={KaiseiDecolFont.className}>
                            ~ しゃべるぬいぐるみとめぐる思い出に残る旅 ~
                        </span>
                    </Center>
                </Box>
            </GridItem>
        </SimpleGrid>
    )
}