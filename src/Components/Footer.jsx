import { Locate, Mail, Phone } from "lucide-react"
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6'
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import FadeInUp from "./FadeInUp"
import logo from "@/assets/logo.png"

const Footer = () => {
    return (
        <>
            <FadeInUp className={"w-full grid grid-cols-12 gap-2 dark:bg-black/50 bg-white/50 backdrop:backdrop-blur-lg md:px-20 px-4 py-5 md:py-10 md:gap-x-10"}>
                <div className="col-span-12 md:col-span-4">
                    <div className="flex items-center gap-2 mb-4">
                        <img src={logo} className=" bg-white/60 dark:bg-white/70 p-1 rounded-full w-12 md:w-16" />
                        <h3 className="text-base md:text-xl font-bold bg-gradient-to-r from-indigo-800 via-purple-500 to-ci text-transparent bg-clip-text">Bal Vikash High School, Dari</h3>
                    </div>
                    <p className="text-sm text-justify">Our school is a temple of learning where knowledge, values, and growth come together. It inspires excellence, nurtures potential, and shapes us into confident and responsible individuals.</p>
                </div>

                {/* <div className="col-span-12 md:col-span-4 flex flex-col items-center">
                    <h3 className="text-base md:text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="list-none text-sm text-gray-500 dark:text-gray-300 flex flex-col gap-1">
                        <li className="text-sm">Gallery</li>
                        <li className="text-sm">Gallery</li>
                        <li className="text-sm">Gallery</li>
                        <li className="text-sm">Gallery</li>
                        <li className="text-sm">Gallery</li>
                    </ul>

                </div> */}

                <div className="col-span-12 md:col-span-4 md:border-none border-t pt-4 md:pt-0">
                    <h3 className="text-base md:text-xl font-semibold mb-4 md:px-20">Connect</h3>
                    <ul className="list-none text-sm text-gray-900 dark:text-gray-300 flex md:px-20 flex-col gap-2">
                        <li className="text-sm flex items-center gap-2 cursor-pointer" onClick={() => window.open("mailto:b.v.u.v.dari@gmail.com", "_blank")}>
                            <Mail size={'16px'} /> b.v.u.v.dari@gmail.com
                        </li>
                        <li className="text-sm flex items-center gap-2">
                            <Phone size={'16px'} /> 
                            <div className="flex flex-col">
                                <span className="cursor-pointer" onClick={() => window.open('tel:+918292874764', '_blank')}>8292874764</span>
                                <span className="cursor-pointer" onClick={() => window.open('tel:+918340236965', '_blank')}>8340236965</span>
                            </div>
                        </li>
                        <li className="text-sm flex items-center gap-2 cursor-pointer" onClick={() => window.open("https://maps.app.goo.gl/4sRBWAadjMvaVRkE6", "_blank")}>
                            <Locate size={'16px'} /> Sarna Tand, Purana Block, Dari, Jharkhand, 829109
                        </li>
                        <li>
                            <div className='flex gap-3 text-base mt-2 md:mt-4'>
                                <span onClick={() => window.open("https://www.facebook.com/profile.php?id=61556711248297", "_blank")} className='border p-2 rounded-md duration-150 dark:bg-white/10 bg-white dark:text-accent-foreground hover:text-white hover:bg-blue-500  dark:hover:bg-blue-500 cursor-pointer'><FaFacebookF /></span>
                                {/* <span onClick={() => window.open("https://", "_blank")} className='border p-2 rounded-md duration-150 dark:bg-white/10 bg-white dark:text-accent-foreground hover:text-white hover:bg-black dark:hover:bg-black cursor-pointer'><FaXTwitter /></span> */}
                                <span onClick={() => window.open("https://www.instagram.com/bvidyalay?utm_source=qr&igsh=MXV0YndjZ2lyYjRiZQ==", "_blank")} className='border p-2 rounded-md duration-150 dark:bg-white/10 bg-white dark:text-accent-foreground hover:text-white hover:bg-pink-600  dark:hover:bg-pink-600 cursor-pointer'><AiFillInstagram /></span>
                                {/* <span onClick={() => window.open("https://", "_blank")} className='border p-2 rounded-md duration-150 dark:bg-white/10 bg-white dark:text-accent-foreground hover:text-white hover:bg-red-600 dark:hover:bg-red-600 cursor-pointer'><FaYoutube /></span> */}
                                <span onClick={() => window.open("https://wa.me//917491886853", "_blank")} className='border p-2 rounded-md duration-150 dark:bg-white/10 bg-white dark:text-accent-foreground hover:text-white hover:bg-green-500 dark:hover:bg-green-500 cursor-pointer'><IoLogoWhatsapp /></span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-span-12 md:col-span-4 flex items-center md:py-0 py-4">
                    <iframe className="rounded-md w-full h-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d113091.72821559152!2d85.3010398!3d23.7106137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f493001f928151%3A0xfb325d953a88fa6!2sBal%20Vikash%20High%20School%2C%20Dari!5e1!3m2!1sen!2sin!4v1737353514153!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </FadeInUp>
        </>
    )
}

export default Footer