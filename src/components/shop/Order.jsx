import React, { useState } from "react";
import Buy from "./Buy";
import DetailsPage from "./DetailsPage";
import { data } from "autoprefixer";
import Congratulations from "./Congratulations";

function Order({handleShow , productData}) {
    const [formData , setFormData] = useState();

    const [show ,setShow] = useState(true);
    const [showBuy ,setShowBuy] = useState(false);
    const [placed ,setplaced] = useState(false);
    const  handleBuy = (data) =>{
        setShowBuy(data);
    }
    const handleForm  = data =>{
      const  {name , address , zip } = data   
      setFormData({name , address , zip});
      }
      const handlePlaced = data => {
        setplaced(data);
      }
      if(formData){console.log("data from details in order",formData);}
      if(productData){console.log("product data" , productData);}
  return (show && 
    <div className="w-full flex justify-center items-center h-screen fixed top-0 backdrop-brightness-50 backdrop-blur-sm">
      {showBuy ? placed ? <Congratulations handleBack={handleShow} /> : <Buy handleBuy={handleBuy} userData={formData} products={productData} handlePlaced={handlePlaced}  /> : 
       <DetailsPage handleBack={handleShow} handleBuy={handleBuy} handleForm={handleForm} /> }
      {
          
      }
      
    </div>
  );
}

export default Order;
