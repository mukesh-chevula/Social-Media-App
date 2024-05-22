import React, { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios'

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = username
          ? await axios.get(
              'http://localhost:8800/api/posts/profile/' + username
            )
          : await axios.get(
              'http://localhost:8800/api/posts/timeline/66178a32b7dac6bebfd7764e'
            )
        setPosts(response.data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, [username])

  return (
    <div className='container-fluid p-3 mb-3' style={{ height: '100vh' }}>
      {posts.map((p, index) => (
        <Post key={index} post={p} />
      ))}
    </div>
  )
}

export default Feed
