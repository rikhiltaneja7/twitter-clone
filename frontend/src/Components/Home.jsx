import React, { useContext } from 'react'
import { AppContext } from './Context'
import Post from './Post'
import Posts from './Posts'

export default function Home() {
  const {currentUser,setCurrentUser} = useContext(AppContext)
  return (
    <div className='home-parent'>
      <div className='username'>Hello, {currentUser}</div>
      <Posts/>
    </div>
  )
}
