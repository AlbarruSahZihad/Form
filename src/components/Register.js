import './style.css';
import { Link } from 'react-router-dom';
import Login from './Login';

const Register = () => {
    return(
      <div id='register' class="container">
      <div class="form">
        <div id='jdl' class="btn">
          <Link to='/Register' class="signUpBtn">SignUp</Link>
          <Link to='/' class="loginBtn">SignIn</Link>
        </div>
        <form class="pp"/>
          <div class="formGroup">
                 <span class="greet">SignUp Form</span>
          </div>
        <form class="pp"/>
          <div class="formGroup">
            <input type="text" id="username" placeholder="Username" autocomplete="off"/>
          </div>
          <div class="formGroup">
            <input type="email" placeholder="Email Address" name="email" required autocomplete="off"/>
          </div>
          <div class="formGroup">
            <input type="password" id="password" placeholder="Password" required autocomplete="off"/>
          </div>
          <div class="formGroup">
            <input type="password" id="confirmPassword" placeholder="Confirm Password" required autocomplete="off"/>
          </div>
          <div class="checkBox">
            <input type="checkbox" name="checkbox" id="checkbox"/>
            <span class="text">I agree with term & condition</span>
          </div>
          <div class="formGroup">
            <button type="button" class="btn2">Sign Up</button>
          </div>
          </div>
          </div>        
)
}

export default Register;