import Image from "next/image"
import Link from "next/link"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"

export default function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Victor Omorogbe",
            "Guy-who-loves-tech.tsx",
            "<WithAPassionForCoding />",
            "LetBuildSomething.js"
        ],
        loop: true,
        delaySpeed: 2000
    })
    return(
        <div className="min-h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <Image src={"/profilepic.jpg"} width={125} height={125} className="rounded-full relative mx-auto object-cover" alt="Profile Image" />
            <div>
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] sm:tracking-[15px]">Software Engineer</h2>
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold px-5 lg:px-10">
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