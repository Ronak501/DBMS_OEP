import {
  MapPin,
  Users,
  Wifi,
  Coffee,
  Music,
  ParkingMeter as Parking,
} from "lucide-react";

const venues = [
  {
    id: 1,
    name: "Central Park Arena",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "New York, NY",
    capacity: "15,000",
    amenities: ["WiFi", "Food Court", "VIP Lounges", "Parking"],
    description:
      "A state-of-the-art outdoor venue perfect for concerts and festivals.",
  },
  {
    id: 2,
    name: "Metropolitan Concert Hall",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Brooklyn, NY",
    capacity: "5,000",
    amenities: ["Premium Sound", "Restaurant", "Bar", "Coat Check"],
    description:
      "An iconic indoor venue known for its perfect acoustics and elegant atmosphere.",
  },
  {
    id: 3,
    name: "Riverside Stadium",
    image:
      "https://images.unsplash.com/photo-1507666664345-c49223375e33?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Queens, NY",
    capacity: "25,000",
    amenities: ["Multiple Stages", "Food Vendors", "First Aid", "Security"],
    description:
      "A massive outdoor venue hosting the biggest events in the city.",
  },
];

const VenuePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Venues</h1>
        <p className="text-xl text-gray-600">
          Discover world-class venues for unforgettable events
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {venues.map((venue) => (
          <div
            key={venue.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={venue.image}
              alt={venue.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {venue.name}
              </h2>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{venue.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Capacity: {venue.capacity}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{venue.description}</p>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Amenities</h3>
                <div className="grid grid-cols-2 gap-2">
                  {venue.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center text-gray-600"
                    >
                      {amenity === "WiFi" && <Wifi className="h-4 w-4 mr-1" />}
                      {amenity === "Food Court" && (
                        <Coffee className="h-4 w-4 mr-1" />
                      )}
                      {amenity === "Premium Sound" && (
                        <Music className="h-4 w-4 mr-1" />
                      )}
                      {amenity === "Parking" && (
                        <Parking className="h-4 w-4 mr-1" />
                      )}
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-indigo-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Looking for a Venue?
        </h2>
        <p className="text-gray-600 mb-6">
          We can help you find the perfect venue for your event. Contact our
          venue specialists for personalized assistance.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition duration-200">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default VenuePage;
