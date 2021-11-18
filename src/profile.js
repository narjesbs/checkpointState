import React from "react";

class Profile extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount(){this.timerID = setInterval(() => this.time(),1000);}
  
  time(){this.setState({date: new Date()});}
  
  render(){
    return (
        <div className = "card">
            <img src = {this.props.elle} alt="this is elle "/>
            <h4 style ={{color: "pink",fontSize: "15px"}}>I'm a {this.props.fullName},</h4>
            <h4 style ={{color: "pink",fontSize: "15px"}}>I'm a {this.props.bio},</h4>
            <h4 style ={{color: "pink",fontSize: "15px"}}>and I am a {this.props.profession}</h4>
            <h5>It is {this.state.date.toLocaleTimeString()}.</h5>
        </div>  
    )
  }  
}
export default Profile;