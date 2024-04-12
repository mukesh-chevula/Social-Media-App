import { faGift } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Style.css'

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
      <div className="row p-3 pb-2">
  <div className="col-3 position-relative">
    <img src="/assets/person/9.jpeg" alt="" className='img rounded-circle' width={40} height={40} />  
    <div className=' rounded-circle position-absolute' style={{ width: '12px', height: '12px', top: '0', right: '20px',backgroundColor:'#27be45' }}></div>
  </div>
  <div className="col mt-2">
    Jane
    </div>
</div>
<div className="row p-3 pb-2">
  <div className="col-3 position-relative">
    <img src="/assets/person/9.jpeg" alt="" className='img rounded-circle' width={40} height={40} />  
    <div className=' rounded-circle position-absolute' style={{ width: '12px', height: '12px', top: '0', right: '20px',backgroundColor:'#27be45' }}></div>
  </div>
  <div className="col mt-2">
    Jane
    </div>
</div>
<div className="row p-3 pb-2">
  <div className="col-3 position-relative">
    <img src="/assets/person/9.jpeg" alt="" className='img rounded-circle' width={40} height={40} />  
    <div className=' rounded-circle position-absolute' style={{ width: '12px', height: '12px', top: '0', right: '20px',backgroundColor:'#27be45' }}></div>
  </div>
  <div className="col mt-2">
    Jane
    </div>
</div>
<div className="row p-3 pb-2">
  <div className="col-3 position-relative">
    <img src="/assets/person/9.jpeg" alt="" className='img rounded-circle' width={40} height={40} />  
    <div className=' rounded-circle position-absolute' style={{ width: '12px', height: '12px', top: '0', right: '20px',backgroundColor:'#27be45' }}></div>
  </div>
  <div className="col mt-2">
    Jane
    </div>
</div>
<div className="row p-3 pb-2">
  <div className="col-3 position-relative">
    <img src="/assets/person/9.jpeg" alt="" className='img rounded-circle' width={40} height={40} />  
    <div className=' rounded-circle position-absolute' style={{ width: '12px', height: '12px', top: '0', right: '20px',backgroundColor:'#27be45' }}></div>
  </div>
  <div className="col mt-2">
    Jane
    </div>
</div>

<div className="row p-3 pb-2">
  <div className="col-3 position-relative">
    <img src="/assets/person/9.jpeg" alt="" className='img rounded-circle' width={40} height={40} />  
    <div className=' rounded-circle position-absolute' style={{ width: '12px', height: '12px', top: '0', right: '20px',backgroundColor:'#27be45' }}></div>
  </div>
  <div className="col mt-2">
    Jane
    </div>
</div><div className="row p-3 pb-2">
  <div className="col-3 position-relative">
    <img src="/assets/person/9.jpeg" alt="" className='img rounded-circle' width={40} height={40} />  
    <div className=' rounded-circle position-absolute' style={{ width: '12px', height: '12px', top: '0', right: '20px',backgroundColor:'#27be45' }}></div>
  </div>
  <div className="col mt-2">
    Jane
    </div>
</div>
        
    </div>
  )
}

export default Right
