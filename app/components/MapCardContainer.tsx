import MapCard from "./MapCard"

const mapCardData = [
    {
        "img": "/images/maps/alltrails.png", 
        "title": "Cycling and Offroading on Alltrails",
        "link": "https://www.alltrails.com/explore/us/arizona/scottsdale?b_tl_lat=34.11655167206115&b_tl_lng=-112.4935308264762&b_br_lat=33.537595711974475&b_br_lng=-111.13618963523935"
    },
    {
        "img": "/images/maps/googleMaps.png", 
        "title": "Hiking on Google Maps",
        "link": "https://www.google.com/maps/search/carefree+az+hiking/@33.8423136,-111.9230547,12z?entry=ttu"
    },
    {
        "img": "/images/maps/trailforks.png", 
        "title": "Mountain Biking and Dirtbikes on Trailforks",
        "link": "https://www.trailforks.com/region/carefree/?activitytype=1&z=10.7&lat=33.79207&lon=-111.92689&content=trails,labels,nst,region,poi,directory,polygon,waypoint"
    }
];

const MapCardContainer = () => {
 return(
    <div className="mt-12">
        <h3 className="text-xl text-left font-bold text-gray-600">Bordering 33,500 acres of open space with more than 100 miles of open routes for motocross, offroading, cycling and hiking.</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
         {
            mapCardData.map(({img, title, link}) => (
                <MapCard key={img} img={img} title={title} link={link} />
            ))}
    </div>
    </div>
    )
}

export default MapCardContainer