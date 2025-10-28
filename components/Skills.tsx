import Skill from "./Skill";
import { motion } from "framer-motion"
import Skl from "../skills"

interface Props {
  skills: [Skl]
}

export default function Skills({ skills }: Props) {
    return(
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10
            justify-center items-center mx-auto h-auto">
            <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl absolute top-24">Skills</h3>
            <h3 className="top-36 uppercase tracking-[3px] text-gray-500 text-sm absolute px-5">These are some of the skills I{"'"}ve acquired over time</h3>
            <div className="absolute grid grid-cols-2 gap-5 px-5 sm:grid-cols-4 top-52">
                {
                    skills.map(skill => <Skill key={skill._id} image={skill.image.asset._ref} />)
                }
            </div>
            <h3 className="-bottom-10 sm:bottom-0 uppercase tracking-[3px] text-gray-500 text-sm absolute px-5">And many more in the Web2, Web3, mobile, and gaming fields.</h3>
            <div className="text-lg font-semibold mt-[900px] sm:mt-[600px] xl:mt-[700px]" />
        </motion.div>
    )
}
