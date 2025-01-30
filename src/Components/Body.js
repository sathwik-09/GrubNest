import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";


const Body = () => {
  const [RestaurantList, setRestaurantList] = useState(resList);
  

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredRes = RestaurantList.filter((res)=>res.info.avgRating>4);
            setRestaurantList(filteredRes);
          }}
        >
          Search Top Rated Restaurants
        </button>
      </div>
      <div className="restro-container">
        {RestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
