import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import ModeToggle from './ModeToggle'
import logo from '@/assets/logo.png'

const Navbar = () => {

    const navigate = useNavigate()

    const menuList = [
        { label: "Home", path: '/', subMenu: [] },
        { label: "About Us", path: '/about-us', subMenu: [] },
        { label: "Gallery", path: '/gallery', subMenu: [] },
        { label: "Career", path: '/career', subMenu: [] },
        { label: "Contact Us", path: '/contact', subMenu: [] },
    ]

    let icons = null
    let links = null
    let styles = null

    const [toggleMenu, setToggleMenu] = useState('')
    const [sideMenuOpen, setSideMenuOpen] = useState(false)

    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > 152) {
            setIsVisible(false)
        } else {
            setIsVisible(true)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleFun = (menu, status = false) => {

        if (!status)
            setToggleMenu(menu?.label)

        if (sideMenuOpen && status)
            setToggleMenu('')

    }

    const sideMenuCloseFun = (subMenu = []) => {
        if (subMenu?.length === 0) {
            setToggleMenu('')
            setSideMenuOpen(false)
        }
    }

    return (
        <div className='flex justify-center'>
            <nav className={`${isVisible ? 'w-full relative animate__animated animate__fadeIn' : 'fixed top-0 w-full md:w-[70%] md:rounded-br-md md:rounded-bl-md animate__animated animate__slideInDown shadow-md md:border-l md:border-r border-muted/20'} z-50 dark:bg-muted/30 bg-white/30 backdrop-blur-lg border-b px-4 2xl:px-10 md:px-8 py-2 md:py-4 flex justify-between items-center `} onMouseLeave={() => setToggleMenu('')}>

                {/* Logo */}
                <div className='flex items-center gap-2' onClick={() => navigate('/')}>
                    <img loading="lazy" src={logo} className='md:w-[3vw] w-[9vw] bg-white/60 dark:bg-white/70 rounded-full p-1' alt="" />
                    <span className='text-base md:text-2xl font-bold bg-gradient-to-r from-indigo-800 via-purple-500 to-ci text-transparent bg-clip-text'>Bal Vikash High School, Dari</span>
                </div>

                {/* Menus */}
                <div className='flex items-center gap-8'>

                    {/* Desktop */}
                    <ul className='hidden md:flex items-center text-sm font-semibold gap-4'>
                        {
                            menuList?.map((menu, index) =>
                                <li key={index} className='flex items-center relative' onClick={() => toggleFun(menu, toggleMenu === menu?.label)} onMouseEnter={() => toggleFun(menu, toggleMenu === menu?.label)}>
                                    <NavLink onClick={() => sideMenuCloseFun()} to={menu?.subMenu?.length === 0 ? menu?.path : null} className={({ isActive }) => (isActive && menu?.subMenu?.length === 0) ? `text-ci` : `dark:text-white text-black hover:text-hoverBlue`}>{menu?.label}</NavLink>
                                    {menu?.subMenu?.length > 0 && <span className={`${(toggleMenu === menu?.label && menu?.subMenu?.length > 0) ? '' : '-rotate-90'}`}>V</span>}

                                    {/* {
                                        (toggleMenu === menu?.label && menu?.subMenu?.length > 0) &&
                                        <ul className='absolute z-10 shadow-md bg-muted flex flex-col justify-center top-12 w-[170px] animate__animated animate__fadeIn animate__faster'>
                                            {menu?.subMenu?.map((subNav, index) =>
                                                <li key={index} className='px-4 py-2 cursor-pointer border-b hover:bg-slate-100'>
                                                    <NavLink onClick={() => sideMenuCloseFun()} to={subNav?.path} className={({ isActive }) => (isActive) ? `text-blue` : `text-black`}>{subNav?.label}</NavLink>
                                                </li>
                                            )}
                                        </ul>
                                    } */}

                                </li>
                            )
                        }

                    </ul>

                    <div className='relative w-max h-max transition-all duration-300 border-2 border-orange-500/10 hover:shadow-[0px_0px_20px_rgba(239,176,54,1)] rounded-full flex items-center justify-center hover:rotate-[360deg]'>
                        <ModeToggle />
                    </div>

                    {/* Desktop End */}

                    {/* Mobile */}
                    <div className="md:hidden block text-2xl cursor-pointer" onClick={() => setSideMenuOpen(!sideMenuOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 5L19 19M5 19L19 5"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L19 19M5 19L19 5;M5 5L19 5M5 19L19 19" /></path><path d="M12 12H12" opacity="0"><animate fill="freeze" attributeName="d" begin="0.2s" dur="0.4s" values="M12 12H12;M5 12H19" /><set fill="freeze" attributeName="opacity" begin="0.2s" to="1" /></path></g></svg>
                    </div>

                    {sideMenuOpen && <div className="md:hidden absolute z-50 p-4 dark:bg-black bg-white backdrop-blur-lg top-0 right-0 w-screen h-screen animate__animated animate__slideInRight animate__faster">

                        <div className="flex justify-between items-center">
                            <div onClick={() => (navigate('/'), sideMenuCloseFun())} className='flex items-center gap-2'>
                                <img loading="lazy" src={logo} className='md:w-[90vw] w-[20vw] bg-white dark:bg-white/90 rounded-full p-1' alt="" />
                                <span className='text-2xl font-bold bg-gradient-to-r from-indigo-800 via-purple-500 to-ci text-transparent bg-clip-text'>Bal Vikash High School, Dari</span>
                            </div>
                            <div className='w-max text-xl bg-dark p-2 rounded-full dark:text-white rotate-45 cursor-pointer hover:text-red-700/70' onClick={() => (setToggleMenu(''), setSideMenuOpen(false))}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 12h14"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0" /></path><path d="M12 5v14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="16;0" /></path></g></svg>
                            </div>
                        </div>

                        {/* <p className='text-white my-6'>Welcome to DigisoulTech Pvt. Ltd. Empower with business with all the latest technology.</p> */}

                        <ul className=' flex flex-col justify-center text-base font-semibold gap-3 mt-8'>
                            {
                                menuList?.map((menu, index) =>
                                    <li key={index} className='relative' onClick={() => toggleFun(menu, toggleMenu === menu?.label)}>
                                        <NavLink onClick={() => sideMenuCloseFun(menu?.subMenu)} to={menu?.subMenu?.length === 0 ? menu?.path : null} className={({ isActive }) => (isActive && menu?.subMenu?.length === 0) ? `text-ci border-b pb-2 flex` : `dark:text-white hover:text-ci flex justify-between items-center border-b pb-2`}>
                                            <span>{menu?.label}</span>
                                            {menu?.subMenu?.length > 0 && <span className={`${(toggleMenu === menu?.label && menu?.subMenu?.length > 0) ? 'rotate-45' : ''} text-white text-lg transition-all duration-300`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 12h14"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0" /></path><path d="M12 5v14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="16;0" /></path></g></svg>
                                            </span>}</NavLink>

                                        {/* {
                                            (toggleMenu === menu?.label && menu?.subMenu?.length > 0) &&
                                            <ul className='w-full flex flex-col justify-center animate__animated animate__fadeIn animate__faster'>
                                                {menu?.subMenu?.map((subNav, index) =>
                                                    <li key={index} className='px-4 py-2 cursor-pointer border-b hover:bg-dark text-white'>
                                                        <NavLink onClick={() => sideMenuCloseFun()} to={subNav?.path} className={({ isActive }) => (isActive) ? `text-blue` : `text-white`}>{subNav?.label}</NavLink>
                                                    </li>
                                                )}
                                            </ul>
                                        } */}

                                    </li>
                                )
                            }

                        </ul>
                    </div>}
                    {/* Mobile End */}

                </div>

            </nav>
        </div>
    )
}

export default Navbar