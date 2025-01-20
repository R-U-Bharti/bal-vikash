import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import school1 from '@/assets/school1.jpg'
import { motion } from 'motion/react'

const Banner = () => {
  return (
    <motion.div
      initial={{ transform: "translateY(400px)" }}
      animate={{ transform: "translateY(0px)" }}
      transition={{ duration: 1 }}
      className="w-full flex h-screen justify-center py-2 md:py-10 group"
    >

      <motion.main
        transition={{ type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="md:w-[85%] w-[95%] drop-shadow-xl rounded-xl">

        <Carousel
          className={"rounded-xl overflow-clip"}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnMouseEnter: true
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="relative select-none">
                <img src={school1} className="object-cover w-full z-0" />
                <div className="group-hover:flex hidden flex-col md:px-72 gap-2 animate__animated animate__fadeIn absolute z-50 top-0 left-0 h-full w-full bg-black/50 justify-center items-center">
                  <h2 className="text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-indigo-800 via-purple-500 to-ci text-transparent bg-clip-text">
                    Bal Vikash High School, Dadi
                  </h2>
                  <p className="text-justify text-white md:text-base text-xs md:px-0 px-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam at incidunt nisi delectus facere corporis alias id recusandae voluptatem accusantium quas cupiditate soluta omnis expedita corrupti vel illo quae blanditiis ea, cumque dolorem. Earum ipsa corrupti qui cumque ad exercitationem harum soluta, nostrum illo doloribus mollitia. Sequi et possimus dicta.</p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

      </motion.main>
    </motion.div>
  )
}

export default Banner