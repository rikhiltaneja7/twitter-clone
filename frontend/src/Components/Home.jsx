import React, { useContext } from 'react'
import { AppContext } from './Context'

export default function Home() {
  const {currentUser,setCurrentUser} = useContext(AppContext)
  console.log("user",currentUser)
  return (
    <div className='home-parent'>
      <div className='username'>Hello, {currentUser}</div>
    </div>
  )
}
