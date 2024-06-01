import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center vh-100 position-relative bg-light'>
      <div className='row'>
        <div
          className='col p-5 position-relative mx-4'
          style={{ top: '100px' }}
        >
          <div className='row fs-2 text-primary fw-bolder my-auto'>
            SOCIAL APP
          </div>
          <div className='row fs-5'>
            Connect with friends and the world around you!
          </div>
        </div>
        <div className='col bg-white p-5 text-secondary rounded mx-4'>
          <div className='row form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              name='formId1'
              id='username'
              placeholder='Enter Your Username...'
            />
            <label htmlFor='formId1'>Username</label>
          </div>
          <div className='row form-floating mb-3'>
            <input
              type='email'
              className='form-control'
              name='formId1'
              id='email'
              placeholder='Enter Your Email...'
            />
            <label htmlFor='formId1'>Email</label>
          </div>
          <div className='row form-floating mb-3'>
            <input
              type='password'
              className='form-control'
              name='formId1'
              id='password'
              placeholder='Enter Your Password...'
            />
            <label htmlFor='formId1'>Password</label>
          </div>
          <div className='row form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              name='formId1'
              id='confirmPassword'
              placeholder='Confirm Password'
            />
            <label htmlFor='formId1'>Confirm Password</label>
          </div>
          <div className='row d-grid gap-2'>
            <button
              type='button'
              name=''
              id='registerButton'
              className='btn btn-primary'
            >
              Register
            </button>
          </div>
          <div className='row text-center mt-3'>
            <p>
              Already have an account?{' '}
              <Link
                to='/login'
                className='fw-bold text-decoration-none text-dark'
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
