import { motion } from "framer-motion"

export default function About() {
    return(
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
            className="relative flex flex-col items-center px-5 mx-auto text-center md:text-left max-w-7xl xl:px-10">
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
                src="pic_2.jpeg"
                alt="Picture of Victor"
                className="w-56 h-56 md:mb-0 flex-shrink-0 object-cover rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px]"/>
                <div className="px-0 space-y-5 xl:space-y-10 md:px-10">
                    <h4 className="mt-4 text-2xl font-semibold tracking-widest lg:text-4xl md:mt-0">Here is a <span className="underline decoration-[#F7AB0A]">little</span> background</h4>
                    <p className="text-base tracking-widest">
                        Hi, my name is Victor Omorogbe and I enjoy creating things that live on the internet.
                        My interest in technology started when I was a child. Then, I used to watch Jimmy Neutron and it made me love Science and Technology.
                        Technology in real life, turned out to be more complicated and interesting than what I saw in the movies. So, I searched the internet for technical skills that I could acquire and I found out about Software development.
                        I got into web and android development in 2019 and at that time, I was still in my final year in high school. Later on, I quit android development because I found out that there are lots of opportunities that I could explore in the web.
                        Today, I am proudly in the Web 3 space as a Software developer.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}