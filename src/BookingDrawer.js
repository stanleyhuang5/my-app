import React, { useState } from 'react';

const BookingDrawer = ({ isOpen, closeDrawer }) => {
  const [bookingDate, setBookingDate] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [additionalMessage, setAdditionalMessage] = useState('');
  const [studentDiscount, setStudentDiscount] = useState('No');
  const [serviceType, setServiceType] = useState('Common Service');

  const [isFirstNameEmpty, setIsFirstNameEmpty] = useState(false);
  const [isLastNameEmpty, setIsLastNameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);

  const handleSaveClick = () => {
    let isValid = true;
    setIsFirstNameEmpty(!firstName);
    setIsLastNameEmpty(!lastName);
    setIsEmailEmpty(!email);

    if (!firstName || !lastName || !email) {
      isValid = false;
    }

    if (isValid) {
      console.log("Form is valid. Proceed with submission.");
      closeDrawer(); // Close the drawer on successful submission
    }
  };

  return (
    <div className={`absolute right-0 top-0 w-96 bg-white p-4 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <h2 className="text-xl font-bold mb-4">Add Booking</h2>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        className="mt-10 block w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      {isFirstNameEmpty && <p className="text-red-500">Please fill out this field.</p>}

      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        className="mt-10 block w-full px-3 py-2 border border-gray-300 rounded-md "
      />
      {isLastNameEmpty && <p className="text-red-500">Please fill out this field.</p>}

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="mt-10 block w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      {isEmailEmpty && <p className="text-red-500">Please fill out this field.</p>}

      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
        className="mt-10 block w-full px-3 py-2 border border-gray-300 rounded-md"
      />

      <input
        type="text"
        value={additionalMessage}
        onChange={(e) => setAdditionalMessage(e.target.value)}
        placeholder="Additional Message"
        className="mt-10 block w-full px-3 py-2 border border-gray-300 rounded-md"
      />


      <label className="block mt-10">
        Student Discount?
        <select
          value={studentDiscount}
          onChange={(e) => setStudentDiscount(e.target.value)}
          className="ml-2 p-2 border rounded"
        >
          <option>Yes</option>
          <option>No</option>
        </select>
      </label>

      <label className="block mt-10">
        Service Type
        <select
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          className="ml-2 p-2 border rounded"
        >
          <option>Inspection Service</option>
          <option>Common Service</option>
          <option>PC assembling service</option>
        </select>
      </label>
      <label className="block mt-10 mb-2">
        Date

      <input
        type="date"
        value={bookingDate}
        onChange={(e) => setBookingDate(e.target.value)}
        className="mb-2 p-2 border rounded m-2"
      />

      </label>

      <button onClick={handleSaveClick} className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">
        Save
      </button>
      <button onClick={closeDrawer} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2 mt-4">
        Close
      </button>
    </div>
  );
};

export default BookingDrawer;
