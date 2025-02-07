import React,{useState} from "react";
import CategoryList from "./CategoryList";

const RestaurantCategories = ({ data, showItems, setshowIndex}) => {
 
  const handleClick = ()=>{
    setshowIndex();
  }

  return (
    <div>
      <div className="w-6/12 bg-gray-100 mx-auto my-4 text-xl p-3">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="text-lg font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <CategoryList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategories;
