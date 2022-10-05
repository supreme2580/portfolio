import { motion } from "framer-motion"

export default function About() {
    return(
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex flex-col relative text-center md:text-left max-w-7xl px-5 xl:px-10 mx-auto items-center">
            <div className="uppercase tracking-[20px] text-gray-500 text-2xl mt-20">About</div>
            <div className="flex flex-col md:flex-row justify-evenly items-center mt-10">
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
                className="w-56 h-56 md:mb-0 flex-shrink-0 object-cover rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px]"/>
                <div className="space-y-5 xl:space-y-10 px-0 md:px-10">
                    <h4 className="text-2xl lg:text-4xl font-semibold tracking-widest">Here is a <span className="underline decoration-[#F7AB0A]">little</span> background</h4>
                    <p className="text-base tracking-widest">
                        Hi my name is Victor Omorogbe and I enjoy creating things that live on the internet.
                        My interest in technology (in general) started back from when I was a kid watching cartoons 
                        such as jimmy neutron, it turns out it is tougher and more interesting than I saw in movies, so I 
                        searched the internet for what I can do in tech and I found software development, I started introduction to web development. 
                        I fully got into web and android development back in 2019 when I was in my final year in high school, fast foward to today I 
                        am in the web3 space it is challenging and fun at the same time, I have since quit the android development space because
                        I feel I have enough challenges and fun building things that live on the web.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}