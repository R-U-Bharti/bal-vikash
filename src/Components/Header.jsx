import FadeInUp from "./FadeInUp"

const Header = ({ title }) => {
    return (
        <>
            <FadeInUp className=' text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-cv via-cii to-ci text-transparent bg-clip-text w-max mt-10 mb-4 md:mb-10'>{title}</FadeInUp>
        </>
    )
}

export default Header