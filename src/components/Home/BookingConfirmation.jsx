import React from 'react';

const BookingConfirmation = ({ handleBooking , handleConfirm }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
        <p>Your tour booking has been successfully submitted. We will contact you shortly with further details.</p>
        <div className="flex justify-end mt-4">
          <button type="button" onClick={()=>{handleBooking();
            handleConfirm();
          }} className="bg-blue-500 text-white py-2 px-4 rounded">Close</button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
