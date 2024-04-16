import React from 'react';

const BookingTable = ({ onAddBooking }) => {
  const bookings = [
    { id: 1, customerName: 'John Doe', date: '2024-04-14', time: '10:00', status: 'Confirmed' },

  ];

  return (
    <div className="container mx-auto px-4 mt-20">
      <h2 className="text-2xl font-bold mb-4">Booking List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead style={{ backgroundColor: '#fb923c' }}>
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-white">Booking ID</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-white">Customer Name</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-white">Date</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-white">Time</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-white">Status</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-white">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="text-left py-3 px-4">{booking.id}</td>
                <td className="text-left py-3 px-4">{booking.customerName}</td>
                <td className="text-left py-3 px-4">{booking.date}</td>
                <td className="text-left py-3 px-4">{booking.time}</td>
                <td className="text-left py-3 px-4">{booking.status}</td>
                <td className="text-left py-3 px-4">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={onAddBooking} className="mt-5 bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
          Add Booking
        </button>
      </div>
    </div>
  );
};

export default BookingTable;
