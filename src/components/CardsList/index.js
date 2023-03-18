import { Component } from "react";
import CardItem from "../CardItem";

const intialList= [ 
    {id: 1,
    contactName:'Balaji',
    contactNumber:'6281592663',
    price:40,
    mess: 'IFCA'},
    {id: 2,
        contactName:'rithvik',
        contactNumber:'6232345523',
        price:40,
        mess: 'IFCA'}
]

let finallist=[]
class CardsList extends Component{

 
        
        
    
    render(){

        const userslist=this.props.userslist
        // console.log(userslist)
        if(userslist.length!==0){
            finallist=[...userslist]
        }else{
            finallist=[...intialList]
        }
        return (
            <>
            {finallist.map(each=>(
            <CardItem key={each.id} cardDetails={each}/>
            ))}
            </>
          
        )
    }
}

export default CardsList