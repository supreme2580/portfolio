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
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:victoromorogbe69@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name}, ${formData.message} (${formData.email})`
    }
    return(
        <div className="flex justify-center items-center">
            <div className="relative flex flex-col items-center px-10 text-center md:text-left md:flex-row max-w-7xl justify-evenly max-auto">
                <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl absolute top-24">Contact Me</h3>
                <div className="flex flex-col items-center mt-32 space-y-10">
                    <h4 className="mt-5 text-2xl font-semibold text-center xl:text-4xl">Let{"'"}s build something cool.{" "}
                        <span className="decoration-[#F7AB0A]/50 underline">Let{"'"}s talk</span>
                    </h4>
                    <div className="space-y-5 max-w-[300px] sm:max-w-full">
                        <div className="flex items-center justify-start space-x-5">
                            <PhoneIcon className="w-7 h-7 text-[#F7AB0A] animate-pulse" />
                            <p className="text-2xl">+234 8070889521</p>
                        </div>
                        <div className="flex items-center justify-start space-x-5">
                            <LocationMarkerIcon className="w-7 h-7 text-[#F7AB0A] animate-pulse" />
                            <p className="text-2xl">On the internet</p>
                        </div>
                        <div className="flex items-center justify-start space-x-5">
                            <MailIcon className="w-7 h-7 text-[#F7AB0A] animate-pulse" />
                            <p className="text-lg sm:text-2xl">victoromorogbe69@gmail.com</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-auto space-y-2 w-fit">
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
        </div>
    )
}