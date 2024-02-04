import Image from "next/image";

interface InteriorCardProps {
    img: string;
    title: string;
}

const InteriorCard: React.FC<InteriorCardProps> = ({img, title}) => {
    return(
        <div className="hover:scale-105 pt-4 pr-4 transform transition duration-400 ease-out text-left">
        <h3 className="text-lg mt-3 font-bold">{title}</h3>
        <div className="relative h-64 w-96">
            <Image src={img} layout="fill" alt="title" className="rounded-xl" />
        </div> 
       </div>
    )
}

export default InteriorCard