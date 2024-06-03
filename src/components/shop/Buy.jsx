// import React from 'react';

// function Buy(props) {
//     return (
//         // <div className='w-full flex justify-center items-center h-screen fixed top-0 backdrop-brightness-50 backdrop-blur-sm'>
//         //     <div className='bg-white w-1/2 h-1/2 border rounded-lg'>

//         //     </div>
//         // </div>
//         <>

//         </>
//     );
// }

// export default Buy;

import axios from "axios";
import React, { useEffect, useState } from "react";


  
 
    


const Buy = ({handleBuy , userData , products , handlePlaced } ) => {

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      };

    const currentDate = new Date();
    const deliveryDate = new Date();

    deliveryDate.setDate(currentDate.getDate() + 2);
    const [order , setorder] = useState({
        orderNumber : `${Math.floor(Math.random()*100000000)}`,
        orderDate: `${formatDate(currentDate)}`,

    }
    );

   

    

//   const orderDetails = {
//     orderNumber: ,
//     orderDate: ,
//     totalAmount: "$299.99",
//     name: "John Doe",
//     address: "1234 Main Street, Springfield, IL 62704",
//     products: [
//       {
//         name: "Product Name 1",
//         quantity: 1,
//         price: "$199.99",
//         imageUrl: "https://via.placeholder.com/100",
//       }
//     ],
//   };
  
    const sendData = async(data)=>{
        const res = await axios.post("http://localhost:3000/orders" ,data , {
          headers : {
            "Content-Type" : "application/json",
          }
        }).then((res) =>{}).catch((e)=>{console.log(e);});
        
    }

  useEffect(()=>{
    setorder((prev) => ({
        ...prev,
        ...userData ,
        deliveryDate: formatDate(deliveryDate),
        totalAmount : `₹${products.price.slice(1,products.price.indexOf(',')) + products.price.slice(products.price.indexOf(',')+1) * products.quantity}`,
        products : products
    }) )
  },[])
        useEffect(()=>{
            // console.log(order);
            // console.log(userData);
        },[order])
  return ( order.products && 
    <div className="bg-gray-100 rounded-xl w-[60%] h-[95%]">
      <main className="max-w-7xl mx-auto  py-6 sm:px-6 lg:px-8 h-full ">
        <div className="bg-white shadow flex flex-col overflow-hidden sm:rounded-lg h-full ">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Order Summary
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Order details and information.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Order Number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {order.orderNumber}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Order Date
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {order.orderDate}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Total Amount
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {order.totalAmount}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Customer Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {order.name}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Shipping Address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {order.address}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Products Ordered
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="divide-y divide-gray-200">
                    
                      <li  className="py-4 flex">
                        <img
                          className="h-10 w-10 rounded-full object-scale-down"
                          src={order.products.image}
                          alt="Product"
                        />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            {order.products.productname}
                          </p>
                          <p className="text-sm text-gray-500">
                            Quantity: {order.products.quantity}
                          </p>
                          <p className="text-sm text-gray-500">
                            Price: {order.products.price}
                          </p>
                        </div>
                      </li>
                    
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
          <div className="mb-4 flex justify-between w-full mx-auto sm:px-6 lg:px-8 h-full items-end ">
        <div>
          <button
            onClick={()=>{
                handleBuy(false)
            }}
          className=" w-20 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Back
          </button>
        </div>
        <div>
            
          <button onClick={()=>{
            sendData(order);
            handlePlaced(true);
            
            }} className=" w-20 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ">
            Order
          </button>
        </div>
      </div>
        </div>
        
      </main>
      
    </div>
  );
};

export default Buy;
