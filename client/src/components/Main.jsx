import { faEdit, faEllipsisVertical, faFaceLaughBeam, faImages, faLocationDot, faTag, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Main = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="container-fluid p-3 left-container mb-3" style={{ height: '100vh',zIndex:'inherit'}}>
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
      {/* Post */}
      <div className="container shadow rounded p-4">
        <div className="row align-items-center">
          <div className="col-1">      
            <img src="/assets/person/9.jpeg" alt="" className='img rounded-circle' width={35} height={35}/>  
          </div>
          <div className="col">
            <b>Mukesh Chevula </b>&nbsp;<span className='text-secondary' style={{fontSize:'13px'}}> 5 mins ago</span>
          </div>
          <div className="col-1">
            <button className='bg-transparent border-0 float-end' onClick={toggleMenu}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </div>
        </div>
        <div className={` bg-light shadow d-flex flex-column p-2 rounded ${menuVisible ? 'd-block' : 'd-none'}`}>
          <div className='pb-2'>
            <FontAwesomeIcon icon={faEdit} style={{ color: 'blue', marginRight: '5px' }} />
            Edit
          </div>
          <div className='pb-1'>
            <FontAwesomeIcon icon={faTrash} style={{ color: 'red', marginRight: '5px' }} />
            Delete
          </div>
        </div>
        <div className="row m-2">
          Hey it's my First post!
        </div>
        <div className="row my-3">
          <img src="/assets/post/1.jpeg" alt="" className='img rounded'/>
        </div>
        <div className="row">
        <div className="col text-secondary">
  <img src="/assets/like.png" alt="" width={'20px'} style={{ zIndex: '100' }} />
  <img src="/assets/heart.png" alt="" width={'20px'} style={{ zIndex: '99', right: '5px' }} />
  32 People liked it
</div>
<div className="col text-end text-secondary">
9 comments
</div>

        </div>
      </div>
      <div className="container shadow rounded p-4">
        <div className="row align-items-center">
          <div className="col-1">      
            <img src="/assets/person/9.jpeg" alt="" className='img rounded-circle' width={35} height={35}/>  
          </div>
          <div className="col">
            <b>Mukesh Chevula </b>&nbsp;<span className='text-secondary' style={{fontSize:'13px'}}> 5 mins ago</span>
          </div>
          <div className="col-1">
            <button className='bg-transparent border-0 float-end' onClick={toggleMenu}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </div>
        </div>
        <div className={` bg-light shadow d-flex flex-column p-2 rounded ${menuVisible ? 'd-block' : 'd-none'}`}>
          <div className='pb-2'>
            <FontAwesomeIcon icon={faEdit} style={{ color: 'blue', marginRight: '5px' }} />
            Edit
          </div>
          <div className='pb-1'>
            <FontAwesomeIcon icon={faTrash} style={{ color: 'red', marginRight: '5px' }} />
            Delete
          </div>
        </div>
        <div className="row m-2">
          Hey it's my First post!
        </div>
        <div className="row my-3">
          <img src="/assets/post/1.jpeg" alt="" className='img rounded'/>
        </div>
        <div className="row">
        <div className="col text-secondary">
  <img src="/assets/like.png" alt="" width={'20px'} style={{ zIndex: '99' }} />
  <img src="/assets/heart.png" alt="" width={'20px'} style={{ zIndex: '100', right: '5px' }} />
  32 People liked it
</div>
<div className="col text-end text-secondary">
9 comments
</div>

        </div>
      </div>
    </div>
  )
}

export default Main
