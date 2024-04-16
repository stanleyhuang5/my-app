import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import UsersManagement from './UsersManagement';
import Dashboard from './Dashboard';
import BookingTable from './BookingTable';
import InventoryManagement from './InventoryManagement';
import ClientManagement from './ClientManagement';
import OrderManagement from './OrderManagement';
import BookingDrawer from './BookingDrawer';

function App() {
  const [isBookingDrawerOpen, setIsBookingDrawerOpen] = useState(false); // Control the Booking Drawer
  const [activeTab, setActiveTab] = useState('booking');

  let navigate = useNavigate();

  // Function to open the booking drawer
  const openBookingDrawer = () => {
    setIsBookingDrawerOpen(true);
  };

  // Function to close the booking drawer
  const closeBookingDrawer = () => {
    setIsBookingDrawerOpen(false);
  };

  const tabs = [
    {
      label: 'Dashboard',
      slug: '/dashboard'
    },
    {
      label: 'Inventory Management',
      slug: '/inventory'
    },
    { label:
      'Order Management',
      slug: '/order'
    },
    {
      label: 'Client Management',
      slug: '/client'
    },
    {
      label: 'Booking Management',
      slug: '/booking-table'
    },
    {
      label: 'Users',
      slug: '/users-management'
    },
    {
      label: 'Settings',
      slug: '/settings'
    },
  ];

  return (
    <div className="h-screen w-screen bg-white flex flex-row">
      <div className="h-full bg-gradient-to-r from-orange-500 to-orange-200 w-64 px-3 py-5">
        <div className="flex flex-row gap-5 items-center justify-center">
          <div className="h-12 w-12 rounded-full bg-red-500"></div>
          <div className="flex flex-col">
            <span className="text-gray-600 text-sm">ADMIN</span>
            <span className="text-sm">Stanley Huang</span>
          </div>
        </div>
        <div className="py-10 flex flex-col gap-3 ml-6">
          {tabs.map((tab, index) => (
            <Link
              key={index}
              to={tab.slug}
              className={`p-3 ${activeTab === tab.slug ? 'bg-white font-semibold text-blue-500' : 'text-gray-600'}`}
              onClick={() => setActiveTab(tab.slug)}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>

      <Routes>
        <Route path="/users-management" element={<UsersManagement />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<InventoryManagement />} />
        <Route path="/client" element={<ClientManagement />} />
        <Route path="/order" element={<OrderManagement />} />
        <Route path="/booking-table" element={<BookingTable onAddBooking={openBookingDrawer} />} />
      </Routes>

      <BookingDrawer isOpen={isBookingDrawerOpen} closeDrawer={closeBookingDrawer} />
    </div>
  );
}

export default App;
