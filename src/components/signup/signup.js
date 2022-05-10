import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3030/signup', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      console.log(response);
      if (response.status === 201) {
        console.log('Welcome User');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
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
    margin: '40px',
    padding: '5px',
    backgroundColor: 'white',
    borderRadius: '10px',
    color: 'skyblue',
    border: '1px solid skyblue',
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label style={labelStyle}>First Name</label>
        <input
          style={inputStyle}
          type='text'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='First Name'
          required
        />
        <br />
        <label style={labelStyle}>Last Name</label>
        <input
          type='text'
          style={inputStyle}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder='Last Name'
          required
        />
        <br />
        <label style={labelStyle}>Email</label>
        <input
          type='email'
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email Address'
          required
        />
        <br />
        <label style={labelStyle}>Password</label>
        <input
          type='password'
          style={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          required
        />
        <br />
        <button style={buttonStyle} type='submit' onClick={onSignup}>
          SignUp
        </button>
      </form>
    </>
  );
};

export default Signup;
