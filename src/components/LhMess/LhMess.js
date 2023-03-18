import React from 'react'
import CardsList from '../CardsList'

const intialList= [ 
  {id: 1,
  contactName:'Susmitha',
  contactNumber:'6300141244',
  price:40,
  mess: 'LH-Mess'},
  {id: 2,
      contactName:'Bala',
      contactNumber:'6300141244',
      price:40,
      mess: 'LH-Mess'}
]

function LhMess() {
  return (
    <>
    <div>LH-Mess</div>
    <CardsList userslist={intialList}/>

    </>

  )
}

export default LhMess