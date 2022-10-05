import Skill from "./Skill";
import { motion } from "framer-motion"

export default function Skills() {
    return(
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen
            items-center justify-center mx-auto h-auto">
            <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl absolute top-24">Skills</h3>
            <h3 className="top-36 uppercase tracking-[3px] text-gray-500 text-sm absolute px-5">Hover over a skill for current proficiency</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 absolute top-52 px-5">
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </motion.div>
    )
}