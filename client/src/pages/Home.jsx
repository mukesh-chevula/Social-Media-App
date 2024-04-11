import React from 'react'
import Navbar from '../components/Navbar'
import Left from '../components/Left'
import Main from '../components/Main'
import Right from '../components/Right'

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="container-fluid">
  <div className="row">
    <div className="col-3">
      <div style={{ paddingTop: "80px" }}>
        <Left/>
      </div>
    </div>
    <div className="col">
      <div style={{ paddingTop: "80px" }}>
        <Main/>
      </div>
    </div>
    <div className="col-4">
      <div style={{ paddingTop: "80px" }}>
        <Right/>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Home
