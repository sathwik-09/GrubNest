import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{ 
  constructor(props){
    super(props);
  }
  componentDidMount(){
  }
  render (){
    return(
      <div>
        <h1>About</h1>
        <UserClass name={"Sathwik"} login={"login"}/>
      </div>
    )
  }
}

export default About;