// src/components/MyBookings.js

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const MyBookings = () => {
  const [cart, setCart] = useState([]);
  const [packages, setpackages] = useState([]);

  const fetchData = useCallback(() => {
    axios
      .get("http://localhost:3000/orders")
      .then((res) => {
        setCart(res.data);
        // console.log(cart);
      })
      .catch((e) => {
        console.log(e);
      });
    axios
      .get("http://localhost:3000/packages")
      .then((res) => {
        setpackages(res.data);
        // console.log(packages);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const deleteData = (id, location) => {
    axios
      .delete(`http://localhost:3000/${location}/${id}`)
      .then((res) => {
        fetchData();
        // console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        My Bookings
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className=" lg:border-r-2 lg:pr-8 max-lg:border-b-2 max-lg:pb-8 ">
          <h2 className="text-3xl font-semibold text-gray-500 mb-4">
            Booking Details
          </h2>
          {packages.length ? (
            packages.map((booking) => (
              <div
                key={booking.id}
                className="bg-white border shadow-md rounded-lg p-6 mb-6 hover:shadow-lg transform transition duration-500 hover:scale-105"
              >
                <div className=" mb-4">
                  <div className=" flex justify-end">
                    <span className="bg-blue-200  text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      {booking.startDate}
                    </span>
                    <div
                      onClick={() => {
                        deleteData(booking.id, "packages");
                      }}
                      className=" cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M10 12V17"
                            stroke="#d33c3c"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                          <path
                            d="M14 12V17"
                            stroke="#d33c3c"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                          <path
                            d="M4 7H20"
                            stroke="#d33c3c"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                          <path
                            d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                            stroke="#d33c3c"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                          <path
                            d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                            stroke="#d33c3c"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                        </g>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-blue-700">
                    {booking.destination}
                  </h3>
                </div>
                <div className="text-blue-600 text-lg mb-4">
                  <p className="mb-2">
                    Total Price:{" "}
                    <span className="font-semibold">
                      ₹{booking.price * (booking.adults + booking.children / 2)}
                    </span>
                  </p>
                  <p className="mb-2">
                    Bookeed By:{" "}
                    <span className="font-semibold">{booking.name}</span>
                  </p>
                  <div className="">
                    <p className="mb-2">Persons : </p>
                    <div className=" leading-3 flex gap-2 text-sm font-semibold">
                      <div className=" bg-blue-200 px-2 py-1 rounded-md">Adults : {booking.adults}</div>
                      <div className="bg-blue-200 px-2 py-1 rounded-md">Children : {booking.children} </div>

                    </div>

                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">
                    Order Details
                  </h4>
                  <ul className="space-y-2">
                    <li className="bg-blue-50 p-3 rounded-lg shadow-sm flex justify-between items-center">
                      <span>Flight</span>
                      <span className="font-semibold">
                        ₹
                        {booking.flight *
                          (booking.adults + booking.children / 2)}
                      </span>
                    </li>

                    <li className="bg-blue-50 p-3 rounded-lg shadow-sm flex justify-between items-center">
                      <span>Hotel</span>
                      <span className="font-semibold">
                        ₹
                        {booking.price *
                          (booking.adults + booking.children / 2) -
                          booking.flight *
                            (booking.adults + booking.children / 2)}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full h-40 flex justify-center items-center text-xl">
              No bookings
            </div>
          )}
        </div>
        <div className="">
          <h2 className="text-3xl font-semibold text-gray-500 mb-4">
            Shopping Cart
          </h2>
          {cart.length ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="bg-white border  rounded-lg p-6 mb-6 transform transition duration-500 shadow-md hover:shadow-lg hover:scale-105"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold text-blue-700">
                    {item.products.productname}
                  </h3>
                  <div className="flex gap-1">
                    <span className="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      Quantity: {item.products.quantity}
                    </span>
                    <div
                      onClick={() => {
                        deleteData(item.id, "orders");
                      }}
                      className=" cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M10 12V17"
                            stroke="#d33c3c"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                          <path
                            d="M14 12V17"
                            stroke="#d33c3c"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                          <path
                            d="M4 7H20"
                            stroke="#d33c3c"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                          <path
                            d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                            stroke="#d33c3c"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                          <path
                            d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                            stroke="#d33c3c"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="text-blue-600 flex justify-between text-lg mb-4">
                  <div className="">
                    <p className="mb-2">
                      Price:{" "}
                      <span className="font-semibold">{item.totalAmount}</span>
                    </p>
                    <p className="mb-2">
                      Ordered By:{" "}
                      <span className="font-semibold">{item.name}</span>
                    </p>
                    <p className="mb-2">
                      Ordered On:{" "}
                      <span className="font-semibold">{item.orderDate}</span>
                    </p>
                    <p>
                      Expected Delivery:{" "}
                      <span className="font-semibold">{item.deliveryDate}</span>
                    </p>
                  </div>
                  <div className="px-4">
                    <img
                      className="w-24 h-24 object-scale-down"
                      src={item.products.image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full h-40 flex justify-center items-center text-xl">
              No Items in the Cart
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
