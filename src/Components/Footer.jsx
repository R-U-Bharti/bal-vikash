import FadeInUp from "./FadeInUp"
import logo from "@/assets/logo.png"

const Footer = () => {
    return (
        <>
            <FadeInUp className={"h-screen w-full grid grid-cols-12 gap-2"}>
                <div className="col-span-3">
                    <div className="">
                    <img src={logo} className=" bg-white/60 dark:bg-white/70 rounded-full w-20" />
                        <h3 className="text-base md:text-xl font-bold bg-gradient-to-r from-indigo-800 via-purple-500 to-ci text-transparent bg-clip-text">Bal Vikash High School, Dari</h3>
                    </div>
                </div>
            </FadeInUp>
        </>
    )
}

export default Footer