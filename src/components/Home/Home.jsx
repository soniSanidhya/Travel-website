import React, { useContext, useEffect, useRef, useState } from "react";
import "./Home.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Card from "./Card";
import PackageContext from "../../context/PackageContext";
import TourBooking from "./TourBooking";
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const [location, setLocation] = useState("");
  const [price, setprice] = useState("100");
  const [date, setdate] = useState();
  const [arr, setarr] = useState([]);
  const cardWrapper = useRef();
  const packageref = useRef();
  const container = useRef();

  const { packages, setPackage } = useContext(PackageContext);

  useEffect(() => {
    setPackage(packageref.current);
  });
  // console.log(packages);
  const details = [
    {
      image:
        "https://media.assettype.com/knocksense%2Fimport%2F22880483%2Forigin.jpg?w=1200&auto=format%2Ccompress&fit=max",
      location: "India",
      place: "Indore",
      price: "500",
      description:
        " History: Constructed in the 18th century, Rajwada Palace served as the royal residence of the Holkar rulers. The palace witnessed the rise and fall of the Holkar dynasty and bore witness to significant historical events.",
      type: ["CULTURAL", "RELAX"],
    },
    {
      image:
        "https://thumbs.dreamstime.com/z/holy-river-kshipra-near-dewas-india-holy-river-kshipra-its-old-bridge-near-dewas-madhya-pradesh-india-135123650.jpg?ct=jpeg",
      location: "India",
      place: "Dewas",
      price: "400",
      description:
        "History: Dewas has a rich historical legacy dating back to ancient times. It was once a part of the territory ruled by the Parmar dynasty and later became a prominent center under the Maratha Empire. The city has witnessed the reign of various dynasties, contributing to its diverse cultural heritage.",
      type: ["CULTURAL", "RELAX"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1658730557753-caf6bbc4a0bc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "India",
      place: "Ujjain",
      price: "600",
      description:
        "History: Ujjain, India, is an ancient city steeped in history, tracing back over 2,000 years. Once capital of the Avanti kingdom, it is renowned for the Mahakaleshwar Jyotirlinga temple. ",
      type: ["CULTURAL", "RELAX"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdyYXxlbnwwfHwwfHx8MA%3D%3D",
      location: "India",
      place: "Agra",
      price: "1000",
      description:
        "The Taj Mahal, a UNESCO World Heritage Site, is an iconic symbol of love and beauty. Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, it is a masterpiece of Mughal architecture.",
      type: ["HISTORICAL", "ROMANTIC"],
    },
    {
      image:
        "https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg",
      location: "India",
      place: "Mumbai",
      price: "300",
      description:
        "The Gateway of India is a historic monument built during the British Raj. It has become a symbol of Mumbai and a popular tourist attraction, offering stunning views of the Arabian Sea.",
      type: ["HISTORICAL", "SCENIC"],
    },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQZeynrLkUA9gLTz0l3IGiXynPHT-jlCNH9yWUZWtFKCByWna0qDYdrSccCqHbCxhCzrIFxCVwKjQgVZXjZf7CiiHTMsiraPiavUWsA9w",
      location: "India",
      place: "Amritsar",
      price: "200",
      description:
        "The Golden Temple, also known as Sri Harmandir Sahib, is the holiest shrine in Sikhism. Its breathtaking golden architecture and serene surroundings attract millions of visitors each year.",
      type: ["RELIGIOUS", "CULTURAL"],
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSxH-qk8Sgo1fS8vl21cyHMC3mrq66tfQ3QlZZxgvVfXiMLoRq0NuTOB1fvie65VTeS3QPD2rjenvflKjdk2bOYHka1N3V_7UIsBkk2Ew",
      location: "USA",
      place: "Grand Canyon",
      price: "1200",
      description:
        "The Grand Canyon is one of the most awe-inspiring natural wonders in the world, carved by the Colorado River over millions of years. Its vast expanse and colorful rock formations attract millions of visitors annually.",
      type: ["NATURAL", "SCENIC"],
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ_P1c9DqurPq3WN3xkzpMM5lgYHEDRUGNhmcu8dCN-ihfxNRrVDN4n00LkCO0-yUuMSk4473ev8cq_IUYOsduHBb7ceoqXjuQEHPvPyA",
      location: "USA",
      place: "San Francisco",
      price: "800",
      description:
        "San Francisco is a vibrant city known for its iconic landmarks such as the Golden Gate Bridge and Alcatraz Island. Its diverse culture, stunning scenery, and innovative spirit make it a must-visit destination.",
      type: ["URBAN", "CULTURAL"],
    },
    {
      image:
        "https://media.cntraveler.com/photos/6185465b62de01ff927a2456/16:9/w_2978,h_1675,c_limit/Yellowstone_Grand%20Prismatic%20Spring_GettyImages-667781269.jpg",
      location: "USA",
      place: "Yellowstone National Park",
      price: "1000",
      description:
        "Yellowstone National Park is America's first national park, renowned for its geothermal wonders like Old Faithful and breathtaking landscapes. It's a haven for outdoor enthusiasts and wildlife enthusiasts alike.",
      type: ["NATURAL", "ADVENTURE"],
    },

    {
      image:
        "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRsA7Y6sEy8Et6z0BqDE4nXdH_ZEqn0MMnORBwn4HSNu9UdOPwI2Fg00isVhmYTfKk2YmUNJyGxzVLqScSJ9Q_wDfhluJn5VMz51GY4bg",
      location: "Australia",
      place: "Sydney",
      price: "900",
      description:
        "Sydney, Australia's largest city, is famous for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge. With its stunning beaches, vibrant culture, and diverse culinary scene, Sydney offers something for everyone.",
      type: ["URBAN", "SCENIC"],
    },
    {
      image:
        "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTFB6QZIIO1f4FUwlWJRiex1P5fBElWyjk7-nnB-2gr9aNr5zmwWZA6TL0YwYjThWrnDJXvelq8QxV8Yh3ECZerdLZuaf9H5IOO-aMRgw",
      location: "Australia",
      place: "Great Barrier Reef",
      price: "1500",
      description:
        "The Great Barrier Reef is the world's largest coral reef system, stretching over 2,300 kilometers off the coast of Queensland. It's a UNESCO World Heritage Site and a paradise for snorkelers, divers, and nature lovers.",
      type: ["NATURAL", "ADVENTURE"],
    },
    {
      image:
        "https://lh5.googleusercontent.com/p/AF1QipMBwsYfFhzSaKZ-E4yOioJB834E5tDZl3FO2YP-=w675-h390-n-k-no",
      location: "Australia",
      place: "Melbourne",
      price: "800",
      description:
        "Melbourne, known as Australia's cultural capital, is celebrated for its arts scene, culinary delights, and eclectic neighborhoods. From laneway cafes to world-class galleries, Melbourne offers a dynamic urban experience.",
      type: ["URBAN", "CULTURAL"],
    },
  ];

  // useGSAP(()=>{
  //   gsap.to(".cards", {
  //     rotation : 90,
  //     duration: 4,
  //     // stagger : {
  //     //   grid : 'auto',
  //     //   axis : 'x',
  //     //   amount : 1,
  //     // }
  //     scrollTrigger : {
  //       trigger : '#cardContainer',
  //     //   start : 'top top',
  //       markers : true,
  //     //   scrub : 5

  //     },
  //     // scrollTrigger : '#cardContainer'
  //   });
  // })

  // useEffect(()=>{
  //   gsap.from('.cards' , {
  //     y : 30,
  //     opacity : 50,
  //     duration : 1,
  //     scrollTrigger : {
  //       trigger : '.cards',
  //       start : 'top bottom-=50',
  //       end : "bottom top",
  //       markers : 'true',
  //       // scrub : 5
  //     },
  //     stagger : {
  //       grid : 'auto',
  //       axis : 'x',
  //       from : 'start'
  //     }
  //   })
  // } , [arr])

  // useEffect(() => {
  //   gsap.from(".card", {
  //     y: 30,
  //     // rotate : 45,
  //     // opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: cardWrapper.current,
  //       start: "top bottom-=50",
  //       end: "bottom top",
  //       // markers: true,
  //       // scrub: 2,
  //     },
  //     stagger: {
  //       grid: "auto",
  //       axis: "x",
  //       from: "start",
  //     },
  //   });
  //   ScrollTrigger.refresh();
  // }, [arr]); // Depend on arr

  const set = () => {
    const array = details.filter((detail) => {
      return (
        location.toLowerCase() === detail.location.toLowerCase() &&
        parseInt(detail.price) <= parseInt(price)
      );
    });
    setarr(array);
  };

  useEffect(() => {
    set();
    // console.log(arr);
    // console.log(price);
    // console.log(location);
  }, [price, location]);

  return (
    <>
      <div
        id="main"
        className="w-full h-[92vh] flex justify-center px-2  items-center"
      >
        <div className=" w-10/12 max-w-[1024px] ">
          <div id="name1" className=" text-white text-xl">
            Our Packages
          </div>
          <div className=" text-white text-4xl leading-[4rem] font-bold">
            Search Your Holiday
          </div>
          <div className=" w-full bg-white my-10 rounded-xl  grid  md:grid-cols-3 max-md:h-80  max-md:grid-rows-3">
            <div className=" md:p-4 max-md:p-4 ">
              <div className="mb-2 h-8  text-gray-600">
                Search your destination:
              </div>
              <div className="bg-gray-200  min-h-9 flex justify-center px-2   items-center h-2/5 rounded-3xl">
                <input
                  className="bg-transparent w-11/12 outline-none "
                  type="text"
                  placeholder="Enter name here..."
                  onChange={(ele) => {
                    setLocation(ele.target.value);
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 512 512"
                  width="20"
                  height="20"
                >
                  <g id="_01_align_center">
                    <path d="M255.104,512.171l-14.871-12.747C219.732,482.258,40.725,327.661,40.725,214.577c0-118.398,95.981-214.379,214.379-214.379   s214.379,95.981,214.379,214.379c0,113.085-179.007,267.682-199.423,284.932L255.104,512.171z M255.104,46.553   c-92.753,0.105-167.918,75.27-168.023,168.023c0,71.042,110.132,184.53,168.023,236.473   c57.892-51.964,168.023-165.517,168.023-236.473C423.022,121.823,347.858,46.659,255.104,46.553z" />
                    <path d="M255.104,299.555c-46.932,0-84.978-38.046-84.978-84.978s38.046-84.978,84.978-84.978s84.978,38.046,84.978,84.978   S302.037,299.555,255.104,299.555z M255.104,172.087c-23.466,0-42.489,19.023-42.489,42.489s19.023,42.489,42.489,42.489   s42.489-19.023,42.489-42.489S278.571,172.087,255.104,172.087z" />
                  </g>
                </svg>
              </div>
            </div>
            <div className=" md:p-4 max-md:px-4">
              <div className="mb-2 h-8 text-gray-600">Select your date:</div>
              <div className="bg-gray-200 min-h-9  flex justify-center px-2  items-center h-2/5 rounded-3xl">
                <input
                  onChange={(e)=>{
                    setdate(e.target.value)
                    console.log(date);
                  }}
                  className=" w-11/12 bg-transparent outline-none"
                  type="date"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="md:p-4 max-md:px-4">
              <div className="flex mb-2  text-gray-600  justify-between">
                <div className=" ">Max price:</div>
                <div className="text-2xl font-semibold">${price}</div>
              </div>
              <div className="  bg-gray-200  flex justify-center min-h-9  items-center h-2/5 rounded-3xl  ">
                <input
                  className=" w-11/12 "
                  type="range"
                  max={1500}
                  min={100}
                  onChange={(e) => {
                    setprice(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        { arr.length ?  <div className=" w-auto h-32 absolute bottom-10 cursor-pointer">
          <svg   onClick={()=>{
                packageref.current.scrollIntoView({ behavior: "smooth" });
                console.log(packageref);
              }}
            xmlns="http://www.w3.org/2000/svg"
            width="200px"
            height="200px"
            viewBox="0 0 24.00 24.00"
            fill="none"
            stroke="#a7d2db"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9"
                stroke="#a7d2dbf"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </g>
          </svg>
        </div> : <></>}
      </div>

      <div
        id="Packkage"
        ref={packageref}
        className="w-full h-auto flex bg-[#f3f3f3] py-10 justify-center items-center"
      >
        <div className=" w-4/5 h-4/5">
          <h1
            id="most"
            className="text-4xl text-gray-500 font-bold my-12 font-sans"
          >
            Most visited destinations
          </h1>
          <div ref={cardWrapper} className="flex justify-evenly flex-wrap">
            <div className="card hidden"></div>
            {arr.length !== 0 ? (
              arr.map((element, index) => (
                <div className="my-4 card shadow-lg  rounded-xl" key={index}>
                  <Card details={element} date={date}  />
                </div>
              ))
            ) : (
              <div className="text-5xl w-full h-screen text-center text-gray-500">
                No results found
              </div>
            )}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
