import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  

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


  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>{avgRating}</h3>
      <h2>Menu</h2>
      
      <ul>
        {menuItems.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} : {"Rs "} :{" "}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
