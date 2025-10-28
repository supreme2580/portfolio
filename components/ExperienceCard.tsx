import { motion } from "framer-motion"
import Image from "next/image"
import { urlFor } from "../sanity"

interface Props {
    image: {
        asset: {
            _ref: string
        }
    },
    title: string,
    name: string,
    techStack: [
        {
            asset: {
                _ref: string
            }
        }
    ],
    startDate: string,
    endDate: string
}

export default function ExperienceCard({ image, title, name, techStack, startDate, endDate }: Props) {
    return(
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] sm:w-[500px] md:w-[600px] bg-[#292929]
            p-7 sm:p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                alt=""
                src={`${urlFor(image)}`} />
            <div className="w-full px-0 md:px-10">
                <h4 className="text-4xl font-light text-center">{title}</h4>
                <p className="py-5 text-gray-300 uppercase text-center">{startDate} - {endDate ? endDate : "Till Date"}</p>
            </div>
        </article>
    )
}