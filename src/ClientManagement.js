import React, { useState } from 'react';
import ClientDrawer from './ClientDrawer';

const ClientManagement = () => {
  // clients data
  const clients = [
    { id: 1, companyName: 'Tech Innovations', clientName: 'John Doe', ABN: '123456789', telephone: '0400123456', email: 'john@techinnovations.com.au' },
    { id: 2, companyName: 'Health Solutions', clientName: 'Jane Smith', ABN: '987654321', telephone: '0400654321', email: 'jane@healthsolutions.com.au' },

  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to open the drawer
  const openDrawer = () => {
      setIsDrawerOpen(true);
  };

  // Function to close the drawer
  const closeDrawer = () => {
      setIsDrawerOpen(false);
  };

  return (
    <div className="container mx-auto px-4 mt-20">
      <h2 className="text-2xl font-bold mb-4">Client Management</h2>

      <ClientDrawer isOpen={isDrawerOpen} closeDrawer={closeDrawer} />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-orange-400 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Client ID</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Company Name</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Client Name</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">ABN</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Telephone</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email Address</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {clients.map(client => (
              <tr key={client.id}>
                <td className="text-left py-3 px-4">{client.id}</td>
                <td className="text-left py-3 px-4">{client.companyName}</td>
                <td className="text-left py-3 px-4">{client.clientName}</td>
                <td className="text-left py-3 px-4">{client.ABN}</td>
                <td className="text-left py-3 px-4">{client.telephone}</td>
                <td className="text-left py-3 px-4">{client.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={openDrawer} className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mb-4 mt-20">
          Add New Client
        </button>
      </div>
    </div>
  );
};

export default ClientManagement;
