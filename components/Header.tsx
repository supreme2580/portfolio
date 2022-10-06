import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Header() {
    return(
        <header className="lg:sticky top-0 flex items-start justify-center sm:justify-between max-w-7xl mx-auto z-20 xl:items-center p-5 snap-start">
            <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            className="flex flex-row items-center">
                {/* Social icons */}
                <SocialIcon url="https://www.facebook.com/victor.omorogbe.165" fgColor="gray" bgColor="transparent" target="_blank" />
                <SocialIcon url="https://wa.link/32s95d" network="whatsapp" fgColor="gray" bgColor="transparent" target="_blank" />
                <SocialIcon url="https://twitter.com/VictorOmorogbe3" fgColor="gray" bgColor="transparent" target="_blank" />
                <SocialIcon url="http://discordapp.com/users/Supreme2580#2263" bgColor="gray" target="_blank" />
                <SocialIcon url="https://github.com/supreme2580" fgColor="gray" bgColor="transparent" target="_blank" />
            </motion.div>
            <motion.div
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            className="flex flex-row items-center text-gray-300 cursor-pointer">
                {/* Contact me */}
                <Link href={"#contact"}>
                    <a>
                        <SocialIcon network="email" fgColor="gray" bgColor="transparent" className="cursor-pointer" />
                        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
                    </a>
                </Link>
                
            </motion.div>
        </header>
    )
}