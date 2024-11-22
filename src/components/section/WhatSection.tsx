import { SectionTitle } from "../atom/SectionTitle";
import { FairyGuide } from "../atom/FairyGuide";
import { Center } from "@yamada-ui/react";
import { Container, Box, Text, Image } from "@yamada-ui/react";
export const WhatSection = () => {
    return (
        <Container p={{base:8,sm:2}}>
            <SectionTitle>
                FairyGuideとは
            </SectionTitle>
            <Center gap="8">
                <Image src="./IMG_2806.jpeg" alt="FairyGuide" w={{base: "sm", sm: "275px"}}/>
                <Image src="./IMG_2807.jpeg" alt="FairyGuide" w={{base: "sm"}} display={{base: "inline-block", sm: "none"}} />
            </Center>
            <Center>
                <Box mt={8} mb={8} pt={4} pb={4} text={{base: "xl", sm: "lg"}} textAlign={"center"}>
                    <Text mt={2} >FairyGuide とは観光案内してくれる</Text>
                    <Text mt={2}> しゃべるぬいぐるみです。</Text>
                    <Text mt={2}>デバイスをぬいぐるみに装着することで、</Text>
                    <Text mt={2}>地域にまつわるあらゆる情報を、</Text>
                    <Text mt={2}>ぬいぐるみが教えてくれます。</Text>
                </Box>
            </Center>

        </Container>
    );
}