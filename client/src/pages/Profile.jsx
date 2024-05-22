import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Left from '../Components/Left'
import Main from '../Components/Main'
import Right from '../Components/Right'
import axios from 'axios'

const Profile = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/users?username=mukesh`
        )
        setUser(response.data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchUser()
  }, [])

  return (
    <div style={{ overflow: 'scroll', maxHeight: '100vh' }}>
      <Navbar style={{ position: '', zIndex: '', width: '%' }} />
      <div className='container-fluid' style={{ paddingTop: '80px' }}>
        <div className='row'>
          <div className='col-3'>
            <Left />
          </div>
          <div className='col'>
            <div className='container-fluid'>
              <div className='row pb-5 z-3'>
                <img
                  src={user.coverPicture || '/assets/person/cover-black.jpg'}
                  alt=''
                  style={{ height: '250px' }}
                />
                <div className='position-relative' style={{ zIndex: '1000' }}>
                  <img
                    src={user.profilePicture || '/assets/person/no-avatar.webp'}
                    alt=''
                    style={{
                      height: '200px',
                      width: '200px',
                      top: '-150px',
                      left: '435px',
                      zIndex: '10000'
                    }}
                    className='img img-fluid rounded-circle position-absolute border border-3 border-white'
                  />
                </div>
                <div className='row text-center fw-bold justify-content-center align-content-between fs-4 mt-5'>
                  {user.username}
                </div>
                <div className='row text-center text-secondary justify-content-center align-content-between fs-6'>
                  {user.description}
                </div>
              </div>

              <div className='row'>
                <div className='col-7'>
                  <Main />
                </div>
                <div className='col'>
                  <Right user={user}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
