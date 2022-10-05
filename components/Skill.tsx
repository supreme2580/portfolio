import { motion } from "framer-motion"

export default function Skill() {
    return(
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="rounded-full w-24 h-24 border border-gray-400 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out"
                src="/profilepic.jpg" />
                <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-full">
                    <div className="flex items-center justify-center h-full">
                        <p className="text-black font-bold text-3xl">100%</p>
                    </div>  
                </div>
        </div>
    )
}