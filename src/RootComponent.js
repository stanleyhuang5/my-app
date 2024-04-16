// RootComponent.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; 
import UsersManagement from './UsersManagement';
import Dashboard from './Dashboard';
import BookingTable from './BookingTable';
import InventoryManagement from './InventoryManagement';
import ClientManagement from './ClientManagement';
import OrderManagement from './OrderManagement';

function RootComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users-management" element={<UsersManagement />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<InventoryManagement />} />
        <Route path="/client" element={<ClientManagement />} />
        <Route path="/order" element={<OrderManagement />} />
        <Route path="/booking-table" element={<BookingTable />} />

      </Routes>
    </Router>
  );
}

export default RootComponent;
