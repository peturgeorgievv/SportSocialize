import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin-top: 6%;
  padding-left: 15px;
  input {
    display: block;
  }
`;

const Register = () => {
  return (
    <Form>
      <form>
        <div>
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>

          <label for="First Name">
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            required
          />

          <label for="Last Name">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            required
          />

          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <label for="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required
          />

          <p>
            By creating an account you agree to our{' '}
            <a href="#">Terms & Privacy</a>.
          </p>
          <button type="submit" class="registerbtn">
            Register
          </button>
        </div>

        <div>
          <p>
            Already have an account? <a href="#">Sign in</a>.
          </p>
        </div>
      </form>
    </Form>
  );
};

export default Register;
