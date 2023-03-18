import { Component  } from "react";
import Header  from "../Header";
import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import "./index.css"
import { Link } from "react-router-dom";

const messList = ['IFC-A','IFC-B','IFC-C','LH-MESS']

class Community extends Component{
  
   

    render(){
        return (
          
           <div className="community-container">
              <div className="messes">
                <Header/>
                <div className="cards">
             
               <Link to='/messa' >
                <div className="community-mess">
                 <Card shadow="sm" p="lg" radius="md" withBorder>
                  <Card.Section>
                   <h2> Mess:{messList[0]}</h2>
                  </Card.Section>

                 <Group position="apart" mt="md" mb="xs">
                 <Text weight={500}>Buy Now</Text>
                 <Badge color="pink" variant="light">
                  On Sale
                 </Badge>
                 </Group>
               </Card> 
               </div>
               </Link>
              

               <Link to='/messb' >
               <div className="community-mess">
               <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                 <h2> Mess:{messList[1]}</h2>
                </Card.Section>

               <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Buy Now</Text>
                <Badge color="pink" variant="light">
                  On Sale
                 </Badge>
                 </Group>
               </Card> 
               </div>
               </Link>
              

               <Link to='/messc'>
               <div className="community-mess">
               <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                 <h2> Mess:{messList[2]}</h2>
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Buy Now</Text>
                <Badge color="pink" variant="light">
                  On Sale
                 </Badge>
                 </Group>
               </Card>
               </div>
               </Link>


               <Link to='/lhmess'> 
               <div className="community-mess">
               <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                 <h2> Mess:{messList[3]}</h2>
                </Card.Section>

               <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{messList[3]}</Text>
                <Badge color="pink" variant="light">
                  On Sale
                 </Badge>
                 </Group>
               </Card>
               </div>
               </Link>
              
              </div>
             </div>

             <Link to='/salecard'>
             <Button radius="md" size="md" type="submit" className="sale-card-button" >
                   Sale a card
                  </Button>
             </Link>
             
             
             
             
           </div>
        )
    }
}


export default Community