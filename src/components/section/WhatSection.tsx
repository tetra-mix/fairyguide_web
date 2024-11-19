import { SectionTitle } from "../atom/SectionTitle";
import { FairyGuide } from "../atom/FairyGuide";
import { Center } from "@yamada-ui/react";
export const WhatSection = () => {
    return (
        <div className="p-16 ">
            <SectionTitle>
                FairyGuideとは
            </SectionTitle>
            <Center gap="8">
                <img src="./IMG_2806.jpeg" alt="FairyGuide" className="h-1/3 w-1/5" />
                <img src="./IMG_2807.jpeg" alt="FairyGuide" className="h-1/3 w-1/5" />
            </Center>
            <Center>
                <div className="mt-8 mb-8 pt-4 pb-4 text-xl text-center">
                    <p className="mt-2">FairyGuide とは観光案内してくれる</p>
                    <p className="mt-2"> しゃべるぬいぐるみです。</p>
                    <p className="mt-2">デバイスをぬいぐるみに装着することで、</p>
                    <p className="mt-2">地域にまつわるあらゆる情報を、</p>
                    <p className="mt-2">ぬいぐるみが教えてくれます。</p>
                </div>
            </Center>

        </div>
    );
}