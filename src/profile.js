import React from "react";

class Profile extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {count: 0}
  }

  componentDidMount(){this.timerID = setInterval(() => this.setState({count: this.state.count+1}),1000);}
  
  render(){
    console.log(this.props)
    return (
        <div className = "card">
            <h4 style ={{color: "pink",fontSize: "15px"}}>I'm a {this.props.data.fullName},</h4>
            <h4 style ={{color: "pink",fontSize: "15px"}}>I'm a {this.props.data.bio},</h4>
            <h4 style ={{color: "pink",fontSize: "15px"}}>and I am a {this.props.data.profession}</h4>
            <h5>It is {this.state.count}.</h5> 
        </div>  
    )
  }  
}
export default Profile;
