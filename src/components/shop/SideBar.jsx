import React from "react";

function SideBar({category}) {
    // console.log('hahahha');
    // console.log(category);
  return (
    <div className="w-80  p-4  bg-slate-50">
      <h2 className="text-1xl font-bold leading-8">Shop by Category</h2>
      <div>
        <h3 className="font-semibold">Bags</h3>
        <ul className="px-4 cursor-pointer">
          <li onClick={()=>{category[0].scrollIntoView({ behavior: "smooth" });}} >Travel Backpack</li>
          <li onClick={()=>{category[1].scrollIntoView({ behavior: "smooth" });}}>Duffel Bag</li>
          <li onClick={()=>{category[2].scrollIntoView({ behavior: "smooth" });}}>Daypack</li>
          <li onClick={()=>{category[3].scrollIntoView({ behavior: "smooth" });}}>Wheeled Backpack</li>
        </ul>
      </div>
      <div className="font-semibold">Suitcases</div>
      <ul className="px-4 cursor-pointer">
        <li onClick={()=>{category[4].scrollIntoView({ behavior: "smooth" });}}>Hard-shell Suitcase</li>
        <li onClick={()=>{category[5].scrollIntoView({ behavior: "smooth" });}}>Soft-shell Suitcase</li>
        <li onClick={()=>{category[6].scrollIntoView({ behavior: "smooth" });}}>Spinner Suitcase</li>
        <li onClick={()=>{category[7].scrollIntoView({ behavior: "smooth" });}}>Cabin Luggage</li>
      </ul>

      <div className="font-semibold">Trolleys</div>
      <ul className="px-4 cursor-pointer">
        <li onClick={()=>{category[8].scrollIntoView({ behavior: "smooth" });}}>Rolling Duffel Trolley</li>
        <li onClick={()=>{category[9].scrollIntoView({ behavior: "smooth" });}}>Carry-on Trolley</li>
        <li onClick={()=>{category[10].scrollIntoView({ behavior: "smooth" });}}>Lightweight Trolley</li>
        <li onClick={()=>{category[11].scrollIntoView({ behavior: "smooth" });}}>Expandable Trolley</li>
      </ul>

      <div className="font-semibold">Shoes</div>
      <ul className="px-4 cursor-pointer">
        <li onClick={()=>{category[12].scrollIntoView({ behavior: "smooth" });}}>Travel Sneakers</li>
        <li onClick={()=>{category[13].scrollIntoView({ behavior: "smooth" });}}>Comfort Sandals</li>
        <li onClick={()=>{category[14].scrollIntoView({ behavior: "smooth" });}}>Hiking Boots</li>
        <li onClick={()=>{category[15].scrollIntoView({ behavior: "smooth" });}}>Water Shoes</li>
      </ul>

      <div className="font-semibold">Accessories</div>
      <ul className="px-4 cursor-pointer">
        <li onClick={()=>{category[16].scrollIntoView({ behavior: "smooth" });}}>Travel Wallet</li>
        <li onClick={()=>{category[17].scrollIntoView({ behavior: "smooth" });}}>Packing Cubes</li>
        <li onClick={()=>{category[18].scrollIntoView({ behavior: "smooth" });}}>Neck Pillow</li>
        <li onClick={()=>{category[19].scrollIntoView({ behavior: "smooth" });}}>Travel Adapter</li>
      </ul>

      <div className="font-semibold">Clothing</div>
      <ul className="px-4 cursor-pointer">
        <li onClick={()=>{category[20].scrollIntoView({ behavior: "smooth" });}}>Travel Pants</li>
        <li onClick={()=>{category[21].scrollIntoView({ behavior: "smooth" });}}>Quick-dry Shirts</li>
        <li onClick={()=>{category[22].scrollIntoView({ behavior: "smooth" });}}>Lightweight Jackets</li>
        <li onClick={()=>{category[23].scrollIntoView({ behavior: "smooth" });}}>UV Protection Hats</li>
      </ul>

      <div className="font-semibold">Tech Gear</div>
      <ul className="px-4 cursor-pointer">
        <li>Travel Laptop Backpack</li>
        <li>Portable Charger</li>
        <li>Noise-canceling Headphones</li>
        <li>Travel Camera</li>
      </ul>
    </div>
  );
}

export default SideBar;
