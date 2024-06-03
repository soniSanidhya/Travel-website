import React, { useEffect, useState } from "react";
import axios from "axios";

const TourBooking = ( {handleBooking , handleConfirm , details } ) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: details[2],
    startDate: details[0] ? details[0] : "",
    endDate: "",
    adults: 1,
    children: 0,
    specialRequests: "",
  });

  const [packageDetails , setPackageDetails] = useState([]);

  useEffect(()=>{
    setPackageDetails((prev)=>({
      ...prev,
      price : details[1] ? details[1] : "",
      flight : details[1]*6/10,
      hotel : details[1]*4/10,
      ...formData
    }))
  },[formData])

  const sendData = async(data)=>{
    const res = await axios.post("http://localhost:3000/packages" ,data , {
      headers : {
        "Content-Type" : "application/json",
      }
    }).then((res) =>{}).catch((e)=>{console.log(e);});
    
}
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleConfirm();

    // console.log(formData);
    sendData(packageDetails);
    // console.log("details",packageDetails);
    // Add form submission logic here
  };

  return (
    <div className=" fixed w-full top-0 left-0 flex justify-center items-center h-screen backdrop-blur-sm backdrop-brightness-50">
      <div className=" w-[40%] mx-auto mt-10 p-6 bg-white rounded-lg shadow-md ">
        <h2 className="text-2xl font-bold mb-6">Book a Tour</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              // value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="flex justify-between gap-2">
            <div className=" flex-1">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="startDate"
              >
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className=" flex-1">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="endDate"
              >
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div className="flex justify-between gap-2 *:flex-1">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="adults"
              >
                Adults
              </label>
              <input
                type="number"
                name="adults"
                id="adults"
                value={formData.adults}
                onChange={handleChange}
                min="1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="children"
              >
                Children
              </label>
              <input
                type="number"
                name="children"
                id="children"
                value={formData.children}
                onChange={handleChange}
                min="0"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="specialRequests"
            >
              Special Requests
            </label>
            <textarea
              name="specialRequests"
              id="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div className="flex gap-1 *:flex-1 ">
          <button
            onClick={(e)=>{
                e.preventDefault();
                
                handleBooking();
            }}
            className="w-full py-2 px-4 bg-gray-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
            
          </button>
          <button
            type="submit"
            
            className="w-full py-2 px-4 bg-blue-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Book Now
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TourBooking;
