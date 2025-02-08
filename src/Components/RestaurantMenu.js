import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setshowIndex] = useState(null);
  

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards?.find((card) => card.card?.card?.info)?.card?.card?.info ||
    {};

  const menuItems =
    resInfo?.cards
      ?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
        (card) => card?.card?.card?.itemCards
      )?.card?.card?.itemCards || [];

      const categories =
      resInfo?.cards
        ?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) || [];
  

  return (
    <div className="text-center">
      <h1 className="font-bold m-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">{Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}</h3>
      {categories.map((category, index)=>(<RestaurantCategories key={category?.card?.card?.title} data={category?.card?.card} showItems={index===showIndex} setshowIndex={()=>setshowIndex(index === showIndex ? null:index)} />))}
    </div>
  );
};

export default RestaurantMenu;
