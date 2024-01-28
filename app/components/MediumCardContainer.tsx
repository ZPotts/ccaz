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
      "img": "/images/photos/property/formaldining.png",
      "title": "Host the most formal dinner"
    },
    {
      "img": "/images/photos/property/diningroom.png",
      "title": "Or sit down with your best friends"
    },
    {
      "img": "/images/photos/property/couchview.png",
      "title": "Relax with the city before you"
    },
    {
      "img": "/images/photos/property/entertainingroom.png",
      "title": "Piano player not included"
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