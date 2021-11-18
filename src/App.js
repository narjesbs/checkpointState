import React from "react";
import elle from "./Profilemage.jpg";
import Profile from "./profile";
import './App.css';

class App extends React.Component{
  
  constructor(){
    super()
    this.state = {Person:[{fullName: "Elle Woods",bio: "Gemini vegetarian",profession: "Lawyer", imgSrc: {elle},show: false}]}
  }

  shows=()=>{this.setState({ show: !this.state.show })}
 
  componentDidMount(){this.timerID = setInterval(() => this.time(),1000);}
  
  time(){this.setState({date: new Date()});}
  
  render(){
    return (
      <div>
        <button style={{border: "none",outline: "0",display: "inline-block",padding: "8px",color: "white",
        backgroundColor: "#000",textAlign: "center",cursor: "pointer",width: "100%",fontSize: "18px"}} 
        onClick={this.shows} > { this.state.show ? "hide" :"show" } </button>
        {this.state.show  ?  
          <Profile data = {this.Person}/> 
          : null
          }
      </div>
    )
  }  
}
export default App;
