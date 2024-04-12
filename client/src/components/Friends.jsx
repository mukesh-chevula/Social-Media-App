import React from 'react'

const Friends = ({user}) => {
  return (
    <div className="row p-3 pt-0 pb-2">
        <div className="col-3">
        <img src={user.profilePicture}alt="" className='img rounded-circle' width={40} height={40} />          
        </div>
          <div className="col mt-2">{user.username}</div>
        </div>
  )
}

export default Friends