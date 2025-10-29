import { motion } from "framer-motion"
import { urlFor } from "../sanity"

interface Props {
    image: string
    name: string
}

export default function Skill({ image, name }: Props) {
    return(
        <div className="group relative flex flex-col items-center hover:cursor-pointer">
            <motion.img
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="rounded-full w-24 h-24 border border-gray-400 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out"
                src={`${urlFor(image)}`} />
            <span className="mt-2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
                {name}
            </span>
        </div>
    )
}