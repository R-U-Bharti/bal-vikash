import { motion } from 'motion/react'

const FadeInUp = ({ children, className }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 200 }} // Start invisible and below the viewport
                animate={{ opacity: 1, y: 0 }} // Fade in and move to its final position
                transition={{ duration: 0.8, ease: "easeOut" }} // Smooth easing
                className={className}
            >
                {children}
            </motion.div>
        </>
    )
}

export default FadeInUp