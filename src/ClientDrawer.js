import React, { useState } from 'react';

const ClientDrawer = ({ isOpen, closeDrawer }) => {
    // State for form fields
    const [companyName, setCompanyName] = useState('');
    const [clientName, setClientName] = useState('');
    const [ABN, setABN] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ companyName, clientName, ABN, telephone, email });
        closeDrawer(); // Close the drawer after form submission
    };


    if (!isOpen) return null;

    return (
        <div className="fixed right-0 top-0 w-96 h-full bg-white shadow-lg z-50 p-4">
            <h2 className="text-lg font-semibold">Add New Client</h2>
            <form onSubmit={handleSubmit}>
                <label className="block mt-4">
                    <span className="text-gray-700">Company Name</span>
                    <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter company name"
                    />
                </label>
                <label className="block mt-4">
                    <span className="text-gray-700">Client Name</span>
                    <input
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter client name"
                    />
                </label>
                <label className="block mt-4">
                    <span className="text-gray-700">ABN</span>
                    <input
                        type="text"
                        value={ABN}
                        onChange={(e) => setABN(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter ABN"
                    />
                </label>
                <label className="block mt-4">
                    <span className="text-gray-700">Telephone</span>
                    <input
                        type="tel"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter telephone number"
                    />
                </label>
                <label className="block mt-4">
                    <span className="text-gray-700">Email Address</span>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter email address"
                    />
                </label>
                <div className="mt-6 flex justify-between">
                    <button type="submit" className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                        Save Client
                    </button>
                    <button type="button" onClick={closeDrawer} className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded">
                        Close
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ClientDrawer;
