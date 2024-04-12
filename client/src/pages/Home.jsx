import React from 'react'
import Navbar from '../components/Navbar'
import Left from '../components/Left'
import Main from '../components/Main'
import Right from '../components/Right'

const Home = () => {
  return (
    <div style={{ overflow: 'hidden', maxHeight: '100vh' }}>
      <Navbar style={{ position: 'fixed', zIndex: '1', width: '100%' }} />
      <div className="container-fluid" style={{ paddingTop: "80px" }}>
        <div className="row">
          <div className="col-3">
            <Left />
          </div>
          <div className="col">
            <Main />
          </div>
          <div className="col-3">
            <Right />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
