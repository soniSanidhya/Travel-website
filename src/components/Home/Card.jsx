import React from 'react';
import travel1 from  './image/travel1.jpg';
const Card = ({details}) => {
    return (
        <div className=" w-96 h-[500px] shadow-md rounded-xl bg-white ">
            <div className=" rounded-t-xl h-40 overflow-hidden">
                <img className='w-full h-auto' src={details.image}  />
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-600">{details.place}</h2>
                <div className="text-gray-500">
                <i classame="text-sm mx-1  fi fi-rr-marker"></i>
                {details.location}
                </div>
            <hr className=' my-4' />
                <div className="text-gray-500 flex justify-between">
                    <div className="">
                    <p>{details.type[0]}</p>
                    <p className='text-sm'>{details.type[1]}</p>
                    </div>
                    <div className="text-2xl font-bold px-2 text-black">
                    ${details.price}
                    </div>
                </div>
                <hr className='my-4' />
                <div className=" text-sm max-h-[80px] overflow-hidden text-gray-500">
                {details.description}
                </div>
                <div className="my-2">
                    <button className=" px-4 py-1 bg-gradient-to-r from-sky-300 to-blue-500 text-white rounded-full">
                        DETAILS <i className="fi fi-tr-ballot"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;