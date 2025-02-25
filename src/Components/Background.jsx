const Background = ({ children }) => {
    return (
        <div className="h-screen w-full animate__animated animate__fadeIn animate__faster overflow-x-clip">
            <div class="fixed h-screen w-screen z-0 dark:bg-[#0a0f1c] bg-[#e8eefd]">
                <div className="absolute top-5 md:top-10 left-5 dark:bg-[#121e4f] bg-[#bcc7f4] opacity-80 md:opacity-65 dark:opacity-65 md:size-[20vw] size-[70vw] rounded-full blur-3xl" />
                <div className="absolute bottom-2 md:bottom-10 -right-10 md:right-5 dark:bg-ci bg-ci opacity-35 md:opacity-20 dark:opacity-20 md:size-[20vw] size-[70vw] rounded-full blur-3xl" />
            </div>
            <div className="relative">
                {children}
            </div>
        </div>
    )
}

export default Background