import Image from 'next/image';
import { 
    GlobeAltIcon, 
    HomeModernIcon, 
    Bars3Icon, 
    UserCircleIcon, 
    MagnifyingGlassIcon, 
    UsersIcon, 
} from '@heroicons/react/16/solid'; 

const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white py-5 px-5">
            {/* left */}
            <div className="relative flex items-center h-16">
                <Image
                    src="/images/logos/cclogo100.png"
                    alt="Carefree Compound Logo"
                    layout="fill"
                    objectFit="contain" 
                    objectPosition="left"
                />
            </div>

            {/* middle */}
            <div className="flex-1 p-4 font-rye text-center text-orange-dark text-2xl sm:text-3xl md:text-4xl"> 
                Carefree Compound
            </div>

            {/* right */}
            <div className="flex items-center space-x-2 justify-end p-4">
                <p className="hidden md:inline">
                    <a href="mailto:carefreecompound@gmail.com">Email us to book your stay</a>
                </p>
                <HomeModernIcon className="h-6" />
                {/*
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <Bars3Icon className="hidden h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
    */}
            </div>            

        </header>
    )
}

export default Header;