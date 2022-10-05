import ExperienceCard from "./ExperienceCard";

export default function Experience() {
    return(
        <div className="min-h-screen h-full relative flex flex-col items-center px-5 xl:px-10 snap-y snap-start snap-mandatory">
            <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl mt-20 px-5">Experience</h3>
            <div className="flex overflow-x-scroll scrollbar-hide space-x-5 max-w-full text-left p-10 snap-x snap-mandatory">
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </div>
    )
}