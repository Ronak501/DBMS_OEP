import React from 'react';
import { Calendar, MapPin, Clock, Ticket, CreditCard, Settings, LogOut } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-indigo-600">JD</span>
              </div>
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
            
            <nav className="space-y-2">
              <button className="w-full flex items-center space-x-2 px-4 py-2 text-left rounded-lg bg-indigo-50 text-indigo-700">
                <Ticket className="h-5 w-5" />
                <span>My Tickets</span>
              </button>
              <button className="w-full flex items-center space-x-2 px-4 py-2 text-left rounded-lg text-gray-700 hover:bg-gray-50">
                <CreditCard className="h-5 w-5" />
                <span>Payment Methods</span>
              </button>
              <button className="w-full flex items-center space-x-2 px-4 py-2 text-left rounded-lg text-gray-700 hover:bg-gray-50">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
              <button className="w-full flex items-center space-x-2 px-4 py-2 text-left rounded-lg text-red-600 hover:bg-red-50">
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <h1 className="text-2xl font-bold mb-6">My Tickets</h1>
          
          <div className="space-y-6">
            {/* Upcoming Events */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-4">
                      <img
                        src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                        alt="Event"
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">Summer Music Festival</h3>
                        <div className="space-y-1 mt-2">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>April 15, 2025</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>7:00 PM</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>Central Park, New York</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        Confirmed
                      </span>
                      <button className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium">
                        View Ticket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Past Events */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Past Events</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-lg p-6 opacity-75">
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-4">
                      <img
                        src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                        alt="Event"
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">Comedy Night Special</h3>
                        <div className="space-y-1 mt-2">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>March 1, 2025</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>8:00 PM</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>Comedy Club, Brooklyn</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                        Completed
                      </span>
                      <button className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;