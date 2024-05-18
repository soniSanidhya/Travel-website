import React from "react";


function Header(props) {
  return (
    <div className=" w-full h-16  flex justify-center items-center bg-slate-100">
      <div className="w-[92%]  flex justify-between items-center ">
        <div className=" flex justify-center items-center">
          <span className="mt-2"><i className="text-2xl fi fi-tr-earth-americas"></i></span>
          <span className="px-1  text-3xl">Travel.</span>
        </div>
        <div  className="flex items-center">
          <div className="grid grid-cols-7 gap-4 text-gray-600 ">
            <span>Home</span>
            <span>Packages</span>
            <span>Shop</span>
            <span>About</span>
            <span>Pages</span>
            <span>News</span>
            <span>Contact</span>
          </div>
          <div>
            <button className=" text-white bg-gradient-to-r from-sky-400 to-blue-700  px-5 py-2 rounded-3xl">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
