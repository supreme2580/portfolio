import { motion } from "framer-motion"

export default function BackgroundCircles() {
    return(
        <motion.div
        initial={{
            opacity: 0
        }}
        animate={{
            scale: [1, 2, 2, 3, 1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: ["20%", "20%", "50%", "80%", "20%"]
        }}
        transition={{
            duration: 2.5
        }}
        className="relative flex justify-center items-center">
            <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
            <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
            <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping" />
            <div className="absolute border border-[#F7AB0A] rounded-full opacity-20 w-[450px] h-[450px]
                xl:h-[550px] xl:w-[550px]  2xl:h-[650px] 2xl:w-[650px] animate-pulse mt-52" />
            <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 animate-ping" />
        </motion.div>
    )
}