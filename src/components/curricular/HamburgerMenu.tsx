"use client";

import { Box, IconButton, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, useDisclosure } from '@yamada-ui/react'
import { CiMenuBurger } from "react-icons/ci";
import { LinkData } from './LinkData';

export const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box position={{ base: "absolute", md: "static" }}>
        <IconButton onClick={onOpen} colorScheme="secondary" variant="outline" size={"2xl"} icon={<CiMenuBurger />}>
          Button
        </IconButton>
      </Box>

      <Drawer isOpen={isOpen} onClose={onClose} placement={"left"} size={{base:"md", sm:"xs"}}>
        <DrawerHeader>FiaryGuide.dev</DrawerHeader>

        <DrawerBody>
          <LinkData url="/#top" name="トップ" />
          <LinkData url="/#what" name="FairyGuideとは" />
          <LinkData url="/#role" name="FairyGuideの役割" />
          <LinkData url="/#contents" name="記事一覧" />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}