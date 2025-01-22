import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import school1 from '@/assets/school1.jpg'
import school2 from '@/assets/school2.jpg'
import { motion, useInView } from 'motion/react'
import FadeInUp from "@/Components/FadeInUp"
import { useRef } from "react"

const Banner = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.9 });

  const images = [school1, school2]

  return (
    <FadeInUp
      className="w-full flex md:h-screen items-center justify-center py-2 pt-4 md:py-10 group"
    >

      <motion.main
        ref={ref}
        transition={{ duration: 0.8, ease: "easeOut" }}
        initial={{ opacity: 0.9, scale: 0.8 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.9 }}
        className="w-[95%] drop-shadow-xl rounded-xl">

        <Carousel
          className={"rounded-xl overflow-clip"}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnMouseEnter: true
            }),
          ]}
        >
          <CarouselContent>
            {
              images.map(banner =>
                <CarouselItem>
                  <div className="relative select-none">
                    <img src={banner} className="object-cover w-full z-0 dark:opacity-90" />
                  </div>
                </CarouselItem>
              )
            }
          </CarouselContent>
        </Carousel>

      </motion.main>
    </FadeInUp>
  )
}

export default Banner


//   < CarouselContent >
//   { isMobile() && <CarouselItem>
//     <div className="relative select-none">
//       <img src={school1} className="object-cover w-full z-0" />
//       {/* <div className="md:group-hover:flex hidden md:hidden hover:hidden flex-col md:px-72 gap-2 animate__animated animate__fadeIn absolute z-50 top-0 left-0 h-full w-full bg-black/50 justify-center items-center">
//                   <h2 className="text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-indigo-800 via-purple-500 to-ci text-transparent bg-clip-text">
//                     Bal Vikash High School, Dari
//                   </h2>
//                   <p className="text-justify text-white md:text-base text-xs md:px-0 px-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam at incidunt nisi delectus facere corporis alias id recusandae voluptatem accusantium quas cupiditate soluta omnis expedita corrupti vel illo quae blanditiis ea, cumque .</p>
//                 </div> */}
//     </div>
//   </CarouselItem>}
// <CarouselItem>
//   <div className="relative select-none">
//     <img src={school1} className="object-cover w-full z-0" />
//     {/* <div className="md:group-hover:flex flex md:hidden hover:hidden flex-col md:px-72 gap-2 animate__animated animate__fadeIn absolute z-50 top-0 left-0 h-full w-full bg-black/50 justify-center items-center">
//                   <h2 className="text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-indigo-800 via-purple-500 to-ci text-transparent bg-clip-text">
//                     Bal Vikash High School, Dari
//                   </h2>
//                   <p className="text-justify text-white md:text-base text-xs md:px-0 px-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam at incidunt nisi delectus facere corporis alias id recusandae voluptatem accusantium quas cupiditate soluta omnis expedita corrupti vel illo quae blanditiis ea, cumque .</p>
//                 </div> */}
//   </div>
// </CarouselItem>
//           </ >