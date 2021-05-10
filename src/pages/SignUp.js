import React from 'react';
import { Form } from 'react-bootstrap';

const SignUp = () => (
  <Form>
    <Form.Group>
      <Form.Control type="text" placeholder="Enter name here.." />
    </Form.Group>
    <Form.Group>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group>
      <Form.Control  type="password" placeholder="password****" />
      <Form.Control  type="password" placeholder="confirm password****" />
    </Form.Group>
    <Form.Group>
      <button type="submit" className="btn btn-block btn-md">SignUp</button>
    </Form.Group>
  </Form>
);

export default SignUp;
