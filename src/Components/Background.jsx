const Background = ({ children }) => {
    return (
        <div className="h-screen w-full animate__animated animate__fadeIn animate__faster overflow-x-clip">
            <div class="fixed h-screen w-screen z-0 dark:bg-[#0a0f1c] bg-[#e8eefd]">
                <div className="absolute top-10 left-5 dark:bg-[#121e4f] bg-[#bcc7f4] opacity-65 size-[20vw] rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-5 dark:bg-ci bg-ci opacity-30 size-[20vw] rounded-full blur-3xl" />
            </div>
            {children}
        </div>
    )
}

export default Background