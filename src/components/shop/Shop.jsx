import React, { useEffect, useRef, useState } from "react";
import SideBar from "./SideBar";
import "./font.css";
import ShopCard from "./ShopCard.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { json } from "body-parser";



function Shop(props) {
    // const [category , setCategory] = useState();
    const categoryarr = useRef([]);
    const navigate = useNavigate();
    const [products , setProducts] = useState([]);
 
 

  useEffect(()=>{
    (async()=>{
      await axios.get("/api/products")
      .then((response)=>{setProducts(response.data)})
      .catch((err)=>{console.log(err);})
    })();
  },[]);

  const handleClick = (product , key)=>{
    // console.log("hello clicked the card" , product);
    const params = new URLSearchParams();
    params.append('category' , key);
    params.append('productname' , product.productname);
    navigate(`/Travel-website/Product?${params.toString()}`);
  }

  if(products){return (
    <div className="flex w-full ">
      <SideBar category = {categoryarr.current} />
      <div className="w-full  bg-zinc-50 p-4">
        <h1 className="text-4xl leading-10 font-bold text-center playfair-display ">
          Gear Up for Your Adventure{" "}
        </h1>
        <div>
          <div>
            {Object.keys(products).map((key,index) => {
              // console.log(categoryarr.current);
              
              return (
                <div ref={(element) => categoryarr.current[index] = element} key={key}>
                  <div className="flex my-16 items-center">
                    <h2 className="text-2xl ">{key}</h2>
                    <hr className="w-full h-[3px] rounded-full border bg-gray-500 mt-2" />
                  </div>
                  <div className="flex flex-col gap-2">
                    {products[key].map((product) => {
                      return (
                        <div  onClick={()=>{handleClick(product , key)}} className="border shadow-lg w-11/12 hover:scale-105 hover:shadow-2xl transition-transform rounded-xl" key={Math.floor(Math.random()*1000000)}>
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
}}

export default Shop;
