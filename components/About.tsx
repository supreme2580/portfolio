import { motion } from "framer-motion"

export default function About() {
    return(
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
            className="relative flex flex-col items-center min-h-screen px-5 mx-auto text-center md:text-left max-w-7xl xl:px-10">
            <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mt-20">About</h3>
            <div className="flex flex-col items-center mt-10 md:flex-row justify-evenly">
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 1.2
                }}
                viewport={{
                    once: true
                }}
                src="profilepic.jpg"
                alt="Picture of Victor"
                className="w-56 h-56 md:mb-0 flex-shrink-0 object-cover rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px]"/>
                <div className="px-0 space-y-5 xl:space-y-10 md:px-10">
                    <h4 className="text-2xl font-semibold tracking-widest lg:text-4xl">Here is a <span className="underline decoration-[#F7AB0A]">little</span> background</h4>
                    <p className="text-base tracking-widest">
                        Hi my name is Victor Omorogbe and I enjoy creating things that live on the internet.
                        My interest in technology (in general) started back from when I was a kid watching cartoons 
                        such as jimmy neutron, it turns out it is tougher and more interesting than I saw in movies, so I 
                        searched the internet for what I can do in tech and I found software development, I started with introduction to web development. 
                        I fully got into web and android development back in 2019 when I was in my final year in high school, fast foward to today I 
                        am in the web3 space it is challenging and fun at the same time, I have since quit the android development space because
                        I feel I have enough challenges and fun building things that live on the web.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}