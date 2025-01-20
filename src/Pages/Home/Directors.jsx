import principal from '@/assets/vicePrinciple.jpeg'
import vicePrinciple from '@/assets/vicePrinciple.jpeg'
import { motion } from 'motion/react'

const Directors = () => {

    const data = [
        { id: 1, image: principal, name: "Dilip Kumar Bharti", designation: "Principal", qualification: 'B.Ed', message: "" },
        { id: 2, image: vicePrinciple, name: "Dilip Kumar Bharti", designation: "Vice Principal", qualification: 'B.Ed', message: "" },
    ]

    return (
        <>
            <div className="w-full h-screen flex flex-col justify-center items-center">

                <header className='w-full text-3xl font-bold text-center text-cv mb-10'>Head Members</header>

                <div className="flex flex-row items-center flex-wrap gap-y-2 justify-center gap-x-8">
                    {
                        data.map((profile, index) =>
                            <>
                                <motion.div
                                    initial={{ transform: index === 1 ? "translateX(400px)" : "translateX(-400px)" }}
                                    whileInView={{ transform: "translateX(0px)" }}
                                    transition={{ duration: 0.5 }}
                                    className='md:w-[40%] grid grid-cols-12 gap-2 hover:drop-shadow-3xl w-full border rounded-md p-4 backdrop-blur-xl bg-gradient-to-b from-indigo-950/5 to-indigo-900/10 border-white/20'
                                >
                                    <img src={profile.image} alt={profile.name} className='col-span-5 size-[20vw] rounded-md object-cover object-top' />
                                    <div className="col-span-7 flex flex-col justify-center">
                                        <div className='flex flex-col '>
                                            <span className='font-bold text-xl'>{profile.name}</span>
                                            <span className='font-semibold dark:text-zinc-300'>{profile.designation}</span>
                                        </div>
                                        <p className='text-sm text-justify dark:text-zinc-400 text-zinc-900 mt-4 italic'>&apos;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi soluta illo veritatis necessitatibus temporibus atque officia deserunt sunt nisi cupiditate consectetur incidunt accusamus, perspiciatis consequatur. Expedita repellat quaerat corporis dicta&apos;</p>
                                    </div>
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