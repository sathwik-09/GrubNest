import React from 'react'
import { useEffect, useState } from 'react'
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const [resInfo, setTResInfo] = useState(null);
  useEffect(()=>{
    fetchMenu();
  },[])
  const fetchMenu = async()=>{
    const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3760826&lng=78.54829939999999&restaurantId=389817&submitAction=ENTER");
    
    const json = await data.json();
    
    setTResInfo(json.data);
    
  }

  
  if(resInfo===null) <Shimmer/> 

  const { name, cuisines, costForTwoMessage, avgRating } = resInfo?.cards?.find((card) => card.card?.card?.info)?.card?.card?.info || {};

  const menuItems = resInfo?.cards
  ?.find(card => card?.groupedCard?.cardGroupMap?.REGULAR)
  ?.groupedCard?.cardGroupMap?.REGULAR?.cards
  ?.find(card => card?.card?.card?.itemCards)
  ?.card?.card?.itemCards || [];



  return (
    <div className='menu'>
      <h1>{name}</h1>
      <h3>{cuisines}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>{avgRating}</h3>
      <h2>Menu</h2>
      <h3>
        <ul>
          <li>Biryani</li>
          <li>Burgers</li>
          <li>pizza</li>
        </ul>
      </h3>
    </div>
  )
}

export default RestaurantMenu
