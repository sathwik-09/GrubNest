import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData.info;
  return (
    <div className="m-5 p-5 w-[250px] rounded-lg bg-gray-200 hover:bg-orange-300">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-3 text-lg">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(",")}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.avgRating}</h4>
    </div>
  );
};

export const withFreeDelivery = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-amber-400 absolute">Free Delivery</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
