import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductList } from "../reduxs/slices/product";


const SearchPage = () => {
const navigate =useNavigate();
  const [query, setQuery] = useState("");

  const handleGetProduct = async () => {
    navigate(`/product/${query}`)
  }
               
        
      
        

console.log("Navigate function:", navigate);

  const handleSearch=()=>{

    navigate('/')
  }

  return (
    <div className="min-h-screen flex  items-start justify-center mt-[20px] gap-4">
    <div style={{ 
  display: "flex", 
  alignItems: "center", 
  border: "1px solid #ccc", 
  borderRadius: "5px", 
  padding: "5px", 
  width: "100%",  
  maxWidth: "70%" 
}}>
  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search..."
    style={{
      border: "none",
      outline: "none",
      padding: "8px",
      flex: 1,
      width: "100%" 
    }}
  />
  <button onClick={handleGetProduct} style={{ background: "none", border: "none", cursor: "pointer" } } className="cursor-auto">
    <CiSearch  size={22} color="gray" className="cursor-auto"/>
  </button>
</div>
      <RxCross2 onClick={handleSearch} size={30} color="gray" className="flex items-center justify-center"/>
    </div>
  );
};

export default SearchPage;

