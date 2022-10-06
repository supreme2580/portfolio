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
                <p className="mt-1 text-2xl font-bold">{name}</p>
                <div className="space-x-2 my-2 flex overflow-x-auto w-[300px] scrollbar-hide pr-12">
                    {/* Tech used */}
                    {
                        techStack.map(
                            item => (
                                <div className="min-w-[55px] h-14 relative" key={item.asset._ref}>
                                    <Image src={`${urlFor(item.asset._ref)}`} width={50} height={50} className="object-center rounded-full" layout="fill" />
                                </div>
                            )
                        )
                    }
                </div>
                <p className="py-5 text-gray-300 uppercase">{startDate} - {endDate ? endDate : "Till Now"}</p>
            </div>
        </article>
    )
}