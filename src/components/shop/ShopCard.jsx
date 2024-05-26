import React from "react";
import Rating from './Rating.jsx';


function ShopCard({ product }) {
  // const product = {
  //     productname : "Urban Jungle Venture Workpack",
  //     description : "23 Liters Water Resistant, L-Open, Premium Polyester Laptop Backpack",
  //     feature1: "50+ bought in past month",feature2: "FREE Delivery",
  //     price : "₹4,799"
  // };

  // const product = {
  //   image: "https://m.media-amazon.com/images/I/61jI4jxdGmL._SX679_.jpg",
  //   productname: "Urban Jungle Venture Workpack",
  //   description:
  //     "23 Liters Water Resistant, L-Open, Premium Polyester Laptop Backpack",
  //   popular: "50+ bought in past month",
  //   delivery: "FREE Delivery",
  //   price: "₹4,799",
  //   brand: "Urban Jungle",
  //   color: "Black",
  //   dimensions: "45 x 30 x 15 cm",
  //   weight: "900 grams",
  //   material: "Premium Polyester",
  //   capacity: "23 Liters",
  //   water_resistant: true,
  //   compartments: [
  //     {
  //       type: "Main",
  //       description: "Spacious main compartment for books, clothes, and more.",
  //     },
  //     {
  //       type: "Laptop",
  //       description: "Padded laptop compartment fits up to 15.6 inch laptops.",
  //     },
  //     {
  //       type: "Front Pocket",
  //       description: "Quick access front pocket for small essentials.",
  //     },
  //     {
  //       type: "Side Pockets",
  //       description: "Two side pockets for water bottles or umbrellas.",
  //     },
  //   ],
  //   features: [
  //     "Ergonomic shoulder straps with padding",
  //     "Breathable back panel",
  //     "Durable zippers",
  //     "Reflective strips for safety",
  //     "L-Open design for easy packing and unpacking",
  //   ],
  //   warranty: "1 year manufacturer warranty",
  //   customer_reviews: {
  //     average_rating: 4.5,
  //     total_reviews: 120,
  //   },
  // };

  return (
    /*<div className='flex flex-col bg-gray-400 rounded-xl w-72  '>
            <div className=' mb-4 w-full h-auto overflow-hidden border rounded-lg '>
                <img src="https://m.media-amazon.com/images/I/61jI4jxdGmL._SX679_.jpg" alt="" />
            </div>
            <div className='text-1xl  '>
           <p> Urban Jungle Venture Workpack 23 Liters Water Resistant, L-Open, Premium Polyester Laptop Backpack</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p>$45554</p>
        TRANSFORM- cursor-pointer hover:shadow-lg transform hover:translate-y-1 transition duration-300 ease-in-out
            </div>
        </div>
    */
    <div className=" flex w-11/12  border border-gray-200 ">
      <div className="">
        <img
          className="w-40 h-40 object-scale-down object-center  "
          src={product.image}
          alt=""
        />
      </div>
      <div className="p-2">
        <p className=" font-semibold pb-2">
          {product.productname}
          {product.description}
        </p>
        <section className="flex items-center text-[0.7em] text-blue-500">
          {<Rating rating={product.customer_reviews.average_rating} />}
          {product.customer_reviews.total_reviews}
        </section>
        <section className="text-[0.7em] text-gray-600">
          {product.popular}
        </section>
        <section className="text-2xl font-semibold">{product.price}</section>
        <section>{product.delivery}</section>
      </div>
    </div>
  );
}

export default ShopCard;
