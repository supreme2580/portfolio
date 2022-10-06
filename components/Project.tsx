import { motion } from "framer-motion"
import { urlFor } from "../sanity"

interface Props {
    image: string,
    title: string,
    description: string,
    index: number,
    length: number
}

export default function Project({  image, title, description, index, length }: Props) {
    return(
        <div key={Math.random()} className="flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center py-10 md:p-22 h-auto shadow-2xl my-4">
                        <div className="relative mt-8 xl:mt-0">
                            <motion.img
                                initial={{ y: -300, opacity: 0 }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                src={`${urlFor(image)}`} className="w-[285px] h-64" />
                        </div>
                        <div className="space-y-2.5 max-w-[300px] lg:max-w-lg">
                            <h4 className="text-lg md:text-3xl xl:text-4xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">Case study {index + 1} of {length}:</span> {title}
                            </h4>
                            <p className="px-5 text-center text-lg">{description}</p>
                        </div>
                    </div>
    )
}