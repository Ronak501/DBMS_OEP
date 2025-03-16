import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, Tag, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Event Cover"
          className="w-full h-96 object-cover rounded-xl"
        />
        <div className="absolute top-4 right-4">
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
            <Share2 className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-4xl font-bold text-gray-900">Summer Music Festival 2025</h1>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-5 w-5 mr-2" />
              <span>April 15, 2025</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2" />
              <span>7:00 PM - 11:00 PM</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Central Park, New York</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="h-5 w-5 mr-2" />
              <span>5000+ attending</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Tag className="h-5 w-5 mr-2" />
              <span>Music, Festival, Live Performance</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Select Tickets</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 border rounded-lg">
                <div>
                  <h4 className="font-semibold">VIP Pass</h4>
                  <p className="text-sm text-gray-600">Front row access + Meet & Greet</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl">$299</p>
                  <p className="text-sm text-gray-500">10 left</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-4 border rounded-lg">
                <div>
                  <h4 className="font-semibold">Regular Pass</h4>
                  <p className="text-sm text-gray-600">General admission</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl">$99</p>
                  <p className="text-sm text-gray-500">150 left</p>
                </div>
              </div>
              <Link
                to={`/booking/${id}`}
                className="block w-full text-center bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">About This Event</h2>
          <p className="text-gray-700 leading-relaxed">
            Join us for the biggest music festival of the year! Experience an unforgettable evening 
            featuring top artists from around the world. The Summer Music Festival 2025 brings together 
            an incredible lineup of performers, amazing food vendors, and a spectacular atmosphere in 
            the heart of Central Park.
          </p>
          <div className="mt-6">
            <h3 className="font-semibold mb-2">What's Included:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Access to all performance stages</li>
              <li>Food and beverage vendors</li>
              <li>Festival merchandise</li>
              <li>Dedicated viewing areas</li>
              <li>Security and medical services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;