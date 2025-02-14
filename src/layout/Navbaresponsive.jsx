
import { Sale } from "../Content/Navbarpages/Sale";
import Woman from "../Content/Navbarpages/Woman";
import Man from "../Content/Navbarpages/Man";
import { Trending } from "../Content/Navbarpages/Trending";

import Collection from "../Content/Navbarpages/Collection";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { Drawer } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import Kids from "../Content/Navbarpages/Kids";




const Navbarresp = ({ isMobile }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [activeDrawerId, setActiveDrawerId] = useState(null); // 🟢 Track which drawer is open
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const Navbardata = [
    { id: 0, tagname: "SALE", Pagenew: <Sale />, path: "/sale" },
    { id: 1, tagname: "NEW ARRIVAL", path: "/newarrival" },
    { id: 2, tagname: "MEN", Pagenew: <Man />, path: "/man" },
    { id: 3, tagname: "WOMAN", Pagenew: <Woman />, path: "/woman" },
    { id: 4, tagname: "KIDS", Pagenew: <Kids />, path: "/kids" },
    { id: 5, tagname: "COLLECTION", Pagenew: <Collection />, path: "/Newaarrival" },
    { id: 6, tagname: "TRENDING", Pagenew: <Trending />, path: "/trending" },
  
   
  ];

  return (
    <div className={`w-full bg-white ${isMobile ? "" : "border-b relative"}`} onMouseLeave={() => setActiveItem(null)}>
      <div className={`h-auto flex ${isMobile ? "flex-col items-start p-4" : "p-6 items-center justify-center"}`}>
        <div className="flex flex-col items-start justify-start space-y-4 p-4 w-full">
          {Navbardata.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-2 w-full">
              {/* 🟢 Click to Navigate */}
              <div
                onClick={() => handleNavigation(item.path)}
                className="hover:text-[#C16452] text-[17px] text-[#787A7C] font-[700] cursor-pointer"
              >
                {item.tagname}
              </div>

              {/* 🟢 Click to Open Drawer */}
              {item.Pagenew && (
                <div
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // 🛑 Prevent navigation
                    setActiveDrawerId(item.id);
                  }}
                >
                  <IoIosArrowForward size={20} />
                </div>
              )}

              {/* 🟢 Drawer */}
              <Drawer anchor="left" open={activeDrawerId === item.id} onClose={() => setActiveDrawerId(null)}>
                <div className=" w-[300px]">
                <div className="flex items-center justify-between border-b-[1px] border-gray-200 py-4 ">
                       <IoIosArrowBack onClick={()=>setActiveDrawerId(false)}/>
                        <div >  {item.tagname}</div>
                        <RxCross1 onClick={() => setActiveDrawerId(false)} className="mr-[10px]"/>
                      </div>
                
                 <div className="mx-4">{item.Pagenew}</div> 
                </div>
              </Drawer>
            </div>
          ))}

          {/* 🟢 Account Link */}
          <div
            className="flex items-start justify-start gap-2 hover:text-[#C16452] text-[17px] text-[#787A7C] font-[700] cursor-pointer"
            onClick={() => handleNavigation("/account")}
          >
            <VscAccount size={20} /> ACCOUNT
          </div>
        </div>
      </div>
    </div>
  );
};


  export default Navbarresp