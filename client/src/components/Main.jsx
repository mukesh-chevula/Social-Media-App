import React from 'react'
import Share from './Share'
import Feed from './Feed'

const Main = ({username}) => {
  return (
    <div
      className='container-fluid p-3 mb-3 overflow-scroll'
      style={{ height: '100vh' }}
    >
      <Share />
      <Feed username={username} />
    </div>
  )
}

export default Main
