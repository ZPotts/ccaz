import Image from "next/image"

interface SmallCardProps {
    img: string;
    title: string;
    link: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ img, title, link }) => {
    return(
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
        <div className="relative h-36 w-36">
        <a href={link} target="_blank">
            <Image
           src={img}
           layout="fill"
           className="rounded-lg"
           alt={title}
         />
         </a>
       </div>

       <div>
          <h3 className="text-gray-600 text-left font-bold">
            <a href={link} target="_blank">
                {title}
            </a>
            </h3>
       </div>
    </div>
    )
}

export default SmallCard