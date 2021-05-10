import React from 'react'
import { Form, Container } from 'react-bootstrap'

const SignUp = () => (
  <Container>
    <Form>
      <Form.Group className='my-1'>
        <Form.Control type='text' placeholder='Enter name here..' />
      </Form.Group>
      <Form.Group className='my-1'>
        <Form.Control type='email' placeholder='Enter email' />
      </Form.Group>
      <Form.Group className='my-1'>
        <Form.Control type='password' placeholder='password****'/>
        <Form.Control type='password' placeholder='confirm password****' className="my-1"/>
      </Form.Group>
      <Form.Group className='my-1'>
        <button type='submit' className='btn btn-block btn-md'>
          SignUp
        </button>
      </Form.Group>
    </Form>
  </Container>
)

export default SignUp
