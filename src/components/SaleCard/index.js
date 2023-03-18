import React from 'react'
import { useState } from 'react'
import { Button ,TextInput,PasswordInput} from '@mantine/core';
import { NativeSelect } from '@mantine/core';

const SaleCard = () => {
    const [Username,setUsername]=useState('')
    const [phoneNumber,setphoneNumber]=useState('')
    const [dateofsale,setdateofslae]=useState('')
    const [mess,setmess]=useState('')
    const [type,settype]=useState('')
    const [price,setprice]=useState(40)
  return (
    <div className='salecard-container'>
        <h1> Sale a Card </h1>
        <h4>Fill the following details appropriately</h4>
        <TextInput type="text" placeholder='Name' label="Card Holder-Name" withAsterisk onChange={(e)=>{setUsername(e.target.value)}} />
        <TextInput type="tel" placeholder='Phone Number' label="Card Holder-Number" withAsterisk onChange={(e)=>{setphoneNumber(e.target.value)}} />
        <TextInput type="date"  placeholder='username' label="Card Holder-Name" withAsterisk onChange={(e)=>{setUsername(e.target.value)}} />
        <NativeSelect
        data={['IFC-A', 'IFC-B', 'IFC-C', 'LH-MESS']}
        label="Select Mess"
        description="This is anonymous"
        withAsterisk/>
        <NativeSelect
        data={['Break-Fast', 'Lunch', 'Dinner', 'Whole-Day']}
        label="Select Meals that you are selling"
        description="This is anonymous"
        withAsterisk/>
        <TextInput type="number" placeholder='Price'label="Price at you want to sell" withAsterisk onChange={(e)=>{setprice(e.target.value)}} />
        <Button radius="md" size="md" type="submit" className="submit-button">
                    Sale This card
                  </Button>

    </div>
  )
}

export default SaleCard