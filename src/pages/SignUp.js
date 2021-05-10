import React from 'react';
import { Form } from 'react-bootstrap';
import styles from '../assets/scss/signup.module.scss';

const SignUp = () => (
  <div className={`${styles.signup}`}>
    <h1>Sign Up</h1>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </Form>
  </div>
);

export default SignUp;
