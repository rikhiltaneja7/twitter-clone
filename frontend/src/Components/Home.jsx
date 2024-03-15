import React, { useContext } from 'react'
import { AppContext } from './Context'
import { Textarea, Avatar } from '@chakra-ui/react'
import Post from './Post'
import Posts from './Posts'

export default function Home() {
  const {currentUser,setCurrentUser} = useContext(AppContext)
  return (
    <div className='home-parent'>
      <div className='username'>Hello, {currentUser}</div>
      <div className="tweet-area flex">
      <Avatar name={currentUser} src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
      <Textarea size ='lg' placeholder="What is Happening?!" resize={'none'} width={'30vh'}/>
      <div className="btn post flex">
        Post
      </div>
      </div>
      <Posts/>
    </div>
  )
}
