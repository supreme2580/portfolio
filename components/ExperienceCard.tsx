import { motion } from "framer-motion"
import Image from "next/image"

export default function ExperienceCard() {
    return(
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] sm:w-[500px] md:w-[600px] snap-center bg-[#292929]
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
                src="/profilepic.jpg" />
            <div className="px-0 md:px-10 w-full">
                <h4 className="text-4xl font-light">CO-Founder of Spade</h4>
                <p className="font-bold text-2xl mt-1">SPADE</p>
                <div className="space-x-2 my-2 flex overflow-x-auto w-[300px] scrollbar-hide">
                    {/* Tech used */}
                    <div className="min-w-[55px] h-14 relative">
                        <Image src={"/profilepic.jpg"} width={50} height={50} className="rounded-full" layout="fill" />
                    </div>
                    <div className="min-w-[55px] h-14 relative">
                        <Image src={"/profilepic.jpg"} width={50} height={50} className="rounded-full" layout="fill" />
                    </div>
                    <div className="min-w-[55px] h-14 relative">
                        <Image src={"/profilepic.jpg"} width={50} height={50} className="rounded-full" layout="fill" />
                    </div>
                    <div className="min-w-[55px] h-14 relative">
                        <Image src={"/profilepic.jpg"} width={50} height={50} className="rounded-full" layout="fill" />
                    </div>
                    <div className="min-w-[55px] h-14 relative">
                        <Image src={"/profilepic.jpg"} width={50} height={50} className="rounded-full" layout="fill" />
                    </div>
                    <div className="min-w-[55px] h-14 relative">
                        <Image src={"/profilepic.jpg"} width={50} height={50} className="rounded-full" layout="fill" />
                    </div>
                    <div className="min-w-[55px] h-14 relative">
                        <Image src={"/profilepic.jpg"} width={50} height={50} className="rounded-full" layout="fill" />
                    </div>
                    <div className="min-w-[55px] h-14 relative">
                        <Image src={"/profilepic.jpg"} width={50} height={50} className="rounded-full" layout="fill" />
                    </div>
                    <div className="min-w-[55px] h-14 relative">
                        <Image src={"/profilepic.jpg"} width={50} height={50} className="rounded-full" layout="fill" />
                    </div>
                </div>
                <p className="uppercase py-5 text-gray-300">Started work... - Ended work...</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                </ul>
            </div>
        </article>
    )
}