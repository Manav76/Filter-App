import React from "react";
import FilterListToggle from "../../common/FilterListToggle";
import { categoryList , ratingList } from "../../../constants";
import "./styles.css";
import CheckboxProton from "../../common/Checkbox";
const FilterPanel = ({ selectedCategory, selectToggle , selectedRating , selectRating , brands , changeChecked}) =>  (
    <div>
      {/* Category */}
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
      
        />
      </div>
      {/* Brand */}
      <div className = "input-group">
      <p className="label">Brand</p>
      {brands.map((brand)=>(<CheckboxProton key = {brand.id}
      brand = {brand}
       changeChecked = {changeChecked} />))}
      </div>
      {/* Price */}
      {/* Ratings */}
      <div className="input-group">
        <p className="label">Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );

export default FilterPanel;
