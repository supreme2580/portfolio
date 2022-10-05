import Image from "next/image"
import BackgroundStripe from "./BackgroundStripe"
import { motion } from "framer-motion"

export default function Projects() {
    const projects = [1, 2, 3, 4, 5]
    return(
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen relative flex flex-col overflow-hidden text-left mt-56 md:flex-row max-w-full justify-evenly mx-auto items-center z-0 px-5">
            <h1 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h1>
            <BackgroundStripe />
            <div className="relative w-full flex space-x-5 overflow-x-scroll scrollbar-hide snap-x snap-mandatory z-20 max-w-6xl px-5 mt-36">
                {/* Projects */}
                {
                    projects.map((project, index) =>
                    <div key={Math.random()} className="flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center py-10 md:p-22 h-auto shadow-2xl my-4">
                        <div className="relative mt-8 xl:mt-0">
                            <motion.img
                                initial={{ y: -300, opacity: 0 }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                src={"/profilepic.jpg"} className="w-64 h-64" />
                        </div>
                        <div className="space-y-2.5 max-w-[300px] lg:max-w-lg">
                            <h4 className="text-lg md:text-3xl xl:text-4xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">Case study {index + 1} of {projects.length}:</span> Hulu 2.0
                            </h4>
                            <p className="px-5 text-center text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque vero eius cupiditate impedit quam ducimus ratione omnis esse aliquid magnam aliquam, excepturi eos id optio quas pariatur facere dolorum? Ipsum!</p>
                        </div>
                    </div>)
                }
            </div>
        </motion.div>
    )
}