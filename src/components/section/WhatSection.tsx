import { SectionTitle } from "../atom/SectionTitle";
import { Center } from "@yamada-ui/react";
export const WhatSection = () => {
    return (
        <div className="p-16">
            <SectionTitle>
                FiaryGuideとは
            </SectionTitle>
            <Center gap="8">
                <img src="./IMG_2806.jpeg" alt="FairyGuide" className="h-1/3 w-1/5" />
                <img src="./IMG_2807.jpeg" alt="FairyGuide" className="h-1/3 w-1/5" />
            </Center>
            <Center>
                <div className="pt-16 w-2/3">
                    <p>「FairyGuide」とは、観光地を案内してくれるしゃべるぬいぐるみです。</p>
                    <p>デバイスをぬいぐるみに装着することで、地域にまつわるあらゆる情報を、ぬいぐるみが教えてくれます。</p>
                </div>
            </Center>

        </div>
    );
}