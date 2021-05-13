import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import styles from '../assets/scss/signup.module.scss';
import requestSignUp from '../redux/users/signup/signupActions';

const SignUp = () => {
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const passwordConfirmation = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    username.current.focus();

    const data = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      passwordConfirmation: passwordConfirmation.current.value,
    };

    dispatch(requestSignUp(data));
  };

  return (
    <div className={`${styles.signup}`}>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={username} type="text" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={email} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={password}
            type="password"
            placeholder="*********"
          />
        </Form.Group>
        <Form.Group controlId="passwordConfirmation">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control
            ref={passwordConfirmation}
            type="password"
            placeholder="*********"
          />
        </Form.Group>
        <Button
          variant="primary"
          className="my-3"
          size="md"
          type="submit"
          block
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
