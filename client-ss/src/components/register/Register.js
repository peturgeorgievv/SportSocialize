import React from 'react';
import Header from '../landing/Header';
import styled from 'styled-components';

const Form = styled.form`
  padding-left: 15px;
  input {
    display: block;
  }
`;

const Register = () => {
  return (
    <div>
      <Header />
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
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />

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
            <label for="activity-sport">
              <b>Activity (Sport) </b>
            </label>
            <br />
            <select name="activity-sport">
              <option value="">Boxing</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <br />

            <label for="account-type">
              <b>Type of Account</b>
            </label>
            <br />
            <select name="account-type">
              <option value="1">Manager</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

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
    </div>
  );
};

export default Register;
