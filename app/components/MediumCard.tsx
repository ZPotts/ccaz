import Image from "next/image";

interface MediumCardProps {
    img: string;
    title: string;
}

const MediumCard: React.FC<MediumCardProps> = ({img, title}) => {
    return(
       
        <div className="hover:scale-105 pt-6 pr-4 transform transition duration-400 ease-out text-left">
        <h3 className="text-2xl mt-3">{title}</h3>
        <div className="relative h-64 w-96">
            <Image src={img} layout="fill" alt="title" className="rounded-xl" />
        </div> 
       </div>
    )
}

export default MediumCard