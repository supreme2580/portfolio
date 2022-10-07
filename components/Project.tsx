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
        <div key={Math.random()} className="flex flex-col items-center justify-center flex-shrink-0 h-auto py-10 my-4 space-y-5 shadow-2xl snap-center md:p-22">
                        <div className="relative md:px-2.5 lg:px-0">
                            <motion.img
                                initial={{ y: -300, opacity: 0 }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                src={`${urlFor(image)}`} className="w-[285px] md:w-[450px] min-h-64 max-h-64 md:min-h-[300px] md:max-h-[300px]" />
                        </div>
                        <div className="space-y-2.5 max-w-[300px] lg:max-w-lg">
                            <h4 className="text-lg font-semibold text-center md:text-3xl xl:text-4xl">
                                <span className="underline decoration-[#F7AB0A]/50">Case study {index + 1} of {length}:</span> {title}
                            </h4>
                            <p className="px-5 text-lg text-center">{description}</p>
                        </div>
                    </div>
    )
}