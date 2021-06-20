const signUp = (() => {
  const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
  const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
  const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

  return { SIGNUP_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST };
})();

export default signUp;
