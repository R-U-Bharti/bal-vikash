import './CompLoader.css'

const CompLoader = () => {
    return (
        <div className='h-screen w-screen flex items-center justify-center bg-zinc-800'>
            <div class="wrapper">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
            </div>
        </div>
    )
}

export default CompLoader