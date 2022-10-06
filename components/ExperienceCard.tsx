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
            p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
            <div className="px-0 md:px-10 w-full">
                <h4 className="text-4xl font-light">{title}</h4>
                <p className="font-bold text-2xl mt-1">{name}</p>
                <div className="space-x-2 my-2 flex overflow-x-auto w-[300px] scrollbar-hide">
                    {/* Tech used */}
                    {
                        techStack.map(
                            item => (
                                <div className="min-w-[55px] h-14 relative" key={item.asset._ref}>
                                    <Image src={`${urlFor(item.asset._ref)}`} width={50} height={50} className="rounded-full object-center" layout="fill" />
                                </div>
                            )
                        )
                    }
                </div>
                <p className="uppercase py-5 text-gray-300">{startDate} - {endDate ? endDate : "Till Now"}</p>
            </div>
        </article>
    )
}