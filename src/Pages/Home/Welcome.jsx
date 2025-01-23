import SplitText from '@/components/bits/SplitText'
import FadeInUp from '@/Components/FadeInUp'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {

  const navigate = useNavigate()

  return (
    <>
      <FadeInUp
        className="w-full flex py-10 md:py-18 md:pt-20 flex-col gap-y-2 md:gap-y-6 items-center relative"
      >

        <div className='font-bold text-xl md:text-3xl dark:text-zinc-300'>Welcome To</div>
        <SplitText
          text="Bal Vikash High School, Dari"
          className="text-3xl md:text-5xl font-bold md:px-0 px-4"
          delay={30}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        // onLetterAnimationComplete={handleAnimationComplete}
        />

        <p className='text-justify md:text-base text-xs px-4 md:px-36 dark:text-gray-200'>The prestigious institution, Dari's Bal Vikash High School, is known for its academic excellence, holistic development, and nurturing environment. With experienced educators, modern facilities, online classes, and distance education options, it prepares students for future success in all aspects.</p>

        <div className="flex items-center gap-2 mt-6">
          <button
            onClick={() => navigate('/contact-us')}
            className="flex text-gray-700 dark:text-white justify-center gap-2 items-center mx-auto shadow-xl text-sm md:text-lg dark:bg-gray-900 bg-gray-50 backdrop-blur-md font-semibold isolation-auto dark:border-gray-400 border-gray-200 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-amber-500/80 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
          >
            Contact Us
            <svg
              className="md:w-7 md:h-7 w-5 h-5 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1 md:p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="dark:fill-gray-300 fill-gray-800 group-hover:fill-gray-800"
              ></path>
            </svg>
          </button>
          <button
            onClick={() => navigate('/about-us')}
            className="group/button relative rounded-full inline-flex items-center justify-center overflow-hidden bg-white dark:bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-gray-700 dark:text-white transition-all duration-300 ease-in-out shadow-xl hover:shadow-gray-600/50 border-2 dark:border-gray-400 border-gray-200 "
          >
            <span className="text-sm md:text-lg">About Us</span>
            <div
              className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
            >
              <div className="relative h-full w-10 bg-black/20 dark:bg-white/20"></div>
            </div>
          </button>

        </div>

      </FadeInUp>
    </>
  )
}

export default Welcome