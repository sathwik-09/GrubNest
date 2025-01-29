import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData.info;
  return (
    <div className="res-card" style={{ backgroundColor: "lightgray" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          CDN_URL + resData.info.cloudinaryImageId
        }
      ></img>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(",")}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;