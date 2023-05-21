import "../CSS/login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ChangeAuth } from "../Redux/action";
import { Link } from "react-router-dom";
function Login() {
  const [state, setState] = useState({ name: null, pass: null });

  const dispatch = useDispatch();

  const handleemail = (e) => {
    const email = e.target.value;
    setState({ email: email });
  };
  const handlepass = (e) => {
    const password = e.target.value;
    setState({ ...state, pass: password });
  };

  const handlesubmit = () => {
    ChangeAuth(true, dispatch);
  };
  console.log(state);
  return (
    <>
      <h2>Login Page</h2>
      <div class="container">
        <div class="screen">
          <div class="screen__content">
            <form class="login">
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  type="text"
                  class="login__input"
                  placeholder="User name / Email"
                  onChange={handleemail}
                  required
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  class="login__input"
                  placeholder="Password"
                  onChange={handlepass}
                  required
                />
              </div>
              <Link to="/home">
                <button class="button login__submit" onClick={handlesubmit}>
                  <span class="button__text">Log In Now</span>
                  <i class="button__icon fas fa-chevron-right"></i>
                </button>
              </Link>
            </form>
          </div>
          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
