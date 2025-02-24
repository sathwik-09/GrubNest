import RestaurantCard, { withFreeDelivery } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [RestaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [filteredList, setFilteredList] = useState([]);
  const FreeDelivery = withFreeDelivery(RestaurantCard);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.376025745120206&lng=78.54837030172348&carousel=true"
    );

    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Sorry Please check your internet connection</h1>;

  const { loginUser, setuserName } = useContext(UserContext);

  return RestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4 flex items-center">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-3 py-1 bg-orange-300 m-4 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredRestaurants = RestaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-3 p-4 flex items-center">
          <button
            className="px-3 py-1 bg-amber-200 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredRestaurants = RestaurantList.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredList(filteredRestaurants);
            }}
          >
            Top Rated Restaurant
          </button>
          <div className="m-4 p-4">
            <label>Username: </label>
            <input
              className="border border-black p-2"
              value={loginUser}
              onChange={(e) => setuserName(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredList.length > 0 ? (
          filteredList.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.freedelMessage ? (
                <FreeDelivery resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Body;
