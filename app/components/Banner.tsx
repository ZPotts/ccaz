import Image from "next/image"

const Banner = () => {
    return(
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image 
                src="/images/photos/banner-flyover.png"
                layout="fill"
                objectFit="cover"
                alt="Banner Carefree Compound"
            />
            <div className="absolute top-1/2 w-full text-center text-white">
                <p className="text-base sm:text-5xl px-10 py-4 font-bold">Bike-In Bike-Out<br />On 5 acres in Scottsdale</p>
            </div>

        </div>
    )
}

export default Banner;