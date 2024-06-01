import axios from 'axios'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const confirmPassword = useRef()

  const handleSubmit = async e => {
    e.preventDefault()
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Passwords don't match!")
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try {
        await axios.post('http://localhost:8800/api/auth/register', user)
        window.location.href = '/login'
      } catch (err) {
        console.log(err)
      }
    }
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
          <form onSubmit={handleSubmit}>
            <div className='row form-floating mb-3'>
              <input
                required
                type='text'
                className='form-control'
                name='formId1'
                id='username'
                ref={username}
                placeholder='Enter Your Username...'
              />
              <label htmlFor='formId1'>Username</label>
            </div>
            <div className='row form-floating mb-3'>
              <input
                required
                type='email'
                className='form-control'
                name='formId1'
                id='email'
                ref={email}
                placeholder='Enter Your Email...'
              />
              <label htmlFor='formId1'>Email</label>
            </div>
            <div className='row form-floating mb-3'>
              <input
                required
                type='password'
                className='form-control'
                name='formId1'
                id='password'
                minLength={'6'}
                ref={password}
                placeholder='Enter Your Password...'
              />
              <label htmlFor='formId1'>Password</label>
            </div>
            <div className='row form-floating mb-3'>
              <input
                required
                type='text'
                className='form-control'
                name='formId1'
                id='confirmPassword'
                ref={confirmPassword}
                placeholder='Confirm Password'
              />
              <label htmlFor='formId1'>Confirm Password</label>
            </div>
            <div className='row d-grid gap-2'>
              <button
                type='submit'
                id='registerButton'
                className='btn btn-primary'
              >
                Register
              </button>
            </div>
          </form>

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
