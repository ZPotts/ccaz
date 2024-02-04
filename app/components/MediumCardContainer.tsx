import MediumCard from "./MediumCard"

const cardsData = [
    {
      "img": "/images/photos/property/thehouse.png",
      "title": "Located on a 5-acre lot"
    },
    {
      "img": "/images/photos/property/rooftop.png",
      "title": "With views of the whole Valley"
    },
    {
      "img": "/images/photos/property/pool.png",
      "title": "Wake up with laps"
    },
    {
      "img": "/images/photos/property/golf.png",
      "title": "Or unwind on the green"
    },
   {
      "img": "/images/photos/property/pond.png",
      "title": "Your door opens to the koi pond"
    },
    {
      "img": "/images/photos/property/tennis.png",
      "title": "Challenge friends on the court"
    },
    {
      "img": "/images/photos/property/road.png",
      "title": "The possibilities are endless"
    }
];

const MediumCardContainer = () => {
    return(
        <div className="flex flex-wrap justify-center">
            {cardsData.map(({ img, title }) => (
            <MediumCard key={img} img={img} title={title} />
            ))}
        </div>
    )
}

export default MediumCardContainer