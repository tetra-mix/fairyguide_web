import Image from 'next/image'
import { Button, Flex } from "@yamada-ui/react"
import { Kaisei_Decol } from 'next/font/google'
import logo from '../../public/logo.png'
import icon from '../../public/icon.png'

const KaiseiDecolFont = Kaisei_Decol({
    weight: "400",
    subsets: ["latin"],
});

export const Header = () => {
    return (
        <header className='w-dvw flex flex-row pl-8 pr-8 pt-2 bg-sky-50'>
            <div className='flex-none'>
                <div className="order-1 grid grid-rows-2 grid-flow-col gap-4 h-28">
                    <div className="row-span-2">
                        <Image src={icon} alt="Icon" className='max-w-24' />
                    </div>
                    <div className="col-span-2">
                        <Image src={logo} alt="Logo" className='max-w-80' />
                    </div>
                    <div className="col-span-2 text-lg">
                        <span className={KaiseiDecolFont.className}>
                            ~ しゃべるぬいぐるみとめぐる思い出に残る旅 ~
                        </span>
                    </div>
                </div>
            </div>
            <div className='grow'></div>
            <div className='flex-none pt-6'>
                <Flex gap="md">
                    <Button bg="primary" color="white">
                        Button
                    </Button>
                    <Button bg="primary" color="white">
                        Button
                    </Button>
                    <Button bg="primary" color="white">
                        Button
                    </Button>
                    <Button bg="primary" color="white">
                        Button
                    </Button>
                </Flex>
            </div>
        </header>
    )
}