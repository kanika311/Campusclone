import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";


const SearchPage = () => {
const navigate =useNavigate();
  const [query, setQuery] = useState("");

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
  <button style={{ background: "none", border: "none", cursor: "pointer" }}>
    <CiSearch size={22} color="gray" />
  </button>
</div>
      <RxCross2 onClick={handleSearch} size={30} color="gray" className="flex items-center justify-center"/>
    </div>
  );
};

export default SearchPage;

