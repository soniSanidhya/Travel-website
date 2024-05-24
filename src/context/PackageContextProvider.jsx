import React, { Children, useState } from "react";
import PackageContext from "./PackageContext";

const PackageContextProvider = ({children})=>{
    const [packages , setPackage] = useState(null);
    return(
        <PackageContext.Provider value={{packages,setPackage}}>
            {children}
        </PackageContext.Provider>
    );
}

export default PackageContextProvider;