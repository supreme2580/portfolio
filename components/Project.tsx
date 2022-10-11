import { motion } from "framer-motion"
import Image from "next/image"
import { urlFor } from "../sanity"

interface Props {
    image: string,
    title: string,
    description: string
}

export default function Project({  image, title, description }: Props) {
    return(
        <div key={Math.random()} className="flex flex-col items-center justify-center flex-shrink-0 h-auto py-10 my-4 space-y-5 shadow-2xl md:p-22">
                        <div className="relative md:px-2.5 lg:px-0">
                            <motion.img
                                initial={{ y: -300, opacity: 0 }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                src={`${urlFor(image)}`}
                                className="w-[450px] h-[250px]" />
                        </div>
                        <div className="space-y-1.5 max-w-[450px] lg:max-w-lg h-32">
                            <h4 className="text-lg font-semibold text-center md:text-3xl xl:text-4xl">{title}</h4>
                            <p className="px-5 text-lg text-center">{description}</p>
                        </div>
                    </div>
    )
}