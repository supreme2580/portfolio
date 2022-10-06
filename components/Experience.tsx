import Exp from "../exp";
import ExperienceCard from "./ExperienceCard";

interface Props {
    experience: [Exp]
}

export default function Experience({ experience }: Props) {
    return(
        <div className="min-h-screen h-full relative flex flex-col items-center px-5 xl:px-10">
            <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl mt-20 px-5">Experience</h3>
            <div className="flex overflow-x-scroll scrollbar-hide space-x-5 max-w-full text-left p-10">
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