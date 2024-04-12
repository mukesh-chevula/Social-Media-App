import { faFaceLaughBeam, faImages, faLocationDot, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Share = () => {
  return (
    <>
        <div className="container shadow rounded p-4 my-3">
        <div className="row align-items-center">
          <div className="col-auto" style={{zIndex:'inherit'}}>      
            <img src="/assets/person/9.jpeg" alt="" className='img rounded-circle' width={50} height={50} style={{position:'',top:'3px',}}/>  
          </div>
          <div className="col">
            <input type="text" className='form-control-lg border-0 focus-none' placeholder='What is on your mind...' />
          </div>
          <div className="col-auto">
            <button type="button" className="btn btn-success rounded-pill">Share</button>
          </div>
        </div>
        <hr className='py-2'/>
        <div className="row text-secondary align-content-center justify-content-center pb-3" style={{fontSize:'14px'}}>
          <div className="col">
            <FontAwesomeIcon icon={faImages} size='lg' style={{color: "#ff0000",}} /> &nbsp;Photo/Video         
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faTag} size='lg' style={{color: "#0400ff",}} />&nbsp;Tag
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faLocationDot} size='lg' style={{color: "#00571a",}} />&nbsp; Location
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faFaceLaughBeam} size='lg' style={{color: "#ffd500",}} />&nbsp;Feelings
          </div>
        </div>
      </div>
    </>
  )
}

export default Share