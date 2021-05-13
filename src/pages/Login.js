import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import styles from '../assets/scss/login.module.scss';

const Login = () => {
  const email = useRef(null);

  return (
    <div className={`${styles.login}`}>
      <h2 className="mb-3">Login</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={email} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <button className="btn btn-primary my-3" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Login;
