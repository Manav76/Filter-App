import React, { useEffect, useState } from "react";
import FilterPanel from "../../components/Home/FilterPanel";
import List from "../../components/Home/List";
import NavBar from "../../components/Home/NavBar";
import { dataList } from "../../constants";
import "./styles.css";

const Home = () => {
  const [selectedCategory , setSelectedCategory] = useState(null);
   const [selectedRating , setSelectedRating] = useState(null);
   const [selectedPrice , setSelectedPrice] = useState([500,5000]);
   const [list , setList] = useState(dataList);
   const [inputSearch , setInputSearch] = useState('');
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
  const handleSelectCategory = (_event,value)=>!value? null : setSelectedCategory(value);
  const handleSelectRating = (_event,value)=>!value? null : setSelectedRating(value);
  const handleChangeChecked = (id) => {
    const brandsStateList  = brands;
    const changeCheckedBrands = brandsStateList.map((item)=>item.id===id?{...item,checked:!item.checked}: item);
    setBrands(changeCheckedBrands);
  };
  const handleChangePrice=(_event,value)=> setSelectedPrice(value);
  const applyFilters = () => {
    let updatedList = dataList;
    if(selectedRating){
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }
    if(selectedCategory){
      updatedList=updatedList.filter(
        (item)=> item.category === selectedCategory
      );
    }
    const brandChecked = brands.filter(item=>item.checked)
    .map((item) => item.label);
    if(brandChecked.length){
      updatedList=updatedList.filter((item)=>brandChecked.includes(item.brand))
    }
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    updatedList=updatedList.filter((item)=>item.price>=minPrice && item.price<=maxPrice)
    if(inputSearch){
      updatedList = updatedList.filter((item)=>
      item.title.search(inputSearch.trim()) !==
      -1
      );
    }
    setList(updatedList);
  };
  useEffect(()=>{
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectedRating,selectedCategory,brands,selectedPrice,inputSearch])
  return (
    <div className="home">
      <NavBar value={inputSearch} changeInput = {event=>setInputSearch(event.target.value)} />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
      
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
         
          <List list ={list}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
