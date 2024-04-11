import {  faFaceLaughBeam, faImages, faLocationDot, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Main = () => {
  return (
    <div className="container-fluid p-3">
      <div className="container shadow rounded p-4">
        <div className="row">
          <div className="col-2">      
            <img src="/assets/person/9.jpeg" alt="" className='img rounded-circle' width={50} height={50} style={{position:'relative',top:'3px'}}/>  
          </div>
          <div className="col">
            <input type="text" className='form-control-lg border-0 focus-none' placeholder='What is on your mind...'/>
          </div>
        </div>
        <hr className='py-3'/>
        <div className="row text-secondary align-content-center justify-content-center position-relative" style={{fontSize:'11px'}}>
          <div className="col-3">
          <FontAwesomeIcon icon={faImages} size ='lg'style={{color: "#ff0000",}} /> &nbsp;Photo/Video         
          </div>
          <div className="col-2">
          <FontAwesomeIcon icon={faTag} size ='lg'style={{color: "#0400ff",}} />&nbsp;Tag
          </div>
          <div className="col-2">
          <FontAwesomeIcon icon={faLocationDot} size ='lg'style={{color: "#00571a",}} />&nbsp; Location
          </div>
          <div className="col-2">
          <FontAwesomeIcon icon={faFaceLaughBeam} size ='lg'style={{color: "#ffd500",}} />&nbsp;Feelings
          </div>
          <div className="col me-2 position-relative bottom-100">
            <button
              type="button"
              className="btn btn-primary rounded-pill"
            >
              Share
            </button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
