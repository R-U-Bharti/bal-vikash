import principal from '@/assets/principle.jpeg'
import vicePrinciple from '@/assets/vicePrinciple.jpeg'
import SpotlightCard from '@/components/bits/SpotlightCard'
import Header from '@/Components/Header'
import { isMobile } from '@/lib/powerupfunctions'
import { motion } from 'motion/react'

const Directors = () => {

    const data = [
        {
            id: 1, image: principal, name: "Sunil Kumar", designation: "Principal", qualification: 'B.Ed', message: "Our school is not just a place for education but a platform to shape your children’s dreams. We are dedicated to recognizing every student’s potential and helping them reach new heights. Your trust and support are our greatest strengths. Together, we will build a bright and empowered future."
        },
        {
            id: 2, image: vicePrinciple, name: "Dilip Kumar Bharti", designation: "Vice Principal", qualification: 'B.Ed', message: "As we embrace the principles of the New Education Policy (NEP), our focus is on empowering students with knowledge, skills, and values for a bright future. We aim to provide an education that encourages creativity, critical thinking, and holistic development, preparing students for real - world challenges. Your partnership and support are invaluable in creating this transformative learning experience. Together, let us build a generation of confident, innovative, and responsible individuals."
        },
    ]

    const animate = (ind) => {
        let desktop = {
            initial: {
                transform: ind === 1 ? "translateX(200px)" : "translateX(-200px)"
            },
            whileInView: {
                transform: "translateX(0px)"
            }
        }

        let mobile = {
            initial: { opacity: 0, y: 200 },
            whileInView: { opacity: 1, y: 0 }
        }

        return isMobile() ? mobile : desktop

    }

    return (
        <>
            <div className="w-full flex flex-col justify-start items-center py-10">

                <Header title="Head Members" />

                <div className="flex flex-row items-center flex-wrap gap-y-2 justify-center gap-x-8 px-2">
                    {
                        data.map((profile, index) =>
                            <>
                                <motion.div
                                    initial={animate(index).initial}
                                    whileInView={animate(index).whileInView}
                                    transition={{ duration: 0.8, ease: "easeOut" }} // Smooth easing
                                    className='md:w-[45%] mb-2'
                                >
                                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                                        {/* <div className="grid md:hover:scale-105 transition-all duration-300 grid-cols-12 gap-x-4 gap-y-4 hover:shadow-[0px_0px_30px_rgba(0,0,200,0.2)] dark:hover:shadow-[0px_0px_30px_rgba(0,0,200,0.15)] w-full border rounded-md p-4 backdrop-blur-xl bg-gradient-to-b from-indigo-950/5 to-indigo-900/10 border-white/20"> */}
                                        <div className='grid grid-cols-12 gap-x-4 gap-y-4'>
                                            <img src={profile.image} alt={profile.name} className='col-span-12 md:col-span-5 md:size-[20vw]  w-[50%] rounded-md object-cover object-top dark:opacity-90' />
                                            <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
                                                <div className='flex flex-col '>
                                                    <span className='font-bold text-xl'>{profile.name}</span>
                                                    <span className='font-semibold dark:text-zinc-300'>{profile.designation}</span>
                                                </div>
                                                <p className='text-sm text-justify dark:text-zinc-400 text-zinc-900 mt-4 italic'>"{profile.message}"</p>
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </motion.div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Directors