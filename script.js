import React from "react";
import ReactDOM from "react-dom/client";
/**
 * - Header
 *
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.designevo.com/res/templates/thumb_small/quick-takeaway-icon.webp"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId,name,cuisines,costForTwo,avgRating} = resData.info;
  return (
    <div className="res-card" style={{"backgroundColor":"f0f0f0"}}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId
        }
      ></img>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(",")}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.avgRating}</h4>
    </div>
  );
};
const resList = [
  {
    info: {
      id: "4138",
      name: "Grand Hotel",
      cloudinaryImageId: "qtda4lwfmlwweg3ecibu",
      locality: "Banjara Hills",
      areaName: "Abids",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Chinese", "Kebabs"],
      avgRating: 4.4
    }
  },
  {
    info: {
      id: "71645",
      name: "Hotel City Diamond",
      cloudinaryImageId: "phgejn52vep4syc6mgto",
      locality: "Mehdipatnam",
      areaName: "Mehdipatnam",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Hyderabadi","Chinese"],
      avgRating: 4.4
    }
  },
  {
    info: {
      id: "15908",
      name: "Hotel Rumaan",
      cloudinaryImageId: "479e7bd064201059010bb7de699a468a",
      locality: "Barkas",
      areaName: "Barkas",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Tandoor", "Chinese"],
      avgRating: 4.3
    }
  },
  {
    info: {
      id: "34634",
      name: "Meridian Restaurant",
      cloudinaryImageId: "kqaox2sf8m1hfdbkw48j",
      locality: "Panjagutta",
      areaName: "Panjagutta",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "North Indian", "Chinese"],
      avgRating: 4.4
    }
  },
  {
    info: {
      id: "35021",
      name: "Shadab Hotel",
      cloudinaryImageId: "yyw8mur3rcev7jizibpd",
      locality: "Ghansi Bazaar",
      areaName: "Ghansi Bazaar",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Mughlai", "Hyderabadi"],
      avgRating: 4.5
    }
  },
  {
    info: {
      id: "36742",
      name: "Bawarchi",
      cloudinaryImageId: "opllttfmtt4jcbckdggt",
      locality: "RTC Cross Road",
      areaName: "RTC Cross Road",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "North Indian", "Chinese"],
      avgRating: 4.3
    }
  },
  {
    info: {
      id: "34612",
      name: "Paradise Biryani",
      cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
      locality: "Himayatnagar",
      areaName: "Himayatnagar",
      costForTwo: "₹600 for two",
      cuisines: ["Biryani", "North Indian", "Chinese"],
      avgRating: 4.2
    }
  },
  {
    info: {
      id: "35245",
      name: "Alpha Hotel",
      cloudinaryImageId: "c7b7f719d710175badabd8a3e646c849",
      locality: "Secunderabad",
      areaName: "Secunderabad",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani", "Hyderabadi", "Chinese"],
      avgRating: 4.1
    }
  },
  {
    info: {
      id: "34578",
      name: "Shah Ghouse Hotel",
      cloudinaryImageId: "chaxtqbaef50zztnsah1",
      locality: "Shalibanda",
      areaName: "Shalibanda",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Mughlai", "Hyderabadi"],
      avgRating: 4.4
    }
  },
  {
    info: {
      id: "32965",
      name: "Pista House",
      cloudinaryImageId: "c17382208869e0b09ec486e96d8709ab",
      locality: "Charminar",
      areaName: "Charminar",
      costForTwo: "₹350 for two",
      cuisines: ["Biryani", "Mughlai", "Hyderabadi"],
      avgRating: 4.3
    }
  }
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
      {resList.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
      ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
