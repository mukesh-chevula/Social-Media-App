import {
  faBookmark,
  faCalendar,
  faGraduationCap,
  faMessage,
  faQuestionCircle,
  faRss,
  faSuitcase,
  faUsers,
  faVideo
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Style.css'
import { Users } from '../dummyData'
import Friends from './Friends'

const Left = () => {
  return (
    <div
      className='container-fluid mt-2 left-container '
      style={{ zIndex: '2' }}
    >
      <div className='row px-3 py-2'>
        <div className='col-2'>
          <FontAwesomeIcon
            icon={faRss}
            size='lg'
            style={{ color: '#000000' }}
          />
        </div>
        <div className='col'>Feed</div>
      </div>
      <div className='row p-3  py-2'>
        <div className='col-2'>
          <FontAwesomeIcon
            icon={faMessage}
            size='lg'
            style={{ color: '#000000' }}
          />
        </div>
        <div className='col'>Chats</div>
      </div>
      <div className='row p-3  py-2'>
        <div className='col-2'>
          <FontAwesomeIcon
            icon={faVideo}
            size='lg'
            style={{ color: '#000000' }}
          />
        </div>
        <div className='col'>Videos</div>
      </div>
      <div className='row p-3  py-2'>
        <div className='col-2'>
          <FontAwesomeIcon
            icon={faUsers}
            size='lg'
            style={{ color: '#000000' }}
          />
        </div>
        <div className='col'>Groups</div>
      </div>
      <div className='row p-3  py-2'>
        <div className='col-2'>
          <FontAwesomeIcon
            icon={faBookmark}
            size='lg'
            style={{ color: '#000000' }}
          />
        </div>
        <div className='col'>Bookmarks</div>
      </div>
      <div className='row p-3  py-2'>
        <div className='col-2'>
          <FontAwesomeIcon
            icon={faQuestionCircle}
            size='lg'
            style={{ color: '#000000' }}
          />
        </div>
        <div className='col'>Questions</div>
      </div>
      <div className='row p-3  py-2'>
        <div className='col-2'>
          <FontAwesomeIcon
            icon={faSuitcase}
            size='lg'
            style={{ color: '#000000' }}
          />
        </div>
        <div className='col'>Jobs</div>
      </div>
      <div className='row p-3  py-2'>
        <div className='col-2'>
          <FontAwesomeIcon
            icon={faCalendar}
            size='lg'
            style={{ color: '#000000' }}
          />
        </div>
        <div className='col'>Events</div>
      </div>
      <div className='row p-3  py-2'>
        <div className='col-2'>
          <FontAwesomeIcon
            icon={faGraduationCap}
            size='lg'
            style={{ color: '#000000' }}
          />{' '}
        </div>
        <div className='col'>Courses</div>
      </div>
      <div className='row'>
        <button type='button' className='btn btn-secondary w-50'>
          Show More
        </button>
      </div>
      <hr className='pt-3' />
      {Users.map(u => (
        <Friends key={u.id} user={u} />
      ))}
    </div>
  )
}

export default Left
