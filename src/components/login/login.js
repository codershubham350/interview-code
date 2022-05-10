import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [password, setPassword] = useState('');
  const onLogin = (e) => {};

  const onLoginFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3030/users/test@test.com/login`,
        {
          password: password,
        }
      );

      console.log(response);
      if (response.status === 200) {
        console.log('User logged in successfully');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const labelStyle = {
    margin: '10px',
    padding: '5px',
  };

  const inputStyle = {
    margin: '20px',
    padding: '5px',
  };

  const buttonStyle = {
    margin: '20px',
    marginRight: '10px',
    padding: '5px',
    backgroundColor: 'white',
    borderRadius: '10px',
    color: 'skyblue',
    border: '1px solid skyblue',
  };

  return (
    <>
      <form onSubmit={onLoginFormSubmit}>
        <label style={labelStyle}>Password</label>
        <input
          style={inputStyle}
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
        <br />
        <button style={buttonStyle} type='submit' onClick={onLogin}>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
