import Image from "next/image"
import Link from "next/link"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"

interface Props {
    words: string[]
}

export default function Hero({ words }: Props) {
    const [text, count] = useTypewriter({
        words: words,
        loop: true,
        delaySpeed: 2000
    })
    return(
        <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
            <BackgroundCircles />
            <Image src={"/profilepic.jpg"} width={125} height={125} className="relative object-cover mx-auto rounded-full" alt="Profile Image" />
            <div>
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] sm:tracking-[15px]">Software Engineer</h2>
                <h1 className="px-5 text-xl font-semibold sm:text-2xl md:text-4xl lg:text-6xl lg:px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />          
                </h1>             
            </div>
            <div className="z-20">
                <Link href="#about"><a><button className="heroButton">About</button></a></Link>
                <Link href="#experience"><a><button className="heroButton">Experience</button></a></Link>
                <Link href="#skills"><a><button className="heroButton">Skills</button></a></Link>
                <Link href="#projects"><a><button className="heroButton">Projects</button></a></Link>
            </div>
        </div>
    )
}