import Image from 'next/image';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white py-5 px-5">
            {/* left */}
            <div className="relative flex items-center h-10">
                <Image
                    src="/images/logos/cclogo100.png"
                    alt="Carefree Compound Logo"
                    layout="fill"
                    objectFit="contain" 
                    objectPosition="left"
                />
            </div>

            {/* middle */}
            <div className="flex-1 p-4"> 
                Carefree Compound
            </div>

            {/* right */}
            <div className="flex-1 p-4">
                </div>            

        </header>
    )
}

export default Header;