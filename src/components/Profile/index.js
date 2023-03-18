import { Component } from "react";
import  Header from "../Header"
import "./index.css"

const datalist={userid:1,
    username:'Balaji',
    phonenumber:6281592663,
    email:'pathip_931932@student.nitw.ac.in',
    imageurl: 'https://cdn.tollywood.net/wp-content/uploads/2018/05/Legend-NTR-95th-Jayanthi-today.jpg'}

class Home extends Component{
    
    
  
    render(){

        return(
            <div className="bg-container">
             <Header/>
             <div className="profile-container">
             <div className="details">
              <img className="profilepic" src={datalist.imageurl} alt="Balaji" />
              <div className="name-phone">
              <h1 className="username">{datalist.username}</h1>
              <h2>Phone : {datalist.phonenumber}</h2>
              </div>
              </div>
              <p>email :{datalist.email}</p>
              
            </div>

            <div className="display-card" >
                <div className="typecard">
                    <p>Active Card</p>
                    <p>Sold Card</p>
                </div>
                <div>
                    Activecard
                </div>
            </div>

            </div>
        )
    }
}

export default Home