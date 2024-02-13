import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {BarLoader} from 'react-spinners'
import Post from './Post'

function Posts() {

  const [posts, setPosts] = useState([])
  useEffect(()=>{
      axios.get("http://localhost:8080/posts")
    .then((e)=>{
      console.log(e);
      setPosts(e.data);
    }).catch((err)=>{
      console.log(err);
    })

  }, [])

  return (
    <>
    <div className="posts-parent flex">
    {posts.length == 0 ? (
      <BarLoader color='red'/>
      ) : (
        <>
      {posts.map((e,i)=>{
        return (
          <Post tweet={posts[i]} key={i}/>
          )
        })}
        </>
    )}
    </div>
    </>
  )
}

export default Posts