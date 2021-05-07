const login = (() => {
  const LOGIN_REQUEST = 'LOGIN_REQUEST';
  const LOGIN_FAILURE = 'LOGIN_FAILURE';
  const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

  return { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS };
})();

export default login;
