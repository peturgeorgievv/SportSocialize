import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const LogInWrapper = styled.div`
   {
    box-sizing: border-box;
  }

  .container {
    position: relative;
    border-radius: 5px;
    padding: 20px 0 30px 0;
  }

  input,
  .btn {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 4px;
    margin: 5px 0;
    opacity: 0.85;
    display: inline-block;
    font-size: 17px;
    line-height: 20px;
    text-decoration: none; /* remove underline from anchors */
  }

  input:hover,
  .btn:hover {
    opacity: 1;
  }

  /* add appropriate colors to fb, twitter and google buttons */
  .fb {
    background-color: #3b5998;
    color: white;
  }

  .twitter {
    background-color: #55acee;
    color: white;
  }

  .google {
    background-color: #dd4b39;
    color: white;
  }

  /* style the submit button */
  input[type='submit'] {
    background-color: #4caf50;
    color: white;
    cursor: pointer;
  }

  input[type='submit']:hover {
    background-color: green;
  }

  /* Two-column layout */
  .col {
    float: left;
    width: 50%;
    margin: auto;
    padding: 0 50px;
    margin-top: 6px;
  }

  /* Clear floats after the columns */
  .row:after {
    content: '';
    display: table;
    clear: both;
  }

  /* hide some text on medium and large screens */
  .hide-md-lg {
    display: none;
  }

  /* bottom container */
  .bottom-container {
    text-align: center;
    background-color: #666;
    border-radius: 0px 0px 4px 4px;
  }

  /* Responsive layout - when the screen is less than 650px wide, make the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 650px) {
    .col {
      width: 100%;
      margin-top: 0;
    }

    /* show the hidden text on small screens */
    .hide-md-lg {
      display: block;
      text-align: center;
    }
    .first-col {
      margin-top: 120px;
    }
  }
`;

const Login = () => {
  return (
    <LogInWrapper>
      <Header />
      <div class="container">
        <form>
          <div class="row">
            <div class="col first-col">
              <a href="#" class="fb btn">
                <i class="fa fa-facebook fa-fw" /> Login with Facebook
              </a>
              <a href="#" class="twitter btn">
                <i class="fa fa-twitter fa-fw" /> Login with Twitter
              </a>
              <a href="#" class="google btn">
                <i class="fa fa-google fa-fw" /> Login with Google+
              </a>
            </div>

            <div class="col">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <input type="submit" value="Login" />
            </div>
          </div>
        </form>
      </div>
    </LogInWrapper>
  );
};

export default Login;
