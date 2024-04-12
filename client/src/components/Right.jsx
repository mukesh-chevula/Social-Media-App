import { faGift } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Style.css'
import { Users } from '../dummyData'
import OnlineFriends from './OnlineFriends'

const Right = () => {
  return (
    <div className="container mt-3 left-container" style={{fontSize:'13px'}}>
      <div className="row align-content-center text-center">
        <div className="col-1 p-2 mt-1">        
          <FontAwesomeIcon icon={faGift} color='red' size='2xl' className='float-start'/> 
        </div>
        <div className="col p-2">       
          <b>Pola Foster </b>and <b>3 other Friends</b> celebrate their birthday today!
        </div>
      </div>
      <div className="row py-2">
        <img src="/assets/ad.png" alt=""/>
      </div>
      <hr />
      <div className="row pb-4 ms-3 fs-6 fw-bold">
        Online Friends:
      </div>

      {Users.map((u)=>(
      <OnlineFriends key={u.id} user={u}/>
      ))}
      
        
    </div>
  )
}

export default Right
