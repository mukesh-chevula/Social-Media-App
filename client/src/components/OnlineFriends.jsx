import React from 'react'

const OnlineFriends = ({user}) => {
  return (
<div className="row p-3 pb-2">
        <div className="col-3 position-relative" style={{ zIndex: '2' }}>
          <img src={user.profilePicture} alt="" className='img rounded-circle' width={40} height={40} />
          <div className='rounded-circle position-absolute border border-2 border-white' style={{ width: '12px', height: '12px', top: '0', right: '30px', backgroundColor: '#27be45' }}></div>
        </div>
        <div className="col mt-2">
          {user.username}
        </div>
      </div>
  )
}

export default OnlineFriends