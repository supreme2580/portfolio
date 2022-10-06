import Image from "next/image"
import BackgroundStripe from "./BackgroundStripe"
import { motion } from "framer-motion"
import Proj from "../projects"
import Project from "./Project"

interface Props {
    projects: [Proj]
}

export default function Projects({ projects }: Props) {
    return(
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen relative flex flex-col overflow-hidden text-left mt-64 md:flex-row max-w-full justify-evenly mx-auto items-center z-0 px-5">
            <h1 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h1>
            <h3 className="top-36 uppercase tracking-[3px] text-gray-500 text-sm absolute px-5">Some of my projects</h3>
            <BackgroundStripe />
            <div className="relative w-full flex space-x-5 overflow-x-scroll scrollbar-hide snap-x snap-mandatory z-20 max-w-6xl px-5 mt-44">
                {/* Projects */}
                {
                    projects.map((project, index) => <Project
                        key={project._id}
                        image={project.image.asset._ref}
                        title={project.title}
                        description={project.description}
                        length={projects.length}
                        index={index} />
                    )
                }
            </div>
        </motion.div>
    )
}