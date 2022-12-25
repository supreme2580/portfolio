import { motion } from "framer-motion"
import { urlFor } from "../sanity"

interface Props {
    image: string
}

export default function Skill({ image }: Props) {
    return(
        <div className="group relative flex hover:cursor-pointer">
            <motion.img
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="rounded-full w-24 h-24 border border-gray-400 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out"
                src={`${urlFor(image)}`} />
        </div>
    )
}