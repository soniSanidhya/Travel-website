import React from 'react';

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const Congratulations = ( {handleBack}) => {
  const currentDate = new Date();
  const deliveryDate = new Date();
  deliveryDate.setDate(currentDate.getDate() + 2); // Add 2 days to the current date

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-green-600">Congratulations!</h1>
        <p className="text-center mt-4 text-lg text-gray-700">Your order has been placed successfully.</p>
        <p className="text-center mt-2 text-gray-600">Order Date: {formatDate(currentDate)}</p>
        <p className="text-center mt-2 text-gray-600">Estimated Delivery Date: {formatDate(deliveryDate)}</p>
        <div className="flex justify-center mt-6">
          <button
            onClick={()=>{handleBack(false);}}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
