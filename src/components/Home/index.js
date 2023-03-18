import React from "react";
import { Component } from "react";

import Header from "../Header"
import CardsList from "../CardsList";
import "./index.css"


class Home extends Component{
  
    render(){
        return(
         
           <div className="home-container">
           <Header/> 
           <div className="cards-container">
           <h4> Here in the explore section you can find the messes available and you can choose the apporpriate mess and cintact the card holder and get the card after payib=ng the amount required</h4>

           </div>
           </div>
        )
    }
}

export default Home