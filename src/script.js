import React, { createContext, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Error from "./Components/Error";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Grocery from "./Components/Grocery";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

const AppLayout = () => {

  const [userName, setuserName] = useState(createContext);

  useEffect(()=>{
    const data = {
      name : "sathwik"
    };
    setuserName(data.name);
  },[])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loginUser : userName, setuserName}}>
    <div className="app">
      <Header />
      <Outlet></Outlet>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Body />} />  
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="restaurants/:resId" element={<RestaurantMenu />} />
          <Route path ="grocery" element={<Grocery/>} />
          <Route path="*" element={<Error />} />
        </Route>
         
      </Routes>
    </Router>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
