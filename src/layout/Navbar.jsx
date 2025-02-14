import React, { useState } from "react";

import { Sale } from "../Content/Navbarpages/Sale";
import Woman from "../Content/Navbarpages/Woman";
import Man from "../Content/Navbarpages/Man";

import { Trending } from "../Content/Navbarpages/Trending";

import Collection from "../Content/Navbarpages/Collection";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import Kids from "../Content/Navbarpages/Kids";

const Navbardata = [
  { id: 0, tagname: "SALE", Pagenew: <Sale />,path:"/product/sale" },
  { id: 1, tagname: "NEW ARRIVAL" ,path:"/product/newarrival"},
  { id: 2, tagname: "MEN", Pagenew: <Man />,path:"/product/man" },
  { id: 3, tagname: "WOMAN", Pagenew: <Woman />,path:"/product/woman" },
  { id: 4, tagname: "KIDS", Pagenew: <Kids />,path:"/product/kids" },
  { id: 5, tagname: "COLLECTION", Pagenew: <Collection /> ,path:"/product/newarrival"},
  { id: 6, tagname: "TRENDING", Pagenew: <Trending /> ,path:"/product/trending"},

];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const navigate=useNavigate();
  const handlenavigation=(path)=>{
navigate(path);
  }

  return (
  
    <div className="md:block hidden">
    <div 
      className="w-full bg-white border-b relative "
      onMouseLeave={() => setActiveItem(null)} // 🔹 Jab mouse bahar jaye to close kar do
    >
      {/* Navbar Section */}
      <div className="h-auto flex p-6 items-center justify-center">
        <div className="flex items-start justify-start space-x-8">
          {Navbardata.map((item) => (
      

            
            <div key={item.id} className="relative">
              <span
                onMouseEnter={() => setActiveItem(activeItem === item.id ? null : item.id)}
                onClick={()=> ( handlenavigation(item.path))}
                className="hover:text-[#C16452] text-[14px] text-[#787A7C] cursor-pointer"
              >
                {item.tagname}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Full Width Dropdown Content */}
      {activeItem !== null && activeItem !== 7 && activeItem !== 1 && (
  <div className="absolute left-0 top-full w-full bg-white shadow-lg border-t border-gray-200 py-6">
    <div className="container mx-auto px-6">
      {Navbardata.find((item) => item.id === activeItem)?.Pagenew}
    </div>
  </div>
)}
    </div>
    </div>





  );
};

export default Navbar;
