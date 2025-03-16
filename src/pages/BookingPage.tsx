import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CreditCard, Calendar, Clock, MapPin, Users } from 'lucide-react';

const BookingPage = () => {
  const { eventId } = useParams();
  const [selectedTickets, setSelectedTickets] = useState({
    vip: 0,
    regular: 0
  });

  const ticketPrices = {
    vip: 299,
    regular: 99
  };

  const totalAmount = (selectedTickets.vip * ticketPrices.vip) + 
                     (selectedTickets.regular * ticketPrices.regular);

  const handleTicketChange = (type: 'vip' | 'regular', value: number) => {
    if (value >= 0 && value <= 10) {
      setSelectedTickets(prev => ({
        ...prev,
        [type]: value
      }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Complete Your Booking</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Event Details</h2>
            <div className="space-y-3">
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
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Select Tickets</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">VIP Pass</h3>
                  <p className="text-sm text-gray-600">Front row access + Meet & Greet</p>
                  <p className="font-bold mt-1">${ticketPrices.vip}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleTicketChange('vip', selectedTickets.vip - 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{selectedTickets.vip}</span>
                  <button
                    onClick={() => handleTicketChange('vip', selectedTickets.vip + 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">Regular Pass</h3>
                  <p className="text-sm text-gray-600">General admission</p>
                  <p className="font-bold mt-1">${ticketPrices.regular}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleTicketChange('regular', selectedTickets.regular - 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{selectedTickets.regular}</span>
                  <button
                    onClick={() => handleTicketChange('regular', selectedTickets.regular + 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="1234 5678 9012 3456"
                  />
                  <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="123"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-lg sticky top-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3">
              {selectedTickets.vip > 0 && (
                <div className="flex justify-between">
                  <span>VIP Pass x {selectedTickets.vip}</span>
                  <span>${selectedTickets.vip * ticketPrices.vip}</span>
                </div>
              )}
              {selectedTickets.regular > 0 && (
                <div className="flex justify-between">
                  <span>Regular Pass x {selectedTickets.regular}</span>
                  <span>${selectedTickets.regular * ticketPrices.regular}</span>
                </div>
              )}
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${totalAmount}</span>
                </div>
              </div>
              <button
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200 mt-6"
                disabled={totalAmount === 0}
              >
                Complete Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;