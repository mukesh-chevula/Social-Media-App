import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faComments,
  faSearch,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container-fluid bg-primary text-white px-4 py-3 position-fixed d-block mb-3'>
      <div className='row d-flex'>
        <div className='col-sm-6 col-md-3 fw-bolder position-relative pt-2 order-sm-0'>
          <Link to={'/'} className='text-decoration-none text-white'>
            {' '}
            <h4>SOCIAL APP</h4>
          </Link>
        </div>
        <div className='col-md-5 col-sm-6 align-content-center justify-content-center order-sm-1'>
          <div className='input-group'>
            <span className='input-group-text rounded-start-pill bg-white'>
              <FontAwesomeIcon
                icon={faSearch}
                size='lg'
                style={{ color: '#005eff' }}
              />
            </span>
            <input
              placeholder='Search for posts, friends ...'
              type='text'
              className='form-control p-2 border-0 rounded-end-pill focus-ring-primary'
            />
          </div>
        </div>
        <div className='col align-content-center justify-content-center order-sm-2'>
          <a href='/' className='text-white text-decoration-none'>
            Homepage{' '}
          </a>
          &nbsp;
          <a href='/' className='text-white text-decoration-none'>
            Timeline
          </a>
        </div>
        <div className='col-2 text-md align-content-center justify-content-center position-relative order-sm-3'>
          <div className='row'>
            <div className='col'>
              <div className='row'>
                <div className='col'>
                  <FontAwesomeIcon
                    icon={faUser}
                    size='lg'
                    style={{ color: '#ffffff' }}
                  />
                  <div className='number position-absolute top-1 start-80 translate-middle badge rounded-pill bg-danger'>
                    1
                  </div>
                </div>
                <div className='col'>
                  <FontAwesomeIcon
                    icon={faComments}
                    size='lg'
                    style={{ color: '#ffffff' }}
                  />
                  <div className='number position-absolute top-1 start-90 translate-middle badge rounded-pill bg-danger'>
                    2
                  </div>
                </div>
                <div className='col'>
                  <FontAwesomeIcon
                    icon={faBell}
                    size='lg'
                    style={{ color: '#ffffff' }}
                  />
                  <div className='number position-absolute top-1 start-95 translate-middle badge rounded-pill bg-danger'>
                    3
                  </div>
                </div>
                <div className='col'>
                  <img
                    src='/assets/person/9.jpeg'
                    alt=''
                    className='img rounded-circle position-absolute'
                    width={40}
                    height={40}
                    style={{ position: 'relative', top: '3px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
