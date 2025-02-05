import React from "react";
import { CDN_URL } from "../utils/constants";
const CategoryList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 px-4 py-6 border-b-2 border-gray-500 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 ">
              <span className="font-bold">{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="3/12">
          <div className="absolute">
          <button className="bg-white rounded-md shadow-lg mx-6 my-[67px] p-1"> Add +</button>
          </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-28 rounded-lg"
            />
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
