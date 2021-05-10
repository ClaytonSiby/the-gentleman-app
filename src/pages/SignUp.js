import React, { useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import styles from '../assets/scss/signup.module.scss'

const SignUp = () => {
  const username = useRef(null)
  const email = useRef(null)

  const buttonClick = () => {
    username.current.focus();
  }

  return (
    <div className={`${styles.signup}`}>
      <h1>Sign Up</h1>
      <Form>
        <Form.Group controlId='username'>
          <Form.Label>Name</Form.Label>
          <Form.Control ref={username} type='text' placeholder='Enter email' />
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={email} type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'>
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button onClick={buttonClick} variant='primary' className="my-3" size='md' block>
          Sign Up
        </Button>
      </Form>
    </div>
  )
}

export default SignUp
