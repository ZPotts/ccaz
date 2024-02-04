import InteriorCard from "./InteriorCard"
import MediumCard from "./MediumCard";

const InteriorCardData = [
    {
        "img": "/images/photos/indoor/entrance.png", 
        "title": "Double Door entryway"
    },
    {
        "img": "/images/photos/indoor/dining-room-1.png", 
        "title": "Dining with Panoramic Views"
    },
    {
        "img": "/images/photos/indoor/living-room.png", 
        "title": "Living Room With Fireplace"
    },    {
        "img": "/images/photos/indoor/entertaining-room.png", 
        "title": "Formal Entertaining Room and Piano"
    },
    {
        "img": "/images/photos/indoor/master-bedroom.png", 
        "title": "2nd Floor Main Bedroom with Rooftop Deck"
    },
    {
        "img": "/images/photos/indoor/master-bedroom-2.png", 
        "title":"North and South Views in Main Bedroom"
    },
    {
        "img": "/images/photos/indoor/master-bath.png", 
        "title": "Private Bathroom of Master Bed"
    },
    {
        "img": "/images/photos/indoor/guest-bedroom-1.png", 
        "title": "Guest Bedroom with Walkout Patio"
    },
    {
        "img": "/images/photos/indoor/guest-bathroom-1.png", 
        "title": "First Guest Bathroom"
    },
    {
        "img": "/images/photos/indoor/guest-bedroom-2.png", 
        "title": "Second Guest Bedroom with King Bed"
    },
    {
        "img": "/images/photos/indoor/guest-bedroom-3.png", 
        "title": "Third Guest Bedroom with Two Twin Beds"
    }, 
    {
        "img": "/images/photos/indoor/guest-bathroom-2.png", 
        "title": "Shared Bathroom with Twin Sinks"
    },
    {
        "img": "/images/photos/indoor/formal-dining-entrance.png", 
        "title": "Separate Entrance to Formal Dining"
    },
    {
        "img": "/images/photos/indoor/dining-room-steps.png", 
        "title": "Indoor/Outdoor Dining Room Foyer"
    },
    {
        "img": "/images/photos/indoor/wine-cellar.png", 
        "title": "Wine Cellar With 10 Foot Racks"
    },
    {
        "img": "/images/photos/indoor/kitchen-appliances.png", 
        "title": "Dual Oven Kitchen"
    },
    {
        "img": "/images/photos/indoor/wine-beer-fridge.png", 
        "title": "Separate Wine and Beer Refrigerator"
    },
    {
        "img": "/images/photos/indoor/kitchen-table-2.png", 
        "title": "Kitchen Table with Pond Views"
    },
    {
        "img": "/images/photos/indoor/kitchen-table.png", 
        "title": "Kitchen and Dining"
    },
    {
        "img": "/images/photos/indoor/kitchen.png", 
        "title": "Kitchen"
    },
    {
        "img": "/images/photos/indoor/view-space.png", 
        "title": "Conversation Area with Desert Views"
    }
];

const InteriorCardContainer = () => {
 return(
    <div className="mt-12">
        <h2 className="text-2xl text-left font-bold text-gray-600">Four bedrooms that comfortably sleep 8. Formal hosting with a luxury dining room, entertainment room and wine cellar.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
         {
            InteriorCardData.map(({img, title}) => (
                <InteriorCard key={img} img={img} title={title} />
            ))}
    </div>
    </div>
    )
}

export default InteriorCardContainer