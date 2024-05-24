import React, { useRef } from "react";
import SideBar from "./SideBar";
import "./font.css";
import ShopCard from "./ShopCard";


function Shop(props) {
    // const [category , setCategory] = useState();
    const categoryarr = useRef([]);
  const products = {
    travelBackpack: [
      {
        image: "https://m.media-amazon.com/images/I/61jI4jxdGmL._SX679_.jpg",
        productname: "Urban Jungle Venture Workpack",
        description:
          "23 Liters Water Resistant, L-Open, Premium Polyester Laptop Backpack",
        feature1: "50+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹4,799",
      },
      {
        image: "https://assets.ajio.com/medias/sys_master/root/20240418/Mk0M/6621304f05ac7d77bb16ba38/-473Wx593H-410477012-steel-MODEL.jpg",
        productname: "Nomadic Travel Backpack",
        description:
          "30 Liters Expandable, Anti-Theft, Durable Nylon Travel Backpack",
        feature1: "30+ bought in past month",
        feature2: "FREE Returns",
        price: "₹5,999",
      },
      {
        image: "https://m.media-amazon.com/images/I/61mbnbBi2CL._AC_UY1100_.jpg",
        productname: "Explorer's Adventure Pack",
        description: "35 Liters Multi-Compartment, Waterproof Travel Backpack",
        feature1: "20+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹3,999",
      },
    ],
    duffelBag: [
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMY_NFf2Bx7NXxEOX80YJIKkGTnu7fl2jchuk3T2Rhxg&s",
        productname: "Traveler's Choice Duffel",
        description: "50 Liters Lightweight, Foldable Duffel Bag",
        feature1: "10+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹2,499",
      },
      {
        image: "https://bagguruonline.com/wp-content/uploads/2023/11/rebel-weekend-bag-905.webp",
        productname: "Adventure Seeker Duffel",
        description: "45 Liters Waterproof, Tear-Resistant Duffel Bag",
        feature1: "25+ bought in past month",
        feature2: "FREE Returns",
        price: "₹3,299",
      },
      {
        image: "https://m.media-amazon.com/images/I/31N070XUhYL._AC_UY1100_.jpg",
        productname: "Urban Gear Duffel",
        description: "55 Liters Durable, Multi-Pocket Duffel Bag",
        feature1: "15+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹3,799",
      },
    ],
    daypack: [
      {
        image: "https://m.media-amazon.com/images/I/61DwZ6ZyPpL._AC_UY1100_.jpg",
        productname: "Casual Explorer Daypack",
        description: "20 Liters Compact, Lightweight Daypack",
        feature1: "100+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹1,299",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoiZfo_C1r8aPdDZl-9_uJQmY63TPm9O19v6Z5eRa0A&s",
        productname: "Urban Nomad Daypack",
        description: "18 Liters Slim, Stylish Daypack",
        feature1: "80+ bought in past month",
        feature2: "FREE Returns",
        price: "₹1,499",
      },
      {
        image: "https://images.meesho.com/images/products/360603159/qmk1o_512.webp",
        productname: "Traveler's Essential Daypack",
        description: "22 Liters Water-Resistant, Durable Daypack",
        feature1: "120+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹1,699",
      },
    ],
    wheeledBackpack: [
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYV1AzsHk23WQFGD1qq69DVU3hj7b2gDNf_lhh2VsVQ&s",
        productname: "Rolling Voyager Backpack",
        description: "40 Liters Convertible, Wheeled Backpack",
        feature1: "30+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹5,999",
      },
      {
        image: "https://www.sunrisetrading.in/wp-content/uploads/High-Sierra-Laptop-Backpack-Trolley-Free-Wheel-4-600x600.jpg",
        productname: "Urban Glide Wheeled Backpack",
        description: "35 Liters Lightweight, Rolling Backpack",
        feature1: "20+ bought in past month",
        feature2: "FREE Returns",
        price: "₹6,499",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lWQyy8gJ98Ugr83QaRrm-KLXRztjD6Xh_bWmDtyMLw&s",
        productname: "Traveler's Rolling Pack",
        description: "38 Liters Durable, Multi-Pocket Wheeled Backpack",
        feature1: "25+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹5,299",
      },
    ],
    hardShellSuitcase: [
      {
        image: "https://media.cntraveler.com/photos/650dc66ea40ea0d90f62c3bb/master/w_1280%2Cc_limit/The-Best-Hard-Shell-Luggage-to-Buy-Right-Now_Arlo-Skye.jpg",
        productname: "Sturdy Traveler Hard-shell",
        description:
          "65 Liters Scratch-Resistant, TSA Lock Hard-shell Suitcase",
        feature1: "50+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹7,999",
      },
      {
        image: "https://m.media-amazon.com/images/I/711A1QMnTbS._SX466_.jpg",
        productname: "Elite Guard Hard-shell",
        description:
          "70 Liters Lightweight, Impact-Resistant Hard-shell Suitcase",
        feature1: "40+ bought in past month",
        feature2: "FREE Returns",
        price: "₹8,499",
      },
      {
        image: "https://images.jdmagicbox.com/quickquotes/images_main/vip-bags-15-01-2021-031-220020574-80eaq.jpg",
        productname: "Premium Voyager Hard-shell",
        description: "60 Liters Durable, Multi-Compartment Hard-shell Suitcase",
        feature1: "30+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹9,299",
      },
    ],
    softShellSuitcase: [
      {
        image: "https://m.media-amazon.com/images/I/31EmacH-1GL._AC_UY1100_DpWeblab_.jpg",
        productname: "Comfort Traveler Soft-shell",
        description:
          "70 Liters Expandable, Water-Resistant Soft-shell Suitcase",
        feature1: "60+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹6,999",
      },
      {
        image: "https://m.media-amazon.com/images/I/31x6+K0giTL.jpg",
        productname: "Flexible Guard Soft-shell",
        description:
          "75 Liters Lightweight, Tear-Resistant Soft-shell Suitcase",
        feature1: "50+ bought in past month",
        feature2: "FREE Returns",
        price: "₹7,499",
      },
      {
        image: "https://m.media-amazon.com/images/I/81pFfgutsaL._AC_UY1100_.jpg",
        productname: "Traveler's Choice Soft-shell",
        description: "80 Liters Durable, Multi-Compartment Soft-shell Suitcase",
        feature1: "40+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹7,299",
      },
    ],
    spinnerSuitcase: [
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3DomFHGEjkep83H_9wXJXZKoUH--cKsbW3DNM3rf7A&s",
        productname: "Easy Glide Spinner",
        description: "60 Liters Smooth-Rolling, 360-Degree Spinner Suitcase",
        feature1: "70+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹8,499",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_jMI2vWji0tt8ruCjD8tN7XNr10zAMtUTpA7qbGCGg&s",
        productname: "Traveler's Ease Spinner",
        description: "65 Liters Lightweight, Durable Spinner Suitcase",
        feature1: "55+ bought in past month",
        feature2: "FREE Returns",
        price: "₹8,999",
      },
      {
        image: "https://m.media-amazon.com/images/I/712+SuwPXbL._AC_UY1100_.jpg",
        productname: "Premium Glide Spinner",
        description:
          "75 Liters Impact-Resistant, Multi-Compartment Spinner Suitcase",
        feature1: "45+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹9,799",
      },
    ],
    cabinLuggage: [
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXSQWONKWUwTYkmuaS7fkqErixi2WrGE2Cd5abMUM1eA&s",
        productname: "Traveler's Cabin Companion",
        description: "45 Liters Compact, Lightweight Cabin Luggage",
        feature1: "90+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹4,999",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwqxB6JuCPKYpwML7yjQWupfinkOY7Ir50Dp6Al1oIuA&s",
        productname: "Jetsetter's Cabin Luggage",
        description: "50 Liters Water-Resistant, Durable Cabin Luggage",
        feature1: "75+ bought in past month",
        feature2: "FREE Returns",
        price: "₹5,499",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe78H5VQYOU_J-UWlPXYEKZH87O9MNGaxmksK97Ne95w&s",
        productname: "Elite Cabin Companion",
        description: "55 Liters Lightweight, Multi-Compartment Cabin Luggage",
        feature1: "60+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹5,999",
      },
    ],
    rollingDuffelTrolley: [
      {
        image: "https://m.media-amazon.com/images/I/51TZYD8UUvL._AC_UY1100_.jpg",
        productname: "Explorer's Rolling Duffel",
        description: "65 Liters Convertible, Wheeled Duffel Trolley",
        feature1: "20+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹6,499",
      },
      {
        image: "https://m.media-amazon.com/images/I/61tesZKfSgL._AC_UY1000_.jpg",
        productname: "Nomadic Rolling Duffel",
        description: "60 Liters Lightweight, Rolling Duffel Trolley",
        feature1: "18+ bought in past month",
        feature2: "FREE Returns",
        price: "₹6,999",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZt-Xt1dHAte72-Q-bQMm1l0hyoHlt_HgwnHaFMN431w&s",
        productname: "Traveler's Rolling Duffel",
        description: "70 Liters Durable, Multi-Pocket Wheeled Duffel Trolley",
        feature1: "22+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹7,499",
      },
    ],
    carryOnTrolley: [
      {
        image: "https://image28",
        productname: "Jetsetter's Carry-On",
        description: "45 Liters Compact, Lightweight Carry-On Trolley",
        feature1: "80+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹4,299",
      },
      {
        image: "https://image29",
        productname: "Traveler's Choice Carry-On",
        description: "50 Liters Water-Resistant, Durable Carry-On Trolley",
        feature1: "65+ bought in past month",
        feature2: "FREE Returns",
        price: "₹4,799",
      },
      {
        image: "https://image30",
        productname: "Elite Carry-On Trolley",
        description:
          "55 Liters Lightweight, Multi-Compartment Carry-On Trolley",
        feature1: "70+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹5,299",
      },
    ],
    lightweightTrolley: [
      {
        image: "https://image31",
        productname: "Traveler's Lightweight Trolley",
        description: "65 Liters Ultra-Light, Durable Trolley",
        feature1: "40+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹5,499",
      },
      {
        image: "https://image32",
        productname: "Nomadic Lightweight Trolley",
        description: "70 Liters Tear-Resistant, Lightweight Trolley",
        feature1: "35+ bought in past month",
        feature2: "FREE Returns",
        price: "₹5,999",
      },
      {
        image: "https://image33",
        productname: "Elite Lightweight Trolley",
        description:
          "75 Liters Water-Resistant, Multi-Compartment Lightweight Trolley",
        feature1: "50+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹6,499",
      },
    ],
    expandableTrolley: [
      {
        image: "https://image34",
        productname: "Traveler's Expandable Trolley",
        description: "70 Liters Expandable, Durable Trolley",
        feature1: "60+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹6,999",
      },
      {
        image: "https://image35",
        productname: "Nomadic Expandable Trolley",
        description: "75 Liters Lightweight, Expandable Trolley",
        feature1: "55+ bought in past month",
        feature2: "FREE Returns",
        price: "₹7,499",
      },
      {
        image: "https://image36",
        productname: "Elite Expandable Trolley",
        description:
          "80 Liters Water-Resistant, Multi-Compartment Expandable Trolley",
        feature1: "45+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹7,999",
      },
    ],
    travelSneakers: [
      {
        image: "https://image37",
        productname: "Nomadic Travel Sneakers",
        description: "Lightweight, Breathable, Comfortable Sneakers",
        feature1: "100+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹3,499",
      },
      {
        image: "https://image38",
        productname: "Urban Adventure Sneakers",
        description: "Durable, Anti-Slip, Stylish Sneakers",
        feature1: "120+ bought in past month",
        feature2: "FREE Returns",
        price: "₹3,999",
      },
      {
        image: "https://image39",
        productname: "Explorer's Comfort Sneakers",
        description: "All-Terrain, Water-Resistant, Multi-Use Sneakers",
        feature1: "110+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹4,499",
      },
    ],
    comfortSandals: [
      {
        image: "https://image40",
        productname: "Traveler's Comfort Sandals",
        description: "Lightweight, Arch-Support, Breathable Sandals",
        feature1: "90+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹1,999",
      },
      {
        image: "https://image41",
        productname: "Nomadic Comfort Sandals",
        description: "Durable, Water-Resistant, Anti-Slip Sandals",
        feature1: "85+ bought in past month",
        feature2: "FREE Returns",
        price: "₹2,299",
      },
      {
        image: "https://image42",
        productname: "Explorer's Comfort Sandals",
        description: "Multi-Terrain, Adjustable Strap, Comfortable Sandals",
        feature1: "95+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹2,499",
      },
    ],
    hikingBoots: [
      {
        image: "https://image43",
        productname: "Explorer's Hiking Boots",
        description: "Waterproof, Durable, High-Traction Hiking Boots",
        feature1: "60+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹5,999",
      },
      {
        image: "https://image44",
        productname: "Nomadic Hiking Boots",
        description: "Lightweight, Breathable, Anti-Slip Hiking Boots",
        feature1: "55+ bought in past month",
        feature2: "FREE Returns",
        price: "₹6,499",
      },
      {
        image: "https://image45",
        productname: "Traveler's Hiking Boots",
        description: "Multi-Terrain, Waterproof, Comfortable Hiking Boots",
        feature1: "50+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹6,999",
      },
    ],
    waterShoes: [
      {
        image: "https://image46",
        productname: "Nomadic Water Shoes",
        description: "Quick-Dry, Anti-Slip, Lightweight Water Shoes",
        feature1: "80+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹1,799",
      },
      {
        image: "https://image47",
        productname: "Explorer's Water Shoes",
        description: "Durable, Breathable, Flexible Water Shoes",
        feature1: "75+ bought in past month",
        feature2: "FREE Returns",
        price: "₹2,199",
      },
      {
        image: "https://image48",
        productname: "Traveler's Water Shoes",
        description: "All-Terrain, Quick-Dry, Comfortable Water Shoes",
        feature1: "70+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹2,499",
      },
    ],
    travelWallet: [
      {
        image: "https://image49",
        productname: "Traveler's Secure Wallet",
        description: "RFID-Blocking, Multi-Compartment Travel Wallet",
        feature1: "150+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹1,199",
      },
      {
        image: "https://image50",
        productname: "Nomadic Travel Wallet",
        description: "Slim, Water-Resistant, Durable Travel Wallet",
        feature1: "130+ bought in past month",
        feature2: "FREE Returns",
        price: "₹1,399",
      },
      {
        image: "https://image51",
        productname: "Explorer's Travel Wallet",
        description: "Compact, Secure, Multi-Use Travel Wallet",
        feature1: "140+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹1,599",
      },
    ],
    packingCubes: [
      {
        image: "https://image52",
        productname: "Traveler's Packing Cubes",
        description: "Set of 6, Lightweight, Durable Packing Cubes",
        feature1: "200+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹1,299",
      },
      {
        image: "https://image53",
        productname: "Nomadic Packing Cubes",
        description: "Set of 5, Water-Resistant, Multi-Size Packing Cubes",
        feature1: "180+ bought in past month",
        feature2: "FREE Returns",
        price: "₹1,499",
      },
      {
        image: "https://image54",
        productname: "Explorer's Packing Cubes",
        description: "Set of 7, Durable, Breathable Packing Cubes",
        feature1: "190+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹1,699",
      },
    ],
    neckPillow: [
      {
        image: "https://image55",
        productname: "Traveler's Comfort Neck Pillow",
        description: "Memory Foam, Ergonomic, Lightweight Neck Pillow",
        feature1: "300+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹899",
      },
      {
        image: "https://image56",
        productname: "Nomadic Neck Pillow",
        description: "Adjustable, Breathable, Travel-Friendly Neck Pillow",
        feature1: "280+ bought in past month",
        feature2: "FREE Returns",
        price: "₹999",
      },
      {
        image: "https://image57",
        productname: "Explorer's Neck Pillow",
        description: "Compact, Washable Cover, Comfortable Neck Pillow",
        feature1: "290+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹1,099",
      },
    ],
    travelAdapter: [
      {
        image: "https://image58",
        productname: "Universal Travel Adapter",
        description: "Multi-Function, Surge Protector, Compact Travel Adapter",
        feature1: "400+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹1,499",
      },
      {
        image: "https://image59",
        productname: "Nomadic Travel Adapter",
        description: "Dual USB, Lightweight, Durable Travel Adapter",
        feature1: "380+ bought in past month",
        feature2: "FREE Returns",
        price: "₹1,299",
      },
      {
        image: "https://image60",
        productname: "Explorer's Travel Adapter",
        description: "All-In-One, Surge Protector, Travel-Friendly Adapter",
        feature1: "390+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹1,399",
      },
    ],
    travelPants: [
      {
        image: "https://image61",
        productname: "Traveler's Comfort Pants",
        description: "Lightweight, Quick-Dry, Stretchable Travel Pants",
        feature1: "150+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹2,499",
      },
      {
        image: "https://image62",
        productname: "Nomadic Travel Pants",
        description: "Water-Resistant, Durable, Multi-Pocket Travel Pants",
        feature1: "140+ bought in past month",
        feature2: "FREE Returns",
        price: "₹2,699",
      },
      {
        image: "https://image63",
        productname: "Explorer's Travel Pants",
        description: "Convertible, Breathable, Comfortable Travel Pants",
        feature1: "130+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹2,899",
      },
    ],
    quickDryShirts: [
      {
        image: "https://image64",
        productname: "Traveler's Quick-Dry Shirt",
        description: "Lightweight, Breathable, UV Protection Quick-Dry Shirt",
        feature1: "200+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹1,499",
      },
      {
        image: "https://image65",
        productname: "Nomadic Quick-Dry Shirt",
        description: "Water-Resistant, Durable, Multi-Use Quick-Dry Shirt",
        feature1: "180+ bought in past month",
        feature2: "FREE Returns",
        price: "₹1,699",
      },
      {
        image: "https://image66",
        productname: "Explorer's Quick-Dry Shirt",
        description: "All-Terrain, Breathable, Comfortable Quick-Dry Shirt",
        feature1: "190+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹1,899",
      },
    ],
    lightweightJackets: [
      {
        image: "https://image67",
        productname: "Traveler's Lightweight Jacket",
        description: "Water-Resistant, Windproof, Packable Lightweight Jacket",
        feature1: "100+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹3,499",
      },
      {
        image: "https://image68",
        productname: "Nomadic Lightweight Jacket",
        description: "Breathable, Durable, Multi-Use Lightweight Jacket",
        feature1: "90+ bought in past month",
        feature2: "FREE Returns",
        price: "₹3,699",
      },
      {
        image: "https://image69",
        productname: "Explorer's Lightweight Jacket",
        description: "All-Terrain, Quick-Dry, Comfortable Lightweight Jacket",
        feature1: "110+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹3,899",
      },
    ],
    uvProtectionHats: [
      {
        image: "https://image70",
        productname: "Traveler's UV Protection Hat",
        description: "Wide-Brim, Lightweight, Breathable UV Protection Hat",
        feature1: "300+ bought in past month",
        feature2: "FREE Delivery",
        price: "₹1,299",
      },
      {
        image: "https://image71",
        productname: "Nomadic UV Protection Hat",
        description: "Adjustable, Water-Resistant, Durable UV Protection Hat",
        feature1: "280+ bought in past month",
        feature2: "FREE Returns",
        price: "₹1,499",
      },
      {
        image: "https://image72",
        productname: "Explorer's UV Protection Hat",
        description: "All-Terrain, Quick-Dry, Comfortable UV Protection Hat",
        feature1: "290+ bought in past month",
        feature2: "1 Year Warranty",
        price: "₹1,699",
      },
    ],
  };

  return (
    <div className="flex w-full ">
      <SideBar category = {categoryarr.current} />
      <div className="w-full  bg-zinc-100 p-4">
        <h1 className="text-4xl leading-10 font-bold text-center playfair-display ">
          Gear Up for Your Adventure{" "}
        </h1>
        <div>
          <div>
            {Object.keys(products).map((key,index) => {
              console.log(categoryarr.current);
              
              return (
                <div ref={(element) => categoryarr.current[index] = element} key={key}>
                  <div className="flex my-16 items-center">
                    <h2 className="text-2xl ">{key}</h2>
                    <hr className="w-full h-[3px] rounded-full border bg-gray-500 mt-2" />
                  </div>
                  <div className="flex flex-wrap justify-evenly">
                    {products[key].map((product) => {
                      return (
                        <div key={product.name}>
                          <ShopCard product={product} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
