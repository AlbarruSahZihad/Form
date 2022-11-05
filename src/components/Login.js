import './style.css';
import { Link } from 'react-router-dom';
import Register from './Register';

const Login = () => {
    return(
      <div id='login' class="container">
      <div class="form">
        <div id='jdl' class="btn">
        <Link to='/Register' class="signUpBtn">SignUp</Link>
          <Link to='/' class="loginBtn">SignIn</Link>
        </div>
        <form class="pp"/>
         <div class="formGroup">
                 <span class="greet">SignIn Form</span>
          </div>
          <div class="formGroup form-floating">
            <input type="email" placeholder="Email Address" name="email" required autocomplete="off"/>
          </div>
          <div class="formGroup">
            <input type="password" id="password" placeholder="Password" required autocomplete="off"/>
          </div>
          <div class="checkBox">
            <input type="checkbox" name="checkbox" id="checkbox"/>
            <span class="text">Remember me</span>
          </div>
          <div class="formGroup">
            <button type="button" class="btn2">Sign In</button>
          </div>
          </div>
          </div>
)
}

export default Login;