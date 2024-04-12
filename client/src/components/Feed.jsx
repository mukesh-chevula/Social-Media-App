import React from 'react'
import Post from './Post';
import {Posts} from '../dummyData'


const Main = () => {
  return (
    <div className="container-fluid p-3 mb-3" style={{ height: '100vh'}}>

      {Posts.map((p)=>(
      <Post key={p.id} post={p}/>
      ))}
    </div>
  )
}

export default Main
