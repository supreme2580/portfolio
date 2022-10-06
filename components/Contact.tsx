import { PhoneIcon, MailIcon, LocationMarkerIcon } from "@heroicons/react/solid"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
}

export default function Contact() {
    const { register, handleSubmit } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = formData => console.log(formData)
    return(
        <div className="min-h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly max-auto items-center mb-20">
            <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl absolute top-24">Contact Me</h3>
            <div className="flex flex-col space-y-10 items-center mt-32">
                <h4 className="text-2xl xl:text-4xl font-semibold text-center mt-5">Let{"'"}s build something cool.{" "}
                    <span className="decoration-[#F7AB0A]/50 underline">Let{"'"}s talk</span>
                </h4>
                <div className="space-y-5 max-w-[300px]">
                    <div className="flex items-start justify-start space-x-5">
                        <PhoneIcon className="w-7 h-7 text-[#F7AB0A] animate-pulse" />
                        <p className="text-2xl">+234 8070889521</p>
                    </div>
                    <div className="flex items-start justify-start space-x-5">
                        <LocationMarkerIcon className="w-7 h-7 text-[#F7AB0A] animate-pulse" />
                        <p className="text-2xl">On the internet</p>
                    </div>
                    <div className="flex items-center justify-center space-x-5">
                        <MailIcon className="w-7 h-7 text-[#F7AB0A] animate-pulse" />
                        <p className="text-lg">victoromorogbe69@gmail.com</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="flex flex-col space-x-0 space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
                        <input {...register("name")} type="text" className="contactInput" placeholder="Name" />
                        <input {...register("email")} type="email" className="contactInput" placeholder="Email" />
                    </div>
                    <input {...register("subject")} type="text" className="contactInput" placeholder="Subject" />
                    <textarea {...register("message")} className="contactInput" placeholder="Message" />
                    <button type="submit" className="bg-[#F7AB0A] py-2.5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
                </form>
            </div>
        </div>
    )
}