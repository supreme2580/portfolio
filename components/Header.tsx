import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"

export default function Header() {
    return(
        <header className="sticky top-0 flex items-start justify-center sm:justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
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
                <SocialIcon url="https://www.facebook.com/victor.omorogbe.165" fgColor="gray" bgColor="transparent" />
                <SocialIcon url="http://discordapp.com/users/Supreme2580#2263" bgColor="gray" />
                <SocialIcon url="https://twitter.com/VictorOmorogbe3" fgColor="gray" bgColor="transparent" />
                <SocialIcon url="https://twitter.com/VictorOmorogbe3" fgColor="gray" bgColor="transparent" />
                <SocialIcon url="https://twitter.com/VictorOmorogbe3" fgColor="gray" bgColor="transparent" />
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
                <SocialIcon network="email" fgColor="gray" bgColor="transparent" className="cursor-pointer" />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
            </motion.div>
        </header>
    )
}