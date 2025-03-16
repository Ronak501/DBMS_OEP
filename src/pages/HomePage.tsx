import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="space-y-8">
      <section className="text-center py-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white">
        <h1 className="text-4xl font-bold mb-4">Discover Amazing Events</h1>
        <p className="text-xl">Book tickets for the best events in your city</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Event cards will be dynamically populated */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Event"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Summer Music Festival</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Apr 15, 2025</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Central Park</span>
              </div>
              <Link
                to="/events/1"
                className="block text-center bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Music', 'Sports', 'Theater', 'Comedy'].map((category) => (
            <button
              key={category}
              className="p-4 text-center rounded-lg bg-white shadow-md hover:shadow-lg transition duration-200"
            >
              {category}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;