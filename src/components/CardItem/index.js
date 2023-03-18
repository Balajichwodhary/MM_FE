import { Component } from "react";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';


class CardItem extends Component{

    render() {
        const {cardDetails}=this.props
        const {contactName,contactNumber,price,mess}=cardDetails

        return(
            <>
            <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <h2> Mess:{mess}</h2>
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{contactName}</Text>
        <Badge color="pink" variant="light">
          On Sale @ {price}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {contactNumber}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Buy Now
      </Button>
    </Card>

            

    </>

        )
    }

}

export default CardItem