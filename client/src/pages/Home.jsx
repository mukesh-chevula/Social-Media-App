import React from 'react'
import Navbar from '../Components/Navbar'
import Left from '../Components/Left'
import Main from '../Components/Main'
import Right from '../Components/Right'

const Home = () => {
  return (
    <div style={{ overflow: 'hidden', maxHeight: '100vh' }}>
      <Navbar style={{ position: 'fixed', zIndex: '1', width: '100%' }} />
      <div className='container-fluid' style={{ paddingTop: '80px' }}>
        <div className='row'>
          <div className='col-3'>
            <Left />
          </div>
          <div className='col'>
            <Main />
          </div>
          <div className='col-3'>
            <Right />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
