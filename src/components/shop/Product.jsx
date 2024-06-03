import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import "./font.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Buy from "./Buy.jsx";
import DetailsPage from "./DetailsPage.jsx";
import Order from "./Order.jsx";
import Congratulations from "./Congratulations.jsx";

function Product() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const productname = params.get("productname");
  const category = params.get("category");
  const [products , setProducts] = useState();
  const [product , setProdute] = useState();
  const [show , setShow] = useState(false);
  const [quantity , setQuantity] = useState(1);
  const handleShow = (data) =>{
    setShow(data);
  }

  useEffect(() => {
  axios.get("http://localhost:3000/products")
        .then(res => setProducts(res.data) )
        .catch(err => console.log(err));
  },[]);
  useEffect(()=>{
    if(products){
      let pro = products[category];
      console.log(pro);
      pro = pro.filter(pr => pr.productname === productname);
      console.log(pro);
      setProdute(pro[0]);
      console.log(product);
    }
  })
  if(product){
  return (
    <div className=" w-full ">
      <div className=" flex w-[80%] mx-auto my-16">
        <div className="w-[50%] h-auto">
          <div  className="w-full h-[24em] p-4 hover:scale-150 transition-transform hover:shadow-xl rounded-2xl bg-white   hover:border">
            <img 
            className="w-full h-full object-scale-down "
            src={ product.image}
            alt=""
          />
          </div>
          <div className="p-4 border border-gray-600 rounded-lg h-52">
            <section className="text-2xl font-semibold">
              {product.price}
            </section>
            <section className="text-[0.7em] text-blue-500">
              {product.delivery}
            </section>
            <section className="text-green-600 font-semibold">In stock</section>
            <section className="">
              <label htmlFor="qua">Quantity </label>
              <select
                onChange={(e)=>{setQuantity(e.target.value)}}
                className=" border border-gray-600 rounded-md"
                name=""
                id="qua"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <hr className="my-4 border-gray-400" />

              <div className=" w-full flex justify-center ">
                <button
                  onClick={()=>{setShow(true)}}
                className="py-2 text-sm rounded-full w-[70%] bg-blue-400">
                  Buy Now
                </button>
              </div>
            </section>
          </div>
        </div>

        <div className=" py-4 px-8 ">
          <p className=" text-xl leading-6  font-semibold ">
            {product.productname}
            {product.description}
          </p>
          <section className="flex items-center text-[0.7em] text-gray-500 gap-1">
            {product.customer_reviews.average_rating}
            {<Rating rating={product.customer_reviews.average_rating} />}
          </section>
          <section className="text-[0.7em] text-gray-800">
            {product.popular}
          </section>
          <hr className="my-4 border-gray-400" />
          <section className="text-2xl font-semibold">{product.price}</section>
          <section className="text-[0.77em] font-semibold text-gray-600 ">
            {product.warranty}
          </section>
          <hr className="my-4 border-gray-400" />
          <section className="flex justify-evenly">
            <div className="flex flex-col items-center">
              <img
                className="w-6"
                src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                alt=""
              />
              <p className="text-center text-[0.8em] leading-4">
                30 days returnable
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-6"
                src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png"
                alt=""
              />
              <p className="text-center text-[0.8em] leading-4">
                Pay on Delivey
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-6"
                src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"
                alt=""
              />
              <p className="text-center text-[0.8em] leading-4">
                Travel. Delivered
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-6"
                src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                alt=""
              />
              <p className="text-center text-[0.8em] leading-4">
                Free Delivery
              </p>
            </div>
          </section>
          <hr className="my-4 border-gray-400" />
          <section>
            <span className="font-semibold text-[0.8em]">Color: </span>
            <span className="text-[0.6em]">Black</span>
          </section>
          <section>
            <p className="font-semibold">Product Details</p>
            <ol className=" list-disc list-inside">
              <li>
                <span className="font-semibold">Brand: </span>
                <span className="">{product.brand}</span>
              </li>
              <li>
                <span className="font-semibold">Capacity: </span>
                <span className="">{product.capacity}</span>
              </li>
              <li>
                <span className="font-semibold">Dimensions: </span>
                <span className="">{product.dimensions}</span>
              </li>
              <li>
                <span className="font-semibold">Weight: </span>
                <span className="">{product.weight}</span>
              </li>
              <li>
                <span className="font-semibold">Water Resistant: </span>
                <span className="">
                  {product.water_resistant ? "yes" : "no"}
                </span>
              </li>
              <li>
                <span className="font-semibold">Material: </span>
                <span className="">{product.material}</span>
              </li>
            </ol>
          </section>
          <hr className="my-4 border-gray-400" />
          <section className="bg-slate-100 rounded-lg border border-slate-200 p-2 scroll-bar">
            <p className="font-bold">About Product</p>
            <div className="max-h-36 overflow-auto">
              <p className="font-semibold">Features</p>
              <ul>
                {product.features.map((feature, index) => {
                  return <li className="pl-4">{feature}</li>;
                })}
              </ul>
              <p className="font-semibold">Compartments</p>
              <div>
                {product.compartments.map((comp, i) => {
                  // console.log("hmmm", comp);
                  return (
                    <div className="ml-4">
                      <p>
                        <span className="font-semibold">{comp.type}: </span>{" "}
                        {comp.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
      {show && <Order handleShow={handleShow} productData={{productname : product.productname ,price : product.price ,quantity :  quantity , image : product.image}} />}
                
    </div>
  );}
}

export default Product;
