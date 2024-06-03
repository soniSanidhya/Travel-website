import React, { useContext, useEffect } from "react";
import PackageContext from "../../context/PackageContext";
import { NavLink, useLocation } from "react-router-dom";


function Header(props) {
  const { packages } = useContext(PackageContext);
  // const { hash } = useLocation();
  // useEffect(() => {
  //   if (hash && packages) {
  //     console.log("Scroll kru");
  //     packages.scrollIntoView({ behavior: "smooth" });
      
  //   }
  // },[hash]);

  return (
    <div className=" w-full h-16  flex justify-center items-center bg-slate-100">
      <div className="w-[92%]  flex justify-between items-center ">
        <div className=" flex justify-center items-center">
          <span className="mt-2">
            <i className="text-2xl fi fi-tr-earth-americas"></i>
          </span>
          <span className="px-1  text-3xl">Travel.</span>
        </div>
        <div className="flex items-center">
          <div className="flex cursor-pointer  px-4 gap-4 text-gray-600 ">
            <span>
              <NavLink to={""}>Home</NavLink>
            </span>
            <span>
              <NavLink onClick={()=>{
                packages.scrollIntoView({ behavior: "smooth" });
              }} to={""}>Packages</NavLink>
            </span>
            <span>
              <NavLink to={"/Shop"}>Shop</NavLink>
            </span>
            <span>
              <NavLink to={"/About"}>About</NavLink>
            </span>
            <span>
              <NavLink to={"/News"}>News</NavLink>
            </span>
            <span>
              <NavLink to={"/Bookings"}>Bookings</NavLink>
            </span>
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
