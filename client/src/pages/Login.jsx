import React from 'react';

const Login = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100 position-relative'>
      <div className="row">
        <div className="col p-5 position-relative mx-4" style={{top:'100px'}}>
          <div className='row fs-3 text-primary fw-bolder my-auto'>SOCIAL APP</div>
          <div className='row fs-5'>Connect with friends and the world around you!</div>
        </div>
        <div className="col bg-light shadow p-5 text-secondary rounded mx-4">
            <div className="row form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        name="formId1"
                        id="email"
                        placeholder="Enter Your Email..."
                    />
                    <label for="formId1">Email</label>
            </div>            
            <div className="row form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        name="formId1"
                        id="password"
                        placeholder="Enter Your Password..."
                    />
                    <label for="formId1">Password</label>
            </div>
            <div className="row d-grid gap-2">
                    <button
                        type="button"
                        name=""
                        id="LoginButton"
                        class="btn btn-primary"
                    >
                        Login
                    </button>                
            </div>
            <div className="row text-center mt-3">
                <p>Don't have an account? <a href="/" className='fw-bold'>Register</a>
</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
