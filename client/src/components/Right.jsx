import { faGift } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Style.css'
import { Users } from '../dummyData'
import OnlineFriends from './OnlineFriends'

const Right = ({ user }) => {
  const HomeRight = () => {
    return (
      <div
        className='container mt-3 left-container'
        style={{ fontSize: '13px' }}
      >
        <div className='row align-content-center text-center'>
          <div className='col-1 p-2 mt-1'>
            <FontAwesomeIcon
              icon={faGift}
              color='red'
              size='2xl'
              className='float-start'
            />
          </div>
          <div className='col p-2'>
            <b>Pola Foster </b>and <b>3 other Friends</b> celebrate their
            birthday today!
          </div>
        </div>
        <div className='row py-2'>
          <img src='/assets/ad.png' alt='' />
        </div>
        <hr />
        <div className='row pb-4 ms-3 fs-6 fw-bold'>Online Friends:</div>
        {Users.map(u => (
          <OnlineFriends key={u.id} user={u} />
        ))}
      </div>
    )
  }

  const ProfileRight = () => {
    return (
      <div className='container-fluid'>
        <div className='container p-3 ps-5 rounded shadow'>
          <div className='row fw-bold'>User Information:</div>
          <div className='row'>
            <div className='col text-body-emphasis'>City</div>
            <div className='col float-start'>{user.city}</div>
          </div>
          <div className='row'>
            <div className='col text-body-emphasis'>From</div>
            <div className='col float-start'>{user.from}</div>
          </div>
          <div className='row'>
            <div className='col text-body-emphasis'>Relatinship</div>
            <div className='col float-start'>
              {user.relationship == 1
                ? 'Single'
                : user.relationship == 2
                ? 'Married'
                : '-'}
            </div>
          </div>
        </div>

        <div className='container p-3 ps-5 rounded shadow'>
          <div className='row fw-bold my-3'>User Friends:</div>
          <div className='row'>
            <div className='col'>
              <div className='contaner align-content-center justify-content-center align-items-center'>
                <div className='row'>
                  <img
                    src='/assets/person/1.jpeg'
                    alt=''
                    className='img img-fluid'
                    style={{ height: '150px' }}
                  />
                </div>
                <div
                  className='row text-secondary mx-auto my-2'
                  style={{ fontSize: '13px' }}
                >
                  Mukesh Chevula
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='contaner'>
                <div className='row'>
                  <img
                    src='/assets/person/2.jpeg'
                    alt=''
                    className='img img-fluid'
                    style={{ height: '150px' }}
                  />
                </div>
                <div
                  className='row text-secondary mx-auto my-2'
                  style={{ fontSize: '13px' }}
                >
                  Mukesh Chevula
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='contaner'>
                <div className='row'>
                  <img
                    src='/assets/person/3.jpeg'
                    alt=''
                    className='img img-fluid'
                    style={{ height: '150px' }}
                  />
                </div>
                <div
                  className='row text-secondary mx-auto my-2'
                  style={{ fontSize: '13px' }}
                >
                  Mukesh Chevula
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='contaner align-content-center justify-content-center align-items-center'>
                <div className='row'>
                  <img
                    src='/assets/person/4.jpeg'
                    alt=''
                    className='img img-fluid'
                    style={{ height: '150px' }}
                  />
                </div>
                <div
                  className='row text-secondary mx-auto my-2'
                  style={{ fontSize: '13px' }}
                >
                  Mukesh Chevula
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='contaner'>
                <div className='row'>
                  <img
                    src='/assets/person/5.jpeg'
                    alt=''
                    className='img img-fluid'
                    style={{ height: '150px' }}
                  />
                </div>
                <div
                  className='row text-secondary mx-auto my-2'
                  style={{ fontSize: '13px' }}
                >
                  Mukesh Chevula
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='contaner'>
                <div className='row'>
                  <img
                    src='/assets/person/6.jpeg'
                    alt=''
                    className='img img-fluid'
                    style={{ height: '150px' }}
                  />
                </div>
                <div
                  className='row text-secondary mx-auto my-2'
                  style={{ fontSize: '13px' }}
                >
                  Mukesh Chevula
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='contaner align-content-center justify-content-center align-items-center'>
                <div className='row'>
                  <img
                    src='/assets/person/7.jpeg'
                    alt=''
                    className='img img-fluid'
                    style={{ height: '150px' }}
                  />
                </div>
                <div
                  className='row text-secondary mx-auto my-2'
                  style={{ fontSize: '13px' }}
                >
                  Mukesh Chevula
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='contaner'>
                <div className='row'>
                  <img
                    src='/assets/person/8.jpeg'
                    alt=''
                    className='img img-fluid'
                    style={{ height: '150px' }}
                  />
                </div>
                <div
                  className='row text-secondary mx-auto my-2'
                  style={{ fontSize: '13px' }}
                >
                  Mukesh Chevula
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='contaner'>
                <div className='row'>
                  <img
                    src='/assets/person/9.jpeg'
                    alt=''
                    className='img img-fluid'
                    style={{ height: '150px' }}
                  />
                </div>
                <div
                  className='row text-secondary mx-auto my-2'
                  style={{ fontSize: '13px' }}
                >
                  Mukesh Chevula
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {user ? <ProfileRight /> : <HomeRight />}
      </div>
    </div>
  )
}

export default Right
