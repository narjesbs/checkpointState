import React from "react";
import elle from "./Profilemage.jpg";
import Profile from "./profile";
import './App.css';

class App extends React.Component{
  
  constructor(){
    super()
    this.state = {Person:{fullName: "Elle Woods",bio: "Gemini vegetarian",profession: "Lawyer", imgSrc: {elle},show: false}}
  }

  shows=()=>{this.setState({ show: !this.state.show })}
 
  render(){
    console.log()
    return (
      <div>
        <button style={{border: "none",outline: "0",display: "inline-block",padding: "8px",color: "white",
        backgroundColor: "#000",textAlign: "center",cursor: "pointer",width: "100%",fontSize: "18px"}} 
        onClick={this.shows} > { this.state.show ? "hide" :"show" } </button>
        {this.state.show  ?  
        <div>
          <img src = {elle} alt="this is elle " style={{width:"100%"}} />
          <Profile data = {this.state.Person}/> </div>
          : null
          }
      </div>
    )
  }  
}
export default App;
