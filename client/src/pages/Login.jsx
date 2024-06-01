import React, { useContext, useRef } from 'react'
import { loginCall } from '../apiCalls'
import { AuthContext } from '../context/AuthContext'
import Spinner from '../Components/Spinner'
import { Link } from 'react-router-dom'

const Login = () => {
  const email = useRef()
  const password = useRef()

  const { isFetching, dispatch } = useContext(AuthContext)

  const handleClick = e => {
    e.preventDefault()
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    )
  }

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
          <form onSubmit={handleClick}>
            <div className='row form-floating mb-3'>
              <input
                type='email'
                className='form-control'
                name='formId1'
                id='email'
                required
                placeholder='Enter Your Email...'
                ref={email}
              />
              <label htmlFor='formId1'>Email</label>
            </div>
            <div className='row form-floating mb-3'>
              <input
                type='password'
                required
                minLength={'6'}
                className='form-control'
                name='formId1'
                id='password'
                placeholder='Enter Your Password...'
                ref={password}
              />
              <label htmlFor='formId1'>Password</label>
            </div>
            <div className='row d-grid gap-2'>
              <button
                type='submit'
                name=''
                id='LoginButton'
                className='btn btn-primary'
              >
                {isFetching ? <Spinner /> : 'Login'}
              </button>
            </div>
          </form>
          <div className='row text-center mt-3'>
            <a href='/'>Forgot password</a>
          </div>
          <div className='row text-center mt-3'>
            <p>
              Don't have an account?{' '}
              <Link to='/' className='fw-bold text-decoration-none text-dark'>
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
