import React from "react";


class UserClass extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      userInfo : {
        name : "dummy",
        login : "default"
      }
    }
  }
  
  async componentDidMount(){
    const data = await fetch("  https://api.github.com/users/sathwik-09")
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    })
  }

  render(){
    const {name,login} = this.state.userInfo;
    return (
      <div>
        <h2>Name : {name}</h2>
        <h3>User name: {login}</h3>
        
      </div>
    )
  }
}

export default UserClass;