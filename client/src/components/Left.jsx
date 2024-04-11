import { faBookmark, faCalendar, faGraduationCap, faMessage, faQuestionCircle, faRss, faSuitcase, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Style.css'

const Left = () => {
  return (
    <>
      <div className="container-fluid fw-bold mt-2 left-container">
        <div className="row p-3">
          <div className="col-2">
          <FontAwesomeIcon icon={faRss} size='lg' style={{ color: "#000000" }} />
          </div>
          <div className="col">Feed</div>
        </div>
        <div className="row p-3">
        <div className="col-2">
          <FontAwesomeIcon icon={faMessage} size='lg' style={{ color: "#000000" }} />
          </div>
          <div className="col">Chats</div>
        </div>
        <div className="row p-3">
        <div className="col-2">
          <FontAwesomeIcon icon={faVideo} size='lg' style={{ color: "#000000" }} />
          </div>
          <div className="col">Videos</div>
        </div>
        <div className="row p-3">
        <div className="col-2">
          <FontAwesomeIcon icon={faUsers} size='lg' style={{ color: "#000000" }} />
          </div>
          <div className="col">Groups</div>
        </div>
        <div className="row p-3">
        <div className="col-2">
          <FontAwesomeIcon icon={faBookmark} size='lg' style={{ color: "#000000" }} />
          </div>
          <div className="col">Bookmarks</div>
        </div>
        <div className="row p-3">
        <div className="col-2">
          <FontAwesomeIcon icon={faQuestionCircle} size='lg' style={{ color: "#000000" }} />
          </div>
          <div className="col">Questions</div>
        </div>
        <div className="row p-3">
        <div className="col-2">
          <FontAwesomeIcon icon={faSuitcase} size='lg' style={{ color: "#000000" }} />
          </div>
          <div className="col">Jobs</div>
        </div>
        <div className="row p-3">
        <div className="col-2">
          <FontAwesomeIcon icon={faCalendar} size='lg' style={{ color: "#000000" }} />
          </div>
          <div className="col">Events</div>
        </div>
        <div className="row p-3">
        <div className="col-2">
        <FontAwesomeIcon icon={faGraduationCap} size='lg' style={{ color: "#000000" }}  />          </div>
          <div className="col">Courses</div>
        </div>
        <div className="row">
        <button type="button" className="btn btn-secondary w-50">Show More</button>

        </div>
        <hr className='pt-3' />
        <div className="row p-3 pt-0 pb-2">
        <div className="col-4">
        <img src="/assets/person/9.jpeg" alt="" className='img rounded-circle' width={40} height={40} style={{position:'relative',top:'3px'}}/>          
        </div>
          <div className="col mt-2">Jane</div>
        </div>
        <div className="row p-3 pb-2">
        <div className="col-4">
        <img src="/assets/person/9.jpeg" alt="" className='img rounded-circle' width={40} height={40} style={{position:'relative',top:'3px'}}/>          
        </div>
          <div className="col mt-2">Jane</div>
        </div>
        <div className="row p-3 pb-2">
        <div className="col-4">
        <img src="/assets/person/9.jpeg" alt="" className='img rounded-circle' width={40} height={40} style={{position:'relative',top:'3px'}}/>          
        </div>
          <div className="col mt-2">Jane</div>
        </div>
        <div className="row p-3 pb-2">
        <div className="col-4">
        <img src="/assets/person/9.jpeg" alt="" className='img rounded-circle' width={40} height={40} style={{position:'relative',top:'3px'}}/>          
        </div>
          <div className="col mt-2">Jane</div>
        </div>
        <div className="row p-3 pb-2">
        <div className="col-4">
        <img src="/assets/person/9.jpeg" alt="" className='img rounded-circle' width={40} height={40} style={{position:'relative',top:'3px'}}/>          
        </div>
          <div className="col mt-2">Jane</div>
        </div>
      </div>
    </>
  )
}

export default Left