import { Noto_Sans } from "next/font/google"

const NotoSansFont = Noto_Sans({
    weight: "800",
    subsets: ["latin"],
})


export const FairyGuide = () => {
    return (
        <div className={NotoSansFont.className}>
            <div className="text-4xl " >
                <span className="text-red-500">F</span>
                <span className="text-green-500">a</span>
                <span className="text-sky-500">i</span>
                <span className="text-blue-500">r</span>
                <span className="text-purple-500">y</span>
                <span className="text-red-500">G</span>
                <span className="text-green-500">u</span>
                <span className="text-sky-500">i</span>
                <span className="text-blue-500">d</span>
                <span className="text-purple-500">e</span>
            </div>
        </div>

    )
}