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
        className="relative z-0 flex flex-col items-center max-w-full px-5 mx-auto overflow-hidden text-left md:flex-row justify-evenly">
            <h1 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h1>
            <h3 className="top-36 uppercase tracking-[3px] text-gray-500 text-sm absolute px-5">Some of my projects</h3>
            <BackgroundStripe />
            <div className="relative z-20 flex w-full max-w-6xl px-5 space-x-5 overflow-x-scroll scrollbar-hide snap-x snap-mandatory mt-44">
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