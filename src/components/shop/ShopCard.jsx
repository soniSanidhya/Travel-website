import React from 'react';

function ShopCard({product}) {

    // const product = {
    //     productname : "Urban Jungle Venture Workpack",
    //     description : "23 Liters Water Resistant, L-Open, Premium Polyester Laptop Backpack",
    //     feature1: "50+ bought in past month",feature2: "FREE Delivery",
    //     price : "₹4,799"
    // };

    return (
        // <div className='flex flex-col bg-gray-400 rounded-xl w-72  '>
        //     <div className=' mb-4 w-full h-auto overflow-hidden border rounded-lg '>
        //         <img src="https://m.media-amazon.com/images/I/61jI4jxdGmL._SX679_.jpg" alt="" />
        //     </div>
        //     <div className='text-1xl  '>
        //    <p> Urban Jungle Venture Workpack 23 Liters Water Resistant, L-Open, Premium Polyester Laptop Backpack</p>
        //     <p>⭐⭐⭐⭐⭐</p>
        //     <p>$45554</p>

        //     </div>
        // </div>
       
        <div class=" w-72 bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between p-4 cursor-pointer hover:shadow-lg transform hover:translate-y-1 transition duration-300 ease-in-out">
  <img src={product.image} alt="Product Name" class=" h-48 object-scale-down object-center" />
  <div class="flex flex-col justify-between pt-4">
    <h3 class="text-lg font-semibold text-gray-900 truncate">{product. productname}</h3>
    <div class="text-gray-700 mb-2">
      <p>{product.description}</p>
    </div>
    <div class="flex justify-between items-center pt-2">
      <ul class="text-sm text-gray-700 list-none pl-0">
        <li>{product.feature1}</li>
        <li>{product.feature2}</li>
      </ul>
      <span class="text-gray-900 font-semibold">{product.price}</span>
    </div>
  </div>
</div>


    );
}

export default ShopCard;