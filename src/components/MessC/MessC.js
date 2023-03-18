import React from 'react'
import CardsList from '../CardsList'

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

function MessC() {
  return (
    <>
    <div>IFC-C</div>
    <CardsList userslist={intialList}/>

    </>
  )
}

export default MessC