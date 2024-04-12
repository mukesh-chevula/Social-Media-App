import { faEdit, faEllipsisVertical, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import {Users} from "../dummyData"

const Post = ({post}) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };

    
  
  return (
        <div className="container shadow rounded p-4">
        <div className="row align-items-center">
          <div className="col-1">      
            <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" className='img rounded-circle' width={35} height={35}/>  
          </div>
          <div className="col">
          <b>{Users.filter(u => u.id === post.userId)[0].username}</b>&nbsp;<span className='text-secondary' style={{fontSize:'13px'}}>{post.date}</span>
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
          {post.desc}
        </div>
        <div className="row my-3">
          <img src={post.photo} alt="" className='img rounded'/>
        </div>
        <div className="row">
        <div className="col text-secondary">
  <img src="/assets/like.png" alt="" width={'20px'} style={{ zIndex: '99' }} />
  <img src="/assets/heart.png" alt="" width={'20px'} style={{ zIndex: '100', right: '5px' }} />
  {post.like} People liked it
</div>
<div className="col text-end text-secondary">
{post.comment} comments
</div>

        </div>
      </div>
  )
}

export default Post