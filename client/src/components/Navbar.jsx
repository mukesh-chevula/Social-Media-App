import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faComments, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="container-fluid bg-primary text-white px-4 py-3 position-fixed">
      <div className="row">
        <div className="col-3 fw-bolder d-flex position-relative pt-2">
        <button onClick={() => window.location.href = '/'} className="logo text-white text-decoration-none bg-transparent border-0">
          <h4>SOCIAL APP</h4>
          </button>
        </div>
        <div className="col-5 align-content-center justify-content-center">
          <div className="input-group"> 
            <span className='input-group-text rounded-start-pill bg-white'>
              <FontAwesomeIcon icon={faSearch} size='lg' style={{ color: "#005eff" }} />
            </span>
            <input placeholder="Search for posts, friends ..." type="text" className="form-control p-2 border-0 rounded-end-pill focus-ring-primary" />
          </div>
        </div>
        <div className="col-4 text-md align-content-center justify-content-center position-relative">
          <div className="row d-flex">
            <div className="col-6">
              <a href="/" className="text-white text-decoration-none">Homepage </a>&nbsp;
              <a href="/" className="text-white text-decoration-none">Timeline</a>
            </div>
            <div className="col">
              <div className="row">
                <div className="col">
              <FontAwesomeIcon icon={faUser} size='lg' style={{ color: "#ffffff" }} />
              <div className="number position-absolute top-1 start-80 translate-middle badge rounded-pill bg-danger"><small>1</small></div></div>
                <div className="col">
              <FontAwesomeIcon icon={faComments} size='lg' style={{ color: "#ffffff" }} />
              <div className="number position-absolute top-1 start-90 translate-middle badge rounded-pill bg-danger">2</div>
                </div>
                <div className="col">
              <FontAwesomeIcon icon={faBell} size='lg' style={{ color: "#ffffff" }} />  
              <div className="number position-absolute top-1 start-95 translate-middle badge rounded-pill bg-danger">3</div>
                </div>
              <div className="col">
  <img src="/assets/person/9.jpeg" alt="" className='img rounded-circle position-absolute' width={40} height={40} style={{position:'relative',top:'3px'}}/>
</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
