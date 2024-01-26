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
        <header className="sticky top-0 z-50 grid grid-cols-1 sm:grid-cols-3 bg-white py-5 px-5">
            {/* left */}
            <div className="relative flex items-center h-16 hidden sm:block">
                <Image
                    src="/images/logos/cclogo100.png"
                    alt="Carefree Compound Logo"
                    layout="fill"
                    objectFit="contain" 
                    objectPosition="left"
                />
            </div>

            {/* middle */}
            <div className="flex-1 pb-0 sm:pb-4 p-4 font-rye text-center text-orange-dark text-3xl sm:text-3xl md:text-4xl"> 
                Carefree Compound
            </div>

            {/* right */}
            <div className="flex items-center justify-center sm:justify-end space-x-2 p-2">
                <HomeModernIcon className="hidden lg:block h-6" />
                <p className="md:inline text-xl sm:text-base">
                    <a href="mailto:carefreecompound@gmail.com" className="underline"><strong>Email us to book your stay</strong></a>
                </p>
            </div>            

        </header>
    )
}

export default Header;