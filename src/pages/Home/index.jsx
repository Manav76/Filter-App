import React, { useState } from "react";
import FilterPanel from "../../components/Home/FilterPanel";
import List from "../../components/Home/List";
import NavBar from "../../components/Home/NavBar";
import "./styles.css";

const Home = () => {
  const [selectedCategory , setSelectedCategory] = useState(null);
   const [selectedRating , setSelectedRating] = useState(null);
   const [selectedPrice , setSelectedPrice] = useState([500,5000]);
  const [brands , setBrands] = useState([
    {
      id:1,
      checked:false,
      label:'Zara'
    },
    {
      id:2,
      checked:false,
      label:'North Face'
    },
    {
      id:3,
      checked:false,
      label:'H&M'
    },
  ])
  const handleSelectCategory = (event,value)=>!value? null : setSelectedCategory(value);
  const handleSelectRating = (event,value)=>!value? null : setSelectedRating(value);
  const handleChangeChecked = (id) => {
    const brandsStateList  = brands;
    const changeCheckedBrands = brandsStateList.map((item)=>item.id===id?{...item,checked:!item.checked}: item);
    setBrands(changeCheckedBrands);
  };
  const handleChangePrice=(event,value)=> setSelectedPrice(value);
  return (
    <div className="home">
      {/*Nav Bar */}
      <NavBar />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          {/*Side Panels */}
          <FilterPanel
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
            selectRating = {handleSelectRating}
            selectedRating = {selectedRating}
            brands = {brands}
            changeChecked = {handleChangeChecked}
            selectedPrice = {selectedPrice}
            changedPrice = {handleChangePrice}
          />
        </div>
        <div className="home_list-wrap">
          {/*List and Empty view */}
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
