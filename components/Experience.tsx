import Exp from "../exp";
import ExperienceCard from "./ExperienceCard";

interface Props {
    experience: [Exp]
}

export default function Experience({ experience }: Props) {
    return(
        <div className="relative flex flex-col items-center h-full px-5 xl:px-10">
            <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl mt-20 px-5">Experience</h3>
            <div className="flex max-w-full p-10 space-x-5 overflow-x-scroll text-left scrollbar-hide">
                {
                    experience.map(exp => <ExperienceCard
                        key={exp._id}
                        image={exp.image}
                        title={exp.title}
                        name={exp.name}
                        techStack={exp.techStack}
                        startDate={exp.startDate}
                        endDate={exp.endDate}
                    />)
                }
            </div>
        </div>
    )
}